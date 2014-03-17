
$(document).foundation();

$(document).ready(function(){

  // 1. Check for Geolocation
  if (navigator.geolocation) {
    $('.getGeolocation').show(); 
  } else {
    $('.getGeolocation').hide();
  }

  // 2. Get Geolocation & return Simple Weather
  $('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
  });

  // 3. Wrap SimpleWeather in a function called _loadWeather()
  var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      var code = weather.thumbnail + weather.code;
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var currently = weather.currently;
      var sunrise = 'Sunrise ' + weather.sunrise;
      var high = 'High ' + weather.high;
      var low = 'Low ' + weather.low;
      var sunset = 'Sunset ' + weather.sunset;
      
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').text(city);
      $('.currently').text(currently);
      $('.sunrise').text(sunrise);
      $('.high').text(high);
      $('.low').text(low);
      $('.sunset').text(sunset);

      
      // See console for _weather_ object
      console.log(weather);
    }

  });

   
    
  }; // end of _loadWeather()_ function

}); 
