"use strict"

let loc
let marker
map.on('click', function(e) {
  loc = []
  let l1 = e.latlng['lat']
  let l2 = e.latlng['lng']
  loc.push([l1, l2])
  if (marker) map.removeLayer(marker)
  marker = new L.Marker(e.latlng).addTo(map)
})


function request(figure) {
  if (loc === undefined) {
    alert('Введите место старта')
  }
  else {
    $.ajax({
      url: '',
      type: 'get',
      data: {
        fig: figure,
        lat: loc[0][0],
        lng: loc[0][1]
      },
      success: function(response) {
        L.Routing.control({
          waypoints: response.coordinates,
          routeWhileDragging: false
        }).addTo(map)
      }
    })
  }
}

function rect() {
  request('rect')
}

function heart() {
  request('heart')
}

function cat() {
  request('cat')
}

//xhr.open('GET', 'http://127.0.0.1:8000/route', true);
//    xhr.send(figure)
//    console.log({
//      start: loc,
//      figure: figure
//    })
//    if (xhr.status != 200) {
//      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
//    } else {
//      alert( xhr.responseText ); // responseText -- текст ответа.
//      L.Routing.control({
//        waypoints: xhr.responseText,
//        // {lat: 56.8360, lng: 60.5856},
//        // {lat: 56.8360, lng: 60.5856},
//        // {lat: 56.8363, lng: 60.5879},
//        // {lat: 56.8345, lng: 60.5861},
//        // {lat: 56.8347, lng: 60.5885}
//        routeWhileDragging: false,
//        // waypointMode: 'snap',
//        // router: new L.Routing.Mapzen('valhalla-apikey', 'pedestrian'),
//        // formatter: new L.Routing.Mapzen.Formatter()
//      }).addTo(map)
//    }
//  }
//  else {
//    alert('Вберите место старта')
//  }


//L.Routing.control({
//  waypoints:
//[{'lat': 56.8496, 'lng': 60.6178},
// {'lat': 56.8496, 'lng': 60.6178},
// {'lat': 56.8496, 'lng': 60.6177},
// {'lat': 56.8496, 'lng': 60.6176},
// {'lat': 56.8496, 'lng': 60.6176},
// {'lat': 56.8496, 'lng': 60.6175},
// {'lat': 56.8496, 'lng': 60.6174},
// {'lat': 56.8496, 'lng': 60.6174},
// {'lat': 56.8495, 'lng': 60.6174},
// {'lat': 56.8494, 'lng': 60.6174},
// {'lat': 56.8494, 'lng': 60.6175},
// {'lat': 56.8494, 'lng': 60.6175},
// {'lat': 56.8493, 'lng': 60.6175},
// {'lat': 56.8493, 'lng': 60.6175},
// {'lat': 56.8491, 'lng': 60.6175},
// {'lat': 56.849, 'lng': 60.6175},
// {'lat': 56.849, 'lng': 60.6175},
// {'lat': 56.8489, 'lng': 60.6175},
// {'lat': 56.8489, 'lng': 60.6174},
// {'lat': 56.8488, 'lng': 60.6174},
// {'lat': 56.8488, 'lng': 60.6174},
// {'lat': 56.8487, 'lng': 60.6174},
// {'lat': 56.8487, 'lng': 60.6175},
// {'lat': 56.8487, 'lng': 60.6176},
// {'lat': 56.8488, 'lng': 60.6177},
// {'lat': 56.8488, 'lng': 60.6177},
// {'lat': 56.8487, 'lng': 60.6178},
// {'lat': 56.8487, 'lng': 60.6179},
// {'lat': 56.8487, 'lng': 60.618},
// {'lat': 56.8488, 'lng': 60.618},
// {'lat': 56.8489, 'lng': 60.6181},
// {'lat': 56.8489, 'lng': 60.6181},
// {'lat': 56.849, 'lng': 60.6182},
// {'lat': 56.8491, 'lng': 60.6182},
// {'lat': 56.8492, 'lng': 60.6182},
// {'lat': 56.8492, 'lng': 60.6182},
// {'lat': 56.8493, 'lng': 60.6182},
// {'lat': 56.8493, 'lng': 60.6181},
// {'lat': 56.8494, 'lng': 60.6181},
// {'lat': 56.8494, 'lng': 60.6181},
// {'lat': 56.8495, 'lng': 60.618},
// {'lat': 56.8496, 'lng': 60.618}],
        // {lat: 56.8360, lng: 60.5856},
        // {lat: 56.8360, lng: 60.5856},
        // {lat: 56.8363, lng: 60.5879},
        // {lat: 56.8345, lng: 60.5861},
        // {lat: 56.8347, lng: 60.5885}
//  routeWhileDragging: false,
//}).addTo(map)