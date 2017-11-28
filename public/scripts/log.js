/**
 * Print to the "log" div at the bottom of the main page.
 * Return the span containing the new text.
 */
function log(str) {
    var div = document.getElementById("log");
    var span = document.createElement("span");
    var br = document.createElement("br");
    span.innerHTML = str;
    span.setAttribute("class", "logMessage");
    div.appendChild(span);
    div.appendChild(br);
    return span;
}
