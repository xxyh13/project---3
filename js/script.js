const chicagoCoords = [
    { lat: 41.0793, lng: -85.1394 },
    { lat: 43.5460, lng: -96.7313 },
  ];

function initMap (){
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    Center: {lat: 41.902748, lng: -87.720222},
  });

  var marker = new google.maps.Marker({
 		position: new google.maps.LatLng(41.902748, -87.720222),
 		map: map,
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(map, marker);
    });
