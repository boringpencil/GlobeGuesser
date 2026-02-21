// --- Configuration ---
const MAX_SCORE = 1000;
const DECAY_CONSTANT = 2000000; // 2000 km decay
const MAX_ROUNDS = 5;

if (typeof cities === 'undefined' || cities.length === 0) {
    console.error("cities.js failed to load or is empty.");
}

// --- State ---
let totalScore = 0;
let currentRound = 1;
let currentCity = null;
let roundActive = false;
let usedCities = new Set();
let map, markerActual, markerGuess, linePoly;

// --- DOM Elements ---
const totalScoreEl = document.getElementById('total-score');
const roundDisplayEl = document.getElementById('round-display');
const gameCard = document.getElementById('game-card');
const targetCityEl = document.getElementById('target-city');
const targetCountryEl = document.getElementById('target-country');
const targetHintEl = document.getElementById('target-hint');

const resultCard = document.getElementById('result-card');
const resultTitleEl = document.getElementById('result-title');
const resultDistanceEl = document.getElementById('result-distance');
const resultPointsEl = document.getElementById('result-points');
const nextBtn = document.getElementById('next-btn');

const gameOverCard = document.getElementById('game-over-card');
const finalAverageEl = document.getElementById('final-average');
const playAgainBtn = document.getElementById('play-again-btn');

function initMap() {
    map = L.map('map', {
        zoomControl: false,
        minZoom: 2,
        maxZoom: 10,
        worldCopyJump: true
    }).setView([20, 0], 2);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18
    }).addTo(map);

    map.on('click', handleMapClick);

    startRound();
}

function selectCityForRound(round) {
    let candidates = [];

    // Round 1: US City
    if (round === 1) {
        candidates = cities.filter(c => c.country === "United States");
    }
    // Round 2: Easy City
    else if (round === 2) {
        candidates = cities.filter(c => c.difficulty === "easy");
    }
    // Round 3: Medium City
    else if (round === 3) {
        candidates = cities.filter(c => c.difficulty === "medium");
    }
    // Round 4: 50/50 Medium or Hard
    else if (round === 4) {
        const targetDiff = Math.random() < 0.5 ? "medium" : "hard";
        candidates = cities.filter(c => c.difficulty === targetDiff);
    }
    // Round 5: Hard City
    else if (round === 5) {
        candidates = cities.filter(c => c.difficulty === "hard");
    }

    // Filter out used cities if possible
    let available = candidates.filter(c => !usedCities.has(c.name));

    // Fallback if we somehow run out of cities in a category
    if (available.length === 0) {
        available = cities.filter(c => !usedCities.has(c.name));
        if (available.length === 0) {
            available = cities; // Extreme fallback
        }
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const selected = available[randomIndex];
    usedCities.add(selected.name);
    return selected;
}

function startRound() {
    if (markerActual) map.removeLayer(markerActual);
    if (markerGuess) map.removeLayer(markerGuess);
    if (linePoly) map.removeLayer(linePoly);

    map.flyTo([20, 0], 2, { duration: 1 });

    roundDisplayEl.textContent = `${currentRound}/${MAX_ROUNDS}`;
    currentCity = selectCityForRound(currentRound);

    targetCityEl.textContent = currentCity.name;
    targetCountryEl.textContent = "";

    if (currentCity.difficulty === "hard") {
        targetHintEl.textContent = `Hint: It's in ${currentCity.country}`;
        targetHintEl.classList.remove('hidden');
    } else {
        targetHintEl.classList.add('hidden');
    }

    gameCard.classList.remove('hidden');
    gameCard.classList.add('active');

    resultCard.classList.remove('active');
    resultCard.classList.add('hidden');

    // Slight delay to prevent immediate clicking
    setTimeout(() => {
        roundActive = true;
    }, 500);
}

function handleMapClick(e) {
    if (!roundActive) return;

    roundActive = false;

    const guessLatLng = e.latlng;
    const actualLatLng = L.latLng(currentCity.lat, currentCity.lng);

    const distanceMeters = map.distance(guessLatLng, actualLatLng);
    const distanceKm = distanceMeters / 1000;

    const points = Math.round(MAX_SCORE * Math.exp(-distanceMeters / DECAY_CONSTANT));
    totalScore += points;

    markerGuess = L.marker(guessLatLng, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: '<div class="pulse"></div><div class="pin"></div>',
            iconSize: [0, 0]
        })
    }).addTo(map);

    markerActual = L.marker(actualLatLng, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: '<div class="pin actual"></div>',
            iconSize: [0, 0]
        })
    }).addTo(map);

    linePoly = L.polyline([guessLatLng, actualLatLng], {
        color: '#10B981',
        weight: 3,
        dashArray: '10, 10',
        opacity: 0.8
    }).addTo(map);

    map.flyToBounds(L.latLngBounds(guessLatLng, actualLatLng), {
        padding: [100, 100],
        maxZoom: 6,
        duration: 1.5
    });

    setTimeout(() => {
        showResults(distanceKm, points);
    }, 1800);
}

function showResults(distKm, points) {
    gameCard.classList.remove('active');
    gameCard.classList.add('hidden');

    resultDistanceEl.textContent = distKm >= 10 ? `${Math.round(distKm).toLocaleString()} km` : `${distKm.toFixed(1)} km`;
    resultPointsEl.textContent = `+${points}`;
    totalScoreEl.textContent = totalScore;

    if (points > 950) {
        resultTitleEl.textContent = "Bullseye! 🎯";
    } else if (points > 700) {
        resultTitleEl.textContent = "Great Guess! 🌟";
    } else if (points > 300) {
        resultTitleEl.textContent = "Not bad! 👍";
    } else {
        resultTitleEl.textContent = "Oof... 😬";
    }

    targetCountryEl.textContent = `It was in ${currentCity.country}`;

    if (currentRound >= MAX_ROUNDS) {
        nextBtn.textContent = "Finish Game";
    } else {
        nextBtn.textContent = "Next Round";
    }

    resultCard.classList.remove('hidden');
    resultCard.classList.add('active');
}

function showGameOver() {
    resultCard.classList.remove('active');
    resultCard.classList.add('hidden');

    const averageScore = Math.round(totalScore / MAX_ROUNDS);
    finalAverageEl.textContent = averageScore;

    gameOverCard.classList.remove('hidden');
    gameOverCard.classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (currentRound >= MAX_ROUNDS) {
        showGameOver();
    } else {
        currentRound++;
        startRound();
    }
});

playAgainBtn.addEventListener('click', () => {
    gameOverCard.classList.remove('active');
    gameOverCard.classList.add('hidden');

    totalScore = 0;
    currentRound = 1;
    usedCities.clear();
    totalScoreEl.textContent = "0";

    startRound();
});

document.addEventListener('DOMContentLoaded', initMap);
