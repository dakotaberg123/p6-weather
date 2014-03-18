
$(document).foundation();

  $('.getWeather').on('click', function() {
  
  var zipcode = $('#getWeather').val();
  
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var sunrise = 'Sunrise ' + weather.sunrise;
      var high = '&#8593; ' + weather.high + '&deg;' + weather.units.temp;
      var low = '&#8595; ' + weather.low  + '&deg;' + weather.units.temp;
      var sunset = 'Sunset ' + weather.sunset;
      var currently = weather.currently;
      
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').text(city);
      $('.sunrise').text(sunrise);
      $('.high').html(high);
      $('.low').html(low);
      $('.sunset').text(sunset);
      $('.currently').text(currently);


      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});





