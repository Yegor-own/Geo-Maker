"use strict"

function updateTextInput(val) {
  document.getElementById('range_val').value='Дистанция ≈ ' + val + 'км';
}

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

let ico = L.icon({
  iconUrl: '/static/main/images/red.png',
  iconSize: [20, 20]
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
        lng: loc[0][1],
        length: document.getElementById('range').value
      },
      success: function(response) {
        L.Routing.control({
          createMarker: function(i, wp, nWps) {
            return L.marker(wp.latLng, {
              icon: ico
            });
          },
          lineOptions: {
            styles: [{color: 'white', opacity: 0.9, weight: 9},{color: '#4000FFFF', opacity: 1, weight: 7}]
          },
          waypoints: response.coordinates,
          routeWhileDragging: false,
          router: L.Routing.graphHopper('641393f2-84a1-4d30-a186-9c3278155c49', {
            urlParameters: {
              vehicle: 'foot'
            }
          })
        }).addTo(map)
      }
    })
  }
}

//let requests = []

//$.getJSON("/static/main/images.json", function(json) {
//  let img = json.img
//  console.log(img)
//  for (let i of img) {
//
//  }
//  console.log(requests)
//})
//function add_img(link){
//  let img = document.createElement('img');
//  img.src = "/static/main/images/" + link;
//  img.onclick = link
//	document.getElementById('route').appendChild(img);
//}

//function bone() {
//  request('flower')
//}
//
//function heart() {
//  request('heart')
//}
//
//function cat() {
//  request('cat')
//}
//
//function fish() {
//  request('fish')
//}
//
//function house() {
//  request('house')
//}
//
//function duck() {
//  request('duck')
//}

//let geo =
//L.geoJSON(geo).addTo(map)

//L.Routing.control({
//          // plan: new L.Routing.plan({
//          //   createMarker: function() { return null }
//          // }),
//          waypoints: ,
//          routeWhileDragging: false,
//          // router: new L.Routing.OSRMv1({
//          //   profile: 'foot'
//          // })
//        }).addTo(map)

// waypointMode: 'snap',
// router: new L.Routing.Mapzen('valhalla-apikey', 'pedestrian'),
// formatter: new L.Routing.Mapzen.Formatter()

//L.Routing.control({
//          // plan: new L.Routing.plan({
//          //   createMarker: function() { return null }
//          // }),
//          waypoints: response.coordinates,
//          routeWhileDragging: false,
//          // router: new L.Routing.OSRMv1({
//          //   profile: 'foot'
//          // })
//        }).addTo(map)
