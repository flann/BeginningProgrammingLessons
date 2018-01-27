function start() {
  var srss = new SunriseSunsetRequest(40.736569, -111.867457);
  srss.load();
  console.log("data will go after this");
  window.setTimeout(function() {
    var sunElements = document.getElementsByClassName("sunDisplay");
    console.dir(sunElements);
  }, 15000);
}
