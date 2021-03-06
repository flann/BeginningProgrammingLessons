/**
 * Print to the "log" div at the bottom of the main page.
 * Return the span containing the new text.
 */
function log(str) {
    var div = document.getElementById("log");
    return logToDiv(str, div);
}

function logToDiv(str, div) {
    var span = document.createElement("span");
    var pre = document.createElement("pre");
    pre.setAttribute("style", "margin: 0;");
    span.innerHTML = str;
    span.setAttribute("class", "logMessage");
    pre.appendChild(span);
    div.appendChild(pre);
    return span;
}

function logToId(str, id) {
    let div = document.getElementById(id);
    logToDiv(str, div);
}
