function start() {
  var srss = new SunriseSunsetRequest(40.736569, -111.867457);
  srss.load();
  console.log("data will go after this");
  window.setTimeout(function() {
    var sunElements = document.getElementsByClassName("sunDisplay");
    console.dir(sunElements);
    // First, figure out how to access each of the 2 array elements in sunElements
    // Then, figure out how to ADD a class ("timeChange") to each element.
  }, 15000);
}
