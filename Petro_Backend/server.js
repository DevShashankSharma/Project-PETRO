const express = require("express");
const axios = require("axios");
const geolib = require("geolib");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Sample list of police stations with latitudes & longitudes
const policeStations = [
    { name: "Connaught Place Police Station", state: "Delhi", city: "New Delhi", place: "Connaught Place", latitude: 28.6329, longitude: 77.2195 },
    { name: "Colaba Police Station", state: "Maharashtra", city: "Mumbai", place: "Colaba", latitude: 18.9067, longitude: 72.8147 },
    { name: "MG Road Police Station", state: "Karnataka", city: "Bangalore", place: "MG Road", latitude: 12.9716, longitude: 77.5946 },
    { name: "Park Street Police Station", state: "West Bengal", city: "Kolkata", place: "Park Street", latitude: 22.5525, longitude: 88.3531 }
];

// Function to find the nearest police station
function findNearestPoliceStation(lat, lon) {
    let nearestStation = null;
    let minDistance = Infinity;

    for (const station of policeStations) {
        const distance = geolib.getDistance(
            { latitude: lat, longitude: lon },
            { latitude: station.latitude, longitude: station.longitude }
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearestStation = station;
        }
    }

    return {
        nearest_police_station: nearestStation.name,
        state: nearestStation.state,
        city: nearestStation.city,
        place: nearestStation.place,
        distance_km: (minDistance / 1000).toFixed(2) // Convert meters to km
    };
}

// API endpoint to find the nearest police station using latitude & longitude
app.get("/nearest-police-station", (req, res) => {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "Please provide latitude and longitude" });

    const result = findNearestPoliceStation(parseFloat(lat), parseFloat(lon));
    res.json(result);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
