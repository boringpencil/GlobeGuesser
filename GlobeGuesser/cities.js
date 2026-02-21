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
    "name": "Mexico City",
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
    "name": "New York",
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
    "name": "Buenos Aires",
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
    "name": "Rio de Janeiro",
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
    "name": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.1477777777778,
    "lng": 101.69527777778,
    "population": 9000280
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
    "name": "Johannesburg",
    "country": "South Africa",
    "lat": -26.204970437308,
    "lng": 28.040605722647,
    "population": 4949347
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
    "name": "eThekwini",
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
    "name": "Ekurhuleni",
    "country": "South Africa",
    "lat": -26.1989,
    "lng": 28.31262,
    "population": 3379104
  },
  {
    "name": "Tshwane",
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
    "name": "Kaohsiung",
    "country": "Taiwan",
    "lat": 22.615,
    "lng": 120.2975,
    "population": 2733964
  },
  {
    "name": "Brisbane",
    "country": "Australia",
    "lat": -27.467777777778,
    "lng": 153.02777777778,
    "population": 2706966
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
    "name": "Chittagong",
    "country": "Bangladesh",
    "lat": 22.335,
    "lng": 91.8325,
    "population": 2581643
  },
  {
    "name": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7275,
    "lng": -38.5275,
    "population": 2578483
  },
  {
    "name": "Ibadan",
    "country": "Nigeria",
    "lat": 7.3775,
    "lng": 3.9058333333333,
    "population": 2550593
  },
  {
    "name": "El Paso–Juárez",
    "country": "United States",
    "lat": 31.73944444,
    "lng": -106.48694444,
    "population": 2539946
  },
  {
    "name": "Medellín",
    "country": "Colombia",
    "lat": 6.250200154879,
    "lng": -75.567584500697,
    "population": 2529403
  },
  {
    "name": "Waqooyi-Bari",
    "country": "Somalia",
    "lat": 9.13333333,
    "lng": 48.41666667,
    "population": 2500000
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
    "name": "Cali",
    "country": "Colombia",
    "lat": 3.44,
    "lng": -76.519722222222,
    "population": 2471474
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
    "name": "Daegu",
    "country": "South Korea",
    "lat": 35.871666666667,
    "lng": 128.60166666667,
    "population": 2444412
  },
  {
    "name": "Yaoundé",
    "country": "Cameroon",
    "lat": 3.8577777777778,
    "lng": 11.518055555556,
    "population": 2440462
  },
  {
    "name": "Antalya",
    "country": "Turkey",
    "lat": 36.90812,
    "lng": 30.69556,
    "population": 2426356
  },
  {
    "name": "Beirut",
    "country": "Lebanon",
    "lat": 33.886944444444,
    "lng": 35.513055555556,
    "population": 2421354
  },
  {
    "name": "Salvador",
    "country": "Brazil",
    "lat": -12.983055555556,
    "lng": -38.492777777778,
    "population": 2417678
  },
  {
    "name": "Nagpur",
    "country": "India",
    "lat": 21.149722222222,
    "lng": 79.080555555556,
    "population": 2405665
  },
  {
    "name": "Algiers",
    "country": "Algeria",
    "lat": 36.776388888889,
    "lng": 3.0586111111111,
    "population": 2364230
  },
  {
    "name": "Nagoya",
    "country": "Japan",
    "lat": 35.181388888889,
    "lng": 136.90638888889,
    "population": 2326844
  },
  {
    "name": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.928055555556,
    "lng": -43.941944444444,
    "population": 2315560
  },
  {
    "name": "Houston",
    "country": "United States",
    "lat": 29.762777777778,
    "lng": -95.383055555556,
    "population": 2304580
  },
  {
    "name": "Manaus",
    "country": "Brazil",
    "lat": -3.1188888888889,
    "lng": -60.021666666667,
    "population": 2303732
  },
  {
    "name": "Baku",
    "country": "Azerbaijan",
    "lat": 40.366655555556,
    "lng": 49.835183333333,
    "population": 2300500
  },
  {
    "name": "Konya",
    "country": "Turkey",
    "lat": 37.8725,
    "lng": 32.491944444444,
    "population": 2296347
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
    "name": "Perth",
    "country": "Australia",
    "lat": -31.955833333333,
    "lng": 115.85972222222,
    "population": 2141834
  },
  {
    "name": "Phnom Penh",
    "country": "Cambodia",
    "lat": 11.569583333333,
    "lng": 104.92102777778,
    "population": 2129371
  },
  {
    "name": "Haiphong",
    "country": "Vietnam",
    "lat": 20.8,
    "lng": 106.66666666667,
    "population": 2124500
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
    "name": "Rawalpindi",
    "country": "Pakistan",
    "lat": 33.6007,
    "lng": 73.0679,
    "population": 2098231
  },
  {
    "name": "Vadodara",
    "country": "India",
    "lat": 22.3,
    "lng": 73.2,
    "population": 2065771
  },
  {
    "name": "Rajkot",
    "country": "India",
    "lat": 22.296908333333,
    "lng": 70.798363888889,
    "population": 2043000
  },
  {
    "name": "Visakhapatnam",
    "country": "India",
    "lat": 17.693888888889,
    "lng": 83.292222222222,
    "population": 2035922
  },
  {
    "name": "Vienna",
    "country": "Austria",
    "lat": 48.208333333333,
    "lng": 16.3725,
    "population": 2028289
  },
  {
    "name": "Gujranwala",
    "country": "Pakistan",
    "lat": 32.15,
    "lng": 74.183333333333,
    "population": 2027001
  },
  {
    "name": "Aleppo",
    "country": "Syria",
    "lat": 36.2,
    "lng": 37.16,
    "population": 2003671
  },
  {
    "name": "Minsk",
    "country": "Belarus",
    "lat": 53.902246,
    "lng": 27.561837,
    "population": 1996730
  },
  {
    "name": "Indore",
    "country": "India",
    "lat": 22.718611111111,
    "lng": 75.855,
    "population": 1994397
  },
  {
    "name": "Şanlıurfa",
    "country": "Turkey",
    "lat": 37.158333333333,
    "lng": 38.791666666667,
    "population": 1985753
  },
  {
    "name": "Kananga",
    "country": "Democratic Republic of the Congo",
    "lat": -5.8961111111111,
    "lng": 22.416666666667,
    "population": 1971704
  },
  {
    "name": "Peshawar",
    "country": "Pakistan",
    "lat": 34.014444444444,
    "lng": 71.5675,
    "population": 1970042
  },
  {
    "name": "Tijuana",
    "country": "Mexico",
    "lat": 32.536447,
    "lng": -117.037155,
    "population": 1964788
  },
  {
    "name": "Isfahan",
    "country": "Iran",
    "lat": 32.6525,
    "lng": 51.675,
    "population": 1961260
  },
  {
    "name": "Sapporo",
    "country": "Japan",
    "lat": 43.061944444444,
    "lng": 141.35444444444,
    "population": 1959313
  },
  {
    "name": "Kocaeli",
    "country": "Turkey",
    "lat": 40.764444444444,
    "lng": 29.945,
    "population": 1953035
  },
  {
    "name": "Irbid",
    "country": "Jordan",
    "lat": 32.555555555556,
    "lng": 35.85,
    "population": 1911600
  },
  {
    "name": "Hamburg",
    "country": "Germany",
    "lat": 53.55,
    "lng": 10.0,
    "population": 1910160
  },
  {
    "name": "Katowice",
    "country": "Poland",
    "lat": 50.25,
    "lng": 19.0,
    "population": 1903000
  },
  {
    "name": "Tainan",
    "country": "Taiwan",
    "lat": 22.99,
    "lng": 120.185,
    "population": 1874686
  },
  {
    "name": "Multan",
    "country": "Pakistan",
    "lat": 30.197777777778,
    "lng": 71.471111111111,
    "population": 1871843
  },
  {
    "name": "Warsaw",
    "country": "Poland",
    "lat": 52.23,
    "lng": 21.011111111111,
    "population": 1862402
  },
  {
    "name": "Davao City",
    "country": "Philippines",
    "lat": 7.0662333333333,
    "lng": 125.60944166667,
    "population": 1848947
  },
  {
    "name": "Montreal",
    "country": "Canada",
    "lat": 45.5033426,
    "lng": -73.5868411,
    "population": 1800055
  },
  {
    "name": "Bhopal",
    "country": "India",
    "lat": 23.25,
    "lng": 77.416666666667,
    "population": 1798218
  },
  {
    "name": "Mosul",
    "country": "Iraq",
    "lat": 36.366666666667,
    "lng": 43.116666666667,
    "population": 1792000
  },
  {
    "name": "Lubumbashi",
    "country": "Democratic Republic of the Congo",
    "lat": -11.664166666667,
    "lng": 27.482777777778,
    "population": 1786397
  },
  {
    "name": "Accra",
    "country": "Ghana",
    "lat": 5.55602,
    "lng": -0.1969,
    "population": 1782150
  },
  {
    "name": "Benin",
    "country": "Nigeria",
    "lat": 6.3176,
    "lng": 5.6145,
    "population": 1780000
  },
  {
    "name": "Curitiba",
    "country": "Brazil",
    "lat": -25.429722222222,
    "lng": -49.271944444444,
    "population": 1773718
  },
  {
    "name": "Adana",
    "country": "Turkey",
    "lat": 37.00262,
    "lng": 35.31346,
    "population": 1765981
  },
  {
    "name": "Garoua",
    "country": "Cameroon",
    "lat": 9.3,
    "lng": 13.4,
    "population": 1750000
  },
  {
    "name": "Kigali",
    "country": "Rwanda",
    "lat": -1.9525,
    "lng": 30.115,
    "population": 1745555
  },
  {
    "name": "Diyarbakır",
    "country": "Turkey",
    "lat": 37.910833333333,
    "lng": 40.236666666667,
    "population": 1732396
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
    "name": "Abuja",
    "country": "Nigeria",
    "lat": 9.0555555555556,
    "lng": 7.4913888888889,
    "population": 1693400
  },
  {
    "name": "Budapest",
    "country": "Hungary",
    "lat": 47.498333333333,
    "lng": 19.040833333333,
    "population": 1685209
  },
  {
    "name": "Patna",
    "country": "India",
    "lat": 25.61,
    "lng": 85.141388888889,
    "population": 1684222
  },
  {
    "name": "Belgrade",
    "country": "Serbia",
    "lat": 44.81666668,
    "lng": 20.46666668,
    "population": 1681405
  },
  {
    "name": "Gaziantep",
    "country": "Turkey",
    "lat": 37.062777777778,
    "lng": 37.379166666667,
    "population": 1680723
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
    "name": "Masvingo",
    "country": "Zimbabwe",
    "lat": -20.074444444444,
    "lng": 30.832777777778,
    "population": 1638528
  },
  {
    "name": "Novosibirsk",
    "country": "Russia",
    "lat": 55.033333333333,
    "lng": 82.916666666667,
    "population": 1637266
  },
  {
    "name": "Ludhiana",
    "country": "India",
    "lat": 30.908333333333,
    "lng": 75.848611111111,
    "population": 1618879
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
    "name": "Fukuoka",
    "country": "Japan",
    "lat": 33.59,
    "lng": 130.40166666667,
    "population": 1603043
  },
  {
    "name": "Agra",
    "country": "India",
    "lat": 27.18,
    "lng": 78.02,
    "population": 1585705
  },
  {
    "name": "León de Los Aldama",
    "country": "Mexico",
    "lat": 21.121944444444,
    "lng": -101.68333333333,
    "population": 1579803
  },
  {
    "name": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.451111111111,
    "lng": 54.396944444444,
    "population": 1570000
  },
  {
    "name": "Madurai",
    "country": "India",
    "lat": 9.9196611111111,
    "lng": 78.119394444444,
    "population": 1561129
  },
  {
    "name": "Jamshedpur",
    "country": "India",
    "lat": 22.8,
    "lng": 86.183333333333,
    "population": 1558000
  },
  {
    "name": "Maracaibo",
    "country": "Venezuela",
    "lat": 10.633333333333,
    "lng": -71.633333333333,
    "population": 1551539
  },
  {
    "name": "Kobe",
    "country": "Japan",
    "lat": 34.690166666667,
    "lng": 135.19544444444,
    "population": 1521707
  },
  {
    "name": "Munich",
    "country": "Germany",
    "lat": 48.1375,
    "lng": 11.575,
    "population": 1510378
  },
  {
    "name": "Córdoba",
    "country": "Argentina",
    "lat": -31.416666666667,
    "lng": -64.183333333333,
    "population": 1505250
  },
  {
    "name": "Niamey",
    "country": "Niger",
    "lat": 13.515,
    "lng": 2.1175,
    "population": 1496260
  },
  {
    "name": "Gwangju",
    "country": "South Korea",
    "lat": 35.166666666667,
    "lng": 126.91666666667,
    "population": 1490092
  },
  {
    "name": "Recife",
    "country": "Brazil",
    "lat": -8.0538888888889,
    "lng": -34.880833333333,
    "population": 1488920
  },
  {
    "name": "Nashik",
    "country": "India",
    "lat": 20.0,
    "lng": 73.783333333333,
    "population": 1486053
  },
  {
    "name": "Valencia",
    "country": "Venezuela",
    "lat": 10.166666666667,
    "lng": -68.0,
    "population": 1484430
  },
  {
    "name": "Onitsha",
    "country": "Nigeria",
    "lat": 6.1666666666667,
    "lng": 6.7833333333333,
    "population": 1483000
  },
  {
    "name": "Daejeon",
    "country": "South Korea",
    "lat": 36.35,
    "lng": 127.385,
    "population": 1475221
  },
  {
    "name": "Auckland",
    "country": "New Zealand",
    "lat": -36.849166666667,
    "lng": 174.76527777778,
    "population": 1470100
  },
  {
    "name": "Yekaterinburg",
    "country": "Russia",
    "lat": 56.835555555556,
    "lng": 60.612777777778,
    "population": 1468833
  },
  {
    "name": "Kyoto",
    "country": "Japan",
    "lat": 35.011611111111,
    "lng": 135.76811111111,
    "population": 1463723
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
    "name": "Goiânia",
    "country": "Brazil",
    "lat": -16.680555555556,
    "lng": -49.256388888889,
    "population": 1437366
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
    "name": "Kharkiv",
    "country": "Ukraine",
    "lat": 49.9925,
    "lng": 36.231111111111,
    "population": 1421125
  },
  {
    "name": "Pointe-Noire",
    "country": "Republic of the Congo",
    "lat": -4.7975,
    "lng": 11.850277777778,
    "population": 1420612
  },
  {
    "name": "Medina",
    "country": "Saudi Arabia",
    "lat": 24.47,
    "lng": 39.61,
    "population": 1411599
  },
  {
    "name": "Faridabad",
    "country": "India",
    "lat": 28.416666666667,
    "lng": 77.3,
    "population": 1404653
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
    "name": "Kayseri",
    "country": "Turkey",
    "lat": 38.7225,
    "lng": 35.4875,
    "population": 1389680
  },
  {
    "name": "Porto Alegre",
    "country": "Brazil",
    "lat": -30.032777777778,
    "lng": -51.23,
    "population": 1388794
  },
  {
    "name": "Adelaide",
    "country": "Australia",
    "lat": -34.9275,
    "lng": 138.6,
    "population": 1387290
  },
  {
    "name": "Guadalajara",
    "country": "Mexico",
    "lat": 20.676388888889,
    "lng": -103.34222222222,
    "population": 1385621
  },
  {
    "name": "Samsun",
    "country": "Turkey",
    "lat": 41.286666666667,
    "lng": 36.33,
    "population": 1368488
  },
  {
    "name": "Kisangani",
    "country": "Democratic Republic of the Congo",
    "lat": 0.51527777777778,
    "lng": 25.191111111111,
    "population": 1366000
  },
  {
    "name": "Milan",
    "country": "Italy",
    "lat": 45.466944444444,
    "lng": 9.19,
    "population": 1354196
  },
  {
    "name": "Santiago de los Caballeros",
    "country": "Dominican Republic",
    "lat": 19.45,
    "lng": -70.7,
    "population": 1343423
  },
  {
    "name": "Kazan",
    "country": "Russia",
    "lat": 55.790833333333,
    "lng": 49.114444444444,
    "population": 1329825
  },
  {
    "name": "Barranquilla",
    "country": "Colombia",
    "lat": 10.983333333333,
    "lng": -74.801944444444,
    "population": 1326588
  },
  {
    "name": "Basra",
    "country": "Iraq",
    "lat": 30.515,
    "lng": 47.81,
    "population": 1326564
  },
  {
    "name": "Calgary",
    "country": "Canada",
    "lat": 51.05,
    "lng": -114.06666666667,
    "population": 1306784
  },
  {
    "name": "Meerut",
    "country": "India",
    "lat": 28.98,
    "lng": 77.706388888889,
    "population": 1305429
  },
  {
    "name": "Dallas",
    "country": "United States",
    "lat": 32.779166666667,
    "lng": -96.808888888889,
    "population": 1304379
  },
  {
    "name": "Belém",
    "country": "Brazil",
    "lat": -1.4558333333333,
    "lng": -48.503888888889,
    "population": 1303403
  },
  {
    "name": "Montevideo",
    "country": "Uruguay",
    "lat": -34.905916666667,
    "lng": -56.191311111111,
    "population": 1302954
  },
  {
    "name": "Nova Iguaçu",
    "country": "Brazil",
    "lat": -22.758888888889,
    "lng": -43.450833333333,
    "population": 1297704
  },
  {
    "name": "Tripoli",
    "country": "Libya",
    "lat": 32.87519,
    "lng": 13.18746,
    "population": 1293016
  },
  {
    "name": "Tangier",
    "country": "Morocco",
    "lat": 35.776666666667,
    "lng": -5.8038888888889,
    "population": 1275428
  },
  {
    "name": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.91,
    "lng": 47.525,
    "population": 1275207
  },
  {
    "name": "Jabalpur",
    "country": "India",
    "lat": 23.166666666667,
    "lng": 79.933333333333,
    "population": 1267564
  },
  {
    "name": "Nelson Mandela Bay",
    "country": "South Africa",
    "lat": -33.95,
    "lng": 25.6,
    "population": 1263051
  },
  {
    "name": "Brussels",
    "country": "Belgium",
    "lat": 50.846666666667,
    "lng": 4.3525,
    "population": 1255795
  },
  {
    "name": "Balıkesir",
    "country": "Turkey",
    "lat": 39.651111111111,
    "lng": 27.884166666667,
    "population": 1250610
  },
  {
    "name": "Huế",
    "country": "Vietnam",
    "lat": 16.463888888889,
    "lng": 107.58666666667,
    "population": 1236393
  },
  {
    "name": "Suwon",
    "country": "South Korea",
    "lat": 37.285833333333,
    "lng": 127.01,
    "population": 1234300
  },
  {
    "name": "Hargeisa",
    "country": "Somaliland",
    "lat": 9.565556,
    "lng": 44.060556,
    "population": 1227620
  },
  {
    "name": "Mandalay",
    "country": "Myanmar",
    "lat": 21.97473,
    "lng": 96.08359,
    "population": 1225546
  },
  {
    "name": "Vasai-Virar",
    "country": "India",
    "lat": 19.47,
    "lng": 72.8,
    "population": 1222390
  },
  {
    "name": "Campinas",
    "country": "Brazil",
    "lat": -22.900913888889,
    "lng": -47.057294444444,
    "population": 1213792
  },
  {
    "name": "Mombasa",
    "country": "Kenya",
    "lat": -4.05,
    "lng": 39.666666666667,
    "population": 1208333
  },
  {
    "name": "Sofia",
    "country": "Bulgaria",
    "lat": 42.697886,
    "lng": 23.321726,
    "population": 1205548
  },
  {
    "name": "Varanasi",
    "country": "India",
    "lat": 25.318888888889,
    "lng": 83.012777777778,
    "population": 1198491
  },
  {
    "name": "Nizhny Novgorod",
    "country": "Russia",
    "lat": 56.326944444444,
    "lng": 44.0075,
    "population": 1198245
  },
  {
    "name": "Hiroshima",
    "country": "Japan",
    "lat": 34.391388888889,
    "lng": 132.45194444444,
    "population": 1198021
  },
  {
    "name": "Chiang Mai",
    "country": "Thailand",
    "lat": 18.788888888889,
    "lng": 98.983333333333,
    "population": 1198000
  },
  {
    "name": "Maiduguri",
    "country": "Nigeria",
    "lat": 11.833333333333,
    "lng": 13.15,
    "population": 1197497
  },
  {
    "name": "Rosario",
    "country": "Argentina",
    "lat": -32.9575,
    "lng": -60.639444444444,
    "population": 1193605
  },
  {
    "name": "Shymkent",
    "country": "Kazakhstan",
    "lat": 42.3,
    "lng": 69.6,
    "population": 1191877
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
    "name": "Ahvaz",
    "country": "Iran",
    "lat": 31.318888888889,
    "lng": 48.684166666667,
    "population": 1184788
  },
  {
    "name": "Srinagar",
    "country": "India",
    "lat": 34.091111111111,
    "lng": 74.806111111111,
    "population": 1180570
  },
  {
    "name": "Chelyabinsk",
    "country": "Russia",
    "lat": 55.15,
    "lng": 61.4,
    "population": 1176770
  },
  {
    "name": "Aurangabad",
    "country": "India",
    "lat": 19.88,
    "lng": 75.32,
    "population": 1175116
  },
  {
    "name": "Fez",
    "country": "Morocco",
    "lat": 34.043333333333,
    "lng": -5.0033333333333,
    "population": 1167842
  },
  {
    "name": "Naypyidaw",
    "country": "Myanmar",
    "lat": 19.7475,
    "lng": 96.115,
    "population": 1160242
  },
  {
    "name": "Aba",
    "country": "Nigeria",
    "lat": 5.1166666666667,
    "lng": 7.3666666666667,
    "population": 1160000
  },
  {
    "name": "Krasnodar",
    "country": "Russia",
    "lat": 45.033333333333,
    "lng": 38.983333333333,
    "population": 1154885
  },
  {
    "name": "Aden",
    "country": "Yemen",
    "lat": 12.8,
    "lng": 45.033333333333,
    "population": 1154410
  },
  {
    "name": "Samara",
    "country": "Russia",
    "lat": 53.183333333333,
    "lng": 50.116666666667,
    "population": 1154223
  },
  {
    "name": "Ufa",
    "country": "Russia",
    "lat": 54.726111111111,
    "lng": 55.9475,
    "population": 1144809
  },
  {
    "name": "Monterrey",
    "country": "Mexico",
    "lat": 25.684444444444,
    "lng": -100.31805555556,
    "population": 1142952
  },
  {
    "name": "Birmingham",
    "country": "United Kingdom",
    "lat": 52.48,
    "lng": -1.9025,
    "population": 1137100
  },
  {
    "name": "Rostov-on-Don",
    "country": "Russia",
    "lat": 47.2225,
    "lng": 39.71,
    "population": 1135968
  },
  {
    "name": "Maputo",
    "country": "Mozambique",
    "lat": -25.915277777778,
    "lng": 32.576388888889,
    "population": 1133200
  },
  {
    "name": "Amritsar",
    "country": "India",
    "lat": 31.626917,
    "lng": 74.87704,
    "population": 1132383
  },
  {
    "name": "Van",
    "country": "Turkey",
    "lat": 38.501944444444,
    "lng": 43.416666666667,
    "population": 1127612
  },
  {
    "name": "Ulsan",
    "country": "South Korea",
    "lat": 35.55,
    "lng": 129.31666666667,
    "population": 1127553
  },
  {
    "name": "Tbilisi",
    "country": "Georgia",
    "lat": 41.7225,
    "lng": 44.7925,
    "population": 1118035
  },
  {
    "name": "Guwahati",
    "country": "India",
    "lat": 26.1805876,
    "lng": 91.750238,
    "population": 1116267
  },
  {
    "name": "Yerevan",
    "country": "Armenia",
    "lat": 40.181388888889,
    "lng": 44.514444444444,
    "population": 1106300
  },
  {
    "name": "Maracay",
    "country": "Venezuela",
    "lat": 10.246944444444,
    "lng": -67.595833333333,
    "population": 1102088
  },
  {
    "name": "Omsk",
    "country": "Russia",
    "lat": 54.966666666667,
    "lng": 73.383333333333,
    "population": 1101367
  },
  {
    "name": "Krasnoyarsk",
    "country": "Russia",
    "lat": 56.008888888889,
    "lng": 92.871944444444,
    "population": 1092851
  },
  {
    "name": "N'Djamena",
    "country": "Chad",
    "lat": 12.11,
    "lng": 15.05,
    "population": 1092066
  },
  {
    "name": "Cologne",
    "country": "Germany",
    "lat": 50.942222222222,
    "lng": 6.9577777777778,
    "population": 1087353
  },
  {
    "name": "Astana",
    "country": "Kazakhstan",
    "lat": 51.133333333333,
    "lng": 71.433333333333,
    "population": 1078362
  },
  {
    "name": "Ranchi",
    "country": "India",
    "lat": 23.355555555556,
    "lng": 85.334722222222,
    "population": 1073440
  },
  {
    "name": "Gwalior",
    "country": "India",
    "lat": 26.2125,
    "lng": 78.1775,
    "population": 1069276
  },
  {
    "name": "Sendai",
    "country": "Japan",
    "lat": 38.268222222222,
    "lng": 140.86941666667,
    "population": 1061177
  },
  {
    "name": "Barquisimeto",
    "country": "Venezuela",
    "lat": 10.067777777778,
    "lng": -69.346694444444,
    "population": 1059092
  },
  {
    "name": "Tegucigalpa",
    "country": "Honduras",
    "lat": 14.105783333333,
    "lng": -87.204705555556,
    "population": 1055729
  },
  {
    "name": "Chandigarh",
    "country": "India",
    "lat": 30.736388888889,
    "lng": 76.788333333333,
    "population": 1055450
  },
  {
    "name": "Vijayawada",
    "country": "India",
    "lat": 16.516666666667,
    "lng": 80.616666666667,
    "population": 1048240
  },
  {
    "name": "Voronezh",
    "country": "Russia",
    "lat": 51.671666666667,
    "lng": 39.210555555556,
    "population": 1041722
  },
  {
    "name": "Mersin",
    "country": "Turkey",
    "lat": 36.8,
    "lng": 34.616666666667,
    "population": 1040507
  },
  {
    "name": "São Luís",
    "country": "Brazil",
    "lat": -2.53,
    "lng": -44.302777777778,
    "population": 1037775
  },
  {
    "name": "Jodhpur",
    "country": "India",
    "lat": 26.294444444444,
    "lng": 73.027777777778,
    "population": 1033918
  },
  {
    "name": "Ogbomosho",
    "country": "Nigeria",
    "lat": 8.1333333333333,
    "lng": 4.25,
    "population": 1032000
  },
  {
    "name": "Ashgabat",
    "country": "Turkmenistan",
    "lat": 37.95,
    "lng": 58.383333333333,
    "population": 1030063
  },
  {
    "name": "Enugu",
    "country": "Nigeria",
    "lat": 6.4402777777778,
    "lng": 7.4941666666667,
    "population": 1029400
  },
  {
    "name": "Denizli",
    "country": "Turkey",
    "lat": 37.783333333333,
    "lng": 29.096388888889,
    "population": 1027782
  },
  {
    "name": "Perm",
    "country": "Russia",
    "lat": 58.013888888889,
    "lng": 56.248888888889,
    "population": 1027518
  },
  {
    "name": "Monrovia",
    "country": "Liberia",
    "lat": 6.3105555555556,
    "lng": -10.804722222222,
    "population": 1021762
  },
  {
    "name": "Zamboanga City",
    "country": "Philippines",
    "lat": 6.9041666666667,
    "lng": 122.07611111111,
    "population": 1018849
  },
  {
    "name": "Ottawa",
    "country": "Canada",
    "lat": 45.424722222222,
    "lng": -75.695,
    "population": 1017449
  },
  {
    "name": "San Jose",
    "country": "United States",
    "lat": 37.304166666667,
    "lng": -121.87277777778,
    "population": 1013240
  },
  {
    "name": "Volgograd",
    "country": "Russia",
    "lat": 48.708611111111,
    "lng": 44.514722222222,
    "population": 1012219
  },
  {
    "name": "Edmonton",
    "country": "Canada",
    "lat": 53.533333333333,
    "lng": -113.5,
    "population": 1010899
  },
  {
    "name": "Odesa",
    "country": "Ukraine",
    "lat": 46.47747,
    "lng": 30.73262,
    "population": 1010537
  },
  {
    "name": "Raipur",
    "country": "India",
    "lat": 21.2379468,
    "lng": 81.6336833,
    "population": 1010087
  },
  {
    "name": "Changwon",
    "country": "South Korea",
    "lat": 35.228055555556,
    "lng": 128.68111111111,
    "population": 1009998
  },
  {
    "name": "Arequipa",
    "country": "Peru",
    "lat": -16.398888888889,
    "lng": -71.536944444444,
    "population": 1008290
  },
  {
    "name": "Tshikapa",
    "country": "Democratic Republic of the Congo",
    "lat": -6.4166666666667,
    "lng": 20.8,
    "population": 1006387
  },
  {
    "name": "Marrakesh",
    "country": "Morocco",
    "lat": 31.62947,
    "lng": -7.98108,
    "population": 1002697
  },
  {
    "name": "Kota",
    "country": "India",
    "lat": 25.18,
    "lng": 75.83,
    "population": 1001694
  },
  {
    "name": "Bareilly",
    "country": "India",
    "lat": 28.364,
    "lng": 79.415,
    "population": 1000000
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
    "name": "Chiba",
    "country": "Japan",
    "lat": 35.607277777778,
    "lng": 140.10636111111,
    "population": 975014
  },
  {
    "name": "Kirkuk",
    "country": "Iraq",
    "lat": 35.466666666667,
    "lng": 44.4,
    "population": 975000
  },
  {
    "name": "Dnipro",
    "country": "Ukraine",
    "lat": 48.4675,
    "lng": 35.04,
    "population": 968502
  },
  {
    "name": "Cebu City",
    "country": "Philippines",
    "lat": 10.293,
    "lng": 123.902,
    "population": 965332
  },
  {
    "name": "Asmara",
    "country": "Eritrea",
    "lat": 15.333333333333,
    "lng": 38.916666666667,
    "population": 963000
  },
  {
    "name": "Campo Grande",
    "country": "Brazil",
    "lat": -20.468611111111,
    "lng": -54.622222222222,
    "population": 962883
  },
  {
    "name": "Austin",
    "country": "United States",
    "lat": 30.3,
    "lng": -97.733333333333,
    "population": 961855
  },
  {
    "name": "Coimbatore",
    "country": "India",
    "lat": 11.000833333333,
    "lng": 76.963333333333,
    "population": 959823
  },
  {
    "name": "Solapur",
    "country": "India",
    "lat": 17.670277777778,
    "lng": 75.901111111111,
    "population": 951558
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
    "name": "Kermanshah",
    "country": "Iran",
    "lat": 34.316666666667,
    "lng": 47.068611111111,
    "population": 946651
  },
  {
    "name": "Salé",
    "country": "Morocco",
    "lat": 34.05,
    "lng": -6.816667,
    "population": 945101
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
    "name": "Kitakyūshū-shi",
    "country": "Japan",
    "lat": 33.883416666667,
    "lng": 130.87519444444,
    "population": 935084
  },
  {
    "name": "Aguascalientes",
    "country": "Mexico",
    "lat": 21.880833333333,
    "lng": -102.29611111111,
    "population": 934424
  },
  {
    "name": "Khulna",
    "country": "Bangladesh",
    "lat": 22.816666666667,
    "lng": 89.55,
    "population": 928891
  },
  {
    "name": "Chihuahua",
    "country": "Mexico",
    "lat": 28.636944444444,
    "lng": -106.07694444444,
    "population": 925762
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.366666666667,
    "lng": 4.8833333333333,
    "population": 921468
  },
  {
    "name": "Trujillo",
    "country": "Peru",
    "lat": -8.1119444444444,
    "lng": -79.028888888889,
    "population": 919899
  },
  {
    "name": "Fort Worth",
    "country": "United States",
    "lat": 32.756388888889,
    "lng": -97.3325,
    "population": 918915
  },
  {
    "name": "Tiruchirappalli",
    "country": "India",
    "lat": 10.826944444444,
    "lng": 78.692777777778,
    "population": 916857
  },
  {
    "name": "Cartagena",
    "country": "Colombia",
    "lat": 10.423611111111,
    "lng": -75.525277777778,
    "population": 914552
  },
  {
    "name": "Naples",
    "country": "Italy",
    "lat": 40.835833333333,
    "lng": 14.248611111111,
    "population": 913462
  },
  {
    "name": "Owerri",
    "country": "Nigeria",
    "lat": 5.4833333333333,
    "lng": 7.0333333333333,
    "population": 908109
  },
  {
    "name": "Columbus",
    "country": "United States",
    "lat": 39.962222222222,
    "lng": -83.000555555556,
    "population": 905748
  },
  {
    "name": "Bobo-Dioulasso",
    "country": "Burkina Faso",
    "lat": 11.183333333333,
    "lng": -4.2833333333333,
    "population": 903887
  },
  {
    "name": "Lubango",
    "country": "Angola",
    "lat": -14.916666666667,
    "lng": 13.5,
    "population": 903564
  },
  {
    "name": "Dammam",
    "country": "Saudi Arabia",
    "lat": 26.433333333333,
    "lng": 50.1,
    "population": 903312
  },
  {
    "name": "Donetsk",
    "country": "Ukraine",
    "lat": 48.015833333333,
    "lng": 37.802777777778,
    "population": 901645
  },
  {
    "name": "Libreville",
    "country": "Gabon",
    "lat": 0.40777777777778,
    "lng": 9.4402777777778,
    "population": 899000
  },
  {
    "name": "Mérida",
    "country": "Mexico",
    "lat": 20.97,
    "lng": -89.62,
    "population": 892363
  },
  {
    "name": "Bangui",
    "country": "Central African Republic",
    "lat": 4.37325,
    "lng": 18.562833333333,
    "population": 889231
  },
  {
    "name": "Abeokuta",
    "country": "Nigeria",
    "lat": 7.15,
    "lng": 3.35,
    "population": 888924
  },
  {
    "name": "Cancun",
    "country": "Mexico",
    "lat": 21.161416111111,
    "lng": -86.824811111111,
    "population": 888797
  },
  {
    "name": "Moradabad",
    "country": "India",
    "lat": 28.838888888889,
    "lng": 78.776944444444,
    "population": 887871
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
    "name": "Tabuk",
    "country": "Saudi Arabia",
    "lat": 28.397222222222,
    "lng": 36.578888888889,
    "population": 886036
  },
  {
    "name": "Sulaymaniyah",
    "country": "Iraq",
    "lat": 35.55,
    "lng": 45.433333333333,
    "population": 878146
  },
  {
    "name": "Klang",
    "country": "Malaysia",
    "lat": 3.0333333333333,
    "lng": 101.45,
    "population": 878000
  },
  {
    "name": "Gurgaon",
    "country": "India",
    "lat": 28.466666666667,
    "lng": 77.033333333333,
    "population": 876824
  },
  {
    "name": "Charlotte",
    "country": "United States",
    "lat": 35.226944444444,
    "lng": -80.843333333333,
    "population": 874579
  },
  {
    "name": "Ramadi",
    "country": "Iraq",
    "lat": 33.425833333333,
    "lng": 43.299166666667,
    "population": 874543
  },
  {
    "name": "Aligarh",
    "country": "India",
    "lat": 27.88,
    "lng": 78.08,
    "population": 874408
  },
  {
    "name": "San Francisco",
    "country": "United States",
    "lat": 37.775,
    "lng": -122.41944444444,
    "population": 873965
  },
  {
    "name": "Barinas",
    "country": "Venezuela",
    "lat": 8.6333333333333,
    "lng": -70.216666666667,
    "population": 873962
  },
  {
    "name": "Jalandhar",
    "country": "India",
    "lat": 31.325555555556,
    "lng": 75.579166666667,
    "population": 873725
  },
  {
    "name": "Tyumen",
    "country": "Russia",
    "lat": 57.15,
    "lng": 65.533333333333,
    "population": 872077
  },
  {
    "name": "Eskişehir",
    "country": "Turkey",
    "lat": 39.776666666667,
    "lng": 30.520555555556,
    "population": 871187
  },
  {
    "name": "Teresina",
    "country": "Brazil",
    "lat": -5.0902777777778,
    "lng": -42.816666666667,
    "population": 868075
  },
  {
    "name": "Ipoh",
    "country": "Malaysia",
    "lat": 4.6,
    "lng": 101.07,
    "population": 866772
  },
  {
    "name": "Saltillo",
    "country": "Mexico",
    "lat": 25.423055555556,
    "lng": -100.99194444444,
    "population": 864431
  },
  {
    "name": "Hermosillo",
    "country": "Mexico",
    "lat": 29.075,
    "lng": -110.95833333333,
    "population": 855563
  },
  {
    "name": "Mexicali",
    "country": "Mexico",
    "lat": 32.636,
    "lng": -115.4759,
    "population": 854186
  },
  {
    "name": "Cheongju",
    "country": "South Korea",
    "lat": 36.637222222222,
    "lng": 127.48972222222,
    "population": 848000
  },
  {
    "name": "Akure",
    "country": "Nigeria",
    "lat": 7.25,
    "lng": 5.195,
    "population": 847903
  },
  {
    "name": "Ilorin",
    "country": "Nigeria",
    "lat": 8.5,
    "lng": 4.55,
    "population": 847582
  },
  {
    "name": "Erbil",
    "country": "Iraq",
    "lat": 36.191111111111,
    "lng": 44.009444444444,
    "population": 846000
  },
  {
    "name": "Kathmandu",
    "country": "Nepal",
    "lat": 27.71,
    "lng": 85.32,
    "population": 845767
  },
  {
    "name": "Huambo",
    "country": "Angola",
    "lat": -12.766666666667,
    "lng": 15.733333333333,
    "population": 844000
  },
  {
    "name": "El Alto",
    "country": "Bolivia",
    "lat": -16.504722222222,
    "lng": -68.163333333333,
    "population": 842378
  },
  {
    "name": "Turin",
    "country": "Italy",
    "lat": 45.079166666667,
    "lng": 7.6761111111111,
    "population": 841600
  },
  {
    "name": "Saratov",
    "country": "Russia",
    "lat": 51.53,
    "lng": 46.035,
    "population": 838042
  },
  {
    "name": "Bhubaneswar",
    "country": "India",
    "lat": 20.295,
    "lng": 85.825,
    "population": 837737
  },
  {
    "name": "Buffalo",
    "country": "South Africa",
    "lat": -32.983333333333,
    "lng": 27.866666666667,
    "population": 834997
  },
  {
    "name": "João Pessoa",
    "country": "Brazil",
    "lat": -7.12,
    "lng": -34.88,
    "population": 833932
  },
  {
    "name": "Trabzon",
    "country": "Turkey",
    "lat": 41.005,
    "lng": 39.7225,
    "population": 824352
  },
  {
    "name": "Culiacán",
    "country": "Mexico",
    "lat": 24.790277777778,
    "lng": -107.38777777778,
    "population": 808416
  },
  {
    "name": "Cúcuta",
    "country": "Colombia",
    "lat": 7.9075,
    "lng": -72.504722222222,
    "population": 806378
  },
  {
    "name": "Kraków",
    "country": "Poland",
    "lat": 50.061388888889,
    "lng": 19.937222222222,
    "population": 804237
  },
  {
    "name": "Oran",
    "country": "Algeria",
    "lat": 35.696944444444,
    "lng": -0.63305555555556,
    "population": 803329
  },
  {
    "name": "Bandar Lampung",
    "country": "Indonesia",
    "lat": -5.4291694444444,
    "lng": 105.26111111111,
    "population": 800348
  },
  {
    "name": "Blantyre",
    "country": "Malawi",
    "lat": -15.786111111111,
    "lng": 35.005833333333,
    "population": 800264
  },
  {
    "name": "Santiago de Querétaro",
    "country": "Mexico",
    "lat": 20.588055555556,
    "lng": -100.38805555556,
    "population": 794789
  },
  {
    "name": "George Town",
    "country": "Malaysia",
    "lat": 5.4111111111111,
    "lng": 100.33555555556,
    "population": 794313
  },
  {
    "name": "Port Said",
    "country": "Egypt",
    "lat": 31.2625,
    "lng": 32.306111111111,
    "population": 791749
  },
  {
    "name": "Niigata",
    "country": "Japan",
    "lat": 37.916194444444,
    "lng": 139.03638888889,
    "population": 790646
  },
  {
    "name": "Hamamatsu",
    "country": "Japan",
    "lat": 34.710888888889,
    "lng": 137.72619444444,
    "population": 788211
  },
  {
    "name": "Mangaung",
    "country": "South Africa",
    "lat": -29.15627,
    "lng": 26.35116,
    "population": 787803
  },
  {
    "name": "Goma",
    "country": "Democratic Republic of the Congo",
    "lat": -1.6794444444444,
    "lng": 29.233611111111,
    "population": 781875
  },
  {
    "name": "Frankfurt",
    "country": "Germany",
    "lat": 50.110555555556,
    "lng": 8.6822222222222,
    "population": 775790
  },
  {
    "name": "Homs",
    "country": "Syria",
    "lat": 34.733333333333,
    "lng": 36.716666666667,
    "population": 775404
  },
  {
    "name": "San Luis Potosí",
    "country": "Mexico",
    "lat": 22.149722222222,
    "lng": -100.975,
    "population": 772828
  },
  {
    "name": "Valencia",
    "country": "Spain",
    "lat": 39.45612,
    "lng": -0.35457,
    "population": 769128
  },
  {
    "name": "Hamhung",
    "country": "North Korea",
    "lat": 39.916666666667,
    "lng": 127.53333333333,
    "population": 768551
  },
  {
    "name": "Erzurum",
    "country": "Turkey",
    "lat": 39.909722222222,
    "lng": 41.275555555556,
    "population": 767848
  },
  {
    "name": "Zagreb",
    "country": "Croatia",
    "lat": 45.813055555556,
    "lng": 15.977222222222,
    "population": 767131
  },
  {
    "name": "Al Ain",
    "country": "United Arab Emirates",
    "lat": 24.2075,
    "lng": 55.744722222222,
    "population": 766936
  },
  {
    "name": "Bahawalpur",
    "country": "Pakistan",
    "lat": 29.395555555556,
    "lng": 71.672222222222,
    "population": 762111
  },
  {
    "name": "Uberlândia",
    "country": "Brazil",
    "lat": -18.918888888889,
    "lng": -48.276944444444,
    "population": 761835
  },
  {
    "name": "Kaduna",
    "country": "Nigeria",
    "lat": 10.5105,
    "lng": 7.4165,
    "population": 760084
  },
  {
    "name": "Maturín",
    "country": "Venezuela",
    "lat": 9.7422774,
    "lng": -63.1888854,
    "population": 753254
  },
  {
    "name": "Ciudad Guayana",
    "country": "Venezuela",
    "lat": 8.3223763,
    "lng": -62.6896622,
    "population": 751331
  },
  {
    "name": "Natal",
    "country": "Brazil",
    "lat": -5.795,
    "lng": -35.208888888889,
    "population": 751300
  },
  {
    "name": "Winnipeg",
    "country": "Canada",
    "lat": 49.895555555556,
    "lng": -97.138611111111,
    "population": 749607
  },
  {
    "name": "Dasmariñas",
    "country": "Philippines",
    "lat": 14.329444444444,
    "lng": 120.93666666667,
    "population": 744511
  },
  {
    "name": "Thiruvananthapuram",
    "country": "India",
    "lat": 8.4875,
    "lng": 76.9525,
    "population": 743691
  },
  {
    "name": "Nampula",
    "country": "Mozambique",
    "lat": -15.116666666667,
    "lng": 39.266666666667,
    "population": 743000
  },
  {
    "name": "Cagayan de Oro",
    "country": "Philippines",
    "lat": 8.4833333333333,
    "lng": 124.65,
    "population": 741617
  },
  {
    "name": "Bouaké",
    "country": "Ivory Coast",
    "lat": 7.68333,
    "lng": -5.03306,
    "population": 740000
  },
  {
    "name": "Cabinda",
    "country": "Angola",
    "lat": -5.566667,
    "lng": 12.2,
    "population": 739182
  },
  {
    "name": "Kumamoto",
    "country": "Japan",
    "lat": 32.803,
    "lng": 130.70786111111,
    "population": 738385
  },
  {
    "name": "São José dos Campos",
    "country": "Brazil",
    "lat": -23.178888888889,
    "lng": -45.886944444444,
    "population": 737310
  },
  {
    "name": "Seattle",
    "country": "United States",
    "lat": 47.605,
    "lng": -122.33,
    "population": 737015
  },
  {
    "name": "Urmia",
    "country": "Iran",
    "lat": 37.548611111111,
    "lng": 45.0675,
    "population": 736224
  },
  {
    "name": "Ribeirão Preto",
    "country": "Brazil",
    "lat": -21.1776315,
    "lng": -47.8100983,
    "population": 731639
  },
  {
    "name": "Osogbo",
    "country": "Nigeria",
    "lat": 7.7597222222222,
    "lng": 4.5761111111111,
    "population": 731000
  },
  {
    "name": "Tamale",
    "country": "Ghana",
    "lat": 9.4075,
    "lng": -0.85333333333333,
    "population": 729768
  },
  {
    "name": "Sagamihara",
    "country": "Japan",
    "lat": 35.571416666667,
    "lng": 139.37313888889,
    "population": 725696
  },
  {
    "name": "Najaf",
    "country": "Iraq",
    "lat": 32.028951,
    "lng": 44.339621,
    "population": 724700
  },
  {
    "name": "Sorocaba",
    "country": "Brazil",
    "lat": -23.501944444444,
    "lng": -47.457777777778,
    "population": 723574
  },
  {
    "name": "General Santos",
    "country": "Philippines",
    "lat": 6.1166666666667,
    "lng": 125.16666666667,
    "population": 722059
  },
  {
    "name": "Okayama",
    "country": "Japan",
    "lat": 34.655111111111,
    "lng": 133.91958333333,
    "population": 720043
  },
  {
    "name": "San Pedro Sula",
    "country": "Honduras",
    "lat": 15.505322222222,
    "lng": -88.025083333333,
    "population": 719064
  },
  {
    "name": "Oslo",
    "country": "Norway",
    "lat": 59.913333333333,
    "lng": 10.738888888889,
    "population": 717710
  },
  {
    "name": "Lviv",
    "country": "Ukraine",
    "lat": 49.8425,
    "lng": 24.032222222222,
    "population": 717273
  },
  {
    "name": "Suez",
    "country": "Egypt",
    "lat": 29.966666666667,
    "lng": 32.533333333333,
    "population": 716458
  },
  {
    "name": "Denver",
    "country": "United States",
    "lat": 39.739166666667,
    "lng": -104.98472222222,
    "population": 715522
  },
  {
    "name": "Zaporizhzhia",
    "country": "Ukraine",
    "lat": 47.85,
    "lng": 35.1175,
    "population": 710052
  },
  {
    "name": "Zanzibar City",
    "country": "Tanzania",
    "lat": -6.1666666666667,
    "lng": 39.2,
    "population": 709809
  },
  {
    "name": "Bhiwandi",
    "country": "India",
    "lat": 19.3,
    "lng": 73.066666666667,
    "population": 709665
  },
  {
    "name": "Latakia",
    "country": "Syria",
    "lat": 35.52,
    "lng": 35.778055555556,
    "population": 709000
  },
  {
    "name": "Bukavu",
    "country": "Democratic Republic of the Congo",
    "lat": -2.4908333333333,
    "lng": 28.842777777778,
    "population": 707053
  },
  {
    "name": "Mwanza",
    "country": "Tanzania",
    "lat": -2.5166666666667,
    "lng": 32.9,
    "population": 706453
  },
  {
    "name": "Saharanpur",
    "country": "India",
    "lat": 29.964,
    "lng": 77.546,
    "population": 705478
  },
  {
    "name": "Warangal",
    "country": "India",
    "lat": 17.975555555556,
    "lng": 79.601111111111,
    "population": 704570
  },
  {
    "name": "Jeju",
    "country": "South Korea",
    "lat": 33.509722222222,
    "lng": 126.52194444444,
    "population": 698358
  },
  {
    "name": "Hama",
    "country": "Syria",
    "lat": 35.135,
    "lng": 36.75,
    "population": 696863
  },
  {
    "name": "Bauchi",
    "country": "Nigeria",
    "lat": 10.315833333333,
    "lng": 9.8441666666667,
    "population": 693700
  },
  {
    "name": "Salem",
    "country": "India",
    "lat": 11.65,
    "lng": 78.166666666667,
    "population": 693236
  },
  {
    "name": "Bremen",
    "country": "Germany",
    "lat": 53.133333333333,
    "lng": 8.7333333333333,
    "population": 693204
  },
  {
    "name": "Cuiabá",
    "country": "Brazil",
    "lat": -15.595833333333,
    "lng": -56.096944444444,
    "population": 691875
  },
  {
    "name": "Torreón",
    "country": "Mexico",
    "lat": 25.54389,
    "lng": -103.41898,
    "population": 690193
  },
  {
    "name": "Karbala",
    "country": "Iraq",
    "lat": 32.616666666667,
    "lng": 44.033333333333,
    "population": 690100
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
    "name": "Shizuoka",
    "country": "Japan",
    "lat": 34.975555555556,
    "lng": 138.3825,
    "population": 685589
  },
  {
    "name": "Seville",
    "country": "Spain",
    "lat": 37.38620512,
    "lng": -5.99251368,
    "population": 684025
  },
  {
    "name": "Oklahoma City",
    "country": "United States",
    "lat": 35.482222222222,
    "lng": -97.535277777778,
    "population": 681054
  },
  {
    "name": "Rasht",
    "country": "Iran",
    "lat": 37.276111111111,
    "lng": 49.588611111111,
    "population": 679995
  },
  {
    "name": "Kochi",
    "country": "India",
    "lat": 9.9666666666667,
    "lng": 76.283333333333,
    "population": 677381
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
    "name": "Wrocław",
    "country": "Poland",
    "lat": 51.11,
    "lng": 17.0325,
    "population": 673531
  },
  {
    "name": "Acapulco de Juárez",
    "country": "Mexico",
    "lat": 16.8628695,
    "lng": -99.8870087,
    "population": 673478
  },
  {
    "name": "Gorakhpur",
    "country": "India",
    "lat": 26.761111111111,
    "lng": 83.366666666667,
    "population": 673446
  },
  {
    "name": "Chongjin",
    "country": "North Korea",
    "lat": 41.783333333333,
    "lng": 129.78333333333,
    "population": 667929
  },
  {
    "name": "Copenhagen",
    "country": "Denmark",
    "lat": 55.676111111111,
    "lng": 12.568888888889,
    "population": 667099
  },
  {
    "name": "Zaragoza",
    "country": "Spain",
    "lat": 41.65645655,
    "lng": -0.87928652,
    "population": 666880
  },
  {
    "name": "Bulawayo",
    "country": "Zimbabwe",
    "lat": -20.166666666667,
    "lng": 28.566666666667,
    "population": 665940
  },
  {
    "name": "Joinville",
    "country": "Brazil",
    "lat": -26.303888888889,
    "lng": -48.845833333333,
    "population": 664541
  },
  {
    "name": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.92,
    "lng": 4.48,
    "population": 664311
  },
  {
    "name": "Villavicencio",
    "country": "Colombia",
    "lat": 4.1425,
    "lng": -73.629444444444,
    "population": 664148
  },
  {
    "name": "Tolyatti",
    "country": "Russia",
    "lat": 53.516666666667,
    "lng": 49.416666666667,
    "population": 662683
  },
  {
    "name": "Makhachkala",
    "country": "Russia",
    "lat": 42.9825,
    "lng": 47.505,
    "population": 662660
  },
  {
    "name": "Vancouver",
    "country": "Canada",
    "lat": 49.260833333333,
    "lng": -123.11388888889,
    "population": 662248
  },
  {
    "name": "Feira de Santana",
    "country": "Brazil",
    "lat": -12.266944444444,
    "lng": -38.966944444444,
    "population": 660806
  },
  {
    "name": "Jalingo",
    "country": "Nigeria",
    "lat": 8.9195,
    "lng": 11.32642,
    "population": 660213
  },
  {
    "name": "Sargodha",
    "country": "Pakistan",
    "lat": 32.083611111111,
    "lng": 72.671111111111,
    "population": 659862
  },
  {
    "name": "Bujumbura",
    "country": "Burundi",
    "lat": -3.3825,
    "lng": 29.361111111111,
    "population": 658859
  },
  {
    "name": "Cheonan",
    "country": "South Korea",
    "lat": 36.81,
    "lng": 127.1475,
    "population": 656583
  },
  {
    "name": "Brampton",
    "country": "Canada",
    "lat": 43.683333333333,
    "lng": -79.766666666667,
    "population": 656480
  },
  {
    "name": "Victoria de Durango",
    "country": "Mexico",
    "lat": 24.022777777778,
    "lng": -104.65444444444,
    "population": 654876
  },
  {
    "name": "Jeonju",
    "country": "South Korea",
    "lat": 35.821944444444,
    "lng": 127.14888888889,
    "population": 653055
  },
  {
    "name": "Portland",
    "country": "United States",
    "lat": 45.516666666667,
    "lng": -122.66666666667,
    "population": 652503
  },
  {
    "name": "Łódź",
    "country": "Poland",
    "lat": 51.75,
    "lng": 19.466666666667,
    "population": 648711
  },
  {
    "name": "Colombo",
    "country": "Sri Lanka",
    "lat": 6.9266666666667,
    "lng": 79.860555555556,
    "population": 647557
  },
  {
    "name": "Guntur",
    "country": "India",
    "lat": 16.3,
    "lng": 80.45,
    "population": 647508
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
    "name": "Detroit",
    "country": "United States",
    "lat": 42.331666666667,
    "lng": -83.0475,
    "population": 639111
  },
  {
    "name": "Stuttgart",
    "country": "Germany",
    "lat": 48.7775,
    "lng": 9.18,
    "population": 633484
  },
  {
    "name": "Memphis",
    "country": "United States",
    "lat": 35.146111111111,
    "lng": -90.051944444444,
    "population": 633104
  },
  {
    "name": "Aracaju",
    "country": "Brazil",
    "lat": -10.9167,
    "lng": -37.05,
    "population": 632744
  },
  {
    "name": "Cochabamba",
    "country": "Bolivia",
    "lat": -17.3935419,
    "lng": -66.1570139,
    "population": 632013
  },
  {
    "name": "Benghazi",
    "country": "Libya",
    "lat": 32.116666666667,
    "lng": 20.066666666667,
    "population": 631555
  },
  {
    "name": "Düsseldorf",
    "country": "Germany",
    "lat": 51.225555555556,
    "lng": 6.7766666666667,
    "population": 631217
  },
  {
    "name": "Palermo",
    "country": "Italy",
    "lat": 38.115658055556,
    "lng": 13.361261944444,
    "population": 630167
  },
  {
    "name": "Glasgow",
    "country": "United Kingdom",
    "lat": 55.861111111111,
    "lng": -4.25,
    "population": 626410
  },
  {
    "name": "Namangan",
    "country": "Uzbekistan",
    "lat": 40.995277777778,
    "lng": 71.6725,
    "population": 626120
  },
  {
    "name": "Bhilai",
    "country": "India",
    "lat": 21.21,
    "lng": 81.38,
    "population": 625700
  },
  {
    "name": "Kitwe",
    "country": "Zambia",
    "lat": -12.820833333333,
    "lng": 28.211944444444,
    "population": 625000
  },
  {
    "name": "Mangaluru",
    "country": "India",
    "lat": 12.871666666667,
    "lng": 74.8425,
    "population": 623841
  },
  {
    "name": "Barnaul",
    "country": "Russia",
    "lat": 53.356666666667,
    "lng": 83.787222222222,
    "population": 623057
  },
  {
    "name": "Jos",
    "country": "Nigeria",
    "lat": 9.9333333333333,
    "lng": 8.8833333333333,
    "population": 622802
  },
  {
    "name": "Mansoura",
    "country": "Egypt",
    "lat": 31.05,
    "lng": 31.383333333333,
    "population": 621953
  },
  {
    "name": "Leipzig",
    "country": "Germany",
    "lat": 51.33962,
    "lng": 12.37129,
    "population": 619879
  },
  {
    "name": "Al Hudaydah",
    "country": "Yemen",
    "lat": 14.802222222222,
    "lng": 42.951111111111,
    "population": 617871
  },
  {
    "name": "Izhevsk",
    "country": "Russia",
    "lat": 56.85,
    "lng": 53.216666666667,
    "population": 616297
  },
  {
    "name": "Khabarovsk",
    "country": "Russia",
    "lat": 48.483333333333,
    "lng": 135.06666666667,
    "population": 615600
  },
  {
    "name": "Ta'izz",
    "country": "Yemen",
    "lat": 13.578888888889,
    "lng": 44.021944444444,
    "population": 615467
  },
  {
    "name": "Bucaramanga",
    "country": "Colombia",
    "lat": 7.1186111111111,
    "lng": -73.116111111111,
    "population": 614860
  },
  {
    "name": "Kandahar",
    "country": "Afghanistan",
    "lat": 31.62068,
    "lng": 65.71588,
    "population": 614254
  },
  {
    "name": "Ulyanovsk",
    "country": "Russia",
    "lat": 54.316666666667,
    "lng": 48.366666666667,
    "population": 613334
  },
  {
    "name": "Kuantan",
    "country": "Malaysia",
    "lat": 3.8166666666667,
    "lng": 103.33333333333,
    "population": 607778
  },
  {
    "name": "Gold Coast",
    "country": "Australia",
    "lat": -28.016666666667,
    "lng": 153.4,
    "population": 607665
  },
  {
    "name": "Irkutsk",
    "country": "Russia",
    "lat": 52.289166666667,
    "lng": 104.28,
    "population": 605708
  },
  {
    "name": "Malanje",
    "country": "Angola",
    "lat": -9.54015,
    "lng": 16.34096,
    "population": 604215
  },
  {
    "name": "Kryvyi Rih",
    "country": "Ukraine",
    "lat": 47.91,
    "lng": 33.39,
    "population": 603904
  },
  {
    "name": "Djibouti City",
    "country": "Djibouti",
    "lat": 11.595,
    "lng": 43.148055555556,
    "population": 603900
  },
  {
    "name": "Tunis",
    "country": "Tunisia",
    "lat": 36.800833333333,
    "lng": 10.18,
    "population": 602560
  },
  {
    "name": "San Miguel de Tucumán",
    "country": "Argentina",
    "lat": -26.816666666667,
    "lng": -65.216666666667,
    "population": 601888
  },
  {
    "name": "Meknes",
    "country": "Morocco",
    "lat": 33.883333333333,
    "lng": -5.55,
    "population": 601000
  },
  {
    "name": "Dortmund",
    "country": "Germany",
    "lat": 51.513888888889,
    "lng": 7.4652777777778,
    "population": 595471
  },
  {
    "name": "Riga",
    "country": "Latvia",
    "lat": 56.9475,
    "lng": 24.106944444444,
    "population": 595053
  },
  {
    "name": "Salta",
    "country": "Argentina",
    "lat": -24.788333333333,
    "lng": -65.410555555556,
    "population": 594772
  },
  {
    "name": "Kagoshima",
    "country": "Japan",
    "lat": 31.596805555556,
    "lng": 130.55713888889,
    "population": 593754
  },
  {
    "name": "Mar del Plata",
    "country": "Argentina",
    "lat": -38.0,
    "lng": -57.55,
    "population": 593337
  },
  {
    "name": "Irapuato",
    "country": "Mexico",
    "lat": 20.674166666667,
    "lng": -101.3475,
    "population": 592953
  },
  {
    "name": "Dublin",
    "country": "Ireland",
    "lat": 53.349722222222,
    "lng": -6.2602777777778,
    "population": 592713
  },
  {
    "name": "Sialkot",
    "country": "Pakistan",
    "lat": 32.5,
    "lng": 74.533333333333,
    "population": 591668
  },
  {
    "name": "Vladivostok",
    "country": "Russia",
    "lat": 43.115,
    "lng": 131.88527777778,
    "population": 591628
  },
  {
    "name": "Pereira",
    "country": "Colombia",
    "lat": 4.8142777777778,
    "lng": -75.694558333333,
    "population": 590554
  },
  {
    "name": "Gaza City",
    "country": "Palestine",
    "lat": 31.5075,
    "lng": 34.459722222222,
    "population": 590481
  },
  {
    "name": "Reynosa",
    "country": "Mexico",
    "lat": 26.092222222222,
    "lng": -98.277777777778,
    "population": 589466
  },
  {
    "name": "Zahedan",
    "country": "Iran",
    "lat": 29.4928874,
    "lng": 60.8503017,
    "population": 587730
  },
  {
    "name": "Florianópolis",
    "country": "Brazil",
    "lat": -27.593280555556,
    "lng": -48.553047222222,
    "population": 587486
  },
  {
    "name": "Essen",
    "country": "Germany",
    "lat": 51.450833333333,
    "lng": 7.0130555555556,
    "population": 586608
  },
  {
    "name": "Mbale",
    "country": "Uganda",
    "lat": 1.0711896,
    "lng": 34.1749506,
    "population": 586300
  },
  {
    "name": "Baltimore",
    "country": "United States",
    "lat": 39.286388888889,
    "lng": -76.615,
    "population": 585708
  },
  {
    "name": "Vilnius",
    "country": "Lithuania",
    "lat": 54.687222222222,
    "lng": 25.28,
    "population": 581475
  },
  {
    "name": "Londrina",
    "country": "Brazil",
    "lat": -23.31,
    "lng": -51.162777777778,
    "population": 581382
  },
  {
    "name": "Ta'if",
    "country": "Saudi Arabia",
    "lat": 21.266666666667,
    "lng": 40.416666666667,
    "population": 579970
  },
  {
    "name": "Port Sudan",
    "country": "Sudan",
    "lat": 19.615833333333,
    "lng": 37.216388888889,
    "population": 579942
  },
  {
    "name": "Serra",
    "country": "Brazil",
    "lat": -20.128888888889,
    "lng": -40.307777777778,
    "population": 579720
  },
  {
    "name": "Tuxtla Gutiérrez",
    "country": "Mexico",
    "lat": 16.753055555556,
    "lng": -93.115555555556,
    "population": 578830
  },
  {
    "name": "Dehradun",
    "country": "India",
    "lat": 30.318,
    "lng": 78.029,
    "population": 578420
  },
  {
    "name": "Milwaukee",
    "country": "United States",
    "lat": 43.05,
    "lng": -87.95,
    "population": 577222
  },
  {
    "name": "Calamba",
    "country": "Philippines",
    "lat": 14.216666666667,
    "lng": 121.16666666667,
    "population": 575046
  },
  {
    "name": "Kabinda",
    "country": "Democratic Republic of the Congo",
    "lat": -6.13333,
    "lng": 24.48333,
    "population": 572000
  },
  {
    "name": "Hamilton",
    "country": "Canada",
    "lat": 43.256666666667,
    "lng": -79.869166666667,
    "population": 569353
  },
  {
    "name": "Ciudad Bolívar",
    "country": "Venezuela",
    "lat": 8.1028532,
    "lng": -63.5469562,
    "population": 567953
  },
  {
    "name": "Yaroslavl",
    "country": "Russia",
    "lat": 57.626388888889,
    "lng": 39.893333333333,
    "population": 567443
  },
  {
    "name": "Chișinău",
    "country": "Moldova",
    "lat": 47.022777777778,
    "lng": 28.835277777778,
    "population": 567038
  },
  {
    "name": "Durgapur",
    "country": "India",
    "lat": 23.55,
    "lng": 87.32,
    "population": 566517
  },
  {
    "name": "Dresden",
    "country": "Germany",
    "lat": 51.0493286,
    "lng": 13.7381437,
    "population": 566222
  },
  {
    "name": "Albuquerque",
    "country": "United States",
    "lat": 35.084444444444,
    "lng": -106.65027777778,
    "population": 564559
  },
  {
    "name": "Asansol",
    "country": "India",
    "lat": 23.683333333333,
    "lng": 86.966666666667,
    "population": 563917
  },
  {
    "name": "Asyut",
    "country": "Egypt",
    "lat": 27.186944444444,
    "lng": 31.171388888889,
    "population": 562061
  },
  {
    "name": "Benguela",
    "country": "Angola",
    "lat": -12.55,
    "lng": 13.416666666667,
    "population": 561775
  },
  {
    "name": "El-Obeid",
    "country": "Sudan",
    "lat": 13.183333333333,
    "lng": 30.216666666667,
    "population": 560471
  },
  {
    "name": "Genoa",
    "country": "Italy",
    "lat": 44.407186111111,
    "lng": 8.9339833333333,
    "population": 558745
  },
  {
    "name": "Ensenada",
    "country": "Mexico",
    "lat": 31.857777777778,
    "lng": -116.60583333333,
    "population": 557430
  },
  {
    "name": "Herat",
    "country": "Afghanistan",
    "lat": 34.341944,
    "lng": 62.203056,
    "population": 556205
  },
  {
    "name": "Hamadan",
    "country": "Iran",
    "lat": 34.8,
    "lng": 48.516666666667,
    "population": 554406
  },
  {
    "name": "Chiclayo",
    "country": "Peru",
    "lat": -6.7716666666667,
    "lng": -79.838333333333,
    "population": 552508
  },
  {
    "name": "Amravati",
    "country": "India",
    "lat": 20.933333333333,
    "lng": 77.75,
    "population": 549370
  },
  {
    "name": "Porto Velho",
    "country": "Brazil",
    "lat": -8.7619444444444,
    "lng": -63.903888888889,
    "population": 548952
  },
  {
    "name": "Naberezhnye Chelny",
    "country": "Russia",
    "lat": 55.714852,
    "lng": 52.3696525,
    "population": 548221
  },
  {
    "name": "Hanover",
    "country": "Germany",
    "lat": 52.374444444444,
    "lng": 9.7386111111111,
    "population": 548186
  },
  {
    "name": "Andijan",
    "country": "Uzbekistan",
    "lat": 40.781944444444,
    "lng": 72.344166666667,
    "population": 547800
  },
  {
    "name": "Manchester",
    "country": "United Kingdom",
    "lat": 53.466666666667,
    "lng": -2.2333333333333,
    "population": 547627
  },
  {
    "name": "Nellore",
    "country": "India",
    "lat": 14.433333333333,
    "lng": 79.966666666667,
    "population": 547621
  },
  {
    "name": "Poznań",
    "country": "Poland",
    "lat": 52.408333333333,
    "lng": 16.933611111111,
    "population": 546859
  },
  {
    "name": "Samarkand",
    "country": "Uzbekistan",
    "lat": 39.654722222222,
    "lng": 66.975833333333,
    "population": 546303
  },
  {
    "name": "Ibagué",
    "country": "Colombia",
    "lat": 4.4377777777778,
    "lng": -75.200555555556,
    "population": 546003
  },
  {
    "name": "Lisbon",
    "country": "Portugal",
    "lat": 38.708042,
    "lng": -9.139016,
    "population": 545796
  },
  {
    "name": "Tomsk",
    "country": "Russia",
    "lat": 56.488611111111,
    "lng": 84.952222222222,
    "population": 544566
  },
  {
    "name": "Valledupar",
    "country": "Colombia",
    "lat": 10.460277777778,
    "lng": -73.259722222222,
    "population": 544134
  },
  {
    "name": "Málaga",
    "country": "Spain",
    "lat": 36.72016,
    "lng": -4.42034,
    "population": 543392
  },
  {
    "name": "Kemerovo",
    "country": "Russia",
    "lat": 55.333333333333,
    "lng": 86.066666666667,
    "population": 542928
  },
  {
    "name": "Tucson",
    "country": "United States",
    "lat": 32.221666666667,
    "lng": -110.92638888889,
    "population": 542629
  },
  {
    "name": "Ajmer",
    "country": "India",
    "lat": 26.468,
    "lng": 74.639,
    "population": 542321
  },
  {
    "name": "Fresno",
    "country": "United States",
    "lat": 36.781666666667,
    "lng": -119.79222222222,
    "population": 542107
  },
  {
    "name": "Matamoros",
    "country": "Mexico",
    "lat": 25.879722222222,
    "lng": -97.504166666667,
    "population": 541979
  },
  {
    "name": "Nasiriyah",
    "country": "Iraq",
    "lat": 31.043888888889,
    "lng": 46.2575,
    "population": 541600
  },
  {
    "name": "Hillah",
    "country": "Iraq",
    "lat": 32.483333333333,
    "lng": 44.433333333333,
    "population": 541034
  },
  {
    "name": "Juiz de Fora",
    "country": "Brazil",
    "lat": -21.75,
    "lng": -43.35,
    "population": 540756
  },
  {
    "name": "Sekondi-Takoradi",
    "country": "Ghana",
    "lat": 4.9166666666667,
    "lng": -1.7666666666667,
    "population": 539548
  },
  {
    "name": "Agadir",
    "country": "Morocco",
    "lat": 30.421388888889,
    "lng": -9.5830555555556,
    "population": 538000
  },
  {
    "name": "Kerman",
    "country": "Iran",
    "lat": 30.291111111111,
    "lng": 57.067777777778,
    "population": 537718
  },
  {
    "name": "Orenburg",
    "country": "Russia",
    "lat": 51.766666666667,
    "lng": 55.1,
    "population": 536515
  },
  {
    "name": "Leeds",
    "country": "United Kingdom",
    "lat": 53.7975,
    "lng": -1.5436111111111,
    "population": 536280
  },
  {
    "name": "Kassala",
    "country": "Sudan",
    "lat": 15.45,
    "lng": 36.4,
    "population": 536009
  },
  {
    "name": "Beira",
    "country": "Mozambique",
    "lat": -19.833333333333,
    "lng": 34.85,
    "population": 530604
  },
  {
    "name": "Yazd",
    "country": "Iran",
    "lat": 31.897222222222,
    "lng": 54.3675,
    "population": 529673
  },
  {
    "name": "Antwerp",
    "country": "Belgium",
    "lat": 51.221111111111,
    "lng": 4.3997222222222,
    "population": 529247
  },
  {
    "name": "Touba",
    "country": "Senegal",
    "lat": 14.866666666667,
    "lng": -15.883333333333,
    "population": 529176
  },
  {
    "name": "Bikaner",
    "country": "India",
    "lat": 28.018055555556,
    "lng": 73.316944444444,
    "population": 529007
  },
  {
    "name": "Kosti",
    "country": "Sudan",
    "lat": 13.166666666667,
    "lng": 32.666666666667,
    "population": 528458
  },
  {
    "name": "Ndola",
    "country": "Zambia",
    "lat": -12.968888888889,
    "lng": 28.6325,
    "population": 528330
  },
  {
    "name": "Himeji",
    "country": "Japan",
    "lat": 34.815166666667,
    "lng": 134.68538888889,
    "population": 527596
  },
  {
    "name": "Bandar Abbas",
    "country": "Iran",
    "lat": 27.186388888889,
    "lng": 56.280833333333,
    "population": 526648
  },
  {
    "name": "Nuremberg",
    "country": "Germany",
    "lat": 49.453888888889,
    "lng": 11.0775,
    "population": 526091
  },
  {
    "name": "Santa Teresa del Tuy",
    "country": "Venezuela",
    "lat": 10.233333333333,
    "lng": -66.65,
    "population": 525321
  },
  {
    "name": "Sacramento",
    "country": "United States",
    "lat": 38.575277777778,
    "lng": -121.48611111111,
    "population": 524943
  },
  {
    "name": "Caxias do Sul",
    "country": "Brazil",
    "lat": -29.167777777778,
    "lng": -51.178888888889,
    "population": 523716
  },
  {
    "name": "Agartala",
    "country": "India",
    "lat": 23.833333333333,
    "lng": 91.266666666667,
    "population": 522613
  },
  {
    "name": "Arak",
    "country": "Iran",
    "lat": 34.095,
    "lng": 49.698055555556,
    "population": 520944
  },
  {
    "name": "Pohang",
    "country": "South Korea",
    "lat": 36.032222222222,
    "lng": 129.365,
    "population": 520305
  },
  {
    "name": "Ryazan",
    "country": "Russia",
    "lat": 54.63,
    "lng": 39.7425,
    "population": 519315
  },
  {
    "name": "Campos dos Goytacazes",
    "country": "Brazil",
    "lat": -21.753888888889,
    "lng": -41.323888888889,
    "population": 519259
  },
  {
    "name": "Faiyum",
    "country": "Egypt",
    "lat": 29.3,
    "lng": 30.833333333333,
    "population": 519047
  },
  {
    "name": "Utsunomiya",
    "country": "Japan",
    "lat": 36.555111111111,
    "lng": 139.88255555556,
    "population": 518197
  },
  {
    "name": "Sheffield",
    "country": "United Kingdom",
    "lat": 53.380833333333,
    "lng": -1.4702777777778,
    "population": 518090
  },
  {
    "name": "Karaganda",
    "country": "Kazakhstan",
    "lat": 49.8,
    "lng": 73.116666666667,
    "population": 515632
  },
  {
    "name": "Ujjain",
    "country": "India",
    "lat": 23.182777777778,
    "lng": 75.777222222222,
    "population": 515215
  },
  {
    "name": "Toulouse",
    "country": "France",
    "lat": 43.604444444444,
    "lng": 1.4433333333333,
    "population": 514819
  },
  {
    "name": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.407222222222,
    "lng": -2.9916666666667,
    "population": 513441
  },
  {
    "name": "Sodo",
    "country": "Ethiopia",
    "lat": 6.86,
    "lng": 37.76,
    "population": 512498
  },
  {
    "name": "Amarah",
    "country": "Iraq",
    "lat": 31.833333333333,
    "lng": 47.15,
    "population": 511500
  },
  {
    "name": "Kansas City",
    "country": "United States",
    "lat": 39.05,
    "lng": -94.583333333333,
    "population": 508090
  },
  {
    "name": "Kenitra",
    "country": "Morocco",
    "lat": 34.25,
    "lng": -6.5833333333333,
    "population": 507736
  },
  {
    "name": "Jhansi",
    "country": "India",
    "lat": 25.44862,
    "lng": 78.56962,
    "population": 507000
  },
  {
    "name": "Matsuyama",
    "country": "Japan",
    "lat": 33.839166666667,
    "lng": 132.76563888889,
    "population": 506743
  },
  {
    "name": "Oujda",
    "country": "Morocco",
    "lat": 34.686666666667,
    "lng": -1.9113888888889,
    "population": 506224
  },
  {
    "name": "Santa Marta",
    "country": "Colombia",
    "lat": 11.236111111111,
    "lng": -74.201666666667,
    "population": 505915
  },
  {
    "name": "São José do Rio Preto",
    "country": "Brazil",
    "lat": -20.82,
    "lng": -49.378888888889,
    "population": 504166
  },
  {
    "name": "Jammu",
    "country": "India",
    "lat": 32.733333333333,
    "lng": 74.85,
    "population": 502197
  },
  {
    "name": "Ile Ife",
    "country": "Nigeria",
    "lat": 7.4666666666667,
    "lng": 4.5666666666667,
    "population": 501952
  },
  {
    "name": "Mazatlán",
    "country": "Mexico",
    "lat": 23.241388888889,
    "lng": -106.40972222222,
    "population": 501441
  },
  {
    "name": "Zafarwal",
    "country": "Pakistan",
    "lat": 32.34631,
    "lng": 74.89987,
    "population": 501213
  },
  {
    "name": "Gomel",
    "country": "Belarus",
    "lat": 52.441666666667,
    "lng": 30.983333333333,
    "population": 501193
  },
  {
    "name": "Juba",
    "country": "South Sudan",
    "lat": 4.8538888888889,
    "lng": 31.5825,
    "population": 500088
  },
  {
    "name": "10th of Ramadan",
    "country": "Egypt",
    "lat": 30.302222222222,
    "lng": 31.745555555556,
    "population": 500000
  },
  {
    "name": "Ctesiphon",
    "country": "Iraq",
    "lat": 33.093611,
    "lng": 44.580833,
    "population": 500000
  },
  {
    "name": "Belas",
    "country": "Angola",
    "lat": -9.0583333333333,
    "lng": 13.153888888889,
    "population": 500000
  },
  {
    "name": "Sukkur",
    "country": "Pakistan",
    "lat": 27.699522222222,
    "lng": 68.867286111111,
    "population": 499900
  },
  {
    "name": "Hsinchu City",
    "country": "Taiwan",
    "lat": 24.804722222222,
    "lng": 120.97138888889,
    "population": 499348
  },
  {
    "name": "Atlanta",
    "country": "United States",
    "lat": 33.748888888889,
    "lng": -84.388055555556,
    "population": 498715
  },
  {
    "name": "Paju",
    "country": "South Korea",
    "lat": 37.832777777778,
    "lng": 126.81694444444,
    "population": 497775
  },
  {
    "name": "Cheboksary",
    "country": "Russia",
    "lat": 56.133333333333,
    "lng": 47.25,
    "population": 497061
  },
  {
    "name": "Staten Island",
    "country": "United States",
    "lat": 40.571944444444,
    "lng": -74.146944444444,
    "population": 495747
  },
  {
    "name": "Nyala",
    "country": "Sudan",
    "lat": 12.05,
    "lng": 24.883333333333,
    "population": 492984
  },
  {
    "name": "Bissau",
    "country": "Guinea-Bissau",
    "lat": 11.86,
    "lng": -15.583333333333,
    "population": 492004
  },
  {
    "name": "Kota Bharu",
    "country": "Malaysia",
    "lat": 6.1333333333333,
    "lng": 102.25,
    "population": 491237
  },
  {
    "name": "Larkana",
    "country": "Pakistan",
    "lat": 27.56,
    "lng": 68.226388888889,
    "population": 490508
  },
  {
    "name": "Vinh",
    "country": "Vietnam",
    "lat": 18.673333333333,
    "lng": 105.69222222222,
    "population": 490000
  },
  {
    "name": "Kaliningrad",
    "country": "Russia",
    "lat": 54.716666666667,
    "lng": 20.5,
    "population": 488690
  },
  {
    "name": "Belgaum",
    "country": "India",
    "lat": 15.856944444444,
    "lng": 74.504444444444,
    "population": 488157
  },
  {
    "name": "Edinburgh",
    "country": "United Kingdom",
    "lat": 55.953333333333,
    "lng": -3.1891666666667,
    "population": 488050
  },
  {
    "name": "Penza",
    "country": "Russia",
    "lat": 53.2,
    "lng": 45.0,
    "population": 487978
  },
  {
    "name": "Gdańsk",
    "country": "Poland",
    "lat": 54.3482907,
    "lng": 18.6540233,
    "population": 487834
  },
  {
    "name": "Omaha",
    "country": "United States",
    "lat": 41.258611111111,
    "lng": -95.9375,
    "population": 486051
  },
  {
    "name": "Sevastopol",
    "country": "Russia",
    "lat": 44.605,
    "lng": 33.5225,
    "population": 485386
  },
  {
    "name": "Vellore",
    "country": "India",
    "lat": 12.933333333333,
    "lng": 79.133333333333,
    "population": 484690
  },
  {
    "name": "Angeles",
    "country": "Philippines",
    "lat": 15.147180555556,
    "lng": 120.58473333333,
    "population": 483452
  },
  {
    "name": "Bafoussam",
    "country": "Cameroon",
    "lat": 5.4666666666667,
    "lng": 10.416666666667,
    "population": 480000
  },
  {
    "name": "Jamnagar",
    "country": "India",
    "lat": 22.47,
    "lng": 70.07,
    "population": 479920
  },
  {
    "name": "Sylhet",
    "country": "Bangladesh",
    "lat": 24.9,
    "lng": 91.866666666667,
    "population": 479837
  },
  {
    "name": "Bratislava",
    "country": "Slovakia",
    "lat": 48.144722222222,
    "lng": 17.112777777778,
    "population": 479389
  },
  {
    "name": "Colorado Springs",
    "country": "United States",
    "lat": 38.863333333333,
    "lng": -104.79194444444,
    "population": 478961
  },
  {
    "name": "Chiniot",
    "country": "Pakistan",
    "lat": 31.716666666667,
    "lng": 72.983333333333,
    "population": 477781
  },
  {
    "name": "Oita",
    "country": "Japan",
    "lat": 33.239555555556,
    "lng": 131.60936111111,
    "population": 477186
  },
  {
    "name": "Gaya",
    "country": "India",
    "lat": 24.75,
    "lng": 85.016666666667,
    "population": 474093
  },
  {
    "name": "Iloilo City",
    "country": "Philippines",
    "lat": 10.716666666667,
    "lng": 122.56666666667,
    "population": 473728
  },
  {
    "name": "Sheikhupura",
    "country": "Pakistan",
    "lat": 31.708333333333,
    "lng": 74.0,
    "population": 473129
  },
  {
    "name": "Piura",
    "country": "Peru",
    "lat": -5.2008333333333,
    "lng": -80.625277777778,
    "population": 473025
  },
  {
    "name": "Bristol",
    "country": "United Kingdom",
    "lat": 51.453611111111,
    "lng": -2.5975,
    "population": 472465
  },
  {
    "name": "Kirov",
    "country": "Russia",
    "lat": 58.6,
    "lng": 49.65,
    "population": 471754
  },
  {
    "name": "San Juan",
    "country": "Argentina",
    "lat": -31.5375,
    "lng": -68.536388888889,
    "population": 471389
  },
  {
    "name": "Seeb",
    "country": "Oman",
    "lat": 23.666666666667,
    "lng": 58.161666666667,
    "population": 470878
  },
  {
    "name": "Mbandaka",
    "country": "Democratic Republic of the Congo",
    "lat": 0.048611111111111,
    "lng": 18.260277777778,
    "population": 470307
  },
  {
    "name": "Mykolaiv",
    "country": "Ukraine",
    "lat": 46.975,
    "lng": 31.995,
    "population": 470011
  },
  {
    "name": "Mazar-i-Sharif",
    "country": "Afghanistan",
    "lat": 36.7,
    "lng": 67.116666666667,
    "population": 469247
  },
  {
    "name": "Baqubah",
    "country": "Iraq",
    "lat": 33.744722222222,
    "lng": 44.643611111111,
    "population": 467900
  },
  {
    "name": "Tel-Aviv",
    "country": "Israel",
    "lat": 32.08,
    "lng": 34.78,
    "population": 467875
  },
  {
    "name": "Raleigh",
    "country": "United States",
    "lat": 35.78,
    "lng": -78.64,
    "population": 467665
  },
  {
    "name": "Burayda",
    "country": "Saudi Arabia",
    "lat": 26.333333333333,
    "lng": 43.966666666667,
    "population": 467410
  },
  {
    "name": "Long Beach",
    "country": "United States",
    "lat": 33.768055555556,
    "lng": -118.19555555556,
    "population": 466742
  },
  {
    "name": "Tula",
    "country": "Russia",
    "lat": 54.2,
    "lng": 37.616666666667,
    "population": 466609
  },
  {
    "name": "Astrakhan",
    "country": "Russia",
    "lat": 46.35,
    "lng": 48.035,
    "population": 465990
  },
  {
    "name": "Constantine",
    "country": "Algeria",
    "lat": 36.365,
    "lng": 6.6147222222222,
    "population": 465138
  },
  {
    "name": "Kanazawa",
    "country": "Japan",
    "lat": 36.561055555556,
    "lng": 136.6565,
    "population": 462479
  },
  {
    "name": "Asunción",
    "country": "Paraguay",
    "lat": -25.28,
    "lng": -57.634444444444,
    "population": 462241
  },
  {
    "name": "Jalgaon",
    "country": "India",
    "lat": 21.016666666667,
    "lng": 75.566666666667,
    "population": 460468
  },
  {
    "name": "Fukuyama",
    "country": "Japan",
    "lat": 34.485861111111,
    "lng": 133.36230555556,
    "population": 459576
  },
  {
    "name": "Virginia Beach",
    "country": "United States",
    "lat": 36.73765,
    "lng": -76.00521,
    "population": 459470
  },
  {
    "name": "Kurnool",
    "country": "India",
    "lat": 15.822222222222,
    "lng": 78.035,
    "population": 457633
  },
  {
    "name": "Tallinn",
    "country": "Estonia",
    "lat": 59.437222222222,
    "lng": 24.745,
    "population": 457572
  },
  {
    "name": "Malacca",
    "country": "Malaysia",
    "lat": 2.1888888888889,
    "lng": 102.25111111111,
    "population": 455300
  },
  {
    "name": "Manizales",
    "country": "Colombia",
    "lat": 5.0675,
    "lng": -75.51,
    "population": 454494
  },
  {
    "name": "Zurich",
    "country": "Switzerland",
    "lat": 47.374444444444,
    "lng": 8.5411111111111,
    "population": 452421
  },
  {
    "name": "Kota Kinabalu",
    "country": "Malaysia",
    "lat": 5.975,
    "lng": 116.0725,
    "population": 452058
  },
  {
    "name": "Udaipur",
    "country": "India",
    "lat": 24.583333333333,
    "lng": 73.683333333333,
    "population": 451100
  },
  {
    "name": "Mogi das Cruzes",
    "country": "Brazil",
    "lat": -23.522777777778,
    "lng": -46.193055555556,
    "population": 450785
  },
  {
    "name": "Stavropol",
    "country": "Russia",
    "lat": 45.05,
    "lng": 41.983333333333,
    "population": 450680
  },
  {
    "name": "Betim",
    "country": "Brazil",
    "lat": -19.967777777778,
    "lng": -44.197777777778,
    "population": 450024
  },
  {
    "name": "Rajshahi",
    "country": "Bangladesh",
    "lat": 24.366666666667,
    "lng": 88.6,
    "population": 448087
  },
  {
    "name": "Ado Ekiti",
    "country": "Nigeria",
    "lat": 7.6166666666667,
    "lng": 5.2166666666667,
    "population": 446749
  },
  {
    "name": "Batman",
    "country": "Turkey",
    "lat": 37.883333333333,
    "lng": 41.133333333333,
    "population": 445874
  },
  {
    "name": "Santiago de Cuba",
    "country": "Cuba",
    "lat": 20.021666666667,
    "lng": -75.829444444444,
    "population": 444851
  },
  {
    "name": "Kahramanmaraş",
    "country": "Turkey",
    "lat": 37.5875,
    "lng": 36.945277777778,
    "population": 443575
  },
  {
    "name": "Macapá",
    "country": "Brazil",
    "lat": 0.032958333333333,
    "lng": -51.065311111111,
    "population": 442933
  },
  {
    "name": "Miami",
    "country": "United States",
    "lat": 25.783333333333,
    "lng": -80.216666666667,
    "population": 442241
  },
  {
    "name": "Korhogo",
    "country": "Ivory Coast",
    "lat": 9.4577777777778,
    "lng": -5.6294444444444,
    "population": 440926
  },
  {
    "name": "Montes Claros",
    "country": "Brazil",
    "lat": -16.732222222222,
    "lng": -43.863611111111,
    "population": 437601
  },
  {
    "name": "Phrae",
    "country": "Thailand",
    "lat": 18.145,
    "lng": 100.14055555556,
    "population": 437350
  },
  {
    "name": "Sunchon",
    "country": "North Korea",
    "lat": 39.416666666667,
    "lng": 125.93333333333,
    "population": 437000
  },
  {
    "name": "Sangli",
    "country": "India",
    "lat": 16.866666666667,
    "lng": 74.566666666667,
    "population": 436639
  },
  {
    "name": "Lobito",
    "country": "Angola",
    "lat": -12.35,
    "lng": 13.546388888889,
    "population": 436467
  },
  {
    "name": "Ulan-Ude",
    "country": "Russia",
    "lat": 51.827222222222,
    "lng": 107.60638888889,
    "population": 435067
  },
  {
    "name": "Palma",
    "country": "Spain",
    "lat": 39.566666666667,
    "lng": 2.6497222222222,
    "population": 434786
  },
  {
    "name": "Kursk",
    "country": "Russia",
    "lat": 51.737222222222,
    "lng": 36.187222222222,
    "population": 434696
  },
  {
    "name": "Kozhikode",
    "country": "India",
    "lat": 11.247777777778,
    "lng": 75.780277777778,
    "population": 431560
  },
  {
    "name": "Windhoek",
    "country": "Namibia",
    "lat": -22.57,
    "lng": 17.083611111111,
    "population": 431000
  },
  {
    "name": "Zanjan",
    "country": "Iran",
    "lat": 36.666666666667,
    "lng": 48.483333333333,
    "population": 430871
  },
  {
    "name": "Khamis Mushait",
    "country": "Saudi Arabia",
    "lat": 18.3,
    "lng": 42.733333333333,
    "population": 430828
  },
  {
    "name": "Corrientes",
    "country": "Argentina",
    "lat": -27.483333333333,
    "lng": -58.816666666667,
    "population": 430170
  },
  {
    "name": "Minneapolis",
    "country": "United States",
    "lat": 44.981944444444,
    "lng": -93.269166666667,
    "population": 429954
  },
  {
    "name": "Uyo",
    "country": "Nigeria",
    "lat": 5.05,
    "lng": 7.9333333333333,
    "population": 429900
  },
  {
    "name": "Tanta",
    "country": "Egypt",
    "lat": 30.783333333333,
    "lng": 31.0,
    "population": 429503
  },
  {
    "name": "Ismailia",
    "country": "Egypt",
    "lat": 30.583333333333,
    "lng": 32.266666666667,
    "population": 429465
  },
  {
    "name": "Cusco",
    "country": "Peru",
    "lat": -13.516944444444,
    "lng": -71.978611111111,
    "population": 428450
  },
  {
    "name": "Veracruz",
    "country": "Mexico",
    "lat": 19.190277777778,
    "lng": -96.153333333333,
    "population": 428323
  },
  {
    "name": "Sokoto",
    "country": "Nigeria",
    "lat": 13.062222222222,
    "lng": 5.2338888888889,
    "population": 427760
  },
  {
    "name": "Kashiwa",
    "country": "Japan",
    "lat": 35.867583333333,
    "lng": 139.97575,
    "population": 427603
  },
  {
    "name": "Malatya",
    "country": "Turkey",
    "lat": 38.35062,
    "lng": 38.3094,
    "population": 426381
  },
  {
    "name": "Aomori",
    "country": "Japan",
    "lat": 40.822777777778,
    "lng": 140.74694444444,
    "population": 425962
  },
  {
    "name": "Tepic",
    "country": "Mexico",
    "lat": 21.5,
    "lng": -104.9,
    "population": 425942
  },
  {
    "name": "Akola",
    "country": "India",
    "lat": 20.733333333333,
    "lng": 77.0,
    "population": 425817
  },
  {
    "name": "Xalapa",
    "country": "Mexico",
    "lat": 19.53124,
    "lng": -96.91589,
    "population": 424755
  },
  {
    "name": "Piracicaba",
    "country": "Brazil",
    "lat": -22.725165,
    "lng": -47.6493269,
    "population": 423323
  },
  {
    "name": "Tétouan",
    "country": "Morocco",
    "lat": 35.566666666667,
    "lng": -5.3666666666667,
    "population": 422757
  },
  {
    "name": "Skopje",
    "country": "North Macedonia",
    "lat": 41.996111111111,
    "lng": 21.431666666667,
    "population": 422540
  },
  {
    "name": "Likasi",
    "country": "Democratic Republic of the Congo",
    "lat": -10.983333333333,
    "lng": 26.733333333333,
    "population": 422535
  },
  {
    "name": "Toyota",
    "country": "Japan",
    "lat": 35.082416666667,
    "lng": 137.15633333333,
    "population": 422106
  },
  {
    "name": "Elazığ",
    "country": "Turkey",
    "lat": 38.666666666667,
    "lng": 39.216666666667,
    "population": 421726
  },
  {
    "name": "Hpa-An",
    "country": "Myanmar",
    "lat": 16.890555555556,
    "lng": 97.633333333333,
    "population": 421525
  },
  {
    "name": "Gumi",
    "country": "South Korea",
    "lat": 36.21,
    "lng": 128.35444444444,
    "population": 421075
  },
  {
    "name": "Rahim Yar Khan",
    "country": "Pakistan",
    "lat": 28.420555555556,
    "lng": 70.303333333333,
    "population": 420419
  },
  {
    "name": "Manisa",
    "country": "Turkey",
    "lat": 38.611944444444,
    "lng": 27.426388888889,
    "population": 420015
  },
  {
    "name": "Seremban",
    "country": "Malaysia",
    "lat": 2.7297222222222,
    "lng": 101.93805555556,
    "population": 419536
  },
  {
    "name": "Campina Grande",
    "country": "Brazil",
    "lat": -7.2305555555556,
    "lng": -35.881111111111,
    "population": 419379
  },
  {
    "name": "Santos",
    "country": "Brazil",
    "lat": -23.960833333333,
    "lng": -46.333888888889,
    "population": 418608
  },
  {
    "name": "Petrolina",
    "country": "Brazil",
    "lat": -9.3927777777778,
    "lng": -40.507777777778,
    "population": 418444
  },
  {
    "name": "Taraz",
    "country": "Kazakhstan",
    "lat": 42.883333333333,
    "lng": 71.366666666667,
    "population": 418368
  },
  {
    "name": "Kolwezi",
    "country": "Democratic Republic of the Congo",
    "lat": -10.716666666667,
    "lng": 25.466666666667,
    "population": 418000
  },
  {
    "name": "Luhansk",
    "country": "Ukraine",
    "lat": 48.5717084,
    "lng": 39.2973153,
    "population": 417990
  },
  {
    "name": "Takamatsu",
    "country": "Japan",
    "lat": 34.342805555556,
    "lng": 134.04661111111,
    "population": 417814
  },
  {
    "name": "Arusha",
    "country": "Tanzania",
    "lat": -3.3666666666667,
    "lng": 36.683333333333,
    "population": 416442
  },
  {
    "name": "Jhang",
    "country": "Pakistan",
    "lat": 31.268055555556,
    "lng": 72.318055555556,
    "population": 414131
  },
  {
    "name": "Boa Vista",
    "country": "Brazil",
    "lat": 2.82,
    "lng": -60.671944444444,
    "population": 413486
  },
  {
    "name": "Tulsa",
    "country": "United States",
    "lat": 36.131388888889,
    "lng": -95.937222222222,
    "population": 413066
  },
  {
    "name": "Toyama",
    "country": "Japan",
    "lat": 36.695916666667,
    "lng": 137.21369444444,
    "population": 413028
  },
  {
    "name": "Tver",
    "country": "Russia",
    "lat": 56.857827777778,
    "lng": 35.921927777778,
    "population": 412806
  },
  {
    "name": "Sanandaj",
    "country": "Iran",
    "lat": 35.309722222222,
    "lng": 46.998888888889,
    "population": 412767
  },
  {
    "name": "Tirunelveli",
    "country": "India",
    "lat": 8.7288888888889,
    "lng": 77.708055555556,
    "population": 411298
  },
  {
    "name": "Pasto",
    "country": "Colombia",
    "lat": 1.21,
    "lng": -77.274722222222,
    "population": 410835
  },
  {
    "name": "Panama City",
    "country": "Panama",
    "lat": 8.9711111111111,
    "lng": -79.534722222222,
    "population": 410354
  },
  {
    "name": "Bhagalpur",
    "country": "India",
    "lat": 25.25,
    "lng": 87.016666666667,
    "population": 410210
  },
  {
    "name": "Maringá",
    "country": "Brazil",
    "lat": -23.425,
    "lng": -51.938888888889,
    "population": 409657
  },
  {
    "name": "Santa Fe",
    "country": "Argentina",
    "lat": -31.633333333333,
    "lng": -60.7,
    "population": 408572
  },
  {
    "name": "Magnitogorsk",
    "country": "Russia",
    "lat": 53.383333333333,
    "lng": 59.033333333333,
    "population": 408487
  },
  {
    "name": "Zaria",
    "country": "Nigeria",
    "lat": 11.066666666667,
    "lng": 7.7,
    "population": 408198
  },
  {
    "name": "Đà Lạt",
    "country": "Vietnam",
    "lat": 11.94,
    "lng": 108.4375,
    "population": 406105
  },
  {
    "name": "Caruaru",
    "country": "Brazil",
    "lat": -8.2827777777778,
    "lng": -35.975833333333,
    "population": 405408
  },
  {
    "name": "Bakersfield",
    "country": "United States",
    "lat": 35.373333333333,
    "lng": -119.01888888889,
    "population": 403455
  },
  {
    "name": "Brno",
    "country": "Czech Republic",
    "lat": 49.195277777778,
    "lng": 16.608333333333,
    "population": 402739
  },
  {
    "name": "Jundiaí",
    "country": "Brazil",
    "lat": -23.186388888889,
    "lng": -46.884166666667,
    "population": 401896
  },
  {
    "name": "Tarlac City",
    "country": "Philippines",
    "lat": 15.486944444444,
    "lng": 120.59,
    "population": 401892
  },
  {
    "name": "Aswan",
    "country": "Egypt",
    "lat": 24.088919444444,
    "lng": 32.899730555556,
    "population": 401890
  },
  {
    "name": "Bogura",
    "country": "Bangladesh",
    "lat": 24.85,
    "lng": 89.366666666667,
    "population": 400983
  },
  {
    "name": "Gifu",
    "country": "Japan",
    "lat": 35.42625,
    "lng": 136.75944444444,
    "population": 400118
  },
  {
    "name": "Montería",
    "country": "Colombia",
    "lat": 8.76,
    "lng": -75.885555555556,
    "population": 400000
  },
  {
    "name": "Dera Ghazi Khan",
    "country": "Pakistan",
    "lat": 30.05,
    "lng": 70.633333333333,
    "population": 399064
  },
  {
    "name": "Anápolis",
    "country": "Brazil",
    "lat": -16.326944444444,
    "lng": -48.952777777778,
    "population": 398869
  },
  {
    "name": "Kisumu",
    "country": "Kenya",
    "lat": -0.1,
    "lng": 34.75,
    "population": 397957
  },
  {
    "name": "Kikwit",
    "country": "Democratic Republic of the Congo",
    "lat": -5.0333333333333,
    "lng": 18.816666666667,
    "population": 397737
  },
  {
    "name": "Wichita",
    "country": "United States",
    "lat": 37.688888888889,
    "lng": -97.336111111111,
    "population": 397532
  },
  {
    "name": "Miyazaki",
    "country": "Japan",
    "lat": 31.907722222222,
    "lng": 131.42019444444,
    "population": 397476
  },
  {
    "name": "Kollam",
    "country": "India",
    "lat": 8.8852777777778,
    "lng": 76.586388888889,
    "population": 397419
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
    "name": "Belize",
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
    "country": "Chile",
    "lat": -38.216666666667,
    "lng": -72.333333333333,
    "population": 34890
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
  }
];
