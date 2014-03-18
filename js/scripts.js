
$(document).foundation();

$(document).ready(function(){

  // 1. Check for Geolocation
  // if (navigator.geolocation) {
  //   $('.getGeolocation').show(); 
  // } else {
  //   $('.getGeolocation').hide();
  // }

 });

  $.simpleWeather({
    
    location: '99004', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
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
