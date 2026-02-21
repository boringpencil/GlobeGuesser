import urllib.request
import urllib.parse
import json
import re
import argparse
import os

def get_largest_cities_per_country():
    url = "https://www.everycountryintheworld.com/largestcities/"
    print(f"Fetching {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        # The page format uses a table with <tr><td>Country</td><td>City</td></tr>
        # We can extract the links inside the <td> tags. 
        # Typically looks like: <tr><td><a href="...?s=Albania">Albania</a></td>\n<td><a href="...?s=Tirana">Tirana</a></td></tr>
        matches = re.findall(r'<td>(?:<a[^>]*>)?([^<]+)(?:</a>)?</td>\s*<td>(?:<a[^>]*>)?([^<]+)(?:</a>)?</td>', html, flags=re.IGNORECASE)
        
        country_city_map = {}
        for country, city in matches:
            country = country.strip()
            city = city.strip()
            # Ignore table headers or empty rows
            if not country or not city or country.lower() == 'country' or city.lower() == 'largest city':
                continue
            
            country_city_map[country] = city
            
        print(f"Found {len(country_city_map)} largest cities from the website.")
        return country_city_map
        
    except Exception as e:
        print(f"Error fetching largest cities: {e}")
        return {}

def get_wikidata_cities():
    url = "https://query.wikidata.org/sparql"
    # We query for the top 10000 to get a good base to ensure we hit the US 30 and EU 3 per country caps
    query = """
    SELECT ?cityLabel ?countryLabel ?lat ?lon ?population WHERE {
      ?city wdt:P31/wdt:P279* wd:Q515.
      ?city wdt:P1082 ?population.
      ?city wdt:P17 ?country.
      ?city p:P625 ?statement.
      ?statement psv:P625 ?coordinate_node.
      ?coordinate_node wikibase:geoLatitude ?lat.
      ?coordinate_node wikibase:geoLongitude ?lon.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    ORDER BY DESC(?population)
    LIMIT 10000
    """

    req = urllib.request.Request(
        url + "?query=" + urllib.parse.quote(query), 
        headers={
            "Accept": "application/sparql-results+json", 
            "User-Agent": "MapTapGG/1.0 (Contact: user@domain.com)"
        }
    )

    try:
        print("Fetching data from Wikidata (top 10000)...")
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        wikidata_cities = []
        for item in data["results"]["bindings"]:
            name = item.get("cityLabel", {}).get("value", "")
            country = item.get("countryLabel", {}).get("value", "")
            lat = float(item.get("lat", {}).get("value", 0))
            lon = float(item.get("lon", {}).get("value", 0))
            pop = int(item.get("population", {}).get("value", 0))
            
            if not name or name.startswith("Q"):
                continue
                
            wikidata_cities.append({
                "name": name,
                "country": country,
                "lat": lat,
                "lng": lon, 
                "population": pop
            })
            
        return wikidata_cities
        
    except Exception as e:
        print("Error fetching from Wikidata:", e)
        return []

def get_specific_city_wikidata(city_name):
    url = "https://query.wikidata.org/sparql"
    # Query specific coordinates for a city by exact en label
    query = f"""
    SELECT ?lat ?lon ?population ?countryLabel WHERE {{
      ?city rdfs:label "{city_name}"@en.
      ?city wdt:P31/wdt:P279* wd:Q515.
      OPTIONAL {{ ?city wdt:P1082 ?population. }}
      OPTIONAL {{ ?city wdt:P17 ?country. }}
      ?city p:P625 ?statement.
      ?statement psv:P625 ?coordinate_node.
      ?coordinate_node wikibase:geoLatitude ?lat.
      ?coordinate_node wikibase:geoLongitude ?lon.
      SERVICE wikibase:label {{ bd:serviceParam wikibase:language "en". }}
    }}
    LIMIT 1
    """
    
    req = urllib.request.Request(
        url + "?query=" + urllib.parse.quote(query), 
        headers={
            "Accept": "application/sparql-results+json", 
            "User-Agent": "MapTapGG/1.0"
        }
    )

    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        results = data["results"]["bindings"]
        if results:
            return {
                "name": city_name,
                "country": results[0].get("countryLabel", {}).get("value", "Unknown"),
                "lat": float(results[0].get("lat", {}).get("value", 0)),
                "lng": float(results[0].get("lon", {}).get("value", 0)),
                "population": int(results[0].get("population", {}).get("value", 0)) if "population" in results[0] else 0
            }
        return None
    except Exception as e:
        print(f"Error fetching specific city {city_name}:", e)
        return None

def main():
    parser = argparse.ArgumentParser(description="Fetch city data for GlobeGuesser.")
    parser.add_argument("--update", action="store_true", help="Scrape the web to update the city data")
    args = parser.parse_args()

    if not args.update:
        if os.path.exists("cities.js"):
            print("Using existing cities.js. Run with '--update' to fetch fresh data from the web.")
            return
        else:
            print("cities.js not found. Proceeding to fetch data from the web...")

    # 1. Get the largest cities by country from the website
    country_largest = get_largest_cities_per_country()
    largest_city_names = set(country_largest.values())
    
    # 2. Get top 2000 from wikidata
    wikidata_cities = get_wikidata_cities()
    
    # 3. Create the final list
    final_cities = []
    seen_cities = set()
    
    # First, gather everything we have from wikidata that matches the "largest city" requirement
    for city in wikidata_cities:
        if city["name"] in largest_city_names and city["name"] not in seen_cities:
            final_cities.append(city)
            seen_cities.add(city["name"])
            
    print(f"Matched {len(seen_cities)} largest cities from Wikidata initial pull.")
    
    # Check what is missing from largest cities
    missing_largest_cities = [c for c in largest_city_names if c not in seen_cities]
    print(f"Missing {len(missing_largest_cities)} country-largest cities. Fetching individually...")
    
    for missing_city in missing_largest_cities:
        city_data = get_specific_city_wikidata(missing_city)
        if city_data:
            final_cities.append(city_data)
            seen_cities.add(missing_city)
        else:
            print(f"  Could not find coordinates for {missing_city}")
            
    # Now top up with the most populated globally until we have a healthy pool for filtering
    for city in wikidata_cities:
        if city["name"] not in seen_cities:
            final_cities.append(city)
            seen_cities.add(city["name"])
    
    # Sort by population (just for clean data)
    final_cities.sort(key=lambda x: x["population"], reverse=True)
    
    # Apply special rules:
    # 1. China: Max 3
    # 2. USA: Min 30
    # 3. EU: Min 3 per country
    
    eu_countries = {
        "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", 
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", 
        "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", 
        "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", 
        "Spain", "Sweden"
    }
    
    reduced_cities = []
    seen_city_names = set()
    country_counts = {}
    
    def add_city(city_obj):
        name = city_obj["name"]
        if name in seen_city_names:
            return False
            
        c_name = city_obj["country"]
        if "China" in c_name or c_name == "People's Republic of China":
            if country_counts.get("China", 0) >= 3:
                return False
            country_counts["China"] = country_counts.get("China", 0) + 1
        elif "United" in c_name and "States" in c_name:
            country_counts["United States of America"] = country_counts.get("United States of America", 0) + 1
        else:
            country_counts[c_name] = country_counts.get(c_name, 0) + 1
            
        seen_city_names.add(name)
        reduced_cities.append(city_obj)
        return True

    # 1. MUST HAVE: Largest cities per country
    for city in final_cities:
        if city["name"] in largest_city_names:
            add_city(city)
            
    # 2. MUST HAVE: Ensure top 30 US
    for city in final_cities:
        if country_counts.get("United States of America", 0) >= 30:
            break
        c_name = city["country"]
        if "United" in c_name and "States" in c_name:
            add_city(city)
            
    # 3. MUST HAVE: Ensure top 3 per EU country
    for eu_country in eu_countries:
        for city in final_cities:
            if country_counts.get(eu_country, 0) >= 3:
                break
            if city["country"] == eu_country:
                add_city(city)
                
    # 4. Fill up to 300 with remaining top populated globally
    for city in final_cities:
        if len(reduced_cities) >= 300:
            break
        add_city(city)
        
    reduced_cities.sort(key=lambda x: x["population"], reverse=True)

    with open("cities.js", "w", encoding="utf-8") as f:
        f.write("const cities = " + json.dumps(reduced_cities, indent=2, ensure_ascii=False) + ";\n")
        
    print(f"Successfully wrote {len(reduced_cities)} cities to cities.js")

if __name__ == "__main__":
    main()
