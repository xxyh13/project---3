function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298 },
    zoom: 8,
  });

  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    icon: icon,
  });

  const chicagoCoords = [
    { lat: 41.0793, lng: -85.1394 },
    { lat: 43.5460, lng: -96.7313 },
  ];

  google.maps.event.addDomListener(window, 'load', initMap);
