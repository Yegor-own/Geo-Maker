"use strict"

{
  let map = document.querySelector('#map')
  map.style.height = document.documentElement.clientHeight - 250 + 'px'
}

//mapboxgl.accessToken = 'pk.eyJ1IjoiZWdvcjAxOCIsImEiOiJja2kxamN6bDEwdjAyMnpxa2lhbHJ4eG9lIn0.pGEFxMvKpDrBAdbW-SukNQ';
//var map = new mapboxgl.Map({
//container: 'map',
//style: 'mapbox://styles/mapbox/streets-v11'
//});

let map = L.map('map').setView([56.8519000, 60.6122000], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

