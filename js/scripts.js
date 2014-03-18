
$(document).foundation();

$(document).ready(function(){

  // 1. Check for Geolocation
  // if (navigator.geolocation) {
  //   $('.getGeolocation').show(); 
  // } else {
  //   $('.getGeolocation').hide();
  // }

 });

  $('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
  var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,

    success: function(weather) {
      
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var sunrise = 'Sunrise ' + weather.sunrise;
      var high = 'High ' + weather.high;
      var low = 'Low ' + weather.low;
      var sunset = 'Sunset ' + weather.sunset;
      
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').text(city);
      $('.sunrise').text(sunrise);
      $('.high').text(high);
      $('.low').text(low);
      $('.sunset').text(sunset);

      console.log(weather);
    }

  });

$('.getWeather').on('click', function() {
  
  var zipcode = $('#getWeather').val();

  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      var code = '<img src=' + weather.image + '>';
      var temp = weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var sunrise = 'Sunrise ' + weather.sunrise;
      var high = 'High ' + weather.high;
      var low = 'Low ' + weather.low;
      var sunset = 'Sunset ' + weather.sunset;
      
      $('.code').html(code);
      $('.temp').html(temp);
      $('.city').text(city);
      $('.sunrise').text(sunrise);
      $('.high').text(high);
      $('.low').text(low);
      $('.sunset').text(sunset);

      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});

    
  }; 

}); 
