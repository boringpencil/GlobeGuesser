// --- Configuration ---
const MAX_SCORE = 5000;
const DECAY_CONSTANT = 2000000; // 2000 km decay

if (typeof cities === 'undefined' || cities.length === 0) {
    console.error("cities.js failed to load or is empty.");
}

// --- State ---
let totalScore = 0;
let currentCity = null;
let roundActive = false;
let map, markerActual, markerGuess, linePoly;

// --- DOM Elements ---
const totalScoreEl = document.getElementById('total-score');
const gameCard = document.getElementById('game-card');
const targetCityEl = document.getElementById('target-city');
const targetCountryEl = document.getElementById('target-country');

const resultCard = document.getElementById('result-card');
const resultTitleEl = document.getElementById('result-title');
const resultDistanceEl = document.getElementById('result-distance');
const resultPointsEl = document.getElementById('result-points');
const nextBtn = document.getElementById('next-btn');

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

function startRound() {
    if (markerActual) map.removeLayer(markerActual);
    if (markerGuess) map.removeLayer(markerGuess);
    if (linePoly) map.removeLayer(linePoly);

    map.flyTo([20, 0], 2, { duration: 1 });

    const randomIndex = Math.floor(Math.random() * cities.length);
    currentCity = cities[randomIndex];

    targetCityEl.textContent = currentCity.name;
    targetCountryEl.textContent = "";

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

    if (points > 4800) {
        resultTitleEl.textContent = "Bullseye! 🎯";
    } else if (points > 3500) {
        resultTitleEl.textContent = "Great Guess! 🌟";
    } else if (points > 1500) {
        resultTitleEl.textContent = "Not bad! 👍";
    } else {
        resultTitleEl.textContent = "Oof... 😬";
    }

    targetCountryEl.textContent = `It was in ${currentCity.country}`;

    resultCard.classList.remove('hidden');
    resultCard.classList.add('active');
}

nextBtn.addEventListener('click', () => {
    startRound();
});

document.addEventListener('DOMContentLoaded', initMap);
