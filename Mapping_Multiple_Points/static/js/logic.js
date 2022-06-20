// Add console.log to see if code is working
console.log("Yep. It's working. Mapping multiple points engage!!");

// Add a map object with center and zoom level
let map = L.map("map").setView([40.7, -94.5], 4);

// Add a marker
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Alternative to above:
//         let map = L.map("mapid", {
//         center: [
//         40.7, -94.5
//         ],
//         zoom: 4
//      });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);