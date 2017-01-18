$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', function(data){

    function changeUnit(lat, lon, unit){
      document.getElementById("c-to-f").innerHTML = "Toggle Unit";

      var letter = "";

      if (unit === "imperial") letter = "F";
      else letter = "C";

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + unit + "&appid=27cdff33cbd5005079490dfab7978cf2", function(d){
        $('#weather-icon').attr('src', 'http://openweathermap.org/img/w/' + d.weather[0].icon + '.png');
        document.getElementById("temperature").innerHTML = (d.main.temp).toFixed(1) + " º" + letter;
        document.getElementById("weather-main").innerHTML = d.weather[0].main + ':';
        document.getElementById("weather-description").innerHTML = d.weather[0].description;
        document.getElementById("location").innerHTML = data.city + ', ' + data.region;
      });
    }

    var unit = "metric";
    document.getElementById("c-to-f").onclick = function(){
      if (unit === "imperial"){
        unit = "metric";
        changeUnit(data.lat, data.lon, unit);
      }
      else if(unit === "metric"){
        unit = "imperial";
        changeUnit(data.lat, data.lon, unit);
      }
    };
  });
});
