function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298 },
    zoom: 8,
  });

  google.maps.event.addDomListener(window, 'load', initMap);
