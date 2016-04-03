var $ = document.querySelector.bind(document);
var log_elem = $("#log");
  
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
  }else{
    log_elem.textContent = "Geolocation is not supported by this browser.";
  }
}

window.getLocation = getLocation;

function onPositionSuccess(position){
  lat    = position.coords.latitude;
  lon    = position.coords.longitude;
  latlon = new google.maps.LatLng(lat, lon);
  
  map_elem = $("#map");
  
  var options = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    }
  };
  
  var map    = new google.maps.Map(map_elem, options);
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "You are here!"
  });
}

function onPositionError(error){
  switch(error.code){
    case error.PERMISSION_DENIED:
      log_elem.textContent = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      log_elem.textContent = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      log_elem.textContent = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      log_elem.textContent = "An unknown error occurred.";
      break;
  }
}

getLocation();
