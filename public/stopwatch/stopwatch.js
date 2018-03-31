var stopwatchIntervalId = window.setInterval(function() {
    showTime();
}, 1000);
var time = 0;
displayStopwatch();
function showTime(){
    time++;
    displayStopwatch();
}
function displayStopwatch(){
    var stopwatchDiv = document.getElementById("stopwatchDisplay");
    if (stopwatchDiv === null) {
        // The page isn't loaded
        clearInterval(stopwatchIntervalId);
        return;
    }
    stopwatchDiv.innerHTML = getStopwatch(time);
}
function getStopwatch(seconds) {
    let s = seconds % 60;
    let m = ((seconds - s) / 60) % 60;
    let h = (seconds - s - (m*60)) /(60*60);
    return h + " Hours, " + m + " Minutes, " + s + " Seconds";
}
