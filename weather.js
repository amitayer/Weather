let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console
  console.log(response);
  window.response = response;

  // **** your code starts here - don't modify anything else. you will be sad.
    $(".forecast").empty();

    let markup="";
      for(let i=0; i<1; i++) {
        markup += "<div class='container-fluid'>";
        markup += "<div class='jumbotron jumbotron-fluid'>";
        markup += "<div class='container text-center'>";
        markup += "<h1 class='icon'>" + icon(response.daily.data[0]) + "</h1>";
        markup += "<h2 class='temperatureHigh'>" + Math.round(response.daily.data[0].temperatureHigh) + " | " + Math.round(response.daily.data[0].temperatureLow) + "</h2>";
        markup += "<h3 class='summary'>" + response.daily.data[0].summary + "</h3>";
        markup += "</div>";
        markup += "</div>";
        markup += "</div>";
        markup += "</div>";
    }
      for(let i=1; i<7; i++) {
        markup += "<div class='col-2'>";
        markup += "<h3 class='icon'>" + icon(response.daily.data[i]) + "</h3>";
        markup += "<h4 class='temperatureHigh'>" + Math.round(response.daily.data[i].temperatureHigh) + " | " + Math.round(response.daily.data[i].temperatureLow) + "</h4>";
        markup += "<h6 class='summary'>" + response.daily.data[i].summary + "</h6>";
        markup += "</div>";
        markup += "</div>";
    }

  $(".forecast").append(markup);
  $(".forecast").fadeIn(1000);
}
  // *** your code ends here - no, really.


// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
