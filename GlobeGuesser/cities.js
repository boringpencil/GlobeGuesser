const cities = [
  {
    "name": "Chongqing",
    "country": "People's Republic of China",
    "lat": 29.55,
    "lng": 106.50694444444,
    "population": 32054159
  },
  {
    "name": "Delhi",
    "country": "India",
    "lat": 28.666666666667,
    "lng": 77.216666666667,
    "population": 26495000
  },
  {
    "name": "Shanghai",
    "country": "People's Republic of China",
    "lat": 31.2325,
    "lng": 121.46916666667,
    "population": 24870895
  },
  {
    "name": "Greater Mexico City",
    "country": "Mexico",
    "lat": 19.432519444444,
    "lng": -99.133158333333,
    "population": 21905000
  },
  {
    "name": "Beijing",
    "country": "People's Republic of China",
    "lat": 39.90403,
    "lng": 116.407526,
    "population": 21893095
  },
  {
    "name": "New York metropolitan area",
    "country": "United States",
    "lat": 40.808611111111,
    "lng": -74.020277777778,
    "population": 19940274
  },
  {
    "name": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.728888888889,
    "lng": 90.394444444444,
    "population": 16800000
  },
  {
    "name": "Istanbul",
    "country": "Turkey",
    "lat": 41.01,
    "lng": 28.960277777778,
    "population": 15655924
  },
  {
    "name": "Mumbai",
    "country": "India",
    "lat": 19.075833333333,
    "lng": 72.8775,
    "population": 15414288
  },
  {
    "name": "Lagos",
    "country": "Nigeria",
    "lat": 6.4561111111111,
    "lng": 3.3936111111111,
    "population": 15070000
  },
  {
    "name": "Karachi",
    "country": "Pakistan",
    "lat": 24.86,
    "lng": 67.01,
    "population": 14910352
  },
  {
    "name": "Kinshasa",
    "country": "Democratic Republic of the Congo",
    "lat": -4.3219444444444,
    "lng": 15.311944444444,
    "population": 14565700
  },
  {
    "name": "Tokyo",
    "country": "Japan",
    "lat": 35.689444444444,
    "lng": 139.69166666667,
    "population": 14264798
  },
  {
    "name": "Ho Chi Minh City",
    "country": "Vietnam",
    "lat": 10.775555555556,
    "lng": 106.70194444444,
    "population": 14002598
  },
  {
    "name": "Metro Manila",
    "country": "Philippines",
    "lat": 14.583333333333,
    "lng": 121.0,
    "population": 14001751
  },
  {
    "name": "Greater Buenos Aires",
    "country": "Argentina",
    "lat": -34.6083,
    "lng": -58.3719,
    "population": 13985794
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.750555555556,
    "lng": 37.6175,
    "population": 13274285
  },
  {
    "name": "Bengaluru",
    "country": "India",
    "lat": 12.9791198,
    "lng": 77.5912997,
    "population": 12327000
  },
  {
    "name": "Greater Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.9028,
    "lng": -43.2078,
    "population": 11900000
  },
  {
    "name": "São Paulo",
    "country": "Brazil",
    "lat": -23.550394444444,
    "lng": -46.633947222222,
    "population": 11451999
  },
  {
    "name": "Jakarta",
    "country": "Indonesia",
    "lat": -6.1752777777778,
    "lng": 106.82694444444,
    "population": 11135191
  },
  {
    "name": "Lahore",
    "country": "Pakistan",
    "lat": 31.549722222222,
    "lng": 74.343611111111,
    "population": 11126285
  },
  {
    "name": "Lima",
    "country": "Peru",
    "lat": -12.06,
    "lng": -77.0375,
    "population": 9943800
  },
  {
    "name": "Cairo",
    "country": "Egypt",
    "lat": 30.044444444444,
    "lng": 31.235833333333,
    "population": 9801536
  },
  {
    "name": "Seoul",
    "country": "South Korea",
    "lat": 37.56,
    "lng": 126.99,
    "population": 9668465
  },
  {
    "name": "Hyderabad",
    "country": "India",
    "lat": 17.361666666667,
    "lng": 78.474722222222,
    "population": 9305000
  },
  {
    "name": "Mexico City",
    "country": "Mexico",
    "lat": 19.353773,
    "lng": -99.13589,
    "population": 9209944
  },
  {
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.1477777777778,
    "lng": 101.69527777778,
    "population": 9000280
  },
  {
    "name": "New York City",
    "country": "United States",
    "lat": 40.712777777778,
    "lng": -74.006111111111,
    "population": 8804190
  },
  {
    "name": "London",
    "country": "United Kingdom",
    "lat": 51.507222222222,
    "lng": -0.1275,
    "population": 8799728
  },
  {
    "name": "Hanoi",
    "country": "Vietnam",
    "lat": 21.0245,
    "lng": 105.84117,
    "population": 8717600
  },
  {
    "name": "Tehran",
    "country": "Iran",
    "lat": 35.688888888889,
    "lng": 51.389722222222,
    "population": 8693706
  },
  {
    "name": "Baghdad",
    "country": "Iraq",
    "lat": 33.315277777778,
    "lng": 44.366111111111,
    "population": 8126755
  },
  {
    "name": "Bogotá",
    "country": "Colombia",
    "lat": 4.60971,
    "lng": -74.08175,
    "population": 8034649
  },
  {
    "name": "Ahmedabad",
    "country": "India",
    "lat": 23.021944444444,
    "lng": 72.579722222222,
    "population": 7645000
  },
  {
    "name": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.65,
    "lng": 46.71,
    "population": 7009100
  },
  {
    "name": "Yangon",
    "country": "Myanmar",
    "lat": 16.80528,
    "lng": 96.15611,
    "population": 6874000
  },
  {
    "name": "Chennai",
    "country": "India",
    "lat": 13.0825,
    "lng": 80.275,
    "population": 6599000
  },
  {
    "name": "Santiago",
    "country": "Chile",
    "lat": -33.4375,
    "lng": -70.65,
    "population": 6257516
  },
  {
    "name": "Rio de Janeiro",
    "country": "Brazil",
    "lat": -22.911111111111,
    "lng": -43.205555555556,
    "population": 6211223
  },
  {
    "name": "Prayagraj",
    "country": "India",
    "lat": 25.45,
    "lng": 81.85,
    "population": 5954391
  },
  {
    "name": "Pune",
    "country": "India",
    "lat": 18.521111111111,
    "lng": 73.855277777778,
    "population": 5945000
  },
  {
    "name": "Surat",
    "country": "India",
    "lat": 21.205,
    "lng": 72.84,
    "population": 5935000
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "lat": 1.3,
    "lng": 103.8,
    "population": 5866139
  },
  {
    "name": "Ankara",
    "country": "Turkey",
    "lat": 39.93576,
    "lng": 32.83869,
    "population": 5803482
  },
  {
    "name": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 9.0272222222222,
    "lng": 38.736944444444,
    "population": 5704000
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "lat": 13.75,
    "lng": 100.51666666667,
    "population": 5676648
  },
  {
    "name": "Saint Petersburg",
    "country": "Russia",
    "lat": 59.95,
    "lng": 30.316666666667,
    "population": 5652922
  },
  {
    "name": "Abidjan",
    "country": "Ivory Coast",
    "lat": 5.3363888888889,
    "lng": -4.0266666666667,
    "population": 5616633
  },
  {
    "name": "Nairobi",
    "country": "Kenya",
    "lat": -1.2863888888889,
    "lng": 36.817222222222,
    "population": 5545000
  },
  {
    "name": "Sydney",
    "country": "Australia",
    "lat": -33.867777777778,
    "lng": 151.21,
    "population": 5450496
  },
  {
    "name": "Alexandria",
    "country": "Egypt",
    "lat": 31.1975,
    "lng": 29.8925,
    "population": 5362517
  },
  {
    "name": "Melbourne",
    "country": "Australia",
    "lat": -37.814166666667,
    "lng": 144.96305555556,
    "population": 5350705
  },
  {
    "name": "Khartoum",
    "country": "Sudan",
    "lat": 15.60308,
    "lng": 32.52654,
    "population": 5345000
  },
  {
    "name": "Kabul",
    "country": "Afghanistan",
    "lat": 34.532777777778,
    "lng": 69.165833333333,
    "population": 5333284
  },
  {
    "name": "City of Johannesburg Metropolitan Municipality",
    "country": "South Africa",
    "lat": -26.204970437308,
    "lng": 28.040605722647,
    "population": 4949347
  },
  {
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.204361111111,
    "lng": 28.041638888889,
    "population": 4803262
  },
  {
    "name": "Dar es Salaam",
    "country": "Tanzania",
    "lat": -6.8161111111111,
    "lng": 39.280277777778,
    "population": 4715000
  },
  {
    "name": "Jeddah",
    "country": "Saudi Arabia",
    "lat": 21.542777777778,
    "lng": 39.172777777778,
    "population": 4697000
  },
  {
    "name": "Kolkata",
    "country": "India",
    "lat": 22.5675,
    "lng": 88.37,
    "population": 4496694
  },
  {
    "name": "İzmir",
    "country": "Turkey",
    "lat": 38.41273,
    "lng": 27.13838,
    "population": 4493242
  },
  {
    "name": "Giza",
    "country": "Egypt",
    "lat": 29.987,
    "lng": 31.2118,
    "population": 4458135
  },
  {
    "name": "Kano",
    "country": "Nigeria",
    "lat": 12.0022,
    "lng": 8.592,
    "population": 4348000
  },
  {
    "name": "Bamako",
    "country": "Mali",
    "lat": 12.645833333333,
    "lng": -7.9922222222222,
    "population": 4227569
  },
  {
    "name": "New Taipei",
    "country": "Taiwan",
    "lat": 25.0125,
    "lng": 121.465,
    "population": 4046037
  },
  {
    "name": "Amman",
    "country": "Jordan",
    "lat": 31.95,
    "lng": 35.933333333333,
    "population": 4007526
  },
  {
    "name": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.269722222222,
    "lng": 55.309444444444,
    "population": 3944751
  },
  {
    "name": "Kumasi",
    "country": "Ghana",
    "lat": 6.7,
    "lng": -1.625,
    "population": 3903480
  },
  {
    "name": "Los Angeles",
    "country": "United States",
    "lat": 34.05223,
    "lng": -118.24368,
    "population": 3898747
  },
  {
    "name": "Berlin",
    "country": "Germany",
    "lat": 52.516666666667,
    "lng": 13.383333333333,
    "population": 3782202
  },
  {
    "name": "Cape Town",
    "country": "South Africa",
    "lat": -33.925277777778,
    "lng": 18.423888888889,
    "population": 3776313
  },
  {
    "name": "Yokohama",
    "country": "Japan",
    "lat": 35.433333333333,
    "lng": 139.65,
    "population": 3757630
  },
  {
    "name": "City of Cape Town",
    "country": "South Africa",
    "lat": -34.0,
    "lng": 18.5,
    "population": 3740026
  },
  {
    "name": "eThekwini Metropolitan Municipality",
    "country": "South Africa",
    "lat": -29.866666666667,
    "lng": 31.016666666667,
    "population": 3702231
  },
  {
    "name": "Madrid",
    "country": "Spain",
    "lat": 40.416944444444,
    "lng": -3.7033333333333,
    "population": 3506730
  },
  {
    "name": "Port Harcourt",
    "country": "Nigeria",
    "lat": 4.765466,
    "lng": 7.016316,
    "population": 3480000
  },
  {
    "name": "Busan",
    "country": "South Korea",
    "lat": 35.18,
    "lng": 129.075,
    "population": 3453198
  },
  {
    "name": "Lucknow",
    "country": "India",
    "lat": 26.847,
    "lng": 80.947,
    "population": 3382000
  },
  {
    "name": "City of Ekurhuleni Metropolitan Municipality",
    "country": "South Africa",
    "lat": -26.1989,
    "lng": 28.31262,
    "population": 3379104
  },
  {
    "name": "Madrid city",
    "country": "Spain",
    "lat": 40.4165,
    "lng": -3.70256,
    "population": 3332035
  },
  {
    "name": "City of Tshwane Metropolitan Municipality",
    "country": "South Africa",
    "lat": -25.666666666667,
    "lng": 28.333333333333,
    "population": 3275152
  },
  {
    "name": "Casablanca",
    "country": "Morocco",
    "lat": 33.599166666667,
    "lng": -7.62,
    "population": 3215935
  },
  {
    "name": "Cần Thơ",
    "country": "Vietnam",
    "lat": 10.1547298,
    "lng": 105.5005357,
    "population": 3207000
  },
  {
    "name": "Faisalabad",
    "country": "Pakistan",
    "lat": 31.418,
    "lng": 73.079,
    "population": 3203846
  },
  {
    "name": "Santa Cruz de la Sierra",
    "country": "Bolivia",
    "lat": -17.789166666667,
    "lng": -63.1975,
    "population": 3151676
  },
  {
    "name": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.599722222222,
    "lng": -58.381944444444,
    "population": 3121707
  },
  {
    "name": "Jaipur",
    "country": "India",
    "lat": 26.915,
    "lng": 75.82,
    "population": 3073350
  },
  {
    "name": "Kanpur",
    "country": "India",
    "lat": 26.4725,
    "lng": 80.331111111111,
    "population": 3067700
  },
  {
    "name": "Incheon",
    "country": "South Korea",
    "lat": 37.463888888889,
    "lng": 126.64861111111,
    "population": 3049315
  },
  {
    "name": "Taichung",
    "country": "Taiwan",
    "lat": 24.143888888889,
    "lng": 120.67944444444,
    "population": 3033885
  },
  {
    "name": "Brasília",
    "country": "Brazil",
    "lat": -15.793888888889,
    "lng": -47.882777777778,
    "population": 2996899
  },
  {
    "name": "Kuwait City",
    "country": "Kuwait",
    "lat": 29.375,
    "lng": 47.98,
    "population": 2989000
  },
  {
    "name": "Sanaa",
    "country": "Yemen",
    "lat": 15.35,
    "lng": 44.2,
    "population": 2957000
  },
  {
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.311111111111,
    "lng": 69.279722222222,
    "population": 2956384
  },
  {
    "name": "Kyiv",
    "country": "Ukraine",
    "lat": 50.45,
    "lng": 30.523611111111,
    "population": 2952301
  },
  {
    "name": "Bursa",
    "country": "Turkey",
    "lat": 40.191330555556,
    "lng": 29.080538888889,
    "population": 2901396
  },
  {
    "name": "Mbuji-Mayi",
    "country": "Democratic Republic of the Congo",
    "lat": -6.1209,
    "lng": 23.5967,
    "population": 2892000
  },
  {
    "name": "Pyongyang",
    "country": "North Korea",
    "lat": 39.016666666667,
    "lng": 125.7475,
    "population": 2863000
  },
  {
    "name": "Da Nang",
    "country": "Vietnam",
    "lat": 16.069444444444,
    "lng": 108.20972222222,
    "population": 2819900
  },
  {
    "name": "Omdurman",
    "country": "Sudan",
    "lat": 15.683517,
    "lng": 32.462887,
    "population": 2805396
  },
  {
    "name": "Toronto",
    "country": "Canada",
    "lat": 43.670277777778,
    "lng": -79.386666666667,
    "population": 2794356
  },
  {
    "name": "Douala",
    "country": "Cameroon",
    "lat": 4.05,
    "lng": 9.7,
    "population": 2768436
  },
  {
    "name": "Osaka",
    "country": "Japan",
    "lat": 34.69375,
    "lng": 135.50211111111,
    "population": 2751862
  },
  {
    "name": "Rome",
    "country": "Italy",
    "lat": 41.893055555556,
    "lng": 12.482777777778,
    "population": 2748109
  },
  {
    "name": "Chicago",
    "country": "United States",
    "lat": 41.881944444444,
    "lng": -87.627777777778,
    "population": 2746388
  },
  {
    "name": "Damascus",
    "country": "Syria",
    "lat": 33.513055555556,
    "lng": 36.291944444444,
    "population": 2685360
  },
  {
    "name": "Guayaquil",
    "country": "Ecuador",
    "lat": -2.19,
    "lng": -79.8875,
    "population": 2650288
  },
  {
    "name": "El Paso–Juárez",
    "country": "United States",
    "lat": 31.73944444,
    "lng": -106.48694444,
    "population": 2539946
  },
  {
    "name": "Havana",
    "country": "Cuba",
    "lat": 23.136666666667,
    "lng": -82.358888888889,
    "population": 2492618
  },
  {
    "name": "Luanda",
    "country": "Angola",
    "lat": -8.8383333333333,
    "lng": 13.234444444444,
    "population": 2487444
  },
  {
    "name": "Lusaka",
    "country": "Zambia",
    "lat": -15.416666666667,
    "lng": 28.283333333333,
    "population": 2467563
  },
  {
    "name": "Ouagadougou",
    "country": "Burkina Faso",
    "lat": 12.368611111111,
    "lng": -1.5275,
    "population": 2453496
  },
  {
    "name": "Beirut",
    "country": "Lebanon",
    "lat": 33.886944444444,
    "lng": 35.513055555556,
    "population": 2421354
  },
  {
    "name": "Algiers",
    "country": "Algeria",
    "lat": 36.776388888889,
    "lng": 3.0586111111111,
    "population": 2364230
  },
  {
    "name": "Houston",
    "country": "United States",
    "lat": 29.762777777778,
    "lng": -95.383055555556,
    "population": 2304580
  },
  {
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": 40.366655555556,
    "lng": 49.835183333333,
    "population": 2300500
  },
  {
    "name": "Caracas",
    "country": "Venezuela",
    "lat": 10.506111111111,
    "lng": -66.914444444444,
    "population": 2245744
  },
  {
    "name": "Almaty",
    "country": "Kazakhstan",
    "lat": 43.24,
    "lng": 76.915,
    "population": 2228675
  },
  {
    "name": "Santo Domingo",
    "country": "Dominican Republic",
    "lat": 18.4625,
    "lng": -69.936111111111,
    "population": 2201941
  },
  {
    "name": "Lomé",
    "country": "Togo",
    "lat": 6.13,
    "lng": 1.2158333333333,
    "population": 2188376
  },
  {
    "name": "Harare",
    "country": "Zimbabwe",
    "lat": -17.829166666667,
    "lng": 31.052222222222,
    "population": 2150000
  },
  {
    "name": "Brazzaville",
    "country": "Republic of the Congo",
    "lat": -4.2694444444444,
    "lng": 15.271111111111,
    "population": 2145783
  },
  {
    "name": "Phnom Penh",
    "country": "Cambodia",
    "lat": 11.569583333333,
    "lng": 104.92102777778,
    "population": 2129371
  },
  {
    "name": "Mogadishu",
    "country": "Somalia",
    "lat": 2.0391666666667,
    "lng": 45.341944444444,
    "population": 2120000
  },
  {
    "name": "Paris",
    "country": "France",
    "lat": 48.856666666667,
    "lng": 2.3522222222222,
    "population": 2113705
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.208333333333,
    "lng": 16.3725,
    "population": 2028289
  },
  {
    "name": "Minsk",
    "country": "Belarus",
    "lat": 53.902246,
    "lng": 27.561837,
    "population": 1996730
  },
  {
    "name": "Hamburg",
    "country": "Germany",
    "lat": 53.55,
    "lng": 10.0,
    "population": 1910160
  },
  {
    "name": "Katowice urban area",
    "country": "Poland",
    "lat": 50.25,
    "lng": 19.0,
    "population": 1903000
  },
  {
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.23,
    "lng": 21.011111111111,
    "population": 1862402
  },
  {
    "name": "Accra",
    "country": "Ghana",
    "lat": 5.55602,
    "lng": -0.1969,
    "population": 1782150
  },
  {
    "name": "Kigali",
    "country": "Rwanda",
    "lat": -1.9525,
    "lng": 30.115,
    "population": 1745555
  },
  {
    "name": "Barcelona",
    "country": "Spain",
    "lat": 41.3825,
    "lng": 2.1769444444444,
    "population": 1731649
  },
  {
    "name": "Bucharest",
    "country": "Romania",
    "lat": 44.413361111111,
    "lng": 26.097777777778,
    "population": 1716961
  },
  {
    "name": "Manhattan",
    "country": "United States",
    "lat": 40.728333333333,
    "lng": -73.994166666667,
    "population": 1694251
  },
  {
    "name": "Budapest",
    "country": "Hungary",
    "lat": 47.498333333333,
    "lng": 19.040833333333,
    "population": 1685209
  },
  {
    "name": "Kampala",
    "country": "Uganda",
    "lat": 0.31361111111111,
    "lng": 32.581111111111,
    "population": 1680600
  },
  {
    "name": "Conakry",
    "country": "Guinea",
    "lat": 9.5091666666667,
    "lng": -13.712222222222,
    "population": 1667864
  },
  {
    "name": "Phoenix",
    "country": "United States",
    "lat": 33.448333333333,
    "lng": -112.07388888889,
    "population": 1608139
  },
  {
    "name": "Philadelphia",
    "country": "United States",
    "lat": 39.952777777778,
    "lng": -75.163611111111,
    "population": 1603797
  },
  {
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1375,
    "lng": 11.575,
    "population": 1510378
  },
  {
    "name": "Niamey",
    "country": "Niger",
    "lat": 13.515,
    "lng": 2.1175,
    "population": 1496260
  },
  {
    "name": "The Bronx",
    "country": "United States",
    "lat": 40.846666666667,
    "lng": -73.873333333333,
    "population": 1472654
  },
  {
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.849166666667,
    "lng": 174.76527777778,
    "population": 1470100
  },
  {
    "name": "Nouakchott",
    "country": "Mauritania",
    "lat": 18.08581,
    "lng": -15.9785,
    "population": 1446761
  },
  {
    "name": "Dakar",
    "country": "Senegal",
    "lat": 14.672555555556,
    "lng": -17.432,
    "population": 1438725
  },
  {
    "name": "Metropolis of Lyon",
    "country": "France",
    "lat": 45.7574955,
    "lng": 4.8539736944444,
    "population": 1436354
  },
  {
    "name": "San Antonio",
    "country": "United States",
    "lat": 29.425,
    "lng": -98.493888888889,
    "population": 1434625
  },
  {
    "name": "Muscat",
    "country": "Oman",
    "lat": 23.613888888889,
    "lng": 58.592222222222,
    "population": 1421409
  },
  {
    "name": "Prague",
    "country": "Czech Republic",
    "lat": 50.0875,
    "lng": 14.421388888889,
    "population": 1397880
  },
  {
    "name": "Ulaanbaatar",
    "country": "Mongolia",
    "lat": 47.921357,
    "lng": 106.905515,
    "population": 1396288
  },
  {
    "name": "San Diego",
    "country": "United States",
    "lat": 32.715,
    "lng": -117.1625,
    "population": 1386932
  },
  {
    "name": "Milan",
    "country": "Italy",
    "lat": 45.466944444444,
    "lng": 9.19,
    "population": 1354196
  },
  {
    "name": "Dallas",
    "country": "United States",
    "lat": 32.779166666667,
    "lng": -96.808888888889,
    "population": 1304379
  },
  {
    "name": "Montevideo",
    "country": "Uruguay",
    "lat": -34.905916666667,
    "lng": -56.191311111111,
    "population": 1302954
  },
  {
    "name": "Tripoli",
    "country": "Libya",
    "lat": 32.87519,
    "lng": 13.18746,
    "population": 1293016
  },
  {
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.91,
    "lng": 47.525,
    "population": 1275207
  },
  {
    "name": "Brussels-Capital Region",
    "country": "Belgium",
    "lat": 50.846666666667,
    "lng": 4.3525,
    "population": 1255795
  },
  {
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": 42.697886,
    "lng": 23.321726,
    "population": 1205548
  },
  {
    "name": "Belgrade",
    "country": "Serbia",
    "lat": 44.817777777778,
    "lng": 20.456944444444,
    "population": 1197714
  },
  {
    "name": "Bishkek",
    "country": "Kyrgyzstan",
    "lat": 42.866666666667,
    "lng": 74.566666666667,
    "population": 1191000
  },
  {
    "name": "Doha",
    "country": "Qatar",
    "lat": 25.286205555556,
    "lng": 51.529436111111,
    "population": 1186023
  },
  {
    "name": "Maputo",
    "country": "Mozambique",
    "lat": -25.915277777778,
    "lng": 32.576388888889,
    "population": 1133200
  },
  {
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": 41.7225,
    "lng": 44.7925,
    "population": 1118035
  },
  {
    "name": "Yerevan",
    "country": "Armenia",
    "lat": 40.181388888889,
    "lng": 44.514444444444,
    "population": 1106300
  },
  {
    "name": "Tegucigalpa",
    "country": "Honduras",
    "lat": 14.105783333333,
    "lng": -87.204705555556,
    "population": 1055729
  },
  {
    "name": "Ashgabat",
    "country": "Turkmenistan",
    "lat": 37.95,
    "lng": 58.383333333333,
    "population": 1030063
  },
  {
    "name": "Monrovia",
    "country": "Liberia",
    "lat": 6.3105555555556,
    "lng": -10.804722222222,
    "population": 1021762
  },
  {
    "name": "San Jose",
    "country": "United States",
    "lat": 37.304166666667,
    "lng": -121.87277777778,
    "population": 1013240
  },
  {
    "name": "Guatemala City",
    "country": "Guatemala",
    "lat": 14.641666666667,
    "lng": -90.513333333333,
    "population": 994938
  },
  {
    "name": "Lilongwe",
    "country": "Malawi",
    "lat": -13.96692,
    "lng": 33.78725,
    "population": 989318
  },
  {
    "name": "Port-au-Prince",
    "country": "Haiti",
    "lat": 18.546944444444,
    "lng": -72.340277777778,
    "population": 987310
  },
  {
    "name": "Stockholm",
    "country": "Sweden",
    "lat": 59.329444444444,
    "lng": 18.068611111111,
    "population": 984748
  },
  {
    "name": "Asmara",
    "country": "Eritrea",
    "lat": 15.333333333333,
    "lng": 38.916666666667,
    "population": 963000
  },
  {
    "name": "Austin",
    "country": "United States",
    "lat": 30.3,
    "lng": -97.733333333333,
    "population": 961855
  },
  {
    "name": "Freetown",
    "country": "Sierra Leone",
    "lat": 8.4872222222222,
    "lng": -13.235555555556,
    "population": 951000
  },
  {
    "name": "Jacksonville",
    "country": "United States",
    "lat": 30.316666666667,
    "lng": -81.65,
    "population": 949611
  },
  {
    "name": "Dushanbe",
    "country": "Tajikistan",
    "lat": 38.573055555556,
    "lng": 68.786388888889,
    "population": 948251
  },
  {
    "name": "Kingston",
    "country": "Jamaica",
    "lat": 17.971388888889,
    "lng": -76.793055555556,
    "population": 937700
  },
  {
    "name": "Managua",
    "country": "Nicaragua",
    "lat": 12.154680555556,
    "lng": -86.273725,
    "population": 937489
  },
  {
    "name": "Jerusalem",
    "country": "Israel",
    "lat": 31.778888888889,
    "lng": 35.225555555556,
    "population": 936425
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.366666666667,
    "lng": 4.8833333333333,
    "population": 921468
  },
  {
    "name": "Fort Worth",
    "country": "United States",
    "lat": 32.756388888889,
    "lng": -97.3325,
    "population": 918915
  },
  {
    "name": "Naples",
    "country": "Italy",
    "lat": 40.835833333333,
    "lng": 14.248611111111,
    "population": 913462
  },
  {
    "name": "Columbus",
    "country": "United States",
    "lat": 39.962222222222,
    "lng": -83.000555555556,
    "population": 905748
  },
  {
    "name": "Libreville",
    "country": "Gabon",
    "lat": 0.40777777777778,
    "lng": 9.4402777777778,
    "population": 899000
  },
  {
    "name": "Bangui",
    "country": "Central African Republic",
    "lat": 4.37325,
    "lng": 18.562833333333,
    "population": 889231
  },
  {
    "name": "Indianapolis",
    "country": "United States",
    "lat": 39.768611111111,
    "lng": -86.158055555556,
    "population": 887642
  },
  {
    "name": "Marseille",
    "country": "France",
    "lat": 43.296666666667,
    "lng": 5.3763888888889,
    "population": 886040
  },
  {
    "name": "Charlotte",
    "country": "United States",
    "lat": 35.226944444444,
    "lng": -80.843333333333,
    "population": 874579
  },
  {
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.7775,
    "lng": -122.41638888889,
    "population": 873965
  },
  {
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.71,
    "lng": 85.32,
    "population": 845767
  },
  {
    "name": "Kraków",
    "country": "Poland",
    "lat": 50.061388888889,
    "lng": 19.937222222222,
    "population": 804237
  },
  {
    "name": "Zagreb",
    "country": "Croatia",
    "lat": 45.813055555556,
    "lng": 15.977222222222,
    "population": 767131
  },
  {
    "name": "Seattle",
    "country": "United States",
    "lat": 47.605,
    "lng": -122.33,
    "population": 737015
  },
  {
    "name": "Oslo",
    "country": "Norway",
    "lat": 59.913333333333,
    "lng": 10.738888888889,
    "population": 717710
  },
  {
    "name": "Denver",
    "country": "United States",
    "lat": 39.739166666667,
    "lng": -104.98472222222,
    "population": 715522
  },
  {
    "name": "Washington, D.C.",
    "country": "United States",
    "lat": 38.895,
    "lng": -77.036666666667,
    "population": 689545
  },
  {
    "name": "Nashville",
    "country": "United States",
    "lat": 36.162222222222,
    "lng": -86.774444444444,
    "population": 689447
  },
  {
    "name": "Helsinki",
    "country": "Finland",
    "lat": 60.170833333333,
    "lng": 24.9375,
    "population": 686595
  },
  {
    "name": "Oklahoma City",
    "country": "United States",
    "lat": 35.482222222222,
    "lng": -97.535277777778,
    "population": 681054
  },
  {
    "name": "El Paso",
    "country": "United States",
    "lat": 31.759166666667,
    "lng": -106.48861111111,
    "population": 678815
  },
  {
    "name": "Boston",
    "country": "United States",
    "lat": 42.360277777778,
    "lng": -71.057777777778,
    "population": 675647
  },
  {
    "name": "Gothenburg",
    "country": "Sweden",
    "lat": 57.7075,
    "lng": 11.9675,
    "population": 674529
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": 55.676111111111,
    "lng": 12.568888888889,
    "population": 667099
  },
  {
    "name": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.92,
    "lng": 4.48,
    "population": 664311
  },
  {
    "name": "Bujumbura",
    "country": "Burundi",
    "lat": -3.3825,
    "lng": 29.361111111111,
    "population": 658859
  },
  {
    "name": "Portland",
    "country": "United States",
    "lat": 45.516666666667,
    "lng": -122.66666666667,
    "population": 652503
  },
  {
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": 6.9266666666667,
    "lng": 79.860555555556,
    "population": 647557
  },
  {
    "name": "Athens",
    "country": "Greece",
    "lat": 37.984166666667,
    "lng": 23.728055555556,
    "population": 643452
  },
  {
    "name": "Las Vegas",
    "country": "United States",
    "lat": 36.167222222222,
    "lng": -115.14861111111,
    "population": 641903
  },
  {
    "name": "Tunis",
    "country": "Tunisia",
    "lat": 36.800833333333,
    "lng": 10.18,
    "population": 602560
  },
  {
    "name": "Riga",
    "country": "Latvia",
    "lat": 56.9475,
    "lng": 24.106944444444,
    "population": 595053
  },
  {
    "name": "Dublin",
    "country": "Ireland",
    "lat": 53.349722222222,
    "lng": -6.2602777777778,
    "population": 592713
  },
  {
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": 54.687222222222,
    "lng": 25.28,
    "population": 581475
  },
  {
    "name": "The Hague",
    "country": "Netherlands",
    "lat": 52.08,
    "lng": 4.31,
    "population": 548320
  },
  {
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.708042,
    "lng": -9.139016,
    "population": 545796
  },
  {
    "name": "Antwerp",
    "country": "Belgium",
    "lat": 51.221111111111,
    "lng": 4.3997222222222,
    "population": 529247
  },
  {
    "name": "Dublin City",
    "country": "Ireland",
    "lat": 53.35512,
    "lng": -6.24922,
    "population": 506211
  },
  {
    "name": "Juba",
    "country": "South Sudan",
    "lat": 4.8538888888889,
    "lng": 31.5825,
    "population": 500088
  },
  {
    "name": "Bissau",
    "country": "Guinea-Bissau",
    "lat": 11.86,
    "lng": -15.583333333333,
    "population": 492004
  },
  {
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": 48.144722222222,
    "lng": 17.112777777778,
    "population": 479389
  },
  {
    "name": "Asunción",
    "country": "Paraguay",
    "lat": -25.28,
    "lng": -57.634444444444,
    "population": 462241
  },
  {
    "name": "Tallinn",
    "country": "Estonia",
    "lat": 59.437222222222,
    "lng": 24.745,
    "population": 457572
  },
  {
    "name": "Windhoek",
    "country": "Namibia",
    "lat": -22.57,
    "lng": 17.083611111111,
    "population": 431000
  },
  {
    "name": "Skopje",
    "country": "North Macedonia",
    "lat": 41.996111111111,
    "lng": 21.431666666667,
    "population": 422540
  },
  {
    "name": "Panama City",
    "country": "Panama",
    "lat": 8.9711111111111,
    "lng": -79.534722222222,
    "population": 410354
  },
  {
    "name": "Brno",
    "country": "Czech Republic",
    "lat": 49.195277777778,
    "lng": 16.608333333333,
    "population": 402739
  },
  {
    "name": "Tirana",
    "country": "Albania",
    "lat": 41.328333333333,
    "lng": 19.818055555556,
    "population": 389323
  },
  {
    "name": "Maseru",
    "country": "Lesotho",
    "lat": -29.31667,
    "lng": 27.48333,
    "population": 343541
  },
  {
    "name": "Malmö",
    "country": "Sweden",
    "lat": 55.583333333333,
    "lng": 13.0,
    "population": 339316
  },
  {
    "name": "San José",
    "country": "Costa Rica",
    "lat": 9.9327388888889,
    "lng": -84.079613888889,
    "population": 335007
  },
  {
    "name": "San Salvador",
    "country": "El Salvador",
    "lat": 13.697597222222,
    "lng": -89.191155555556,
    "population": 330543
  },
  {
    "name": "Plovdiv",
    "country": "Bulgaria",
    "lat": 42.142086,
    "lng": 24.741454,
    "population": 329489
  },
  {
    "name": "Varna",
    "country": "Bulgaria",
    "lat": 43.211375,
    "lng": 27.91108,
    "population": 318737
  },
  {
    "name": "Port Moresby",
    "country": "Papua New Guinea",
    "lat": -9.4788888888889,
    "lng": 147.14944444444,
    "population": 317374
  },
  {
    "name": "Espoo",
    "country": "Finland",
    "lat": 60.205555555556,
    "lng": 24.655555555556,
    "population": 314821
  },
  {
    "name": "Thessaloniki",
    "country": "Greece",
    "lat": 40.640277777778,
    "lng": 22.935555555556,
    "population": 309617
  },
  {
    "name": "Kaunas",
    "country": "Lithuania",
    "lat": 54.9,
    "lng": 23.933333333333,
    "population": 305120
  },
  {
    "name": "Manama",
    "country": "Bahrain",
    "lat": 26.216666666667,
    "lng": 50.583333333333,
    "population": 297502
  },
  {
    "name": "Graz",
    "country": "Austria",
    "lat": 47.070833333333,
    "lng": 15.438611111111,
    "population": 292630
  },
  {
    "name": "Aarhus",
    "country": "Denmark",
    "lat": 56.156388888889,
    "lng": 10.209722222222,
    "population": 290598
  },
  {
    "name": "Bata",
    "country": "Equatorial Guinea",
    "lat": 1.865,
    "lng": 9.77,
    "population": 290000
  },
  {
    "name": "Cluj-Napoca",
    "country": "Romania",
    "lat": 46.76891,
    "lng": 23.59066,
    "population": 286598
  },
  {
    "name": "Ljubljana",
    "country": "Slovenia",
    "lat": 46.051388888889,
    "lng": 14.506111111111,
    "population": 284293
  },
  {
    "name": "Ostrava",
    "country": "Czech Republic",
    "lat": 49.835555555556,
    "lng": 18.2925,
    "population": 283187
  },
  {
    "name": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "lat": 43.856388888889,
    "lng": 18.413055555556,
    "population": 275524
  },
  {
    "name": "Iași",
    "country": "Romania",
    "lat": 47.162222222222,
    "lng": 27.588888888889,
    "population": 271692
  },
  {
    "name": "Tampere",
    "country": "Finland",
    "lat": 61.498055555556,
    "lng": 23.76,
    "population": 255333
  },
  {
    "name": "Gaborone",
    "country": "Botswana",
    "lat": -24.656944444444,
    "lng": 25.908611111111,
    "population": 235884
  },
  {
    "name": "Georgetown",
    "country": "Guyana",
    "lat": 6.8058333333333,
    "lng": -58.150833333333,
    "population": 235017
  },
  {
    "name": "Porto",
    "country": "Portugal",
    "lat": 41.15,
    "lng": -8.6108333333333,
    "population": 231800
  },
  {
    "name": "Nassau",
    "country": "The Bahamas",
    "lat": 25.078055555556,
    "lng": -77.338611111111,
    "population": 227940
  },
  {
    "name": "Paramaribo",
    "country": "Suriname",
    "lat": 5.8666666666667,
    "lng": -55.166666666667,
    "population": 223757
  },
  {
    "name": "Košice",
    "country": "Slovakia",
    "lat": 48.716666666667,
    "lng": 21.25,
    "population": 223678
  },
  {
    "name": "Cork",
    "country": "Ireland",
    "lat": 51.9,
    "lng": -8.4730555555556,
    "population": 222333
  },
  {
    "name": "Dili",
    "country": "Timor-Leste",
    "lat": -8.5536111111111,
    "lng": 125.57833333333,
    "population": 222323
  },
  {
    "name": "Linz",
    "country": "Austria",
    "lat": 48.305833333333,
    "lng": 14.286388888889,
    "population": 211944
  },
  {
    "name": "Debrecen",
    "country": "Hungary",
    "lat": 47.53,
    "lng": 21.639166666667,
    "population": 202130
  },
  {
    "name": "Odense",
    "country": "Denmark",
    "lat": 55.4,
    "lng": 10.383333333333,
    "population": 185480
  },
  {
    "name": "Braga",
    "country": "Portugal",
    "lat": 41.550277777778,
    "lng": -8.42,
    "population": 181494
  },
  {
    "name": "Patras",
    "country": "Greece",
    "lat": 38.25,
    "lng": 21.733333333333,
    "population": 173600
  },
  {
    "name": "Split",
    "country": "Croatia",
    "lat": 43.51,
    "lng": 16.44,
    "population": 160577
  },
  {
    "name": "Praia",
    "country": "Cape Verde",
    "lat": 14.917719444444,
    "lng": -23.509155555556,
    "population": 159050
  },
  {
    "name": "Klaipėda",
    "country": "Lithuania",
    "lat": 55.7125,
    "lng": 21.135,
    "population": 158420
  },
  {
    "name": "Szeged",
    "country": "Hungary",
    "lat": 46.25,
    "lng": 20.166666666667,
    "population": 157282
  },
  {
    "name": "Podgorica",
    "country": "Montenegro",
    "lat": 42.441388888889,
    "lng": 19.262777777778,
    "population": 150977
  },
  {
    "name": "Port Louis",
    "country": "Mauritius",
    "lat": -20.161944444444,
    "lng": 57.498888888889,
    "population": 149194
  },
  {
    "name": "Reykjavík",
    "country": "Iceland",
    "lat": 64.1475,
    "lng": -21.935,
    "population": 138772
  },
  {
    "name": "Luxembourg",
    "country": "Luxembourg",
    "lat": 49.610555555556,
    "lng": 6.1327777777778,
    "population": 137696
  },
  {
    "name": "Malé",
    "country": "Maldives",
    "lat": 4.175,
    "lng": 73.508333333333,
    "population": 133019
  },
  {
    "name": "Thimphu",
    "country": "Bhutan",
    "lat": 27.47135,
    "lng": 89.63367,
    "population": 114551
  },
  {
    "name": "Maribor",
    "country": "Slovenia",
    "lat": 46.55,
    "lng": 15.633333333333,
    "population": 114301
  },
  {
    "name": "Petržalka",
    "country": "Slovakia",
    "lat": 48.133333333333,
    "lng": 17.116666666667,
    "population": 112380
  },
  {
    "name": "Manzini",
    "country": "Eswatini",
    "lat": -26.483333333333,
    "lng": 31.366666666667,
    "population": 110508
  },
  {
    "name": "Limassol",
    "country": "Cyprus",
    "lat": 34.674997,
    "lng": 33.044286,
    "population": 107970
  },
  {
    "name": "Rijeka",
    "country": "Croatia",
    "lat": 45.333333333333,
    "lng": 14.433333333333,
    "population": 107964
  },
  {
    "name": "Bridgetown",
    "country": "Barbados",
    "lat": 13.0975,
    "lng": -59.616666666667,
    "population": 98511
  },
  {
    "name": "Moroni",
    "country": "Comoros",
    "lat": -11.703611111111,
    "lng": 43.253611111111,
    "population": 85400
  },
  {
    "name": "Honiara",
    "country": "Solomon Islands",
    "lat": -9.433333,
    "lng": 159.95,
    "population": 84520
  },
  {
    "name": "Chaguanas",
    "country": "Trinidad and Tobago",
    "lat": 10.514444444444,
    "lng": -61.4075,
    "population": 83489
  },
  {
    "name": "São Tomé",
    "country": "São Tomé and Príncipe",
    "lat": 0.3375,
    "lng": 6.7283333333333,
    "population": 65468
  },
  {
    "name": "Belize City",
    "country": "Belize",
    "lat": 17.498611111111,
    "lng": -88.188611111111,
    "population": 63999
  },
  {
    "name": "Nicosia",
    "country": "Cyprus",
    "lat": 35.1725,
    "lng": 33.365,
    "population": 56848
  },
  {
    "name": "Bandar Seri Begawan",
    "country": "Brunei",
    "lat": 4.9166666666667,
    "lng": 114.91666666667,
    "population": 50000
  },
  {
    "name": "Port Vila",
    "country": "Vanuatu",
    "lat": -17.73333,
    "lng": 168.316667,
    "population": 49034
  },
  {
    "name": "Monaco",
    "country": "Monaco",
    "lat": 43.731111111111,
    "lng": 7.42,
    "population": 38423
  },
  {
    "name": "Apia",
    "country": "Samoa",
    "lat": -13.833333333333,
    "lng": -171.83333333333,
    "population": 37708
  },
  {
    "name": "Victoria",
    "country": "Seychelles",
    "lat": -4.6236111111111,
    "lng": 55.454444444444,
    "population": 24701
  },
  {
    "name": "Kingstown",
    "country": "Saint Vincent and the Grenadines",
    "lat": 13.15527,
    "lng": -61.22742,
    "population": 24518
  },
  {
    "name": "Andorra la Vella",
    "country": "Andorra",
    "lat": 42.507222222222,
    "lng": 1.5222222222222,
    "population": 24042
  },
  {
    "name": "Nukuʻalofa",
    "country": "Tonga",
    "lat": -21.1343401,
    "lng": -175.201808,
    "population": 23221
  },
  {
    "name": "Castries",
    "country": "Saint Lucia",
    "lat": 14.016666666667,
    "lng": -60.983333333333,
    "population": 20000
  },
  {
    "name": "Roseau",
    "country": "Dominica",
    "lat": 15.3,
    "lng": -61.383333333333,
    "population": 16571
  },
  {
    "name": "Basseterre",
    "country": "Saint Kitts and Nevis",
    "lat": 17.298333333333,
    "lng": -62.734166666667,
    "population": 12920
  },
  {
    "name": "Koror",
    "country": "Palau",
    "lat": 7.34333,
    "lng": 134.48042,
    "population": 8744
  },
  {
    "name": "Dogana",
    "country": "San Marino",
    "lat": 43.95,
    "lng": 12.5,
    "population": 7000
  },
  {
    "name": "Funafuti",
    "country": "Tuvalu",
    "lat": -8.5047777777778,
    "lng": 179.11736111111,
    "population": 6025
  },
  {
    "name": "Schaan",
    "country": "Liechtenstein",
    "lat": 47.166666666667,
    "lng": 9.5166666666667,
    "population": 5998
  },
  {
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.84668,
    "lng": 4.3525,
    "population": 0
  }
];
