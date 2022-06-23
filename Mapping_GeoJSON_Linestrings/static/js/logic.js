// STEP 0: GET DATA
var torontoData = "https://raw.githubusercontent.com/conorwhanson/Mapping_Earthquakes/main/torontoRoutes.json";

// Add console.log to see if code is working
d3.json(torontoData).then(function(data){
    console.log(data);
    console.log("Let's map them quakes.");
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h6> Airline: " + feature.properties.airline + "</h6><hr><h6> Destination: " + feature.properties.dst + "</h6>")
        }
    })
    .addTo(map);
});

var myStyle = {
    "color": "yellow",
    "weight": 2,
    "opacity": 0.7
};

// STEP 1: CREATE THE BASE LAYERS
// We create the tile layer that will be the background of our map.

var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// STEP 2: OVERLAYS

// STEP 3: DICTS FOR LAYERS
var baseMaps = {
    Light: light,
    Dark: dark
};

// STEP 4: INITIALIZE MAP
var map = L.map("map", {
    center: [44.0, -80.0],
    zoom: 3,
    layer: [light]
});

// STEP 5: LAYER CONTROLS
L.control.layers(baseMaps).addTo(map);
light.addTo(map);
