"use strict";

L.Routing.control({
  waypoints:
  [
     {lat: 56.8360, lng: 60.5856},
     {lat: 56.8360, lng: 60.5856},
     {lat: 56.8363, lng: 60.5879},
     {lat: 56.8345, lng: 60.5861},
     {lat: 56.8347, lng: 60.5885}
  ],
  routeWhileDragging: false,
}).addTo(map)

// let location1
// let location2
// let polyline
// let marker
// function sendPost() {
//   if (polyline) {
//     map.removeLayer(polyline)
//   }
//   map.removeLayer(marker)
//   polyline = L.Routing.control({
//     waypoints: [
//       {lat: 56.83607400292578, lng: 60.585662126541145},
//       {lat: 56.836338109809645, lng: 60.58796882629395},
//       {lat: 56.83457149276317, lng: 60.586155652999885},
//       {lat: 56.834794525426055, lng: 60.58851599693299}
//     ],
//     routeWhileDragging: false,
//   }).addTo(map)
// }
// sendPost()
// map.on('click', function(e) {
//     console.log(e.latlng);
//     marker = new L.Marker(e.latlng).addTo(map)
    // if (location1 === undefined) {
    //     location1 = e.latlng
    //     marker = new L.Marker(e.latlng).addTo(map)
    //     console.log(e.latlng);
    // }
    // else if (location2 === undefined) {
    //     location2 = e.latlng
    //     console.log(e.latlng);
    //     // sendPost()
    // }
// })