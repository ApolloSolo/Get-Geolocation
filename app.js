const coordsDisplay = document.querySelector("#lat-lon");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
   function showPosition(position) {
     coordsDisplay.innerHTML = "Latitude: " + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
   }

   function handleError(err){
       console.warn(`Error(${err.code}): ${err.message}`);
   }