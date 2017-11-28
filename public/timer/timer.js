function printTime() {
    var time = new Date().toLocaleTimeString();
    var id = "timeDiv";
    var div = document.getElementById(id);
    if (div === null) {
        div = document.createElement("div");
        div.id = id;
        var timerDiv = document.getElementById("timer");
        if (timerDiv === null) {
            // The page isn't loaded
            return;
        }
        document.getElementById("timer").appendChild(div);
    }
    div.innerHTML = '';
    var span = document.createElement("span");
    span.setAttribute("class", "time");
    span.innerHTML = time;
    div.appendChild(span);
}
