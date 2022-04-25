function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: chicago,
    mapTypeId: "terrain",
  });
  const chicagoCoords = [
      { lat: 41.0793, lng: -85.1394 },
      { lat: 43.5460, lng: -96.7313 },
    ];
