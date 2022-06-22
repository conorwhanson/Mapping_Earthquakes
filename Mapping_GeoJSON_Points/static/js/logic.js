// Add console.log to see if code is working
console.log("Let's map them quakes.");

// Add a map object with center and zoom level
let map = L.map("map").setView([30, 30], 2);

// GeoJSON point
// L.geoJSON(sanFranAirport, {
//     // turn each feature into a marker using pointToLayer
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", ", "<h3>" + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

// Add point using onEachFeature to add popup marker
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//       layer.bindPopup("<h6> Airport Code: " + feature.properties.faa + "</h6><hr><h6>Airport Name: " + feature.properties.name + "</h6>");
//      }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create JSON url variable
let airportData = "https://https://raw.githubusercontent.com/conorwhanson/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/majorAirports.json"

// Get the JSON data
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
