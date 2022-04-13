function initMap (){
  // The location of Humboldt Park
  const Humboldt = {lat: 41.902748, lng: -87.720222};
  // the map, centered at Humboldt
  const map = new google.maps.Map(document.getElementByID("map"), {
    zoom: 4
    Center: Humboldt,
  });

  var marker = new google.maps.Marker({
 		position: new google.maps.LatLng(41.902748, -87.720222),
 		map: map,
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(map, marker);
    });
