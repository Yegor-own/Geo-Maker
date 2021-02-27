"use strict"

var map = L.map('map').setView([56.8519000, 60.6122000], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);