
$(document).foundation();

  $('.getWeather').on('click', function() {
  
  var zipcode = $('#getWeather').val();
  
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      var temp = '<h2><i class="icon-' + weather.code + '"></i></h2>' + weather.temp + '&deg;' + weather.units.temp;
      var city = weather.city + ', ' + weather.region;
      var sunrise = '<i class="icon-36 smallicon"></i>' + '<br>' + weather.sunrise;
      var high = '<span class="icontext">&#x2191;</span>' + '<br>' + weather.high + '&deg;' + weather.units.temp;
      var low = '<span class="icontext">&#x2193;</span>' + '<br>' + weather.low  + '&deg;' + weather.units.temp;
      var sunset = '<i class="icon-31 smallicon"></i>' + '<br>' + weather.sunset;
      var currently = weather.currently;
      
      $('.temp').html(temp);
      $('.city').text(city);
      $('.sunrise').html(sunrise);
      $('.high').html(high);
      $('.low').html(low);
      $('.sunset').html(sunset);
      $('.currently').text(currently);


      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  $('#getWeather').val('');
  
});





  $('.black').on('click', function() {
    $('body').addClass('black').removeClass('blue red green yellow purple orange pink');
  });
  
  $('.blue').on('click', function() {
    $('body').addClass('blue').removeClass('black red green yellow purple orange pink');
  });

  $('.red').on('click', function() {
    $('body').addClass('red').removeClass('black blue green yellow purple orange pink');
  });
  
  $('.green').on('click', function() {
    $('body').addClass('green').removeClass('black blue red yellow purple orange pink');
  });

  $('.yellow').on('click', function() {
    $('body').addClass('yellow').removeClass('black blue red green purple orange pink');
  });
  
  $('.purple').on('click', function() {
    $('body').addClass('purple').removeClass('black blue red green yellow orange pink');
  });

  $('.orange').on('click', function() {
    $('body').addClass('orange').removeClass('black blue red green yellow purple pink');
  });
  
  $('.pink').on('click', function() {
    $('body').addClass('pink').removeClass('black blue red green yellow purple orange');
  });





