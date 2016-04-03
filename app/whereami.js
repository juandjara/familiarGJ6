(function(){

  var log_elem = $("#log");
    
  function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
    }else{
      log_elem.html("Geolocation is not supported by this browser.");
    }
  }

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
        log_elem.text("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        log_elem.text("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        log_elem.text("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        log_elem.text("An unknown error occurred.");
        break;
    }
  }
  
  getLocation();

})