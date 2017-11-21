console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpbWFtYSIsImEiOiJjamE5dDlkOHowYjJ0MzNxdHNoZ3c1b3VpIn0.cWRIdciYlzzPtnmajtS3nA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v9" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map)
console.log(marker)
