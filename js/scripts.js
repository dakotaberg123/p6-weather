// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){


  // 1. Check for Geolocation
  // REF: http://codepen.io/fleeting/pen/Idsaj
  // Browser support geolocation?  
  if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
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
      
      // Get & store temperature
      var temp = weather.units.temp;
      // Get & store city
      var city = weather.city;
      // Get & store current conditions via text
      var currently = weather.currently;
      // Get & store high temp
      var high = weather.units.high;
      // Get & store low temp
      var low = weather.units.low;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.currently').text(currently);
      $('.high').text(high);
      $('.low').text(low);

      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
  }; // end of _loadWeather()_ function


}); 
