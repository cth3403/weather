 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude.toString().substr(0,5);
    var lon = position.coords.longitude.toString().substr(0,5);
    
    $(".temp").click(function(){
      $(".temp").removeClass("hidden");
      $(this).addClass("hidden");
    });
    
    $.ajax({
  url: "https://api.apixu.com/v1/current.json?key=7f755bcfe3cc4d73a44141441172706&q="+lat+","+lon,
  })
  .done(function( data ) {
    $(".loader").addClass("hidden");
    $("#location").html("<h2>For "+data.location.name+", "+data.location.region+"</h2>");
    $("#image").html("<img src='"+data.current.condition.icon+"' alt='weather picture' >");
    $("#text").html("<p>"+data.current.condition.text+"</p>");
      $("#temp_c").html("<div>"+data.current.temp_c+"&deg;C</div><div><button class='btn btn-default'>Show &deg;F</button></div>");
      $("#temp_f").html("<div>"+data.current.temp_f+"&deg;F</div><div><button class='btn btn-default'>Show &deg;C</button></div>");
  });
    
  });
}