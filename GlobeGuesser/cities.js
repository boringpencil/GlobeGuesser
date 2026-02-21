const cities = [
  {
    "name": "Chongqing",
    "country": "People's Republic of China",
    "lat": 29.55,
    "lng": 106.50694444444,
    "population": 32054159,
    "difficulty": "medium"
  },
  {
    "name": "Delhi",
    "country": "India",
    "lat": 28.666666666667,
    "lng": 77.216666666667,
    "population": 26495000,
    "difficulty": "easy"
  },
  {
    "name": "Shanghai",
    "country": "People's Republic of China",
    "lat": 31.2325,
    "lng": 121.46916666667,
    "population": 24870895,
    "difficulty": "easy"
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.432519444444,
    "lng": -99.133158333333,
    "population": 21905000,
    "difficulty": "easy"
  },
  {
    "name": "Beijing",
    "country": "People's Republic of China",
    "lat": 39.90403,
    "lng": 116.407526,
    "population": 21893095,
    "difficulty": "easy"
  },
  {
    "name": "New York",
    "country": "United States",
    "lat": 40.808611111111,
    "lng": -74.020277777778,
    "population": 19940274,
    "difficulty": "easy"
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.728888888889,
    "lng": 90.394444444444,
    "population": 16800000,
    "difficulty": "medium"
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.01,
    "lng": 28.960277777778,
    "population": 15655924,
    "difficulty": "easy"
  },
  {
    "name": "Mumbai",
    "country": "India",
    "lat": 19.075833333333,
    "lng": 72.8775,
    "population": 15414288,
    "difficulty": "easy"
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.4561111111111,
    "lng": 3.3936111111111,
    "population": 15070000,
    "difficulty": "medium"
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "lat": 24.86,
    "lng": 67.01,
    "population": 14910352,
    "difficulty": "medium"
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "lat": -4.3219444444444,
    "lng": 15.311944444444,
    "population": 14565700,
    "difficulty": "medium"
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.689444444444,
    "lng": 139.69166666667,
    "population": 14264798,
    "difficulty": "easy"
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "lat": 10.775555555556,
    "lng": 106.70194444444,
    "population": 14002598,
    "difficulty": "medium"
  },
  {
    "name": "Metro Manila",
    "country": "Philippines",
    "lat": 14.583333333333,
    "lng": 121.0,
    "population": 14001751,
    "difficulty": "medium"
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.6083,
    "lng": -58.3719,
    "population": 13985794,
    "difficulty": "easy"
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.750555555556,
    "lng": 37.6175,
    "population": 13274285,
    "difficulty": "easy"
  },
  {
    "name": "Bengaluru",
    "country": "India",
    "lat": 12.9791198,
    "lng": 77.5912997,
    "population": 12327000,
    "difficulty": "medium"
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.9028,
    "lng": -43.2078,
    "population": 11900000,
    "difficulty": "easy"
  },
  {
    "name": "São Paulo",
    "country": "Brazil",
    "lat": -23.550394444444,
    "lng": -46.633947222222,
    "population": 11451999,
    "difficulty": "easy"
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": -6.1752777777778,
    "lng": 106.82694444444,
    "population": 11135191,
    "difficulty": "easy"
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "lat": 31.549722222222,
    "lng": 74.343611111111,
    "population": 11126285,
    "difficulty": "hard"
  },
  {
    "name": "Lima",
    "country": "Peru",
    "lat": -12.06,
    "lng": -77.0375,
    "population": 9943800,
    "difficulty": "medium"
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.044444444444,
    "lng": 31.235833333333,
    "population": 9801536,
    "difficulty": "easy"
  },
  {
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.56,
    "lng": 126.99,
    "population": 9668465,
    "difficulty": "easy"
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "lat": 17.361666666667,
    "lng": 78.474722222222,
    "population": 9305000,
    "difficulty": "medium"
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.1477777777778,
    "lng": 101.69527777778,
    "population": 9000280,
    "difficulty": "medium"
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.507222222222,
    "lng": -0.1275,
    "population": 8799728,
    "difficulty": "easy"
  },
  {
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": 21.0245,
    "lng": 105.84117,
    "population": 8717600,
    "difficulty": "medium"
  },
  {
    "name": "Tehran",
    "country": "Iran",
    "lat": 35.688888888889,
    "lng": 51.389722222222,
    "population": 8693706,
    "difficulty": "medium"
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "lat": 33.315277777778,
    "lng": 44.366111111111,
    "population": 8126755,
    "difficulty": "medium"
  },
  {
    "name": "Bogotá",
    "country": "Colombia",
    "lat": 4.60971,
    "lng": -74.08175,
    "population": 8034649,
    "difficulty": "medium"
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "lat": 23.021944444444,
    "lng": 72.579722222222,
    "population": 7645000,
    "difficulty": "hard"
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.65,
    "lng": 46.71,
    "population": 7009100,
    "difficulty": "medium"
  },
  {
    "name": "Yangon",
    "country": "Myanmar",
    "lat": 16.80528,
    "lng": 96.15611,
    "population": 6874000,
    "difficulty": "hard"
  },
  {
    "name": "Chennai",
    "country": "India",
    "lat": 13.0825,
    "lng": 80.275,
    "population": 6599000,
    "difficulty": "medium"
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.4375,
    "lng": -70.65,
    "population": 6257516,
    "difficulty": "medium"
  },
  {
    "name": "Prayagraj",
    "country": "India",
    "lat": 25.45,
    "lng": 81.85,
    "population": 5954391,
    "difficulty": "hard"
  },
  {
    "name": "Pune",
    "country": "India",
    "lat": 18.521111111111,
    "lng": 73.855277777778,
    "population": 5945000,
    "difficulty": "hard"
  },
  {
    "name": "Surat",
    "country": "India",
    "lat": 21.205,
    "lng": 72.84,
    "population": 5935000,
    "difficulty": "hard"
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.3,
    "lng": 103.8,
    "population": 5866139,
    "difficulty": "easy"
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "lat": 39.93576,
    "lng": 32.83869,
    "population": 5803482,
    "difficulty": "medium"
  },
  {
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.0272222222222,
    "lng": 38.736944444444,
    "population": 5704000,
    "difficulty": "medium"
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.75,
    "lng": 100.51666666667,
    "population": 5676648,
    "difficulty": "easy"
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "lat": 59.95,
    "lng": 30.316666666667,
    "population": 5652922,
    "difficulty": "easy"
  },
  {
    "name": "Abidjan",
    "country": "Ivory Coast",
    "lat": 5.3363888888889,
    "lng": -4.0266666666667,
    "population": 5616633,
    "difficulty": "hard"
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.2863888888889,
    "lng": 36.817222222222,
    "population": 5545000,
    "difficulty": "medium"
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.867777777778,
    "lng": 151.21,
    "population": 5450496,
    "difficulty": "easy"
  },
  {
    "name": "Alexandria",
    "country": "Egypt",
    "lat": 31.1975,
    "lng": 29.8925,
    "population": 5362517,
    "difficulty": "medium"
  },
  {
    "name": "Melbourne",
    "country": "Australia",
    "lat": -37.814166666667,
    "lng": 144.96305555556,
    "population": 5350705,
    "difficulty": "easy"
  },
  {
    "name": "Khartoum",
    "country": "Sudan",
    "lat": 15.60308,
    "lng": 32.52654,
    "population": 5345000,
    "difficulty": "hard"
  },
  {
    "name": "Kabul",
    "country": "Afghanistan",
    "lat": 34.532777777778,
    "lng": 69.165833333333,
    "population": 5333284,
    "difficulty": "medium"
  },
  {
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.204970437308,
    "lng": 28.040605722647,
    "population": 4949347,
    "difficulty": "medium"
  },
  {
    "name": "Dar es Salaam",
    "country": "Tanzania",
    "lat": -6.8161111111111,
    "lng": 39.280277777778,
    "population": 4715000,
    "difficulty": "hard"
  },
  {
    "name": "Jeddah",
    "country": "Saudi Arabia",
    "lat": 21.542777777778,
    "lng": 39.172777777778,
    "population": 4697000,
    "difficulty": "hard"
  },
  {
    "name": "Kolkata",
    "country": "India",
    "lat": 22.5675,
    "lng": 88.37,
    "population": 4496694,
    "difficulty": "medium"
  },
  {
    "name": "İzmir",
    "country": "Turkey",
    "lat": 38.41273,
    "lng": 27.13838,
    "population": 4493242,
    "difficulty": "hard"
  },
  {
    "name": "Kano",
    "country": "Nigeria",
    "lat": 12.0022,
    "lng": 8.592,
    "population": 4348000,
    "difficulty": "hard"
  },
  {
    "name": "Bamako",
    "country": "Mali",
    "lat": 12.645833333333,
    "lng": -7.9922222222222,
    "population": 4227569,
    "difficulty": "hard"
  },
  {
    "name": "New Taipei",
    "country": "Taiwan",
    "lat": 25.0125,
    "lng": 121.465,
    "population": 4046037,
    "difficulty": "hard"
  },
  {
    "name": "Amman",
    "country": "Jordan",
    "lat": 31.95,
    "lng": 35.933333333333,
    "population": 4007526,
    "difficulty": "medium"
  },
  {
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.269722222222,
    "lng": 55.309444444444,
    "population": 3944751,
    "difficulty": "easy"
  },
  {
    "name": "Kumasi",
    "country": "Ghana",
    "lat": 6.7,
    "lng": -1.625,
    "population": 3903480,
    "difficulty": "hard"
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "lat": 34.05223,
    "lng": -118.24368,
    "population": 3898747,
    "difficulty": "easy"
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "lat": 52.516666666667,
    "lng": 13.383333333333,
    "population": 3782202,
    "difficulty": "easy"
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.925277777778,
    "lng": 18.423888888889,
    "population": 3776313,
    "difficulty": "medium"
  },
  {
    "name": "Yokohama",
    "country": "Japan",
    "lat": 35.433333333333,
    "lng": 139.65,
    "population": 3757630,
    "difficulty": "medium"
  },
  {
    "name": "eThekwini",
    "country": "South Africa",
    "lat": -29.866666666667,
    "lng": 31.016666666667,
    "population": 3702231,
    "difficulty": "hard"
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "lat": 40.416944444444,
    "lng": -3.7033333333333,
    "population": 3506730,
    "difficulty": "easy"
  },
  {
    "name": "Port Harcourt",
    "country": "Nigeria",
    "lat": 4.765466,
    "lng": 7.016316,
    "population": 3480000,
    "difficulty": "hard"
  },
  {
    "name": "Busan",
    "country": "South Korea",
    "lat": 35.18,
    "lng": 129.075,
    "population": 3453198,
    "difficulty": "medium"
  },
  {
    "name": "Lucknow",
    "country": "India",
    "lat": 26.847,
    "lng": 80.947,
    "population": 3382000,
    "difficulty": "hard"
  },
  {
    "name": "Ekurhuleni",
    "country": "South Africa",
    "lat": -26.1989,
    "lng": 28.31262,
    "population": 3379104,
    "difficulty": "hard"
  },
  {
    "name": "Tshwane",
    "country": "South Africa",
    "lat": -25.666666666667,
    "lng": 28.333333333333,
    "population": 3275152,
    "difficulty": "hard"
  },
  {
    "name": "Casablanca",
    "country": "Morocco",
    "lat": 33.599166666667,
    "lng": -7.62,
    "population": 3215935,
    "difficulty": "easy"
  },
  {
    "name": "Cần Thơ",
    "country": "Vietnam",
    "lat": 10.1547298,
    "lng": 105.5005357,
    "population": 3207000,
    "difficulty": "hard"
  },
  {
    "name": "Faisalabad",
    "country": "Pakistan",
    "lat": 31.418,
    "lng": 73.079,
    "population": 3203846,
    "difficulty": "hard"
  },
  {
    "name": "Santa Cruz de la Sierra",
    "country": "Bolivia",
    "lat": -17.789166666667,
    "lng": -63.1975,
    "population": 3151676,
    "difficulty": "hard"
  },
  {
    "name": "Jaipur",
    "country": "India",
    "lat": 26.915,
    "lng": 75.82,
    "population": 3073350,
    "difficulty": "medium"
  },
  {
    "name": "Kanpur",
    "country": "India",
    "lat": 26.4725,
    "lng": 80.331111111111,
    "population": 3067700,
    "difficulty": "hard"
  },
  {
    "name": "Incheon",
    "country": "South Korea",
    "lat": 37.463888888889,
    "lng": 126.64861111111,
    "population": 3049315,
    "difficulty": "hard"
  },
  {
    "name": "Taichung",
    "country": "Taiwan",
    "lat": 24.143888888889,
    "lng": 120.67944444444,
    "population": 3033885,
    "difficulty": "hard"
  },
  {
    "name": "Brasília",
    "country": "Brazil",
    "lat": -15.793888888889,
    "lng": -47.882777777778,
    "population": 2996899,
    "difficulty": "easy"
  },
  {
    "name": "Kuwait City",
    "country": "Kuwait",
    "lat": 29.375,
    "lng": 47.98,
    "population": 2989000,
    "difficulty": "medium"
  },
  {
    "name": "Sanaa",
    "country": "Yemen",
    "lat": 15.35,
    "lng": 44.2,
    "population": 2957000,
    "difficulty": "medium"
  },
  {
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.311111111111,
    "lng": 69.279722222222,
    "population": 2956384,
    "difficulty": "hard"
  },
  {
    "name": "Kyiv",
    "country": "Ukraine",
    "lat": 50.45,
    "lng": 30.523611111111,
    "population": 2952301,
    "difficulty": "easy"
  },
  {
    "name": "Bursa",
    "country": "Turkey",
    "lat": 40.191330555556,
    "lng": 29.080538888889,
    "population": 2901396,
    "difficulty": "hard"
  },
  {
    "name": "Mbuji-Mayi",
    "country": "Democratic Republic of the Congo",
    "lat": -6.1209,
    "lng": 23.5967,
    "population": 2892000,
    "difficulty": "hard"
  },
  {
    "name": "Pyongyang",
    "country": "North Korea",
    "lat": 39.016666666667,
    "lng": 125.7475,
    "population": 2863000,
    "difficulty": "easy"
  },
  {
    "name": "Da Nang",
    "country": "Vietnam",
    "lat": 16.069444444444,
    "lng": 108.20972222222,
    "population": 2819900,
    "difficulty": "medium"
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.670277777778,
    "lng": -79.386666666667,
    "population": 2794356,
    "difficulty": "easy"
  },
  {
    "name": "Douala",
    "country": "Cameroon",
    "lat": 4.05,
    "lng": 9.7,
    "population": 2768436,
    "difficulty": "hard"
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "lat": 34.69375,
    "lng": 135.50211111111,
    "population": 2751862,
    "difficulty": "medium"
  },
  {
    "name": "Rome",
    "country": "Italy",
    "lat": 41.893055555556,
    "lng": 12.482777777778,
    "population": 2748109,
    "difficulty": "easy"
  },
  {
    "name": "Chicago",
    "country": "United States",
    "lat": 41.881944444444,
    "lng": -87.627777777778,
    "population": 2746388,
    "difficulty": "easy"
  },
  {
    "name": "Kaohsiung",
    "country": "Taiwan",
    "lat": 22.615,
    "lng": 120.2975,
    "population": 2733964,
    "difficulty": "hard"
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "lat": -27.467777777778,
    "lng": 153.02777777778,
    "population": 2706966,
    "difficulty": "medium"
  },
  {
    "name": "Damascus",
    "country": "Syria",
    "lat": 33.513055555556,
    "lng": 36.291944444444,
    "population": 2685360,
    "difficulty": "medium"
  },
  {
    "name": "Guayaquil",
    "country": "Ecuador",
    "lat": -2.19,
    "lng": -79.8875,
    "population": 2650288,
    "difficulty": "hard"
  },
  {
    "name": "Chittagong",
    "country": "Bangladesh",
    "lat": 22.335,
    "lng": 91.8325,
    "population": 2581643,
    "difficulty": "hard"
  },
  {
    "name": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7275,
    "lng": -38.5275,
    "population": 2578483,
    "difficulty": "hard"
  },
  {
    "name": "Ibadan",
    "country": "Nigeria",
    "lat": 7.3775,
    "lng": 3.9058333333333,
    "population": 2550593,
    "difficulty": "hard"
  },
  {
    "name": "El Paso–Juárez",
    "country": "United States",
    "lat": 31.73944444,
    "lng": -106.48694444,
    "population": 2539946,
    "difficulty": "medium"
  },
  {
    "name": "Medellín",
    "country": "Colombia",
    "lat": 6.250200154879,
    "lng": -75.567584500697,
    "population": 2529403,
    "difficulty": "medium"
  },
  {
    "name": "Waqooyi-Bari",
    "country": "Somalia",
    "lat": 9.13333333,
    "lng": 48.41666667,
    "population": 2500000,
    "difficulty": "hard"
  },
  {
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.136666666667,
    "lng": -82.358888888889,
    "population": 2492618,
    "difficulty": "easy"
  },
  {
    "name": "Luanda",
    "country": "Angola",
    "lat": -8.8383333333333,
    "lng": 13.234444444444,
    "population": 2487444,
    "difficulty": "hard"
  },
  {
    "name": "Cali",
    "country": "Colombia",
    "lat": 3.44,
    "lng": -76.519722222222,
    "population": 2471474,
    "difficulty": "medium"
  },
  {
    "name": "Lusaka",
    "country": "Zambia",
    "lat": -15.416666666667,
    "lng": 28.283333333333,
    "population": 2467563,
    "difficulty": "hard"
  },
  {
    "name": "Ouagadougou",
    "country": "Burkina Faso",
    "lat": 12.368611111111,
    "lng": -1.5275,
    "population": 2453496,
    "difficulty": "hard"
  },
  {
    "name": "Daegu",
    "country": "South Korea",
    "lat": 35.871666666667,
    "lng": 128.60166666667,
    "population": 2444412,
    "difficulty": "hard"
  },
  {
    "name": "Yaoundé",
    "country": "Cameroon",
    "lat": 3.8577777777778,
    "lng": 11.518055555556,
    "population": 2440462,
    "difficulty": "hard"
  },
  {
    "name": "Antalya",
    "country": "Turkey",
    "lat": 36.90812,
    "lng": 30.69556,
    "population": 2426356,
    "difficulty": "hard"
  },
  {
    "name": "Beirut",
    "country": "Lebanon",
    "lat": 33.886944444444,
    "lng": 35.513055555556,
    "population": 2421354,
    "difficulty": "medium"
  },
  {
    "name": "Salvador",
    "country": "Brazil",
    "lat": -12.983055555556,
    "lng": -38.492777777778,
    "population": 2417678,
    "difficulty": "hard"
  },
  {
    "name": "Nagpur",
    "country": "India",
    "lat": 21.149722222222,
    "lng": 79.080555555556,
    "population": 2405665,
    "difficulty": "hard"
  },
  {
    "name": "Algiers",
    "country": "Algeria",
    "lat": 36.776388888889,
    "lng": 3.0586111111111,
    "population": 2364230,
    "difficulty": "medium"
  },
  {
    "name": "Nagoya",
    "country": "Japan",
    "lat": 35.181388888889,
    "lng": 136.90638888889,
    "population": 2326844,
    "difficulty": "medium"
  },
  {
    "name": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.928055555556,
    "lng": -43.941944444444,
    "population": 2315560,
    "difficulty": "hard"
  },
  {
    "name": "Houston",
    "country": "United States",
    "lat": 29.762777777778,
    "lng": -95.383055555556,
    "population": 2304580,
    "difficulty": "easy"
  },
  {
    "name": "Manaus",
    "country": "Brazil",
    "lat": -3.1188888888889,
    "lng": -60.021666666667,
    "population": 2303732,
    "difficulty": "hard"
  },
  {
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": 40.366655555556,
    "lng": 49.835183333333,
    "population": 2300500,
    "difficulty": "hard"
  },
  {
    "name": "Konya",
    "country": "Turkey",
    "lat": 37.8725,
    "lng": 32.491944444444,
    "population": 2296347,
    "difficulty": "hard"
  },
  {
    "name": "Caracas",
    "country": "Venezuela",
    "lat": 10.506111111111,
    "lng": -66.914444444444,
    "population": 2245744,
    "difficulty": "medium"
  },
  {
    "name": "Almaty",
    "country": "Kazakhstan",
    "lat": 43.24,
    "lng": 76.915,
    "population": 2228675,
    "difficulty": "hard"
  },
  {
    "name": "Santo Domingo",
    "country": "Dominican Republic",
    "lat": 18.4625,
    "lng": -69.936111111111,
    "population": 2201941,
    "difficulty": "medium"
  },
  {
    "name": "Lomé",
    "country": "Togo",
    "lat": 6.13,
    "lng": 1.2158333333333,
    "population": 2188376,
    "difficulty": "hard"
  },
  {
    "name": "Harare",
    "country": "Zimbabwe",
    "lat": -17.829166666667,
    "lng": 31.052222222222,
    "population": 2150000,
    "difficulty": "hard"
  },
  {
    "name": "Perth",
    "country": "Australia",
    "lat": -31.955833333333,
    "lng": 115.85972222222,
    "population": 2141834,
    "difficulty": "medium"
  },
  {
    "name": "Phnom Penh",
    "country": "Cambodia",
    "lat": 11.569583333333,
    "lng": 104.92102777778,
    "population": 2129371,
    "difficulty": "medium"
  },
  {
    "name": "Haiphong",
    "country": "Vietnam",
    "lat": 20.8,
    "lng": 106.66666666667,
    "population": 2124500,
    "difficulty": "hard"
  },
  {
    "name": "Mogadishu",
    "country": "Somalia",
    "lat": 2.0391666666667,
    "lng": 45.341944444444,
    "population": 2120000,
    "difficulty": "medium"
  },
  {
    "name": "Paris",
    "country": "France",
    "lat": 48.856666666667,
    "lng": 2.3522222222222,
    "population": 2113705,
    "difficulty": "easy"
  },
  {
    "name": "Rawalpindi",
    "country": "Pakistan",
    "lat": 33.6007,
    "lng": 73.0679,
    "population": 2098231,
    "difficulty": "hard"
  },
  {
    "name": "Vadodara",
    "country": "India",
    "lat": 22.3,
    "lng": 73.2,
    "population": 2065771,
    "difficulty": "hard"
  },
  {
    "name": "Rajkot",
    "country": "India",
    "lat": 22.296908333333,
    "lng": 70.798363888889,
    "population": 2043000,
    "difficulty": "hard"
  },
  {
    "name": "Visakhapatnam",
    "country": "India",
    "lat": 17.693888888889,
    "lng": 83.292222222222,
    "population": 2035922,
    "difficulty": "hard"
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.208333333333,
    "lng": 16.3725,
    "population": 2028289,
    "difficulty": "easy"
  },
  {
    "name": "Gujranwala",
    "country": "Pakistan",
    "lat": 32.15,
    "lng": 74.183333333333,
    "population": 2027001,
    "difficulty": "hard"
  },
  {
    "name": "Aleppo",
    "country": "Syria",
    "lat": 36.2,
    "lng": 37.16,
    "population": 2003671,
    "difficulty": "medium"
  },
  {
    "name": "Minsk",
    "country": "Belarus",
    "lat": 53.902246,
    "lng": 27.561837,
    "population": 1996730,
    "difficulty": "medium"
  },
  {
    "name": "Indore",
    "country": "India",
    "lat": 22.718611111111,
    "lng": 75.855,
    "population": 1994397,
    "difficulty": "hard"
  },
  {
    "name": "Şanlıurfa",
    "country": "Turkey",
    "lat": 37.158333333333,
    "lng": 38.791666666667,
    "population": 1985753,
    "difficulty": "hard"
  },
  {
    "name": "Kananga",
    "country": "Democratic Republic of the Congo",
    "lat": -5.8961111111111,
    "lng": 22.416666666667,
    "population": 1971704,
    "difficulty": "hard"
  },
  {
    "name": "Peshawar",
    "country": "Pakistan",
    "lat": 34.014444444444,
    "lng": 71.5675,
    "population": 1970042,
    "difficulty": "medium"
  },
  {
    "name": "Tijuana",
    "country": "Mexico",
    "lat": 32.536447,
    "lng": -117.037155,
    "population": 1964788,
    "difficulty": "medium"
  },
  {
    "name": "Isfahan",
    "country": "Iran",
    "lat": 32.6525,
    "lng": 51.675,
    "population": 1961260,
    "difficulty": "hard"
  },
  {
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.061944444444,
    "lng": 141.35444444444,
    "population": 1959313,
    "difficulty": "medium"
  },
  {
    "name": "Kocaeli",
    "country": "Turkey",
    "lat": 40.764444444444,
    "lng": 29.945,
    "population": 1953035,
    "difficulty": "hard"
  },
  {
    "name": "Irbid",
    "country": "Jordan",
    "lat": 32.555555555556,
    "lng": 35.85,
    "population": 1911600,
    "difficulty": "hard"
  },
  {
    "name": "Hamburg",
    "country": "Germany",
    "lat": 53.55,
    "lng": 10.0,
    "population": 1910160,
    "difficulty": "easy"
  },
  {
    "name": "Katowice",
    "country": "Poland",
    "lat": 50.25,
    "lng": 19.0,
    "population": 1903000,
    "difficulty": "hard"
  },
  {
    "name": "Tainan",
    "country": "Taiwan",
    "lat": 22.99,
    "lng": 120.185,
    "population": 1874686,
    "difficulty": "hard"
  },
  {
    "name": "Multan",
    "country": "Pakistan",
    "lat": 30.197777777778,
    "lng": 71.471111111111,
    "population": 1871843,
    "difficulty": "hard"
  },
  {
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.23,
    "lng": 21.011111111111,
    "population": 1862402,
    "difficulty": "easy"
  },
  {
    "name": "Davao City",
    "country": "Philippines",
    "lat": 7.0662333333333,
    "lng": 125.60944166667,
    "population": 1848947,
    "difficulty": "hard"
  },
  {
    "name": "Montreal",
    "country": "Canada",
    "lat": 45.5033426,
    "lng": -73.5868411,
    "population": 1800055,
    "difficulty": "easy"
  },
  {
    "name": "Bhopal",
    "country": "India",
    "lat": 23.25,
    "lng": 77.416666666667,
    "population": 1798218,
    "difficulty": "hard"
  },
  {
    "name": "Mosul",
    "country": "Iraq",
    "lat": 36.366666666667,
    "lng": 43.116666666667,
    "population": 1792000,
    "difficulty": "medium"
  },
  {
    "name": "Lubumbashi",
    "country": "Democratic Republic of the Congo",
    "lat": -11.664166666667,
    "lng": 27.482777777778,
    "population": 1786397,
    "difficulty": "hard"
  },
  {
    "name": "Accra",
    "country": "Ghana",
    "lat": 5.55602,
    "lng": -0.1969,
    "population": 1782150,
    "difficulty": "medium"
  },
  {
    "name": "Benin",
    "country": "Nigeria",
    "lat": 6.3176,
    "lng": 5.6145,
    "population": 1780000,
    "difficulty": "hard"
  },
  {
    "name": "Curitiba",
    "country": "Brazil",
    "lat": -25.429722222222,
    "lng": -49.271944444444,
    "population": 1773718,
    "difficulty": "hard"
  },
  {
    "name": "Adana",
    "country": "Turkey",
    "lat": 37.00262,
    "lng": 35.31346,
    "population": 1765981,
    "difficulty": "hard"
  },
  {
    "name": "Garoua",
    "country": "Cameroon",
    "lat": 9.3,
    "lng": 13.4,
    "population": 1750000,
    "difficulty": "hard"
  },
  {
    "name": "Kigali",
    "country": "Rwanda",
    "lat": -1.9525,
    "lng": 30.115,
    "population": 1745555,
    "difficulty": "medium"
  },
  {
    "name": "Diyarbakır",
    "country": "Turkey",
    "lat": 37.910833333333,
    "lng": 40.236666666667,
    "population": 1732396,
    "difficulty": "hard"
  },
  {
    "name": "Barcelona",
    "country": "Spain",
    "lat": 41.3825,
    "lng": 2.1769444444444,
    "population": 1731649,
    "difficulty": "easy"
  },
  {
    "name": "Bucharest",
    "country": "Romania",
    "lat": 44.413361111111,
    "lng": 26.097777777778,
    "population": 1716961,
    "difficulty": "medium"
  },
  {
    "name": "Abuja",
    "country": "Nigeria",
    "lat": 9.0555555555556,
    "lng": 7.4913888888889,
    "population": 1693400,
    "difficulty": "medium"
  },
  {
    "name": "Budapest",
    "country": "Hungary",
    "lat": 47.498333333333,
    "lng": 19.040833333333,
    "population": 1685209,
    "difficulty": "easy"
  },
  {
    "name": "Patna",
    "country": "India",
    "lat": 25.61,
    "lng": 85.141388888889,
    "population": 1684222,
    "difficulty": "hard"
  },
  {
    "name": "Belgrade",
    "country": "Serbia",
    "lat": 44.81666668,
    "lng": 20.46666668,
    "population": 1681405,
    "difficulty": "medium"
  },
  {
    "name": "Gaziantep",
    "country": "Turkey",
    "lat": 37.062777777778,
    "lng": 37.379166666667,
    "population": 1680723,
    "difficulty": "hard"
  },
  {
    "name": "Kampala",
    "country": "Uganda",
    "lat": 0.31361111111111,
    "lng": 32.581111111111,
    "population": 1680600,
    "difficulty": "hard"
  },
  {
    "name": "Conakry",
    "country": "Guinea",
    "lat": 9.5091666666667,
    "lng": -13.712222222222,
    "population": 1667864,
    "difficulty": "hard"
  },
  {
    "name": "Masvingo",
    "country": "Zimbabwe",
    "lat": -20.074444444444,
    "lng": 30.832777777778,
    "population": 1638528,
    "difficulty": "hard"
  },
  {
    "name": "Novosibirsk",
    "country": "Russia",
    "lat": 55.033333333333,
    "lng": 82.916666666667,
    "population": 1637266,
    "difficulty": "hard"
  },
  {
    "name": "Ludhiana",
    "country": "India",
    "lat": 30.908333333333,
    "lng": 75.848611111111,
    "population": 1618879,
    "difficulty": "hard"
  },
  {
    "name": "Phoenix",
    "country": "United States",
    "lat": 33.448333333333,
    "lng": -112.07388888889,
    "population": 1608139,
    "difficulty": "easy"
  },
  {
    "name": "Philadelphia",
    "country": "United States",
    "lat": 39.952777777778,
    "lng": -75.163611111111,
    "population": 1603797,
    "difficulty": "easy"
  },
  {
    "name": "Fukuoka",
    "country": "Japan",
    "lat": 33.59,
    "lng": 130.40166666667,
    "population": 1603043,
    "difficulty": "medium"
  },
  {
    "name": "Agra",
    "country": "India",
    "lat": 27.18,
    "lng": 78.02,
    "population": 1585705,
    "difficulty": "easy"
  },
  {
    "name": "León de Los Aldama",
    "country": "Mexico",
    "lat": 21.121944444444,
    "lng": -101.68333333333,
    "population": 1579803,
    "difficulty": "hard"
  },
  {
    "name": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.451111111111,
    "lng": 54.396944444444,
    "population": 1570000,
    "difficulty": "easy"
  },
  {
    "name": "Madurai",
    "country": "India",
    "lat": 9.9196611111111,
    "lng": 78.119394444444,
    "population": 1561129,
    "difficulty": "hard"
  },
  {
    "name": "Jamshedpur",
    "country": "India",
    "lat": 22.8,
    "lng": 86.183333333333,
    "population": 1558000,
    "difficulty": "hard"
  },
  {
    "name": "Maracaibo",
    "country": "Venezuela",
    "lat": 10.633333333333,
    "lng": -71.633333333333,
    "population": 1551539,
    "difficulty": "hard"
  },
  {
    "name": "Kobe",
    "country": "Japan",
    "lat": 34.690166666667,
    "lng": 135.19544444444,
    "population": 1521707,
    "difficulty": "medium"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1375,
    "lng": 11.575,
    "population": 1510378,
    "difficulty": "easy"
  },
  {
    "name": "Córdoba",
    "country": "Argentina",
    "lat": -31.416666666667,
    "lng": -64.183333333333,
    "population": 1505250,
    "difficulty": "medium"
  },
  {
    "name": "Niamey",
    "country": "Niger",
    "lat": 13.515,
    "lng": 2.1175,
    "population": 1496260,
    "difficulty": "hard"
  },
  {
    "name": "Gwangju",
    "country": "South Korea",
    "lat": 35.166666666667,
    "lng": 126.91666666667,
    "population": 1490092,
    "difficulty": "hard"
  },
  {
    "name": "Recife",
    "country": "Brazil",
    "lat": -8.0538888888889,
    "lng": -34.880833333333,
    "population": 1488920,
    "difficulty": "hard"
  },
  {
    "name": "Nashik",
    "country": "India",
    "lat": 20.0,
    "lng": 73.783333333333,
    "population": 1486053,
    "difficulty": "hard"
  },
  {
    "name": "Valencia",
    "country": "Venezuela",
    "lat": 10.166666666667,
    "lng": -68.0,
    "population": 1484430,
    "difficulty": "medium"
  },
  {
    "name": "Onitsha",
    "country": "Nigeria",
    "lat": 6.1666666666667,
    "lng": 6.7833333333333,
    "population": 1483000,
    "difficulty": "hard"
  },
  {
    "name": "Daejeon",
    "country": "South Korea",
    "lat": 36.35,
    "lng": 127.385,
    "population": 1475221,
    "difficulty": "hard"
  },
  {
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.849166666667,
    "lng": 174.76527777778,
    "population": 1470100,
    "difficulty": "easy"
  },
  {
    "name": "Yekaterinburg",
    "country": "Russia",
    "lat": 56.835555555556,
    "lng": 60.612777777778,
    "population": 1468833,
    "difficulty": "hard"
  },
  {
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.011611111111,
    "lng": 135.76811111111,
    "population": 1463723,
    "difficulty": "easy"
  },
  {
    "name": "Nouakchott",
    "country": "Mauritania",
    "lat": 18.08581,
    "lng": -15.9785,
    "population": 1446761,
    "difficulty": "hard"
  },
  {
    "name": "Dakar",
    "country": "Senegal",
    "lat": 14.672555555556,
    "lng": -17.432,
    "population": 1438725,
    "difficulty": "medium"
  },
  {
    "name": "Goiânia",
    "country": "Brazil",
    "lat": -16.680555555556,
    "lng": -49.256388888889,
    "population": 1437366,
    "difficulty": "hard"
  },
  {
    "name": "Metropolis of Lyon",
    "country": "France",
    "lat": 45.7574955,
    "lng": 4.8539736944444,
    "population": 1436354,
    "difficulty": "easy"
  },
  {
    "name": "San Antonio",
    "country": "United States",
    "lat": 29.425,
    "lng": -98.493888888889,
    "population": 1434625,
    "difficulty": "easy"
  },
  {
    "name": "Muscat",
    "country": "Oman",
    "lat": 23.613888888889,
    "lng": 58.592222222222,
    "population": 1421409,
    "difficulty": "medium"
  },
  {
    "name": "Kharkiv",
    "country": "Ukraine",
    "lat": 49.9925,
    "lng": 36.231111111111,
    "population": 1421125,
    "difficulty": "easy"
  },
  {
    "name": "Pointe-Noire",
    "country": "Republic of the Congo",
    "lat": -4.7975,
    "lng": 11.850277777778,
    "population": 1420612,
    "difficulty": "hard"
  },
  {
    "name": "Medina",
    "country": "Saudi Arabia",
    "lat": 24.47,
    "lng": 39.61,
    "population": 1411599,
    "difficulty": "medium"
  },
  {
    "name": "Faridabad",
    "country": "India",
    "lat": 28.416666666667,
    "lng": 77.3,
    "population": 1404653,
    "difficulty": "hard"
  },
  {
    "name": "Prague",
    "country": "Czech Republic",
    "lat": 50.0875,
    "lng": 14.421388888889,
    "population": 1397880,
    "difficulty": "easy"
  },
  {
    "name": "Ulaanbaatar",
    "country": "Mongolia",
    "lat": 47.921357,
    "lng": 106.905515,
    "population": 1396288,
    "difficulty": "hard"
  },
  {
    "name": "Kayseri",
    "country": "Turkey",
    "lat": 38.7225,
    "lng": 35.4875,
    "population": 1389680,
    "difficulty": "hard"
  },
  {
    "name": "Porto Alegre",
    "country": "Brazil",
    "lat": -30.032777777778,
    "lng": -51.23,
    "population": 1388794,
    "difficulty": "hard"
  },
  {
    "name": "Adelaide",
    "country": "Australia",
    "lat": -34.9275,
    "lng": 138.6,
    "population": 1387290,
    "difficulty": "medium"
  },
  {
    "name": "Guadalajara",
    "country": "Mexico",
    "lat": 20.676388888889,
    "lng": -103.34222222222,
    "population": 1385621,
    "difficulty": "medium"
  },
  {
    "name": "Samsun",
    "country": "Turkey",
    "lat": 41.286666666667,
    "lng": 36.33,
    "population": 1368488,
    "difficulty": "hard"
  },
  {
    "name": "Kisangani",
    "country": "Democratic Republic of the Congo",
    "lat": 0.51527777777778,
    "lng": 25.191111111111,
    "population": 1366000,
    "difficulty": "hard"
  },
  {
    "name": "Milan",
    "country": "Italy",
    "lat": 45.466944444444,
    "lng": 9.19,
    "population": 1354196,
    "difficulty": "easy"
  },
  {
    "name": "Santiago de los Caballeros",
    "country": "Dominican Republic",
    "lat": 19.45,
    "lng": -70.7,
    "population": 1343423,
    "difficulty": "hard"
  },
  {
    "name": "Kazan",
    "country": "Russia",
    "lat": 55.790833333333,
    "lng": 49.114444444444,
    "population": 1329825,
    "difficulty": "hard"
  },
  {
    "name": "Barranquilla",
    "country": "Colombia",
    "lat": 10.983333333333,
    "lng": -74.801944444444,
    "population": 1326588,
    "difficulty": "medium"
  },
  {
    "name": "Basra",
    "country": "Iraq",
    "lat": 30.515,
    "lng": 47.81,
    "population": 1326564,
    "difficulty": "medium"
  },
  {
    "name": "Calgary",
    "country": "Canada",
    "lat": 51.05,
    "lng": -114.06666666667,
    "population": 1306784,
    "difficulty": "medium"
  },
  {
    "name": "Meerut",
    "country": "India",
    "lat": 28.98,
    "lng": 77.706388888889,
    "population": 1305429,
    "difficulty": "hard"
  },
  {
    "name": "Dallas",
    "country": "United States",
    "lat": 32.779166666667,
    "lng": -96.808888888889,
    "population": 1304379,
    "difficulty": "easy"
  },
  {
    "name": "Belém",
    "country": "Brazil",
    "lat": -1.4558333333333,
    "lng": -48.503888888889,
    "population": 1303403,
    "difficulty": "hard"
  },
  {
    "name": "Montevideo",
    "country": "Uruguay",
    "lat": -34.905916666667,
    "lng": -56.191311111111,
    "population": 1302954,
    "difficulty": "hard"
  },
  {
    "name": "Nova Iguaçu",
    "country": "Brazil",
    "lat": -22.758888888889,
    "lng": -43.450833333333,
    "population": 1297704,
    "difficulty": "hard"
  },
  {
    "name": "Tripoli",
    "country": "Libya",
    "lat": 32.87519,
    "lng": 13.18746,
    "population": 1293016,
    "difficulty": "medium"
  },
  {
    "name": "Tangier",
    "country": "Morocco",
    "lat": 35.776666666667,
    "lng": -5.8038888888889,
    "population": 1275428,
    "difficulty": "medium"
  },
  {
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.91,
    "lng": 47.525,
    "population": 1275207,
    "difficulty": "hard"
  },
  {
    "name": "Jabalpur",
    "country": "India",
    "lat": 23.166666666667,
    "lng": 79.933333333333,
    "population": 1267564,
    "difficulty": "hard"
  },
  {
    "name": "Nelson Mandela Bay",
    "country": "South Africa",
    "lat": -33.95,
    "lng": 25.6,
    "population": 1263051,
    "difficulty": "hard"
  },
  {
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.846666666667,
    "lng": 4.3525,
    "population": 1255795,
    "difficulty": "easy"
  },
  {
    "name": "Balıkesir",
    "country": "Turkey",
    "lat": 39.651111111111,
    "lng": 27.884166666667,
    "population": 1250610,
    "difficulty": "hard"
  },
  {
    "name": "Huế",
    "country": "Vietnam",
    "lat": 16.463888888889,
    "lng": 107.58666666667,
    "population": 1236393,
    "difficulty": "medium"
  },
  {
    "name": "Suwon",
    "country": "South Korea",
    "lat": 37.285833333333,
    "lng": 127.01,
    "population": 1234300,
    "difficulty": "hard"
  },
  {
    "name": "Hargeisa",
    "country": "Somaliland",
    "lat": 9.565556,
    "lng": 44.060556,
    "population": 1227620,
    "difficulty": "hard"
  },
  {
    "name": "Mandalay",
    "country": "Myanmar",
    "lat": 21.97473,
    "lng": 96.08359,
    "population": 1225546,
    "difficulty": "medium"
  },
  {
    "name": "Vasai-Virar",
    "country": "India",
    "lat": 19.47,
    "lng": 72.8,
    "population": 1222390,
    "difficulty": "hard"
  },
  {
    "name": "Campinas",
    "country": "Brazil",
    "lat": -22.900913888889,
    "lng": -47.057294444444,
    "population": 1213792,
    "difficulty": "hard"
  },
  {
    "name": "Mombasa",
    "country": "Kenya",
    "lat": -4.05,
    "lng": 39.666666666667,
    "population": 1208333,
    "difficulty": "medium"
  },
  {
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": 42.697886,
    "lng": 23.321726,
    "population": 1205548,
    "difficulty": "easy"
  },
  {
    "name": "Varanasi",
    "country": "India",
    "lat": 25.318888888889,
    "lng": 83.012777777778,
    "population": 1198491,
    "difficulty": "medium"
  },
  {
    "name": "Nizhny Novgorod",
    "country": "Russia",
    "lat": 56.326944444444,
    "lng": 44.0075,
    "population": 1198245,
    "difficulty": "hard"
  },
  {
    "name": "Hiroshima",
    "country": "Japan",
    "lat": 34.391388888889,
    "lng": 132.45194444444,
    "population": 1198021,
    "difficulty": "easy"
  },
  {
    "name": "Chiang Mai",
    "country": "Thailand",
    "lat": 18.788888888889,
    "lng": 98.983333333333,
    "population": 1198000,
    "difficulty": "medium"
  },
  {
    "name": "Maiduguri",
    "country": "Nigeria",
    "lat": 11.833333333333,
    "lng": 13.15,
    "population": 1197497,
    "difficulty": "hard"
  },
  {
    "name": "Rosario",
    "country": "Argentina",
    "lat": -32.9575,
    "lng": -60.639444444444,
    "population": 1193605,
    "difficulty": "hard"
  },
  {
    "name": "Shymkent",
    "country": "Kazakhstan",
    "lat": 42.3,
    "lng": 69.6,
    "population": 1191877,
    "difficulty": "hard"
  },
  {
    "name": "Bishkek",
    "country": "Kyrgyzstan",
    "lat": 42.866666666667,
    "lng": 74.566666666667,
    "population": 1191000,
    "difficulty": "hard"
  },
  {
    "name": "Doha",
    "country": "Qatar",
    "lat": 25.286205555556,
    "lng": 51.529436111111,
    "population": 1186023,
    "difficulty": "easy"
  },
  {
    "name": "Ahvaz",
    "country": "Iran",
    "lat": 31.318888888889,
    "lng": 48.684166666667,
    "population": 1184788,
    "difficulty": "hard"
  },
  {
    "name": "Srinagar",
    "country": "India",
    "lat": 34.091111111111,
    "lng": 74.806111111111,
    "population": 1180570,
    "difficulty": "medium"
  },
  {
    "name": "Chelyabinsk",
    "country": "Russia",
    "lat": 55.15,
    "lng": 61.4,
    "population": 1176770,
    "difficulty": "hard"
  },
  {
    "name": "Aurangabad",
    "country": "India",
    "lat": 19.88,
    "lng": 75.32,
    "population": 1175116,
    "difficulty": "hard"
  },
  {
    "name": "Fez",
    "country": "Morocco",
    "lat": 34.043333333333,
    "lng": -5.0033333333333,
    "population": 1167842,
    "difficulty": "medium"
  },
  {
    "name": "Naypyidaw",
    "country": "Myanmar",
    "lat": 19.7475,
    "lng": 96.115,
    "population": 1160242,
    "difficulty": "hard"
  },
  {
    "name": "Aba",
    "country": "Nigeria",
    "lat": 5.1166666666667,
    "lng": 7.3666666666667,
    "population": 1160000,
    "difficulty": "hard"
  },
  {
    "name": "Krasnodar",
    "country": "Russia",
    "lat": 45.033333333333,
    "lng": 38.983333333333,
    "population": 1154885,
    "difficulty": "hard"
  },
  {
    "name": "Aden",
    "country": "Yemen",
    "lat": 12.8,
    "lng": 45.033333333333,
    "population": 1154410,
    "difficulty": "medium"
  },
  {
    "name": "Samara",
    "country": "Russia",
    "lat": 53.183333333333,
    "lng": 50.116666666667,
    "population": 1154223,
    "difficulty": "hard"
  },
  {
    "name": "Ufa",
    "country": "Russia",
    "lat": 54.726111111111,
    "lng": 55.9475,
    "population": 1144809,
    "difficulty": "hard"
  },
  {
    "name": "Monterrey",
    "country": "Mexico",
    "lat": 25.684444444444,
    "lng": -100.31805555556,
    "population": 1142952,
    "difficulty": "medium"
  },
  {
    "name": "Birmingham",
    "country": "United Kingdom",
    "lat": 52.48,
    "lng": -1.9025,
    "population": 1137100,
    "difficulty": "easy"
  },
  {
    "name": "Rostov-on-Don",
    "country": "Russia",
    "lat": 47.2225,
    "lng": 39.71,
    "population": 1135968,
    "difficulty": "hard"
  },
  {
    "name": "Maputo",
    "country": "Mozambique",
    "lat": -25.915277777778,
    "lng": 32.576388888889,
    "population": 1133200,
    "difficulty": "hard"
  },
  {
    "name": "Amritsar",
    "country": "India",
    "lat": 31.626917,
    "lng": 74.87704,
    "population": 1132383,
    "difficulty": "medium"
  },
  {
    "name": "Van",
    "country": "Turkey",
    "lat": 38.501944444444,
    "lng": 43.416666666667,
    "population": 1127612,
    "difficulty": "hard"
  },
  {
    "name": "Ulsan",
    "country": "South Korea",
    "lat": 35.55,
    "lng": 129.31666666667,
    "population": 1127553,
    "difficulty": "hard"
  },
  {
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": 41.7225,
    "lng": 44.7925,
    "population": 1118035,
    "difficulty": "medium"
  },
  {
    "name": "Guwahati",
    "country": "India",
    "lat": 26.1805876,
    "lng": 91.750238,
    "population": 1116267,
    "difficulty": "hard"
  },
  {
    "name": "Yerevan",
    "country": "Armenia",
    "lat": 40.181388888889,
    "lng": 44.514444444444,
    "population": 1106300,
    "difficulty": "hard"
  },
  {
    "name": "Maracay",
    "country": "Venezuela",
    "lat": 10.246944444444,
    "lng": -67.595833333333,
    "population": 1102088,
    "difficulty": "hard"
  },
  {
    "name": "Omsk",
    "country": "Russia",
    "lat": 54.966666666667,
    "lng": 73.383333333333,
    "population": 1101367,
    "difficulty": "hard"
  },
  {
    "name": "Krasnoyarsk",
    "country": "Russia",
    "lat": 56.008888888889,
    "lng": 92.871944444444,
    "population": 1092851,
    "difficulty": "hard"
  },
  {
    "name": "N'Djamena",
    "country": "Chad",
    "lat": 12.11,
    "lng": 15.05,
    "population": 1092066,
    "difficulty": "hard"
  },
  {
    "name": "Cologne",
    "country": "Germany",
    "lat": 50.942222222222,
    "lng": 6.9577777777778,
    "population": 1087353,
    "difficulty": "easy"
  },
  {
    "name": "Astana",
    "country": "Kazakhstan",
    "lat": 51.133333333333,
    "lng": 71.433333333333,
    "population": 1078362,
    "difficulty": "hard"
  },
  {
    "name": "Ranchi",
    "country": "India",
    "lat": 23.355555555556,
    "lng": 85.334722222222,
    "population": 1073440,
    "difficulty": "hard"
  },
  {
    "name": "Gwalior",
    "country": "India",
    "lat": 26.2125,
    "lng": 78.1775,
    "population": 1069276,
    "difficulty": "hard"
  },
  {
    "name": "Sendai",
    "country": "Japan",
    "lat": 38.268222222222,
    "lng": 140.86941666667,
    "population": 1061177,
    "difficulty": "medium"
  },
  {
    "name": "Barquisimeto",
    "country": "Venezuela",
    "lat": 10.067777777778,
    "lng": -69.346694444444,
    "population": 1059092,
    "difficulty": "hard"
  },
  {
    "name": "Tegucigalpa",
    "country": "Honduras",
    "lat": 14.105783333333,
    "lng": -87.204705555556,
    "population": 1055729,
    "difficulty": "hard"
  },
  {
    "name": "Chandigarh",
    "country": "India",
    "lat": 30.736388888889,
    "lng": 76.788333333333,
    "population": 1055450,
    "difficulty": "medium"
  },
  {
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.516666666667,
    "lng": 80.616666666667,
    "population": 1048240,
    "difficulty": "hard"
  },
  {
    "name": "Voronezh",
    "country": "Russia",
    "lat": 51.671666666667,
    "lng": 39.210555555556,
    "population": 1041722,
    "difficulty": "hard"
  },
  {
    "name": "Mersin",
    "country": "Turkey",
    "lat": 36.8,
    "lng": 34.616666666667,
    "population": 1040507,
    "difficulty": "hard"
  },
  {
    "name": "São Luís",
    "country": "Brazil",
    "lat": -2.53,
    "lng": -44.302777777778,
    "population": 1037775,
    "difficulty": "hard"
  },
  {
    "name": "Jodhpur",
    "country": "India",
    "lat": 26.294444444444,
    "lng": 73.027777777778,
    "population": 1033918,
    "difficulty": "medium"
  },
  {
    "name": "Ogbomosho",
    "country": "Nigeria",
    "lat": 8.1333333333333,
    "lng": 4.25,
    "population": 1032000,
    "difficulty": "hard"
  },
  {
    "name": "Ashgabat",
    "country": "Turkmenistan",
    "lat": 37.95,
    "lng": 58.383333333333,
    "population": 1030063,
    "difficulty": "hard"
  },
  {
    "name": "Enugu",
    "country": "Nigeria",
    "lat": 6.4402777777778,
    "lng": 7.4941666666667,
    "population": 1029400,
    "difficulty": "hard"
  },
  {
    "name": "Denizli",
    "country": "Turkey",
    "lat": 37.783333333333,
    "lng": 29.096388888889,
    "population": 1027782,
    "difficulty": "hard"
  },
  {
    "name": "Perm",
    "country": "Russia",
    "lat": 58.013888888889,
    "lng": 56.248888888889,
    "population": 1027518,
    "difficulty": "hard"
  },
  {
    "name": "Monrovia",
    "country": "Liberia",
    "lat": 6.3105555555556,
    "lng": -10.804722222222,
    "population": 1021762,
    "difficulty": "hard"
  },
  {
    "name": "Zamboanga City",
    "country": "Philippines",
    "lat": 6.9041666666667,
    "lng": 122.07611111111,
    "population": 1018849,
    "difficulty": "hard"
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "lat": 45.424722222222,
    "lng": -75.695,
    "population": 1017449,
    "difficulty": "easy"
  },
  {
    "name": "San Jose",
    "country": "United States",
    "lat": 37.304166666667,
    "lng": -121.87277777778,
    "population": 1013240,
    "difficulty": "medium"
  },
  {
    "name": "Volgograd",
    "country": "Russia",
    "lat": 48.708611111111,
    "lng": 44.514722222222,
    "population": 1012219,
    "difficulty": "medium"
  },
  {
    "name": "Edmonton",
    "country": "Canada",
    "lat": 53.533333333333,
    "lng": -113.5,
    "population": 1010899,
    "difficulty": "medium"
  },
  {
    "name": "Odesa",
    "country": "Ukraine",
    "lat": 46.47747,
    "lng": 30.73262,
    "population": 1010537,
    "difficulty": "easy"
  },
  {
    "name": "Raipur",
    "country": "India",
    "lat": 21.2379468,
    "lng": 81.6336833,
    "population": 1010087,
    "difficulty": "hard"
  },
  {
    "name": "Changwon",
    "country": "South Korea",
    "lat": 35.228055555556,
    "lng": 128.68111111111,
    "population": 1009998,
    "difficulty": "hard"
  },
  {
    "name": "Arequipa",
    "country": "Peru",
    "lat": -16.398888888889,
    "lng": -71.536944444444,
    "population": 1008290,
    "difficulty": "medium"
  },
  {
    "name": "Tshikapa",
    "country": "Democratic Republic of the Congo",
    "lat": -6.4166666666667,
    "lng": 20.8,
    "population": 1006387,
    "difficulty": "hard"
  },
  {
    "name": "Marrakesh",
    "country": "Morocco",
    "lat": 31.62947,
    "lng": -7.98108,
    "population": 1002697,
    "difficulty": "medium"
  },
  {
    "name": "Kota",
    "country": "India",
    "lat": 25.18,
    "lng": 75.83,
    "population": 1001694,
    "difficulty": "hard"
  },
  {
    "name": "Bareilly",
    "country": "India",
    "lat": 28.364,
    "lng": 79.415,
    "population": 1000000,
    "difficulty": "hard"
  },
  {
    "name": "Guatemala City",
    "country": "Guatemala",
    "lat": 14.641666666667,
    "lng": -90.513333333333,
    "population": 994938,
    "difficulty": "medium"
  },
  {
    "name": "Lilongwe",
    "country": "Malawi",
    "lat": -13.96692,
    "lng": 33.78725,
    "population": 989318,
    "difficulty": "hard"
  },
  {
    "name": "Port-au-Prince",
    "country": "Haiti",
    "lat": 18.546944444444,
    "lng": -72.340277777778,
    "population": 987310,
    "difficulty": "medium"
  },
  {
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.329444444444,
    "lng": 18.068611111111,
    "population": 984748,
    "difficulty": "easy"
  },
  {
    "name": "Chiba",
    "country": "Japan",
    "lat": 35.607277777778,
    "lng": 140.10636111111,
    "population": 975014,
    "difficulty": "medium"
  },
  {
    "name": "Kirkuk",
    "country": "Iraq",
    "lat": 35.466666666667,
    "lng": 44.4,
    "population": 975000,
    "difficulty": "medium"
  },
  {
    "name": "Dnipro",
    "country": "Ukraine",
    "lat": 48.4675,
    "lng": 35.04,
    "population": 968502,
    "difficulty": "easy"
  },
  {
    "name": "Cebu City",
    "country": "Philippines",
    "lat": 10.293,
    "lng": 123.902,
    "population": 965332,
    "difficulty": "hard"
  },
  {
    "name": "Asmara",
    "country": "Eritrea",
    "lat": 15.333333333333,
    "lng": 38.916666666667,
    "population": 963000,
    "difficulty": "hard"
  },
  {
    "name": "Campo Grande",
    "country": "Brazil",
    "lat": -20.468611111111,
    "lng": -54.622222222222,
    "population": 962883,
    "difficulty": "hard"
  },
  {
    "name": "Austin",
    "country": "United States",
    "lat": 30.3,
    "lng": -97.733333333333,
    "population": 961855,
    "difficulty": "easy"
  },
  {
    "name": "Coimbatore",
    "country": "India",
    "lat": 11.000833333333,
    "lng": 76.963333333333,
    "population": 959823,
    "difficulty": "hard"
  },
  {
    "name": "Solapur",
    "country": "India",
    "lat": 17.670277777778,
    "lng": 75.901111111111,
    "population": 951558,
    "difficulty": "hard"
  },
  {
    "name": "Freetown",
    "country": "Sierra Leone",
    "lat": 8.4872222222222,
    "lng": -13.235555555556,
    "population": 951000,
    "difficulty": "hard"
  },
  {
    "name": "Jacksonville",
    "country": "United States",
    "lat": 30.316666666667,
    "lng": -81.65,
    "population": 949611,
    "difficulty": "easy"
  },
  {
    "name": "Dushanbe",
    "country": "Tajikistan",
    "lat": 38.573055555556,
    "lng": 68.786388888889,
    "population": 948251,
    "difficulty": "hard"
  },
  {
    "name": "Kermanshah",
    "country": "Iran",
    "lat": 34.316666666667,
    "lng": 47.068611111111,
    "population": 946651,
    "difficulty": "hard"
  },
  {
    "name": "Salé",
    "country": "Morocco",
    "lat": 34.05,
    "lng": -6.816667,
    "population": 945101,
    "difficulty": "hard"
  },
  {
    "name": "Kingston",
    "country": "Jamaica",
    "lat": 17.971388888889,
    "lng": -76.793055555556,
    "population": 937700,
    "difficulty": "medium"
  },
  {
    "name": "Managua",
    "country": "Nicaragua",
    "lat": 12.154680555556,
    "lng": -86.273725,
    "population": 937489,
    "difficulty": "hard"
  },
  {
    "name": "Jerusalem",
    "country": "Israel",
    "lat": 31.778888888889,
    "lng": 35.225555555556,
    "population": 936425,
    "difficulty": "easy"
  },
  {
    "name": "Kitakyūshū-shi",
    "country": "Japan",
    "lat": 33.883416666667,
    "lng": 130.87519444444,
    "population": 935084,
    "difficulty": "hard"
  },
  {
    "name": "Aguascalientes",
    "country": "Mexico",
    "lat": 21.880833333333,
    "lng": -102.29611111111,
    "population": 934424,
    "difficulty": "hard"
  },
  {
    "name": "Khulna",
    "country": "Bangladesh",
    "lat": 22.816666666667,
    "lng": 89.55,
    "population": 928891,
    "difficulty": "hard"
  },
  {
    "name": "Chihuahua",
    "country": "Mexico",
    "lat": 28.636944444444,
    "lng": -106.07694444444,
    "population": 925762,
    "difficulty": "medium"
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.366666666667,
    "lng": 4.8833333333333,
    "population": 921468,
    "difficulty": "easy"
  },
  {
    "name": "Trujillo",
    "country": "Peru",
    "lat": -8.1119444444444,
    "lng": -79.028888888889,
    "population": 919899,
    "difficulty": "hard"
  },
  {
    "name": "Fort Worth",
    "country": "United States",
    "lat": 32.756388888889,
    "lng": -97.3325,
    "population": 918915,
    "difficulty": "easy"
  },
  {
    "name": "Tiruchirappalli",
    "country": "India",
    "lat": 10.826944444444,
    "lng": 78.692777777778,
    "population": 916857,
    "difficulty": "hard"
  },
  {
    "name": "Cartagena",
    "country": "Colombia",
    "lat": 10.423611111111,
    "lng": -75.525277777778,
    "population": 914552,
    "difficulty": "medium"
  },
  {
    "name": "Naples",
    "country": "Italy",
    "lat": 40.835833333333,
    "lng": 14.248611111111,
    "population": 913462,
    "difficulty": "easy"
  },
  {
    "name": "Owerri",
    "country": "Nigeria",
    "lat": 5.4833333333333,
    "lng": 7.0333333333333,
    "population": 908109,
    "difficulty": "hard"
  },
  {
    "name": "Columbus",
    "country": "United States",
    "lat": 39.962222222222,
    "lng": -83.000555555556,
    "population": 905748,
    "difficulty": "easy"
  },
  {
    "name": "Bobo-Dioulasso",
    "country": "Burkina Faso",
    "lat": 11.183333333333,
    "lng": -4.2833333333333,
    "population": 903887,
    "difficulty": "hard"
  },
  {
    "name": "Lubango",
    "country": "Angola",
    "lat": -14.916666666667,
    "lng": 13.5,
    "population": 903564,
    "difficulty": "hard"
  },
  {
    "name": "Dammam",
    "country": "Saudi Arabia",
    "lat": 26.433333333333,
    "lng": 50.1,
    "population": 903312,
    "difficulty": "hard"
  },
  {
    "name": "Donetsk",
    "country": "Ukraine",
    "lat": 48.015833333333,
    "lng": 37.802777777778,
    "population": 901645,
    "difficulty": "easy"
  },
  {
    "name": "Libreville",
    "country": "Gabon",
    "lat": 0.40777777777778,
    "lng": 9.4402777777778,
    "population": 899000,
    "difficulty": "hard"
  },
  {
    "name": "Mérida",
    "country": "Mexico",
    "lat": 20.97,
    "lng": -89.62,
    "population": 892363,
    "difficulty": "hard"
  },
  {
    "name": "Bangui",
    "country": "Central African Republic",
    "lat": 4.37325,
    "lng": 18.562833333333,
    "population": 889231,
    "difficulty": "hard"
  },
  {
    "name": "Abeokuta",
    "country": "Nigeria",
    "lat": 7.15,
    "lng": 3.35,
    "population": 888924,
    "difficulty": "hard"
  },
  {
    "name": "Cancun",
    "country": "Mexico",
    "lat": 21.161416111111,
    "lng": -86.824811111111,
    "population": 888797,
    "difficulty": "easy"
  },
  {
    "name": "Moradabad",
    "country": "India",
    "lat": 28.838888888889,
    "lng": 78.776944444444,
    "population": 887871,
    "difficulty": "hard"
  },
  {
    "name": "Indianapolis",
    "country": "United States",
    "lat": 39.768611111111,
    "lng": -86.158055555556,
    "population": 887642,
    "difficulty": "easy"
  },
  {
    "name": "Marseille",
    "country": "France",
    "lat": 43.296666666667,
    "lng": 5.3763888888889,
    "population": 886040,
    "difficulty": "easy"
  },
  {
    "name": "Tabuk",
    "country": "Saudi Arabia",
    "lat": 28.397222222222,
    "lng": 36.578888888889,
    "population": 886036,
    "difficulty": "hard"
  },
  {
    "name": "Sulaymaniyah",
    "country": "Iraq",
    "lat": 35.55,
    "lng": 45.433333333333,
    "population": 878146,
    "difficulty": "hard"
  },
  {
    "name": "Klang",
    "country": "Malaysia",
    "lat": 3.0333333333333,
    "lng": 101.45,
    "population": 878000,
    "difficulty": "hard"
  },
  {
    "name": "Gurgaon",
    "country": "India",
    "lat": 28.466666666667,
    "lng": 77.033333333333,
    "population": 876824,
    "difficulty": "hard"
  },
  {
    "name": "Charlotte",
    "country": "United States",
    "lat": 35.226944444444,
    "lng": -80.843333333333,
    "population": 874579,
    "difficulty": "easy"
  },
  {
    "name": "Ramadi",
    "country": "Iraq",
    "lat": 33.425833333333,
    "lng": 43.299166666667,
    "population": 874543,
    "difficulty": "hard"
  },
  {
    "name": "Aligarh",
    "country": "India",
    "lat": 27.88,
    "lng": 78.08,
    "population": 874408,
    "difficulty": "hard"
  },
  {
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.7775,
    "lng": -122.41638888889,
    "population": 873965,
    "difficulty": "easy"
  },
  {
    "name": "Barinas",
    "country": "Venezuela",
    "lat": 8.6333333333333,
    "lng": -70.216666666667,
    "population": 873962,
    "difficulty": "hard"
  },
  {
    "name": "Jalandhar",
    "country": "India",
    "lat": 31.325555555556,
    "lng": 75.579166666667,
    "population": 873725,
    "difficulty": "hard"
  },
  {
    "name": "Tyumen",
    "country": "Russia",
    "lat": 57.15,
    "lng": 65.533333333333,
    "population": 872077,
    "difficulty": "hard"
  },
  {
    "name": "Eskişehir",
    "country": "Turkey",
    "lat": 39.776666666667,
    "lng": 30.520555555556,
    "population": 871187,
    "difficulty": "hard"
  },
  {
    "name": "Teresina",
    "country": "Brazil",
    "lat": -5.0902777777778,
    "lng": -42.816666666667,
    "population": 868075,
    "difficulty": "hard"
  },
  {
    "name": "Ipoh",
    "country": "Malaysia",
    "lat": 4.6,
    "lng": 101.07,
    "population": 866772,
    "difficulty": "hard"
  },
  {
    "name": "Saltillo",
    "country": "Mexico",
    "lat": 25.423055555556,
    "lng": -100.99194444444,
    "population": 864431,
    "difficulty": "hard"
  },
  {
    "name": "Hermosillo",
    "country": "Mexico",
    "lat": 29.075,
    "lng": -110.95833333333,
    "population": 855563,
    "difficulty": "hard"
  },
  {
    "name": "Mexicali",
    "country": "Mexico",
    "lat": 32.636,
    "lng": -115.4759,
    "population": 854186,
    "difficulty": "medium"
  },
  {
    "name": "Cheongju",
    "country": "South Korea",
    "lat": 36.637222222222,
    "lng": 127.48972222222,
    "population": 848000,
    "difficulty": "hard"
  },
  {
    "name": "Akure",
    "country": "Nigeria",
    "lat": 7.25,
    "lng": 5.195,
    "population": 847903,
    "difficulty": "hard"
  },
  {
    "name": "Ilorin",
    "country": "Nigeria",
    "lat": 8.5,
    "lng": 4.55,
    "population": 847582,
    "difficulty": "hard"
  },
  {
    "name": "Erbil",
    "country": "Iraq",
    "lat": 36.191111111111,
    "lng": 44.009444444444,
    "population": 846000,
    "difficulty": "medium"
  },
  {
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.71,
    "lng": 85.32,
    "population": 845767,
    "difficulty": "medium"
  },
  {
    "name": "Huambo",
    "country": "Angola",
    "lat": -12.766666666667,
    "lng": 15.733333333333,
    "population": 844000,
    "difficulty": "hard"
  },
  {
    "name": "El Alto",
    "country": "Bolivia",
    "lat": -16.504722222222,
    "lng": -68.163333333333,
    "population": 842378,
    "difficulty": "hard"
  },
  {
    "name": "Turin",
    "country": "Italy",
    "lat": 45.079166666667,
    "lng": 7.6761111111111,
    "population": 841600,
    "difficulty": "easy"
  },
  {
    "name": "Saratov",
    "country": "Russia",
    "lat": 51.53,
    "lng": 46.035,
    "population": 838042,
    "difficulty": "hard"
  },
  {
    "name": "Bhubaneswar",
    "country": "India",
    "lat": 20.295,
    "lng": 85.825,
    "population": 837737,
    "difficulty": "hard"
  },
  {
    "name": "Buffalo",
    "country": "South Africa",
    "lat": -32.983333333333,
    "lng": 27.866666666667,
    "population": 834997,
    "difficulty": "hard"
  },
  {
    "name": "João Pessoa",
    "country": "Brazil",
    "lat": -7.12,
    "lng": -34.88,
    "population": 833932,
    "difficulty": "hard"
  },
  {
    "name": "Trabzon",
    "country": "Turkey",
    "lat": 41.005,
    "lng": 39.7225,
    "population": 824352,
    "difficulty": "hard"
  },
  {
    "name": "Culiacán",
    "country": "Mexico",
    "lat": 24.790277777778,
    "lng": -107.38777777778,
    "population": 808416,
    "difficulty": "medium"
  },
  {
    "name": "Cúcuta",
    "country": "Colombia",
    "lat": 7.9075,
    "lng": -72.504722222222,
    "population": 806378,
    "difficulty": "hard"
  },
  {
    "name": "Kraków",
    "country": "Poland",
    "lat": 50.061388888889,
    "lng": 19.937222222222,
    "population": 804237,
    "difficulty": "easy"
  },
  {
    "name": "Oran",
    "country": "Algeria",
    "lat": 35.696944444444,
    "lng": -0.63305555555556,
    "population": 803329,
    "difficulty": "medium"
  },
  {
    "name": "Bandar Lampung",
    "country": "Indonesia",
    "lat": -5.4291694444444,
    "lng": 105.26111111111,
    "population": 800348,
    "difficulty": "hard"
  },
  {
    "name": "Blantyre",
    "country": "Malawi",
    "lat": -15.786111111111,
    "lng": 35.005833333333,
    "population": 800264,
    "difficulty": "hard"
  },
  {
    "name": "Santiago de Querétaro",
    "country": "Mexico",
    "lat": 20.588055555556,
    "lng": -100.38805555556,
    "population": 794789,
    "difficulty": "hard"
  },
  {
    "name": "George Town",
    "country": "Malaysia",
    "lat": 5.4111111111111,
    "lng": 100.33555555556,
    "population": 794313,
    "difficulty": "medium"
  },
  {
    "name": "Port Said",
    "country": "Egypt",
    "lat": 31.2625,
    "lng": 32.306111111111,
    "population": 791749,
    "difficulty": "medium"
  },
  {
    "name": "Niigata",
    "country": "Japan",
    "lat": 37.916194444444,
    "lng": 139.03638888889,
    "population": 790646,
    "difficulty": "hard"
  },
  {
    "name": "Hamamatsu",
    "country": "Japan",
    "lat": 34.710888888889,
    "lng": 137.72619444444,
    "population": 788211,
    "difficulty": "hard"
  },
  {
    "name": "Mangaung",
    "country": "South Africa",
    "lat": -29.15627,
    "lng": 26.35116,
    "population": 787803,
    "difficulty": "hard"
  },
  {
    "name": "Goma",
    "country": "Democratic Republic of the Congo",
    "lat": -1.6794444444444,
    "lng": 29.233611111111,
    "population": 781875,
    "difficulty": "hard"
  },
  {
    "name": "Frankfurt",
    "country": "Germany",
    "lat": 50.110555555556,
    "lng": 8.6822222222222,
    "population": 775790,
    "difficulty": "easy"
  },
  {
    "name": "Homs",
    "country": "Syria",
    "lat": 34.733333333333,
    "lng": 36.716666666667,
    "population": 775404,
    "difficulty": "medium"
  },
  {
    "name": "San Luis Potosí",
    "country": "Mexico",
    "lat": 22.149722222222,
    "lng": -100.975,
    "population": 772828,
    "difficulty": "hard"
  },
  {
    "name": "Valencia",
    "country": "Spain",
    "lat": 39.45612,
    "lng": -0.35457,
    "population": 769128,
    "difficulty": "easy"
  },
  {
    "name": "Hamhung",
    "country": "North Korea",
    "lat": 39.916666666667,
    "lng": 127.53333333333,
    "population": 768551,
    "difficulty": "hard"
  },
  {
    "name": "Erzurum",
    "country": "Turkey",
    "lat": 39.909722222222,
    "lng": 41.275555555556,
    "population": 767848,
    "difficulty": "hard"
  },
  {
    "name": "Zagreb",
    "country": "Croatia",
    "lat": 45.813055555556,
    "lng": 15.977222222222,
    "population": 767131,
    "difficulty": "easy"
  },
  {
    "name": "Al Ain",
    "country": "United Arab Emirates",
    "lat": 24.2075,
    "lng": 55.744722222222,
    "population": 766936,
    "difficulty": "hard"
  },
  {
    "name": "Bahawalpur",
    "country": "Pakistan",
    "lat": 29.395555555556,
    "lng": 71.672222222222,
    "population": 762111,
    "difficulty": "hard"
  },
  {
    "name": "Uberlândia",
    "country": "Brazil",
    "lat": -18.918888888889,
    "lng": -48.276944444444,
    "population": 761835,
    "difficulty": "hard"
  },
  {
    "name": "Kaduna",
    "country": "Nigeria",
    "lat": 10.5105,
    "lng": 7.4165,
    "population": 760084,
    "difficulty": "hard"
  },
  {
    "name": "Maturín",
    "country": "Venezuela",
    "lat": 9.7422774,
    "lng": -63.1888854,
    "population": 753254,
    "difficulty": "hard"
  },
  {
    "name": "Ciudad Guayana",
    "country": "Venezuela",
    "lat": 8.3223763,
    "lng": -62.6896622,
    "population": 751331,
    "difficulty": "hard"
  },
  {
    "name": "Natal",
    "country": "Brazil",
    "lat": -5.795,
    "lng": -35.208888888889,
    "population": 751300,
    "difficulty": "hard"
  },
  {
    "name": "Winnipeg",
    "country": "Canada",
    "lat": 49.895555555556,
    "lng": -97.138611111111,
    "population": 749607,
    "difficulty": "medium"
  },
  {
    "name": "Dasmariñas",
    "country": "Philippines",
    "lat": 14.329444444444,
    "lng": 120.93666666667,
    "population": 744511,
    "difficulty": "hard"
  },
  {
    "name": "Thiruvananthapuram",
    "country": "India",
    "lat": 8.4875,
    "lng": 76.9525,
    "population": 743691,
    "difficulty": "hard"
  },
  {
    "name": "Nampula",
    "country": "Mozambique",
    "lat": -15.116666666667,
    "lng": 39.266666666667,
    "population": 743000,
    "difficulty": "hard"
  },
  {
    "name": "Cagayan de Oro",
    "country": "Philippines",
    "lat": 8.4833333333333,
    "lng": 124.65,
    "population": 741617,
    "difficulty": "hard"
  },
  {
    "name": "Bouaké",
    "country": "Ivory Coast",
    "lat": 7.68333,
    "lng": -5.03306,
    "population": 740000,
    "difficulty": "hard"
  },
  {
    "name": "Cabinda",
    "country": "Angola",
    "lat": -5.566667,
    "lng": 12.2,
    "population": 739182,
    "difficulty": "hard"
  },
  {
    "name": "Kumamoto",
    "country": "Japan",
    "lat": 32.803,
    "lng": 130.70786111111,
    "population": 738385,
    "difficulty": "hard"
  },
  {
    "name": "São José dos Campos",
    "country": "Brazil",
    "lat": -23.178888888889,
    "lng": -45.886944444444,
    "population": 737310,
    "difficulty": "hard"
  },
  {
    "name": "Seattle",
    "country": "United States",
    "lat": 47.605,
    "lng": -122.33,
    "population": 737015,
    "difficulty": "easy"
  },
  {
    "name": "Urmia",
    "country": "Iran",
    "lat": 37.548611111111,
    "lng": 45.0675,
    "population": 736224,
    "difficulty": "hard"
  },
  {
    "name": "Ribeirão Preto",
    "country": "Brazil",
    "lat": -21.1776315,
    "lng": -47.8100983,
    "population": 731639,
    "difficulty": "hard"
  },
  {
    "name": "Osogbo",
    "country": "Nigeria",
    "lat": 7.7597222222222,
    "lng": 4.5761111111111,
    "population": 731000,
    "difficulty": "hard"
  },
  {
    "name": "Tamale",
    "country": "Ghana",
    "lat": 9.4075,
    "lng": -0.85333333333333,
    "population": 729768,
    "difficulty": "hard"
  },
  {
    "name": "Sagamihara",
    "country": "Japan",
    "lat": 35.571416666667,
    "lng": 139.37313888889,
    "population": 725696,
    "difficulty": "hard"
  },
  {
    "name": "Najaf",
    "country": "Iraq",
    "lat": 32.028951,
    "lng": 44.339621,
    "population": 724700,
    "difficulty": "medium"
  },
  {
    "name": "Sorocaba",
    "country": "Brazil",
    "lat": -23.501944444444,
    "lng": -47.457777777778,
    "population": 723574,
    "difficulty": "hard"
  },
  {
    "name": "General Santos",
    "country": "Philippines",
    "lat": 6.1166666666667,
    "lng": 125.16666666667,
    "population": 722059,
    "difficulty": "hard"
  },
  {
    "name": "Okayama",
    "country": "Japan",
    "lat": 34.655111111111,
    "lng": 133.91958333333,
    "population": 720043,
    "difficulty": "hard"
  },
  {
    "name": "San Pedro Sula",
    "country": "Honduras",
    "lat": 15.505322222222,
    "lng": -88.025083333333,
    "population": 719064,
    "difficulty": "hard"
  },
  {
    "name": "Oslo",
    "country": "Norway",
    "lat": 59.913333333333,
    "lng": 10.738888888889,
    "population": 717710,
    "difficulty": "easy"
  },
  {
    "name": "Lviv",
    "country": "Ukraine",
    "lat": 49.8425,
    "lng": 24.032222222222,
    "population": 717273,
    "difficulty": "medium"
  },
  {
    "name": "Suez",
    "country": "Egypt",
    "lat": 29.966666666667,
    "lng": 32.533333333333,
    "population": 716458,
    "difficulty": "easy"
  },
  {
    "name": "Denver",
    "country": "United States",
    "lat": 39.739166666667,
    "lng": -104.98472222222,
    "population": 715522,
    "difficulty": "easy"
  },
  {
    "name": "Zaporizhzhia",
    "country": "Ukraine",
    "lat": 47.85,
    "lng": 35.1175,
    "population": 710052,
    "difficulty": "easy"
  },
  {
    "name": "Zanzibar City",
    "country": "Tanzania",
    "lat": -6.1666666666667,
    "lng": 39.2,
    "population": 709809,
    "difficulty": "medium"
  },
  {
    "name": "Bhiwandi",
    "country": "India",
    "lat": 19.3,
    "lng": 73.066666666667,
    "population": 709665,
    "difficulty": "hard"
  },
  {
    "name": "Latakia",
    "country": "Syria",
    "lat": 35.52,
    "lng": 35.778055555556,
    "population": 709000,
    "difficulty": "medium"
  },
  {
    "name": "Bukavu",
    "country": "Democratic Republic of the Congo",
    "lat": -2.4908333333333,
    "lng": 28.842777777778,
    "population": 707053,
    "difficulty": "hard"
  },
  {
    "name": "Mwanza",
    "country": "Tanzania",
    "lat": -2.5166666666667,
    "lng": 32.9,
    "population": 706453,
    "difficulty": "hard"
  },
  {
    "name": "Saharanpur",
    "country": "India",
    "lat": 29.964,
    "lng": 77.546,
    "population": 705478,
    "difficulty": "hard"
  },
  {
    "name": "Warangal",
    "country": "India",
    "lat": 17.975555555556,
    "lng": 79.601111111111,
    "population": 704570,
    "difficulty": "hard"
  },
  {
    "name": "Jeju",
    "country": "South Korea",
    "lat": 33.509722222222,
    "lng": 126.52194444444,
    "population": 698358,
    "difficulty": "medium"
  },
  {
    "name": "Hama",
    "country": "Syria",
    "lat": 35.135,
    "lng": 36.75,
    "population": 696863,
    "difficulty": "hard"
  },
  {
    "name": "Bauchi",
    "country": "Nigeria",
    "lat": 10.315833333333,
    "lng": 9.8441666666667,
    "population": 693700,
    "difficulty": "hard"
  },
  {
    "name": "Salem",
    "country": "India",
    "lat": 11.65,
    "lng": 78.166666666667,
    "population": 693236,
    "difficulty": "hard"
  },
  {
    "name": "Bremen",
    "country": "Germany",
    "lat": 53.133333333333,
    "lng": 8.7333333333333,
    "population": 693204,
    "difficulty": "easy"
  },
  {
    "name": "Cuiabá",
    "country": "Brazil",
    "lat": -15.595833333333,
    "lng": -56.096944444444,
    "population": 691875,
    "difficulty": "hard"
  },
  {
    "name": "Torreón",
    "country": "Mexico",
    "lat": 25.54389,
    "lng": -103.41898,
    "population": 690193,
    "difficulty": "hard"
  },
  {
    "name": "Karbala",
    "country": "Iraq",
    "lat": 32.616666666667,
    "lng": 44.033333333333,
    "population": 690100,
    "difficulty": "medium"
  },
  {
    "name": "Washington, D.C.",
    "country": "United States",
    "lat": 38.895,
    "lng": -77.036666666667,
    "population": 689545,
    "difficulty": "easy"
  },
  {
    "name": "Nashville",
    "country": "United States",
    "lat": 36.162222222222,
    "lng": -86.774444444444,
    "population": 689447,
    "difficulty": "easy"
  },
  {
    "name": "Helsinki",
    "country": "Finland",
    "lat": 60.170833333333,
    "lng": 24.9375,
    "population": 686595,
    "difficulty": "easy"
  },
  {
    "name": "Shizuoka",
    "country": "Japan",
    "lat": 34.975555555556,
    "lng": 138.3825,
    "population": 685589,
    "difficulty": "hard"
  },
  {
    "name": "Seville",
    "country": "Spain",
    "lat": 37.38620512,
    "lng": -5.99251368,
    "population": 684025,
    "difficulty": "easy"
  },
  {
    "name": "Oklahoma City",
    "country": "United States",
    "lat": 35.482222222222,
    "lng": -97.535277777778,
    "population": 681054,
    "difficulty": "easy"
  },
  {
    "name": "Rasht",
    "country": "Iran",
    "lat": 37.276111111111,
    "lng": 49.588611111111,
    "population": 679995,
    "difficulty": "hard"
  },
  {
    "name": "Kochi",
    "country": "India",
    "lat": 9.9666666666667,
    "lng": 76.283333333333,
    "population": 677381,
    "difficulty": "medium"
  },
  {
    "name": "Boston",
    "country": "United States",
    "lat": 42.360277777778,
    "lng": -71.057777777778,
    "population": 675647,
    "difficulty": "easy"
  },
  {
    "name": "Gothenburg",
    "country": "Sweden",
    "lat": 57.7075,
    "lng": 11.9675,
    "population": 674529,
    "difficulty": "medium"
  },
  {
    "name": "Wrocław",
    "country": "Poland",
    "lat": 51.11,
    "lng": 17.0325,
    "population": 673531,
    "difficulty": "hard"
  },
  {
    "name": "Acapulco de Juárez",
    "country": "Mexico",
    "lat": 16.8628695,
    "lng": -99.8870087,
    "population": 673478,
    "difficulty": "medium"
  },
  {
    "name": "Gorakhpur",
    "country": "India",
    "lat": 26.761111111111,
    "lng": 83.366666666667,
    "population": 673446,
    "difficulty": "hard"
  },
  {
    "name": "Chongjin",
    "country": "North Korea",
    "lat": 41.783333333333,
    "lng": 129.78333333333,
    "population": 667929,
    "difficulty": "hard"
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": 55.676111111111,
    "lng": 12.568888888889,
    "population": 667099,
    "difficulty": "easy"
  },
  {
    "name": "Zaragoza",
    "country": "Spain",
    "lat": 41.65645655,
    "lng": -0.87928652,
    "population": 666880,
    "difficulty": "medium"
  },
  {
    "name": "Bulawayo",
    "country": "Zimbabwe",
    "lat": -20.166666666667,
    "lng": 28.566666666667,
    "population": 665940,
    "difficulty": "hard"
  },
  {
    "name": "Joinville",
    "country": "Brazil",
    "lat": -26.303888888889,
    "lng": -48.845833333333,
    "population": 664541,
    "difficulty": "hard"
  },
  {
    "name": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.92,
    "lng": 4.48,
    "population": 664311,
    "difficulty": "easy"
  },
  {
    "name": "Villavicencio",
    "country": "Colombia",
    "lat": 4.1425,
    "lng": -73.629444444444,
    "population": 664148,
    "difficulty": "hard"
  },
  {
    "name": "Tolyatti",
    "country": "Russia",
    "lat": 53.516666666667,
    "lng": 49.416666666667,
    "population": 662683,
    "difficulty": "hard"
  },
  {
    "name": "Makhachkala",
    "country": "Russia",
    "lat": 42.9825,
    "lng": 47.505,
    "population": 662660,
    "difficulty": "hard"
  },
  {
    "name": "Vancouver",
    "country": "Canada",
    "lat": 49.260833333333,
    "lng": -123.11388888889,
    "population": 662248,
    "difficulty": "easy"
  },
  {
    "name": "Feira de Santana",
    "country": "Brazil",
    "lat": -12.266944444444,
    "lng": -38.966944444444,
    "population": 660806,
    "difficulty": "hard"
  },
  {
    "name": "Jalingo",
    "country": "Nigeria",
    "lat": 8.9195,
    "lng": 11.32642,
    "population": 660213,
    "difficulty": "hard"
  },
  {
    "name": "Sargodha",
    "country": "Pakistan",
    "lat": 32.083611111111,
    "lng": 72.671111111111,
    "population": 659862,
    "difficulty": "hard"
  },
  {
    "name": "Bujumbura",
    "country": "Burundi",
    "lat": -3.3825,
    "lng": 29.361111111111,
    "population": 658859,
    "difficulty": "hard"
  },
  {
    "name": "Cheonan",
    "country": "South Korea",
    "lat": 36.81,
    "lng": 127.1475,
    "population": 656583,
    "difficulty": "hard"
  },
  {
    "name": "Brampton",
    "country": "Canada",
    "lat": 43.683333333333,
    "lng": -79.766666666667,
    "population": 656480,
    "difficulty": "medium"
  },
  {
    "name": "Victoria de Durango",
    "country": "Mexico",
    "lat": 24.022777777778,
    "lng": -104.65444444444,
    "population": 654876,
    "difficulty": "hard"
  },
  {
    "name": "Jeonju",
    "country": "South Korea",
    "lat": 35.821944444444,
    "lng": 127.14888888889,
    "population": 653055,
    "difficulty": "hard"
  },
  {
    "name": "Portland",
    "country": "United States",
    "lat": 45.516666666667,
    "lng": -122.66666666667,
    "population": 652503,
    "difficulty": "easy"
  },
  {
    "name": "Łódź",
    "country": "Poland",
    "lat": 51.75,
    "lng": 19.466666666667,
    "population": 648711,
    "difficulty": "hard"
  },
  {
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": 6.9266666666667,
    "lng": 79.860555555556,
    "population": 647557,
    "difficulty": "easy"
  },
  {
    "name": "Guntur",
    "country": "India",
    "lat": 16.3,
    "lng": 80.45,
    "population": 647508,
    "difficulty": "hard"
  },
  {
    "name": "Athens",
    "country": "Greece",
    "lat": 37.984166666667,
    "lng": 23.728055555556,
    "population": 643452,
    "difficulty": "easy"
  },
  {
    "name": "Las Vegas",
    "country": "United States",
    "lat": 36.167222222222,
    "lng": -115.14861111111,
    "population": 641903,
    "difficulty": "easy"
  },
  {
    "name": "Detroit",
    "country": "United States",
    "lat": 42.331666666667,
    "lng": -83.0475,
    "population": 639111,
    "difficulty": "easy"
  },
  {
    "name": "Stuttgart",
    "country": "Germany",
    "lat": 48.7775,
    "lng": 9.18,
    "population": 633484,
    "difficulty": "easy"
  },
  {
    "name": "Memphis",
    "country": "United States",
    "lat": 35.146111111111,
    "lng": -90.051944444444,
    "population": 633104,
    "difficulty": "easy"
  },
  {
    "name": "Aracaju",
    "country": "Brazil",
    "lat": -10.9167,
    "lng": -37.05,
    "population": 632744,
    "difficulty": "hard"
  },
  {
    "name": "Cochabamba",
    "country": "Bolivia",
    "lat": -17.3935419,
    "lng": -66.1570139,
    "population": 632013,
    "difficulty": "hard"
  },
  {
    "name": "Benghazi",
    "country": "Libya",
    "lat": 32.116666666667,
    "lng": 20.066666666667,
    "population": 631555,
    "difficulty": "medium"
  },
  {
    "name": "Düsseldorf",
    "country": "Germany",
    "lat": 51.225555555556,
    "lng": 6.7766666666667,
    "population": 631217,
    "difficulty": "medium"
  },
  {
    "name": "Palermo",
    "country": "Italy",
    "lat": 38.115658055556,
    "lng": 13.361261944444,
    "population": 630167,
    "difficulty": "easy"
  },
  {
    "name": "Glasgow",
    "country": "United Kingdom",
    "lat": 55.861111111111,
    "lng": -4.25,
    "population": 626410,
    "difficulty": "medium"
  },
  {
    "name": "Namangan",
    "country": "Uzbekistan",
    "lat": 40.995277777778,
    "lng": 71.6725,
    "population": 626120,
    "difficulty": "hard"
  },
  {
    "name": "Bhilai",
    "country": "India",
    "lat": 21.21,
    "lng": 81.38,
    "population": 625700,
    "difficulty": "hard"
  },
  {
    "name": "Kitwe",
    "country": "Zambia",
    "lat": -12.820833333333,
    "lng": 28.211944444444,
    "population": 625000,
    "difficulty": "hard"
  },
  {
    "name": "Mangaluru",
    "country": "India",
    "lat": 12.871666666667,
    "lng": 74.8425,
    "population": 623841,
    "difficulty": "hard"
  },
  {
    "name": "Barnaul",
    "country": "Russia",
    "lat": 53.356666666667,
    "lng": 83.787222222222,
    "population": 623057,
    "difficulty": "hard"
  },
  {
    "name": "Jos",
    "country": "Nigeria",
    "lat": 9.9333333333333,
    "lng": 8.8833333333333,
    "population": 622802,
    "difficulty": "hard"
  },
  {
    "name": "Mansoura",
    "country": "Egypt",
    "lat": 31.05,
    "lng": 31.383333333333,
    "population": 621953,
    "difficulty": "hard"
  },
  {
    "name": "Leipzig",
    "country": "Germany",
    "lat": 51.33962,
    "lng": 12.37129,
    "population": 619879,
    "difficulty": "medium"
  },
  {
    "name": "Al Hudaydah",
    "country": "Yemen",
    "lat": 14.802222222222,
    "lng": 42.951111111111,
    "population": 617871,
    "difficulty": "hard"
  },
  {
    "name": "Izhevsk",
    "country": "Russia",
    "lat": 56.85,
    "lng": 53.216666666667,
    "population": 616297,
    "difficulty": "hard"
  },
  {
    "name": "Khabarovsk",
    "country": "Russia",
    "lat": 48.483333333333,
    "lng": 135.06666666667,
    "population": 615600,
    "difficulty": "hard"
  },
  {
    "name": "Ta'izz",
    "country": "Yemen",
    "lat": 13.578888888889,
    "lng": 44.021944444444,
    "population": 615467,
    "difficulty": "hard"
  },
  {
    "name": "Bucaramanga",
    "country": "Colombia",
    "lat": 7.1186111111111,
    "lng": -73.116111111111,
    "population": 614860,
    "difficulty": "hard"
  },
  {
    "name": "Kandahar",
    "country": "Afghanistan",
    "lat": 31.62068,
    "lng": 65.71588,
    "population": 614254,
    "difficulty": "medium"
  },
  {
    "name": "Ulyanovsk",
    "country": "Russia",
    "lat": 54.316666666667,
    "lng": 48.366666666667,
    "population": 613334,
    "difficulty": "hard"
  },
  {
    "name": "Kuantan",
    "country": "Malaysia",
    "lat": 3.8166666666667,
    "lng": 103.33333333333,
    "population": 607778,
    "difficulty": "hard"
  },
  {
    "name": "Gold Coast",
    "country": "Australia",
    "lat": -28.016666666667,
    "lng": 153.4,
    "population": 607665,
    "difficulty": "medium"
  },
  {
    "name": "Irkutsk",
    "country": "Russia",
    "lat": 52.289166666667,
    "lng": 104.28,
    "population": 605708,
    "difficulty": "hard"
  },
  {
    "name": "Malanje",
    "country": "Angola",
    "lat": -9.54015,
    "lng": 16.34096,
    "population": 604215,
    "difficulty": "hard"
  },
  {
    "name": "Kryvyi Rih",
    "country": "Ukraine",
    "lat": 47.91,
    "lng": 33.39,
    "population": 603904,
    "difficulty": "hard"
  },
  {
    "name": "Djibouti City",
    "country": "Djibouti",
    "lat": 11.595,
    "lng": 43.148055555556,
    "population": 603900,
    "difficulty": "hard"
  },
  {
    "name": "Tunis",
    "country": "Tunisia",
    "lat": 36.800833333333,
    "lng": 10.18,
    "population": 602560,
    "difficulty": "easy"
  },
  {
    "name": "San Miguel de Tucumán",
    "country": "Argentina",
    "lat": -26.816666666667,
    "lng": -65.216666666667,
    "population": 601888,
    "difficulty": "hard"
  },
  {
    "name": "Meknes",
    "country": "Morocco",
    "lat": 33.883333333333,
    "lng": -5.55,
    "population": 601000,
    "difficulty": "hard"
  },
  {
    "name": "Dortmund",
    "country": "Germany",
    "lat": 51.513888888889,
    "lng": 7.4652777777778,
    "population": 595471,
    "difficulty": "medium"
  },
  {
    "name": "Riga",
    "country": "Latvia",
    "lat": 56.9475,
    "lng": 24.106944444444,
    "population": 595053,
    "difficulty": "medium"
  },
  {
    "name": "Salta",
    "country": "Argentina",
    "lat": -24.788333333333,
    "lng": -65.410555555556,
    "population": 594772,
    "difficulty": "hard"
  },
  {
    "name": "Kagoshima",
    "country": "Japan",
    "lat": 31.596805555556,
    "lng": 130.55713888889,
    "population": 593754,
    "difficulty": "hard"
  },
  {
    "name": "Mar del Plata",
    "country": "Argentina",
    "lat": -38.0,
    "lng": -57.55,
    "population": 593337,
    "difficulty": "hard"
  },
  {
    "name": "Irapuato",
    "country": "Mexico",
    "lat": 20.674166666667,
    "lng": -101.3475,
    "population": 592953,
    "difficulty": "hard"
  },
  {
    "name": "Dublin",
    "country": "Ireland",
    "lat": 53.349722222222,
    "lng": -6.2602777777778,
    "population": 592713,
    "difficulty": "easy"
  },
  {
    "name": "Sialkot",
    "country": "Pakistan",
    "lat": 32.5,
    "lng": 74.533333333333,
    "population": 591668,
    "difficulty": "hard"
  },
  {
    "name": "Vladivostok",
    "country": "Russia",
    "lat": 43.115,
    "lng": 131.88527777778,
    "population": 591628,
    "difficulty": "medium"
  },
  {
    "name": "Pereira",
    "country": "Colombia",
    "lat": 4.8142777777778,
    "lng": -75.694558333333,
    "population": 590554,
    "difficulty": "hard"
  },
  {
    "name": "Gaza City",
    "country": "Palestine",
    "lat": 31.5075,
    "lng": 34.459722222222,
    "population": 590481,
    "difficulty": "medium"
  },
  {
    "name": "Reynosa",
    "country": "Mexico",
    "lat": 26.092222222222,
    "lng": -98.277777777778,
    "population": 589466,
    "difficulty": "hard"
  },
  {
    "name": "Zahedan",
    "country": "Iran",
    "lat": 29.4928874,
    "lng": 60.8503017,
    "population": 587730,
    "difficulty": "hard"
  },
  {
    "name": "Florianópolis",
    "country": "Brazil",
    "lat": -27.593280555556,
    "lng": -48.553047222222,
    "population": 587486,
    "difficulty": "hard"
  },
  {
    "name": "Essen",
    "country": "Germany",
    "lat": 51.450833333333,
    "lng": 7.0130555555556,
    "population": 586608,
    "difficulty": "medium"
  },
  {
    "name": "Mbale",
    "country": "Uganda",
    "lat": 1.0711896,
    "lng": 34.1749506,
    "population": 586300,
    "difficulty": "hard"
  },
  {
    "name": "Baltimore",
    "country": "United States",
    "lat": 39.286388888889,
    "lng": -76.615,
    "population": 585708,
    "difficulty": "easy"
  },
  {
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": 54.687222222222,
    "lng": 25.28,
    "population": 581475,
    "difficulty": "medium"
  },
  {
    "name": "Londrina",
    "country": "Brazil",
    "lat": -23.31,
    "lng": -51.162777777778,
    "population": 581382,
    "difficulty": "hard"
  },
  {
    "name": "Ta'if",
    "country": "Saudi Arabia",
    "lat": 21.266666666667,
    "lng": 40.416666666667,
    "population": 579970,
    "difficulty": "hard"
  },
  {
    "name": "Port Sudan",
    "country": "Sudan",
    "lat": 19.615833333333,
    "lng": 37.216388888889,
    "population": 579942,
    "difficulty": "hard"
  },
  {
    "name": "Serra",
    "country": "Brazil",
    "lat": -20.128888888889,
    "lng": -40.307777777778,
    "population": 579720,
    "difficulty": "hard"
  },
  {
    "name": "Tuxtla Gutiérrez",
    "country": "Mexico",
    "lat": 16.753055555556,
    "lng": -93.115555555556,
    "population": 578830,
    "difficulty": "hard"
  },
  {
    "name": "Dehradun",
    "country": "India",
    "lat": 30.318,
    "lng": 78.029,
    "population": 578420,
    "difficulty": "hard"
  },
  {
    "name": "Milwaukee",
    "country": "United States",
    "lat": 43.05,
    "lng": -87.95,
    "population": 577222,
    "difficulty": "easy"
  },
  {
    "name": "Calamba",
    "country": "Philippines",
    "lat": 14.216666666667,
    "lng": 121.16666666667,
    "population": 575046,
    "difficulty": "hard"
  },
  {
    "name": "Kabinda",
    "country": "Democratic Republic of the Congo",
    "lat": -6.13333,
    "lng": 24.48333,
    "population": 572000,
    "difficulty": "hard"
  },
  {
    "name": "Hamilton",
    "country": "Canada",
    "lat": 43.256666666667,
    "lng": -79.869166666667,
    "population": 569353,
    "difficulty": "medium"
  },
  {
    "name": "Ciudad Bolívar",
    "country": "Venezuela",
    "lat": 8.1028532,
    "lng": -63.5469562,
    "population": 567953,
    "difficulty": "hard"
  },
  {
    "name": "Yaroslavl",
    "country": "Russia",
    "lat": 57.626388888889,
    "lng": 39.893333333333,
    "population": 567443,
    "difficulty": "hard"
  },
  {
    "name": "Chișinău",
    "country": "Moldova",
    "lat": 47.022777777778,
    "lng": 28.835277777778,
    "population": 567038,
    "difficulty": "hard"
  },
  {
    "name": "Durgapur",
    "country": "India",
    "lat": 23.55,
    "lng": 87.32,
    "population": 566517,
    "difficulty": "hard"
  },
  {
    "name": "Dresden",
    "country": "Germany",
    "lat": 51.0493286,
    "lng": 13.7381437,
    "population": 566222,
    "difficulty": "medium"
  },
  {
    "name": "Albuquerque",
    "country": "United States",
    "lat": 35.084444444444,
    "lng": -106.65027777778,
    "population": 564559,
    "difficulty": "easy"
  },
  {
    "name": "Asansol",
    "country": "India",
    "lat": 23.683333333333,
    "lng": 86.966666666667,
    "population": 563917,
    "difficulty": "hard"
  },
  {
    "name": "Asyut",
    "country": "Egypt",
    "lat": 27.186944444444,
    "lng": 31.171388888889,
    "population": 562061,
    "difficulty": "hard"
  },
  {
    "name": "Benguela",
    "country": "Angola",
    "lat": -12.55,
    "lng": 13.416666666667,
    "population": 561775,
    "difficulty": "hard"
  },
  {
    "name": "El-Obeid",
    "country": "Sudan",
    "lat": 13.183333333333,
    "lng": 30.216666666667,
    "population": 560471,
    "difficulty": "hard"
  },
  {
    "name": "Genoa",
    "country": "Italy",
    "lat": 44.407186111111,
    "lng": 8.9339833333333,
    "population": 558745,
    "difficulty": "easy"
  },
  {
    "name": "Ensenada",
    "country": "Mexico",
    "lat": 31.857777777778,
    "lng": -116.60583333333,
    "population": 557430,
    "difficulty": "medium"
  },
  {
    "name": "Herat",
    "country": "Afghanistan",
    "lat": 34.341944,
    "lng": 62.203056,
    "population": 556205,
    "difficulty": "medium"
  },
  {
    "name": "Hamadan",
    "country": "Iran",
    "lat": 34.8,
    "lng": 48.516666666667,
    "population": 554406,
    "difficulty": "hard"
  },
  {
    "name": "Chiclayo",
    "country": "Peru",
    "lat": -6.7716666666667,
    "lng": -79.838333333333,
    "population": 552508,
    "difficulty": "hard"
  },
  {
    "name": "Amravati",
    "country": "India",
    "lat": 20.933333333333,
    "lng": 77.75,
    "population": 549370,
    "difficulty": "hard"
  },
  {
    "name": "Porto Velho",
    "country": "Brazil",
    "lat": -8.7619444444444,
    "lng": -63.903888888889,
    "population": 548952,
    "difficulty": "hard"
  },
  {
    "name": "Naberezhnye Chelny",
    "country": "Russia",
    "lat": 55.714852,
    "lng": 52.3696525,
    "population": 548221,
    "difficulty": "hard"
  },
  {
    "name": "Hanover",
    "country": "Germany",
    "lat": 52.374444444444,
    "lng": 9.7386111111111,
    "population": 548186,
    "difficulty": "easy"
  },
  {
    "name": "Andijan",
    "country": "Uzbekistan",
    "lat": 40.781944444444,
    "lng": 72.344166666667,
    "population": 547800,
    "difficulty": "hard"
  },
  {
    "name": "Manchester",
    "country": "United Kingdom",
    "lat": 53.466666666667,
    "lng": -2.2333333333333,
    "population": 547627,
    "difficulty": "easy"
  },
  {
    "name": "Nellore",
    "country": "India",
    "lat": 14.433333333333,
    "lng": 79.966666666667,
    "population": 547621,
    "difficulty": "hard"
  },
  {
    "name": "Poznań",
    "country": "Poland",
    "lat": 52.408333333333,
    "lng": 16.933611111111,
    "population": 546859,
    "difficulty": "hard"
  },
  {
    "name": "Samarkand",
    "country": "Uzbekistan",
    "lat": 39.654722222222,
    "lng": 66.975833333333,
    "population": 546303,
    "difficulty": "medium"
  },
  {
    "name": "Ibagué",
    "country": "Colombia",
    "lat": 4.4377777777778,
    "lng": -75.200555555556,
    "population": 546003,
    "difficulty": "hard"
  },
  {
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.708042,
    "lng": -9.139016,
    "population": 545796,
    "difficulty": "easy"
  },
  {
    "name": "Tomsk",
    "country": "Russia",
    "lat": 56.488611111111,
    "lng": 84.952222222222,
    "population": 544566,
    "difficulty": "hard"
  },
  {
    "name": "Valledupar",
    "country": "Colombia",
    "lat": 10.460277777778,
    "lng": -73.259722222222,
    "population": 544134,
    "difficulty": "hard"
  },
  {
    "name": "Málaga",
    "country": "Spain",
    "lat": 36.72034267,
    "lng": -4.41997511,
    "population": 543392,
    "difficulty": "easy"
  },
  {
    "name": "Kemerovo",
    "country": "Russia",
    "lat": 55.333333333333,
    "lng": 86.066666666667,
    "population": 542928,
    "difficulty": "hard"
  },
  {
    "name": "Tucson",
    "country": "United States",
    "lat": 32.221666666667,
    "lng": -110.92638888889,
    "population": 542629,
    "difficulty": "easy"
  },
  {
    "name": "Ajmer",
    "country": "India",
    "lat": 26.468,
    "lng": 74.639,
    "population": 542321,
    "difficulty": "hard"
  },
  {
    "name": "Fresno",
    "country": "United States",
    "lat": 36.781666666667,
    "lng": -119.79222222222,
    "population": 542107,
    "difficulty": "easy"
  },
  {
    "name": "Matamoros",
    "country": "Mexico",
    "lat": 25.879722222222,
    "lng": -97.504166666667,
    "population": 541979,
    "difficulty": "hard"
  },
  {
    "name": "Nasiriyah",
    "country": "Iraq",
    "lat": 31.043888888889,
    "lng": 46.2575,
    "population": 541600,
    "difficulty": "medium"
  },
  {
    "name": "Hillah",
    "country": "Iraq",
    "lat": 32.483333333333,
    "lng": 44.433333333333,
    "population": 541034,
    "difficulty": "hard"
  },
  {
    "name": "Juiz de Fora",
    "country": "Brazil",
    "lat": -21.75,
    "lng": -43.35,
    "population": 540756,
    "difficulty": "hard"
  },
  {
    "name": "Sekondi-Takoradi",
    "country": "Ghana",
    "lat": 4.9166666666667,
    "lng": -1.7666666666667,
    "population": 539548,
    "difficulty": "hard"
  },
  {
    "name": "Agadir",
    "country": "Morocco",
    "lat": 30.421388888889,
    "lng": -9.5830555555556,
    "population": 538000,
    "difficulty": "hard"
  },
  {
    "name": "Kerman",
    "country": "Iran",
    "lat": 30.291111111111,
    "lng": 57.067777777778,
    "population": 537718,
    "difficulty": "hard"
  },
  {
    "name": "Orenburg",
    "country": "Russia",
    "lat": 51.766666666667,
    "lng": 55.1,
    "population": 536515,
    "difficulty": "hard"
  },
  {
    "name": "Leeds",
    "country": "United Kingdom",
    "lat": 53.7975,
    "lng": -1.5436111111111,
    "population": 536280,
    "difficulty": "medium"
  },
  {
    "name": "Kassala",
    "country": "Sudan",
    "lat": 15.45,
    "lng": 36.4,
    "population": 536009,
    "difficulty": "hard"
  },
  {
    "name": "Beira",
    "country": "Mozambique",
    "lat": -19.833333333333,
    "lng": 34.85,
    "population": 530604,
    "difficulty": "hard"
  },
  {
    "name": "Yazd",
    "country": "Iran",
    "lat": 31.897222222222,
    "lng": 54.3675,
    "population": 529673,
    "difficulty": "hard"
  },
  {
    "name": "Antwerp",
    "country": "Belgium",
    "lat": 51.221111111111,
    "lng": 4.3997222222222,
    "population": 529247,
    "difficulty": "easy"
  },
  {
    "name": "Touba",
    "country": "Senegal",
    "lat": 14.866666666667,
    "lng": -15.883333333333,
    "population": 529176,
    "difficulty": "hard"
  },
  {
    "name": "Bikaner",
    "country": "India",
    "lat": 28.018055555556,
    "lng": 73.316944444444,
    "population": 529007,
    "difficulty": "hard"
  },
  {
    "name": "Kosti",
    "country": "Sudan",
    "lat": 13.166666666667,
    "lng": 32.666666666667,
    "population": 528458,
    "difficulty": "hard"
  },
  {
    "name": "Ndola",
    "country": "Zambia",
    "lat": -12.968888888889,
    "lng": 28.6325,
    "population": 528330,
    "difficulty": "hard"
  },
  {
    "name": "Himeji",
    "country": "Japan",
    "lat": 34.815166666667,
    "lng": 134.68538888889,
    "population": 527596,
    "difficulty": "hard"
  },
  {
    "name": "Bandar Abbas",
    "country": "Iran",
    "lat": 27.186388888889,
    "lng": 56.280833333333,
    "population": 526648,
    "difficulty": "hard"
  },
  {
    "name": "Nuremberg",
    "country": "Germany",
    "lat": 49.453888888889,
    "lng": 11.0775,
    "population": 526091,
    "difficulty": "easy"
  },
  {
    "name": "Santa Teresa del Tuy",
    "country": "Venezuela",
    "lat": 10.233333333333,
    "lng": -66.65,
    "population": 525321,
    "difficulty": "hard"
  },
  {
    "name": "Sacramento",
    "country": "United States",
    "lat": 38.575277777778,
    "lng": -121.48611111111,
    "population": 524943,
    "difficulty": "easy"
  },
  {
    "name": "Caxias do Sul",
    "country": "Brazil",
    "lat": -29.167777777778,
    "lng": -51.178888888889,
    "population": 523716,
    "difficulty": "hard"
  },
  {
    "name": "Agartala",
    "country": "India",
    "lat": 23.833333333333,
    "lng": 91.266666666667,
    "population": 522613,
    "difficulty": "hard"
  },
  {
    "name": "Arak",
    "country": "Iran",
    "lat": 34.095,
    "lng": 49.698055555556,
    "population": 520944,
    "difficulty": "hard"
  },
  {
    "name": "Pohang",
    "country": "South Korea",
    "lat": 36.032222222222,
    "lng": 129.365,
    "population": 520305,
    "difficulty": "hard"
  },
  {
    "name": "Ryazan",
    "country": "Russia",
    "lat": 54.63,
    "lng": 39.7425,
    "population": 519315,
    "difficulty": "hard"
  },
  {
    "name": "Campos dos Goytacazes",
    "country": "Brazil",
    "lat": -21.753888888889,
    "lng": -41.323888888889,
    "population": 519259,
    "difficulty": "hard"
  },
  {
    "name": "Faiyum",
    "country": "Egypt",
    "lat": 29.3,
    "lng": 30.833333333333,
    "population": 519047,
    "difficulty": "hard"
  },
  {
    "name": "Utsunomiya",
    "country": "Japan",
    "lat": 36.555111111111,
    "lng": 139.88255555556,
    "population": 518197,
    "difficulty": "hard"
  },
  {
    "name": "Sheffield",
    "country": "United Kingdom",
    "lat": 53.380833333333,
    "lng": -1.4702777777778,
    "population": 518090,
    "difficulty": "medium"
  },
  {
    "name": "Karaganda",
    "country": "Kazakhstan",
    "lat": 49.8,
    "lng": 73.116666666667,
    "population": 515632,
    "difficulty": "hard"
  },
  {
    "name": "Ujjain",
    "country": "India",
    "lat": 23.182777777778,
    "lng": 75.777222222222,
    "population": 515215,
    "difficulty": "hard"
  },
  {
    "name": "Toulouse",
    "country": "France",
    "lat": 43.604444444444,
    "lng": 1.4433333333333,
    "population": 514819,
    "difficulty": "easy"
  },
  {
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.407222222222,
    "lng": -2.9916666666667,
    "population": 513441,
    "difficulty": "easy"
  },
  {
    "name": "Sodo",
    "country": "Ethiopia",
    "lat": 6.86,
    "lng": 37.76,
    "population": 512498,
    "difficulty": "hard"
  },
  {
    "name": "Amarah",
    "country": "Iraq",
    "lat": 31.833333333333,
    "lng": 47.15,
    "population": 511500,
    "difficulty": "hard"
  },
  {
    "name": "Kansas City",
    "country": "United States",
    "lat": 39.05,
    "lng": -94.583333333333,
    "population": 508090,
    "difficulty": "easy"
  },
  {
    "name": "Kenitra",
    "country": "Morocco",
    "lat": 34.25,
    "lng": -6.5833333333333,
    "population": 507736,
    "difficulty": "hard"
  },
  {
    "name": "Jhansi",
    "country": "India",
    "lat": 25.44862,
    "lng": 78.56962,
    "population": 507000,
    "difficulty": "hard"
  },
  {
    "name": "Matsuyama",
    "country": "Japan",
    "lat": 33.839166666667,
    "lng": 132.76563888889,
    "population": 506743,
    "difficulty": "hard"
  },
  {
    "name": "Oujda",
    "country": "Morocco",
    "lat": 34.686666666667,
    "lng": -1.9113888888889,
    "population": 506224,
    "difficulty": "hard"
  },
  {
    "name": "Santa Marta",
    "country": "Colombia",
    "lat": 11.236111111111,
    "lng": -74.201666666667,
    "population": 505915,
    "difficulty": "hard"
  },
  {
    "name": "São José do Rio Preto",
    "country": "Brazil",
    "lat": -20.82,
    "lng": -49.378888888889,
    "population": 504166,
    "difficulty": "hard"
  },
  {
    "name": "Jammu",
    "country": "India",
    "lat": 32.733333333333,
    "lng": 74.85,
    "population": 502197,
    "difficulty": "medium"
  },
  {
    "name": "Ile Ife",
    "country": "Nigeria",
    "lat": 7.4666666666667,
    "lng": 4.5666666666667,
    "population": 501952,
    "difficulty": "hard"
  },
  {
    "name": "Mazatlán",
    "country": "Mexico",
    "lat": 23.241388888889,
    "lng": -106.40972222222,
    "population": 501441,
    "difficulty": "hard"
  },
  {
    "name": "Zafarwal",
    "country": "Pakistan",
    "lat": 32.34631,
    "lng": 74.89987,
    "population": 501213,
    "difficulty": "hard"
  },
  {
    "name": "Gomel",
    "country": "Belarus",
    "lat": 52.441666666667,
    "lng": 30.983333333333,
    "population": 501193,
    "difficulty": "hard"
  },
  {
    "name": "Juba",
    "country": "South Sudan",
    "lat": 4.8538888888889,
    "lng": 31.5825,
    "population": 500088,
    "difficulty": "hard"
  },
  {
    "name": "Belas",
    "country": "Angola",
    "lat": -9.0583333333333,
    "lng": 13.153888888889,
    "population": 500000,
    "difficulty": "hard"
  },
  {
    "name": "10th of Ramadan",
    "country": "Egypt",
    "lat": 30.302222222222,
    "lng": 31.745555555556,
    "population": 500000,
    "difficulty": "hard"
  },
  {
    "name": "Ctesiphon",
    "country": "Iraq",
    "lat": 33.093611,
    "lng": 44.580833,
    "population": 500000,
    "difficulty": "hard"
  },
  {
    "name": "Sukkur",
    "country": "Pakistan",
    "lat": 27.699522222222,
    "lng": 68.867286111111,
    "population": 499900,
    "difficulty": "hard"
  },
  {
    "name": "Hsinchu City",
    "country": "Taiwan",
    "lat": 24.804722222222,
    "lng": 120.97138888889,
    "population": 499348,
    "difficulty": "hard"
  },
  {
    "name": "Atlanta",
    "country": "United States",
    "lat": 33.748888888889,
    "lng": -84.388055555556,
    "population": 498715,
    "difficulty": "easy"
  },
  {
    "name": "Paju",
    "country": "South Korea",
    "lat": 37.832777777778,
    "lng": 126.81694444444,
    "population": 497775,
    "difficulty": "hard"
  },
  {
    "name": "Cheboksary",
    "country": "Russia",
    "lat": 56.133333333333,
    "lng": 47.25,
    "population": 497061,
    "difficulty": "hard"
  },
  {
    "name": "Staten Island",
    "country": "United States",
    "lat": 40.571944444444,
    "lng": -74.146944444444,
    "population": 495747,
    "difficulty": "easy"
  },
  {
    "name": "Nyala",
    "country": "Sudan",
    "lat": 12.05,
    "lng": 24.883333333333,
    "population": 492984,
    "difficulty": "hard"
  },
  {
    "name": "Bissau",
    "country": "Guinea-Bissau",
    "lat": 11.86,
    "lng": -15.583333333333,
    "population": 492004,
    "difficulty": "hard"
  },
  {
    "name": "Kota Bharu",
    "country": "Malaysia",
    "lat": 6.1333333333333,
    "lng": 102.25,
    "population": 491237,
    "difficulty": "hard"
  },
  {
    "name": "Larkana",
    "country": "Pakistan",
    "lat": 27.56,
    "lng": 68.226388888889,
    "population": 490508,
    "difficulty": "hard"
  },
  {
    "name": "Vinh",
    "country": "Vietnam",
    "lat": 18.673333333333,
    "lng": 105.69222222222,
    "population": 490000,
    "difficulty": "hard"
  },
  {
    "name": "Kaliningrad",
    "country": "Russia",
    "lat": 54.716666666667,
    "lng": 20.5,
    "population": 488690,
    "difficulty": "hard"
  },
  {
    "name": "Belgaum",
    "country": "India",
    "lat": 15.856944444444,
    "lng": 74.504444444444,
    "population": 488157,
    "difficulty": "hard"
  },
  {
    "name": "Edinburgh",
    "country": "United Kingdom",
    "lat": 55.953333333333,
    "lng": -3.1891666666667,
    "population": 488050,
    "difficulty": "easy"
  },
  {
    "name": "Penza",
    "country": "Russia",
    "lat": 53.2,
    "lng": 45.0,
    "population": 487978,
    "difficulty": "hard"
  },
  {
    "name": "Gdańsk",
    "country": "Poland",
    "lat": 54.3482907,
    "lng": 18.6540233,
    "population": 487834,
    "difficulty": "medium"
  },
  {
    "name": "Omaha",
    "country": "United States",
    "lat": 41.258611111111,
    "lng": -95.9375,
    "population": 486051,
    "difficulty": "easy"
  },
  {
    "name": "Sevastopol",
    "country": "Russia",
    "lat": 44.605,
    "lng": 33.5225,
    "population": 485386,
    "difficulty": "medium"
  },
  {
    "name": "Vellore",
    "country": "India",
    "lat": 12.933333333333,
    "lng": 79.133333333333,
    "population": 484690,
    "difficulty": "hard"
  },
  {
    "name": "Angeles",
    "country": "Philippines",
    "lat": 15.147180555556,
    "lng": 120.58473333333,
    "population": 483452,
    "difficulty": "hard"
  },
  {
    "name": "Bafoussam",
    "country": "Cameroon",
    "lat": 5.4666666666667,
    "lng": 10.416666666667,
    "population": 480000,
    "difficulty": "hard"
  },
  {
    "name": "Jamnagar",
    "country": "India",
    "lat": 22.47,
    "lng": 70.07,
    "population": 479920,
    "difficulty": "hard"
  },
  {
    "name": "Sylhet",
    "country": "Bangladesh",
    "lat": 24.9,
    "lng": 91.866666666667,
    "population": 479837,
    "difficulty": "hard"
  },
  {
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": 48.144722222222,
    "lng": 17.112777777778,
    "population": 479389,
    "difficulty": "medium"
  },
  {
    "name": "Colorado Springs",
    "country": "United States",
    "lat": 38.863333333333,
    "lng": -104.79194444444,
    "population": 478961,
    "difficulty": "easy"
  },
  {
    "name": "Chiniot",
    "country": "Pakistan",
    "lat": 31.716666666667,
    "lng": 72.983333333333,
    "population": 477781,
    "difficulty": "hard"
  },
  {
    "name": "Oita",
    "country": "Japan",
    "lat": 33.239555555556,
    "lng": 131.60936111111,
    "population": 477186,
    "difficulty": "hard"
  },
  {
    "name": "Gaya",
    "country": "India",
    "lat": 24.75,
    "lng": 85.016666666667,
    "population": 474093,
    "difficulty": "hard"
  },
  {
    "name": "Iloilo City",
    "country": "Philippines",
    "lat": 10.716666666667,
    "lng": 122.56666666667,
    "population": 473728,
    "difficulty": "hard"
  },
  {
    "name": "Sheikhupura",
    "country": "Pakistan",
    "lat": 31.708333333333,
    "lng": 74.0,
    "population": 473129,
    "difficulty": "hard"
  },
  {
    "name": "Piura",
    "country": "Peru",
    "lat": -5.2008333333333,
    "lng": -80.625277777778,
    "population": 473025,
    "difficulty": "hard"
  },
  {
    "name": "Bristol",
    "country": "United Kingdom",
    "lat": 51.453611111111,
    "lng": -2.5975,
    "population": 472465,
    "difficulty": "easy"
  },
  {
    "name": "Kirov",
    "country": "Russia",
    "lat": 58.6,
    "lng": 49.65,
    "population": 471754,
    "difficulty": "hard"
  },
  {
    "name": "San Juan",
    "country": "Argentina",
    "lat": -31.5375,
    "lng": -68.536388888889,
    "population": 471389,
    "difficulty": "medium"
  },
  {
    "name": "Seeb",
    "country": "Oman",
    "lat": 23.666666666667,
    "lng": 58.161666666667,
    "population": 470878,
    "difficulty": "hard"
  },
  {
    "name": "Mbandaka",
    "country": "Democratic Republic of the Congo",
    "lat": 0.048611111111111,
    "lng": 18.260277777778,
    "population": 470307,
    "difficulty": "hard"
  },
  {
    "name": "Mykolaiv",
    "country": "Ukraine",
    "lat": 46.975,
    "lng": 31.995,
    "population": 470011,
    "difficulty": "medium"
  },
  {
    "name": "Mazar-i-Sharif",
    "country": "Afghanistan",
    "lat": 36.7,
    "lng": 67.116666666667,
    "population": 469247,
    "difficulty": "hard"
  },
  {
    "name": "Baqubah",
    "country": "Iraq",
    "lat": 33.744722222222,
    "lng": 44.643611111111,
    "population": 467900,
    "difficulty": "hard"
  },
  {
    "name": "Tel-Aviv",
    "country": "Israel",
    "lat": 32.08,
    "lng": 34.78,
    "population": 467875,
    "difficulty": "easy"
  },
  {
    "name": "Raleigh",
    "country": "United States",
    "lat": 35.78,
    "lng": -78.64,
    "population": 467665,
    "difficulty": "easy"
  },
  {
    "name": "Burayda",
    "country": "Saudi Arabia",
    "lat": 26.333333333333,
    "lng": 43.966666666667,
    "population": 467410,
    "difficulty": "hard"
  },
  {
    "name": "Long Beach",
    "country": "United States",
    "lat": 33.768055555556,
    "lng": -118.19555555556,
    "population": 466742,
    "difficulty": "easy"
  },
  {
    "name": "Tula",
    "country": "Russia",
    "lat": 54.2,
    "lng": 37.616666666667,
    "population": 466609,
    "difficulty": "hard"
  },
  {
    "name": "Astrakhan",
    "country": "Russia",
    "lat": 46.35,
    "lng": 48.035,
    "population": 465990,
    "difficulty": "hard"
  },
  {
    "name": "Constantine",
    "country": "Algeria",
    "lat": 36.365,
    "lng": 6.6147222222222,
    "population": 465138,
    "difficulty": "hard"
  },
  {
    "name": "Kanazawa",
    "country": "Japan",
    "lat": 36.561055555556,
    "lng": 136.6565,
    "population": 462479,
    "difficulty": "hard"
  },
  {
    "name": "Asunción",
    "country": "Paraguay",
    "lat": -25.28,
    "lng": -57.634444444444,
    "population": 462241,
    "difficulty": "hard"
  },
  {
    "name": "Jalgaon",
    "country": "India",
    "lat": 21.016666666667,
    "lng": 75.566666666667,
    "population": 460468,
    "difficulty": "hard"
  },
  {
    "name": "Fukuyama",
    "country": "Japan",
    "lat": 34.485861111111,
    "lng": 133.36230555556,
    "population": 459576,
    "difficulty": "hard"
  },
  {
    "name": "Virginia Beach",
    "country": "United States",
    "lat": 36.73765,
    "lng": -76.00521,
    "population": 459470,
    "difficulty": "easy"
  },
  {
    "name": "Kurnool",
    "country": "India",
    "lat": 15.822222222222,
    "lng": 78.035,
    "population": 457633,
    "difficulty": "hard"
  },
  {
    "name": "Tallinn",
    "country": "Estonia",
    "lat": 59.437222222222,
    "lng": 24.745,
    "population": 457572,
    "difficulty": "medium"
  },
  {
    "name": "Malacca",
    "country": "Malaysia",
    "lat": 2.1888888888889,
    "lng": 102.25111111111,
    "population": 455300,
    "difficulty": "medium"
  },
  {
    "name": "Manizales",
    "country": "Colombia",
    "lat": 5.0675,
    "lng": -75.51,
    "population": 454494,
    "difficulty": "hard"
  },
  {
    "name": "Miami",
    "country": "United States",
    "lat": 25.783333333333,
    "lng": -80.216666666667,
    "population": 442241,
    "difficulty": "easy"
  },
  {
    "name": "Windhoek",
    "country": "Namibia",
    "lat": -22.57,
    "lng": 17.083611111111,
    "population": 431000,
    "difficulty": "hard"
  },
  {
    "name": "Minneapolis",
    "country": "United States",
    "lat": 44.981944444444,
    "lng": -93.269166666667,
    "population": 429954,
    "difficulty": "easy"
  },
  {
    "name": "Skopje",
    "country": "North Macedonia",
    "lat": 41.996111111111,
    "lng": 21.431666666667,
    "population": 422540,
    "difficulty": "medium"
  },
  {
    "name": "Tulsa",
    "country": "United States",
    "lat": 36.131388888889,
    "lng": -95.937222222222,
    "population": 413066,
    "difficulty": "easy"
  },
  {
    "name": "Panama City",
    "country": "Panama",
    "lat": 8.9711111111111,
    "lng": -79.534722222222,
    "population": 410354,
    "difficulty": "medium"
  },
  {
    "name": "Bakersfield",
    "country": "United States",
    "lat": 35.373333333333,
    "lng": -119.01888888889,
    "population": 403455,
    "difficulty": "easy"
  },
  {
    "name": "Brno",
    "country": "Czech Republic",
    "lat": 49.195277777778,
    "lng": 16.608333333333,
    "population": 402739,
    "difficulty": "hard"
  },
  {
    "name": "Wichita",
    "country": "United States",
    "lat": 37.688888888889,
    "lng": -97.336111111111,
    "population": 397532,
    "difficulty": "easy"
  },
  {
    "name": "Tirana",
    "country": "Albania",
    "lat": 41.328333333333,
    "lng": 19.818055555556,
    "population": 389323,
    "difficulty": "hard"
  },
  {
    "name": "Tampa",
    "country": "United States",
    "lat": 27.9475,
    "lng": -82.458611111111,
    "population": 384959,
    "difficulty": "easy"
  },
  {
    "name": "New Orleans",
    "country": "United States",
    "lat": 29.976111111111,
    "lng": -90.078333333333,
    "population": 383997,
    "difficulty": "easy"
  },
  {
    "name": "Cleveland",
    "country": "United States",
    "lat": 41.499166666667,
    "lng": -81.694722222222,
    "population": 372624,
    "difficulty": "easy"
  },
  {
    "name": "Honolulu",
    "country": "United States",
    "lat": 21.304722222222,
    "lng": -157.85722222222,
    "population": 350964,
    "difficulty": "easy"
  },
  {
    "name": "Anaheim",
    "country": "United States",
    "lat": 33.836111111111,
    "lng": -117.88972222222,
    "population": 346824,
    "difficulty": "easy"
  },
  {
    "name": "Maseru",
    "country": "Lesotho",
    "lat": -29.31667,
    "lng": 27.48333,
    "population": 343541,
    "difficulty": "hard"
  },
  {
    "name": "Malmö",
    "country": "Sweden",
    "lat": 55.583333333333,
    "lng": 13.0,
    "population": 339316,
    "difficulty": "medium"
  },
  {
    "name": "San José",
    "country": "Costa Rica",
    "lat": 9.9327388888889,
    "lng": -84.079613888889,
    "population": 335007,
    "difficulty": "medium"
  },
  {
    "name": "San Salvador",
    "country": "El Salvador",
    "lat": 13.697597222222,
    "lng": -89.191155555556,
    "population": 330543,
    "difficulty": "medium"
  },
  {
    "name": "Plovdiv",
    "country": "Bulgaria",
    "lat": 42.142086,
    "lng": 24.741454,
    "population": 329489,
    "difficulty": "hard"
  },
  {
    "name": "Lexington",
    "country": "United States",
    "lat": 38.049722222222,
    "lng": -84.458611111111,
    "population": 322570,
    "difficulty": "easy"
  },
  {
    "name": "Stockton",
    "country": "United States",
    "lat": 37.9575,
    "lng": -121.2925,
    "population": 320804,
    "difficulty": "easy"
  },
  {
    "name": "Varna",
    "country": "Bulgaria",
    "lat": 43.211375,
    "lng": 27.91108,
    "population": 318737,
    "difficulty": "hard"
  },
  {
    "name": "Corpus Christi",
    "country": "United States",
    "lat": 27.742777777778,
    "lng": -97.401944444444,
    "population": 317863,
    "difficulty": "easy"
  },
  {
    "name": "Port Moresby",
    "country": "Papua New Guinea",
    "lat": -9.4788888888889,
    "lng": 147.14944444444,
    "population": 317374,
    "difficulty": "hard"
  },
  {
    "name": "Riverside",
    "country": "United States",
    "lat": 33.982222222222,
    "lng": -117.3725,
    "population": 314998,
    "difficulty": "easy"
  },
  {
    "name": "Thessaloniki",
    "country": "Greece",
    "lat": 40.640277777778,
    "lng": 22.935555555556,
    "population": 309617,
    "difficulty": "medium"
  },
  {
    "name": "Cincinnati",
    "country": "United States",
    "lat": 39.1,
    "lng": -84.5125,
    "population": 309317,
    "difficulty": "easy"
  },
  {
    "name": "Orlando",
    "country": "United States",
    "lat": 28.533611111111,
    "lng": -81.386666666667,
    "population": 307573,
    "difficulty": "easy"
  },
  {
    "name": "Kaunas",
    "country": "Lithuania",
    "lat": 54.9,
    "lng": 23.933333333333,
    "population": 305120,
    "difficulty": "hard"
  },
  {
    "name": "Pittsburgh",
    "country": "United States",
    "lat": 40.441666666667,
    "lng": -80.0,
    "population": 302971,
    "difficulty": "easy"
  },
  {
    "name": "St. Louis",
    "country": "United States",
    "lat": 38.626388888889,
    "lng": -90.199444444444,
    "population": 301578,
    "difficulty": "easy"
  },
  {
    "name": "Greensboro",
    "country": "United States",
    "lat": 36.08,
    "lng": -79.819444444444,
    "population": 299035,
    "difficulty": "easy"
  },
  {
    "name": "Manama",
    "country": "Bahrain",
    "lat": 26.216666666667,
    "lng": 50.583333333333,
    "population": 297502,
    "difficulty": "medium"
  },
  {
    "name": "Graz",
    "country": "Austria",
    "lat": 47.070833333333,
    "lng": 15.438611111111,
    "population": 292630,
    "difficulty": "hard"
  },
  {
    "name": "Anchorage",
    "country": "United States",
    "lat": 61.216666666667,
    "lng": -149.89361111111,
    "population": 291247,
    "difficulty": "easy"
  },
  {
    "name": "Lincoln",
    "country": "United States",
    "lat": 40.809166666667,
    "lng": -96.678055555556,
    "population": 291082,
    "difficulty": "easy"
  },
  {
    "name": "Aarhus",
    "country": "Denmark",
    "lat": 56.156388888889,
    "lng": 10.209722222222,
    "population": 290598,
    "difficulty": "hard"
  },
  {
    "name": "Bata",
    "country": "Equatorial Guinea",
    "lat": 1.865,
    "lng": 9.77,
    "population": 290000,
    "difficulty": "hard"
  },
  {
    "name": "Cluj-Napoca",
    "country": "Romania",
    "lat": 46.76891,
    "lng": 23.59066,
    "population": 286598,
    "difficulty": "hard"
  },
  {
    "name": "Plano",
    "country": "United States",
    "lat": 33.05,
    "lng": -96.75,
    "population": 285494,
    "difficulty": "easy"
  },
  {
    "name": "Ljubljana",
    "country": "Slovenia",
    "lat": 46.051388888889,
    "lng": 14.506111111111,
    "population": 284293,
    "difficulty": "hard"
  },
  {
    "name": "Durham",
    "country": "United States",
    "lat": 35.994166666667,
    "lng": -78.898611111111,
    "population": 283506,
    "difficulty": "easy"
  },
  {
    "name": "Ostrava",
    "country": "Czech Republic",
    "lat": 49.835555555556,
    "lng": 18.2925,
    "population": 283187,
    "difficulty": "hard"
  },
  {
    "name": "Buffalo",
    "country": "United States",
    "lat": 42.886388888889,
    "lng": -78.878055555556,
    "population": 278349,
    "difficulty": "easy"
  },
  {
    "name": "Chandler",
    "country": "United States",
    "lat": 33.303333333333,
    "lng": -111.84138888889,
    "population": 275987,
    "difficulty": "easy"
  },
  {
    "name": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "lat": 43.856388888889,
    "lng": 18.413055555556,
    "population": 275524,
    "difficulty": "medium"
  },
  {
    "name": "Iași",
    "country": "Romania",
    "lat": 47.162222222222,
    "lng": 27.588888888889,
    "population": 271692,
    "difficulty": "hard"
  },
  {
    "name": "Toledo",
    "country": "United States",
    "lat": 41.652777777778,
    "lng": -83.537777777778,
    "population": 270871,
    "difficulty": "easy"
  },
  {
    "name": "Madison",
    "country": "United States",
    "lat": 43.074722222222,
    "lng": -89.384166666667,
    "population": 269840,
    "difficulty": "easy"
  },
  {
    "name": "Reno",
    "country": "United States",
    "lat": 39.526111111111,
    "lng": -119.81266666667,
    "population": 264165,
    "difficulty": "easy"
  },
  {
    "name": "Fort Wayne",
    "country": "United States",
    "lat": 41.08045,
    "lng": -85.13915,
    "population": 263886,
    "difficulty": "easy"
  },
  {
    "name": "St. Petersburg",
    "country": "United States",
    "lat": 27.773055555556,
    "lng": -82.64,
    "population": 258308,
    "difficulty": "easy"
  },
  {
    "name": "Lubbock",
    "country": "United States",
    "lat": 33.585,
    "lng": -101.845,
    "population": 257141,
    "difficulty": "easy"
  },
  {
    "name": "Tampere",
    "country": "Finland",
    "lat": 61.498055555556,
    "lng": 23.76,
    "population": 255333,
    "difficulty": "hard"
  },
  {
    "name": "Laredo",
    "country": "United States",
    "lat": 27.506111111111,
    "lng": -99.507222222222,
    "population": 255205,
    "difficulty": "easy"
  },
  {
    "name": "Winston-Salem",
    "country": "United States",
    "lat": 36.1025,
    "lng": -80.260555555556,
    "population": 249545,
    "difficulty": "easy"
  },
  {
    "name": "Chesapeake",
    "country": "United States",
    "lat": 36.767398,
    "lng": -76.287405,
    "population": 249422,
    "difficulty": "easy"
  },
  {
    "name": "Louisville",
    "country": "United States",
    "lat": 38.256111111111,
    "lng": -85.751388888889,
    "population": 246161,
    "difficulty": "easy"
  },
  {
    "name": "Gaborone",
    "country": "Botswana",
    "lat": -24.656944444444,
    "lng": 25.908611111111,
    "population": 235884,
    "difficulty": "hard"
  },
  {
    "name": "Boise",
    "country": "United States",
    "lat": 43.613611111111,
    "lng": -116.23777777778,
    "population": 235684,
    "difficulty": "easy"
  },
  {
    "name": "Georgetown",
    "country": "Guyana",
    "lat": 6.8058333333333,
    "lng": -58.150833333333,
    "population": 235017,
    "difficulty": "medium"
  },
  {
    "name": "Porto",
    "country": "Portugal",
    "lat": 41.15,
    "lng": -8.6108333333333,
    "population": 231800,
    "difficulty": "medium"
  },
  {
    "name": "Fremont",
    "country": "United States",
    "lat": 37.548611111111,
    "lng": -121.98833333333,
    "population": 230504,
    "difficulty": "easy"
  },
  {
    "name": "Spokane",
    "country": "United States",
    "lat": 47.657194444444,
    "lng": -117.4235,
    "population": 228989,
    "difficulty": "easy"
  },
  {
    "name": "Santa Clarita",
    "country": "United States",
    "lat": 34.3916641,
    "lng": -118.542586,
    "population": 228673,
    "difficulty": "easy"
  },
  {
    "name": "Nassau",
    "country": "The Bahamas",
    "lat": 25.078055555556,
    "lng": -77.338611111111,
    "population": 227940,
    "difficulty": "medium"
  },
  {
    "name": "Baton Rouge",
    "country": "United States",
    "lat": 30.4475,
    "lng": -91.178611111111,
    "population": 227470,
    "difficulty": "easy"
  },
  {
    "name": "Richmond",
    "country": "United States",
    "lat": 37.540833333333,
    "lng": -77.436666666667,
    "population": 226610,
    "difficulty": "easy"
  },
  {
    "name": "Paramaribo",
    "country": "Suriname",
    "lat": 5.8666666666667,
    "lng": -55.166666666667,
    "population": 223757,
    "difficulty": "hard"
  },
  {
    "name": "Košice",
    "country": "Slovakia",
    "lat": 48.716666666667,
    "lng": 21.25,
    "population": 223678,
    "difficulty": "hard"
  },
  {
    "name": "Cork",
    "country": "Ireland",
    "lat": 51.9,
    "lng": -8.4730555555556,
    "population": 222333,
    "difficulty": "medium"
  },
  {
    "name": "Dili",
    "country": "Timor-Leste",
    "lat": -8.5536111111111,
    "lng": 125.57833333333,
    "population": 222323,
    "difficulty": "hard"
  },
  {
    "name": "Tacoma",
    "country": "United States",
    "lat": 47.2525,
    "lng": -122.4475,
    "population": 219346,
    "difficulty": "easy"
  },
  {
    "name": "Modesto",
    "country": "United States",
    "lat": 37.661388888889,
    "lng": -120.99444444444,
    "population": 218464,
    "difficulty": "easy"
  },
  {
    "name": "Babylon",
    "country": "United States",
    "lat": 40.694444444444,
    "lng": -73.329444444444,
    "population": 218223,
    "difficulty": "medium"
  },
  {
    "name": "Huntsville",
    "country": "United States",
    "lat": 34.713611111111,
    "lng": -86.586111111111,
    "population": 215006,
    "difficulty": "easy"
  },
  {
    "name": "Des Moines",
    "country": "United States",
    "lat": 41.590833333333,
    "lng": -93.620833333333,
    "population": 214133,
    "difficulty": "easy"
  },
  {
    "name": "Linz",
    "country": "Austria",
    "lat": 48.305833333333,
    "lng": 14.286388888889,
    "population": 211944,
    "difficulty": "hard"
  },
  {
    "name": "Rochester",
    "country": "United States",
    "lat": 43.165555555556,
    "lng": -77.611388888889,
    "population": 211328,
    "difficulty": "easy"
  },
  {
    "name": "Fayetteville",
    "country": "United States",
    "lat": 35.066666666667,
    "lng": -78.9175,
    "population": 208501,
    "difficulty": "easy"
  },
  {
    "name": "Worcester",
    "country": "United States",
    "lat": 42.271388888889,
    "lng": -71.798888888889,
    "population": 206518,
    "difficulty": "easy"
  },
  {
    "name": "Port St. Lucie",
    "country": "United States",
    "lat": 27.275833333333,
    "lng": -80.355,
    "population": 204851,
    "difficulty": "easy"
  },
  {
    "name": "Little Rock",
    "country": "United States",
    "lat": 34.744444444444,
    "lng": -92.288055555556,
    "population": 202591,
    "difficulty": "easy"
  },
  {
    "name": "Debrecen",
    "country": "Hungary",
    "lat": 47.53,
    "lng": 21.639166666667,
    "population": 202130,
    "difficulty": "hard"
  },
  {
    "name": "Augusta",
    "country": "United States",
    "lat": 33.47,
    "lng": -81.975,
    "population": 202081,
    "difficulty": "easy"
  },
  {
    "name": "Oxnard",
    "country": "United States",
    "lat": 34.191388888889,
    "lng": -119.1825,
    "population": 202063,
    "difficulty": "easy"
  },
  {
    "name": "Montgomery",
    "country": "United States",
    "lat": 32.3675,
    "lng": -86.3,
    "population": 200603,
    "difficulty": "easy"
  },
  {
    "name": "Amarillo",
    "country": "United States",
    "lat": 35.199166666667,
    "lng": -101.84527777778,
    "population": 200393,
    "difficulty": "easy"
  },
  {
    "name": "Salt Lake City",
    "country": "United States",
    "lat": 40.75,
    "lng": -111.88333333333,
    "population": 199723,
    "difficulty": "easy"
  },
  {
    "name": "Grand Rapids",
    "country": "United States",
    "lat": 42.963333333333,
    "lng": -85.667777777778,
    "population": 198917,
    "difficulty": "easy"
  },
  {
    "name": "Tallahassee",
    "country": "United States",
    "lat": 30.438333333333,
    "lng": -84.280555555556,
    "population": 196169,
    "difficulty": "easy"
  },
  {
    "name": "Cape Coral",
    "country": "United States",
    "lat": 26.633333,
    "lng": -81.983333,
    "population": 194016,
    "difficulty": "easy"
  },
  {
    "name": "Sioux Falls",
    "country": "United States",
    "lat": 43.546055555556,
    "lng": -96.731388888889,
    "population": 192517,
    "difficulty": "easy"
  },
  {
    "name": "Providence",
    "country": "United States",
    "lat": 41.82399,
    "lng": -71.41283,
    "population": 190934,
    "difficulty": "easy"
  },
  {
    "name": "Knoxville",
    "country": "United States",
    "lat": 35.961666666667,
    "lng": -83.923333333333,
    "population": 190740,
    "difficulty": "easy"
  },
  {
    "name": "Akron",
    "country": "United States",
    "lat": 41.073055555556,
    "lng": -81.517777777778,
    "population": 190469,
    "difficulty": "easy"
  },
  {
    "name": "Shreveport",
    "country": "United States",
    "lat": 32.508055555556,
    "lng": -93.762777777778,
    "population": 187593,
    "difficulty": "easy"
  },
  {
    "name": "Mobile",
    "country": "United States",
    "lat": 30.727669444444,
    "lng": -88.052672222222,
    "population": 187041,
    "difficulty": "easy"
  },
  {
    "name": "Newport News",
    "country": "United States",
    "lat": 37.070833333333,
    "lng": -76.484444444444,
    "population": 186247,
    "difficulty": "easy"
  },
  {
    "name": "Odense",
    "country": "Denmark",
    "lat": 55.4,
    "lng": 10.383333333333,
    "population": 185480,
    "difficulty": "hard"
  },
  {
    "name": "Fort Lauderdale",
    "country": "United States",
    "lat": 26.135833333333,
    "lng": -80.141944444444,
    "population": 182760,
    "difficulty": "easy"
  },
  {
    "name": "Braga",
    "country": "Portugal",
    "lat": 41.550277777778,
    "lng": -8.42,
    "population": 181494,
    "difficulty": "hard"
  },
  {
    "name": "Chattanooga",
    "country": "United States",
    "lat": 35.045555555556,
    "lng": -85.267222222222,
    "population": 181099,
    "difficulty": "easy"
  },
  {
    "name": "Eugene",
    "country": "United States",
    "lat": 44.052222222222,
    "lng": -123.0925,
    "population": 176654,
    "difficulty": "easy"
  },
  {
    "name": "Oceanside",
    "country": "United States",
    "lat": 33.211666666667,
    "lng": -117.32583333333,
    "population": 174068,
    "difficulty": "easy"
  },
  {
    "name": "Patras",
    "country": "Greece",
    "lat": 38.25,
    "lng": 21.733333333333,
    "population": 173600,
    "difficulty": "hard"
  },
  {
    "name": "Lancaster",
    "country": "United States",
    "lat": 34.686944444444,
    "lng": -118.15416666667,
    "population": 173516,
    "difficulty": "easy"
  },
  {
    "name": "Split",
    "country": "Croatia",
    "lat": 43.51,
    "lng": 16.44,
    "population": 160577,
    "difficulty": "medium"
  },
  {
    "name": "Praia",
    "country": "Cape Verde",
    "lat": 14.917719444444,
    "lng": -23.509155555556,
    "population": 159050,
    "difficulty": "hard"
  },
  {
    "name": "Klaipėda",
    "country": "Lithuania",
    "lat": 55.7125,
    "lng": 21.135,
    "population": 158420,
    "difficulty": "hard"
  },
  {
    "name": "Szeged",
    "country": "Hungary",
    "lat": 46.25,
    "lng": 20.166666666667,
    "population": 157282,
    "difficulty": "hard"
  },
  {
    "name": "Podgorica",
    "country": "Montenegro",
    "lat": 42.441388888889,
    "lng": 19.262777777778,
    "population": 150977,
    "difficulty": "hard"
  },
  {
    "name": "Port Louis",
    "country": "Mauritius",
    "lat": -20.161944444444,
    "lng": 57.498888888889,
    "population": 149194,
    "difficulty": "hard"
  },
  {
    "name": "Reykjavík",
    "country": "Iceland",
    "lat": 64.1475,
    "lng": -21.935,
    "population": 138772,
    "difficulty": "medium"
  },
  {
    "name": "Luxembourg",
    "country": "Luxembourg",
    "lat": 49.610555555556,
    "lng": 6.1327777777778,
    "population": 137696,
    "difficulty": "easy"
  },
  {
    "name": "Malé",
    "country": "Maldives",
    "lat": 4.175,
    "lng": 73.508333333333,
    "population": 133019,
    "difficulty": "hard"
  },
  {
    "name": "Thimphu",
    "country": "Bhutan",
    "lat": 27.47135,
    "lng": 89.63367,
    "population": 114551,
    "difficulty": "hard"
  },
  {
    "name": "Maribor",
    "country": "Slovenia",
    "lat": 46.55,
    "lng": 15.633333333333,
    "population": 114301,
    "difficulty": "hard"
  },
  {
    "name": "Manzini",
    "country": "Eswatini",
    "lat": -26.483333333333,
    "lng": 31.366666666667,
    "population": 110508,
    "difficulty": "hard"
  },
  {
    "name": "Limassol",
    "country": "Cyprus",
    "lat": 34.674997,
    "lng": 33.044286,
    "population": 107970,
    "difficulty": "hard"
  },
  {
    "name": "Rijeka",
    "country": "Croatia",
    "lat": 45.333333333333,
    "lng": 14.433333333333,
    "population": 107964,
    "difficulty": "hard"
  },
  {
    "name": "Bridgetown",
    "country": "Barbados",
    "lat": 13.0975,
    "lng": -59.616666666667,
    "population": 98511,
    "difficulty": "hard"
  },
  {
    "name": "Moroni",
    "country": "Comoros",
    "lat": -11.703611111111,
    "lng": 43.253611111111,
    "population": 85400,
    "difficulty": "hard"
  },
  {
    "name": "Honiara",
    "country": "Solomon Islands",
    "lat": -9.433333,
    "lng": 159.95,
    "population": 84520,
    "difficulty": "hard"
  },
  {
    "name": "Chaguanas",
    "country": "Trinidad and Tobago",
    "lat": 10.514444444444,
    "lng": -61.4075,
    "population": 83489,
    "difficulty": "hard"
  },
  {
    "name": "São Tomé",
    "country": "São Tomé and Príncipe",
    "lat": 0.3375,
    "lng": 6.7283333333333,
    "population": 65468,
    "difficulty": "hard"
  },
  {
    "name": "Belize",
    "country": "Belize",
    "lat": 17.498611111111,
    "lng": -88.188611111111,
    "population": 63999,
    "difficulty": "hard"
  },
  {
    "name": "Nicosia",
    "country": "Cyprus",
    "lat": 35.1725,
    "lng": 33.365,
    "population": 56848,
    "difficulty": "hard"
  },
  {
    "name": "Bandar Seri Begawan",
    "country": "Brunei",
    "lat": 4.9166666666667,
    "lng": 114.91666666667,
    "population": 50000,
    "difficulty": "hard"
  },
  {
    "name": "Port Vila",
    "country": "Vanuatu",
    "lat": -17.73333,
    "lng": 168.316667,
    "population": 49034,
    "difficulty": "hard"
  },
  {
    "name": "Monaco",
    "country": "Monaco",
    "lat": 43.731111111111,
    "lng": 7.42,
    "population": 38423,
    "difficulty": "easy"
  },
  {
    "name": "Apia",
    "country": "Samoa",
    "lat": -13.833333333333,
    "lng": -171.83333333333,
    "population": 37708,
    "difficulty": "hard"
  },
  {
    "name": "Victoria",
    "country": "Chile",
    "lat": -38.216666666667,
    "lng": -72.333333333333,
    "population": 34890,
    "difficulty": "hard"
  },
  {
    "name": "Kingstown",
    "country": "Saint Vincent and the Grenadines",
    "lat": 13.15527,
    "lng": -61.22742,
    "population": 24518,
    "difficulty": "hard"
  },
  {
    "name": "Andorra la Vella",
    "country": "Andorra",
    "lat": 42.507222222222,
    "lng": 1.5222222222222,
    "population": 24042,
    "difficulty": "hard"
  },
  {
    "name": "Nukuʻalofa",
    "country": "Tonga",
    "lat": -21.1343401,
    "lng": -175.201808,
    "population": 23221,
    "difficulty": "hard"
  },
  {
    "name": "Castries",
    "country": "Saint Lucia",
    "lat": 14.016666666667,
    "lng": -60.983333333333,
    "population": 20000,
    "difficulty": "hard"
  },
  {
    "name": "Roseau",
    "country": "Dominica",
    "lat": 15.3,
    "lng": -61.383333333333,
    "population": 16571,
    "difficulty": "hard"
  },
  {
    "name": "Basseterre",
    "country": "Saint Kitts and Nevis",
    "lat": 17.298333333333,
    "lng": -62.734166666667,
    "population": 12920,
    "difficulty": "hard"
  },
  {
    "name": "Koror",
    "country": "Palau",
    "lat": 7.34333,
    "lng": 134.48042,
    "population": 8744,
    "difficulty": "hard"
  },
  {
    "name": "Dogana",
    "country": "San Marino",
    "lat": 43.95,
    "lng": 12.5,
    "population": 7000,
    "difficulty": "hard"
  },
  {
    "name": "Funafuti",
    "country": "Tuvalu",
    "lat": -8.5047777777778,
    "lng": 179.11736111111,
    "population": 6025,
    "difficulty": "hard"
  },
  {
    "name": "Schaan",
    "country": "Liechtenstein",
    "lat": 47.166666666667,
    "lng": 9.5166666666667,
    "population": 5998,
    "difficulty": "hard"
  }
];
