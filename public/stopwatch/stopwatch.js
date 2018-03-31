window.setInterval(function() {
    showTime();
}, 1000);
var time = 0;
function showTime(){
    time++;
    var stopwatchDiv = document.getElementById("stopwatchDisplay");
    stopwatchDiv.innerHTML = getStopwatch(time);

}
function getStopwatch(seconds) {
    let s = seconds % 60;
    let m = ((seconds - s) / 60) % 60;
    let h = (seconds - s - (m*60)) /(60*60);
    return h + " Hours, " + m + " Minutes, " + s + " Seconds";
}
