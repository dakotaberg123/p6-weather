
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
      
      var code = weather.code;
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var currently = weather.currently;
      var sunrise = "\f051" + weather.sunrise;
      var high = 'High ' + weather.high;
      var low = 'Low ' + weather.low;
      var sunset = 'Sunset ' + weather.sunset;
      
      $('.code').text(code);
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

   $('#getWeather button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather input').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather input').val('');
  
});

    
}; // end of _loadWeather()_ function

}); 
