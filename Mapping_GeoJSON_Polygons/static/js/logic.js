// STEP 0: GET DATA
var neighborhoods = "https://raw.githubusercontent.com/conorwhanson/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Add console.log to see if code is working
d3.json(neighborhoods).then(function(data){
    console.log(data);
    console.log("Let's map them quakes.");
    L.geoJSON(data).addTo(map);
});

// STEP 1: CREATE THE BASE LAYERS
// We create the tile layer that will be the background of our map.

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

var satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// STEP 2: OVERLAYS

// STEP 3: DICTS FOR LAYERS
var baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// STEP 4: INITIALIZE MAP
var map = L.map("map", {
    center: [43.7, -79.3],
    zoom: 3,
    layers: [satelliteStreets]
});

// STEP 5: LAYER CONTROLS
L.control.layers(baseMaps).addTo(map);
