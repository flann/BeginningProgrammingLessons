function start() {
    var srss = new SunriseSunsetRequest(40.736569, -111.867457);
    srss.load();
    console.log("data will go after this");
    window.setTimeout(function() {
        var sunElements = document.getElementsByClassName("sunDisplay");
        for (var i = 0; i < sunElements.length; i++) {
            sunElements[i].classList.add("timeChange");
        }
    }, 10000);
}
