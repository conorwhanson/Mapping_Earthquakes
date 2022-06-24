// STEP 0: GET DATA

// Add console.log to see if code is working
console.log("Let's get quakin.");

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: "#ffae42",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    };

    L.geoJSON(data, {
    // turn each feature into a marker using pointToLayer
        pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng)
            },
        style: styleInfo
    }).addTo(map);
});

// .bindPopup("<h2> Magnitude: " + feature[0].properties.mag + "</h2><hr><h3>Location: " + feature[0].properties.place + "</h3>");

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
    "Satellite": satelliteStreets
};

// STEP 4: INITIALIZE MAP
var map = L.map("map", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// STEP 5: LAYER CONTROLS
L.control.layers(baseMaps).addTo(map);