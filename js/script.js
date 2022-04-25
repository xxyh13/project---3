function initMap() {
    const myLatLng = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng
      zoom: 4,
    });
    
var myLatLng = new google.maps.LatLng(41.8781,-87.6298);
var mapOptions = {
  center: myLatLng
  zoom: 4,
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.marker({
  position: myLatLng,
  title: "Chicago, IL"
 });
}
window.initMap = initMap;
marker.setMap(map);
