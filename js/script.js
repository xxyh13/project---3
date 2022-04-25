  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.8781, lng: -87.6298 },
      zoom: 8,
    });
  }
  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    icon: icon,
  });
  
var icon = {
  url: "https://media.istockphoto.com/photos/dramatic-sunset-downtown-chicago-picture-id1204331594?b=1&k=20&m=1204331594&s=170667a&w=0&h=DYmAnf_omKcY0we0Q_Vd5hrt0CEBCxTsIkhwKeC-TpE=",
  scaledSize: new google.maps.Size(100,100),
};

  const chicagoCoords = [
    { lat: 41.0793, lng: -85.1394 },
    { lat: 43.5460, lng: -96.7313 },
  ];

  window.initMap = initMap;
