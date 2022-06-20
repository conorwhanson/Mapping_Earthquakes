// Add console.log to see if code is working
console.log("Yep. It's working. Let's make some lines!!");

// Add a map object with center and zoom level
let map = L.map("map").setView([36.1733, -120.1794], 7);

// create line variable
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
];

// add line to map
L.polyline(line, {
    color: "red"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);