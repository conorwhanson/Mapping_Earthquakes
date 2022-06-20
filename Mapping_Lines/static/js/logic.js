// Add console.log to see if code is working
console.log("Yep. It's working. Let's make some lines!!");

// Add a map object with center and zoom level
let map = L.map("map").setView([37.6213, -122.3790], 4);

// create line variable
let line = [
    [37.6213, -122.3790],
    [30.1975, 97.6664]
    [43.6777, 79.6248],
    [40.6413, 73.7781]

];

// add line to map
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);