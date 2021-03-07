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
//           createMarker: function() { return null; },
lineOptions: {
           styles: [
               {color: 'white', opacity: 0.9, weight: 9},
               {color: '#4000FFFF', opacity: 1, weight: 7}
           ]
        },
          waypoints: response.coordinates,
          routeWhileDragging: false,
          router: L.Routing.graphHopper('641393f2-84a1-4d30-a186-9c3278155c49', {
            urlParameters: {
               vehicle: 'foot'
            }
          })
          // router: new L.Routing.OSRMv1({
          //   profile: 'foot'
          // })
        }).addTo(map)
      }
    })
  }
}

function bone() {
  request('flower')
}

function heart() {
  request('heart')
}

function cat() {
  request('cat')
}

function fish() {
  request('fish')
}

function house() {
  request('house')
}

function duck() {
  request('duck')
}

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
