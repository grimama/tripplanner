const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: 'http://thenounproject.com/term/map-marker/5149',
  activities: "http://i.imgur.com/WbMOfMl.png"
};


let markerDom = function(type){
markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = iconURLs[type];
//return markerDomEl;
}

//new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const buildMarker = function (type, coords) {
  return new mapbox.Marker(markerDom(type)).setLngLat(coords);
};

module.exports = buildMarker;
