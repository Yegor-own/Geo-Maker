"use strict"

let loc
let marker
map.on('click', function(e) {
  loc = e.latlng
  if (marker) map.removeLayer(marker)
  marker = new L.Marker(e.latlng).addTo(map)
})

function request(figure) {
  if (loc) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/', true);
    xhr.send({
      start: loc,
      figure: 'rectangle'
    })
    console.log({
      start: loc,
      figure: figure
    })
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      alert( xhr.responseText ); // responseText -- текст ответа.
      L.Routing.control({
        waypoints: xhr.responseText,
        // {lat: 56.8360, lng: 60.5856},
        // {lat: 56.8360, lng: 60.5856},
        // {lat: 56.8363, lng: 60.5879},
        // {lat: 56.8345, lng: 60.5861},
        // {lat: 56.8347, lng: 60.5885}
        routeWhileDragging: false,
        // waypointMode: 'snap',
        // router: new L.Routing.Mapzen('valhalla-apikey', 'pedestrian'),
        // formatter: new L.Routing.Mapzen.Formatter()
      }).addTo(map)
    }
  }
  else {
    alert('Вберите место старта')
  }
}

function rect() {
  request('rectangle')
}

function heart() {
  request('heart')
}
