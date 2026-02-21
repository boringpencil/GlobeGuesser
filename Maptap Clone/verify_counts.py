import json

def verify():
    with open('cities.js', encoding='utf-8') as f:
        content = f.read().replace('const cities = ', '').replace(';\n', '')
    cities = json.loads(content)
    
    china_count = sum(1 for c in cities if 'China' in c['country'])
    us_count = sum(1 for c in cities if c['country'] == 'United States of America')
    france_count = sum(1 for c in cities if c['country'] == 'France')
    germany_count = sum(1 for c in cities if c['country'] == 'Germany')
    
    print(f"Total Cities: {len(cities)}")
    print(f"China: {china_count} (Expected: <= 3)")
    print(f"USA: {us_count} (Expected: >= 30)")
    print(f"France: {france_count} (Expected: >= 3)")
    print(f"Germany: {germany_count} (Expected: >= 3)")

if __name__ == '__main__':
    verify()
