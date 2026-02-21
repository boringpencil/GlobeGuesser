# GlobeGuesser
GlobeGuesser is a game for testing and improving your geography knowledge. Given a borderless world map you must click as close to a given city as possible. Perfect for improving your skills for Maptap.gg

# Running the Game
1. Install Python 
2. Download the repository
3. Open the terminal and run the command: `python -m http.server 8000`
4. Open your browser and navigate to http://localhost:8000

# Updating the Cities
The program pulls the most populated city in each country, plus additional cities from the EU and the United States.
To update the city list based on more recent data, open your terminal and run the command: `python fetch_cities.py --update`

