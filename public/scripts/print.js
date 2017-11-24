function createDiv(name) {
    var div = document.getElementById(name);
    if (div === null) {
        div = document.createElement("div");
        div.id = name;
        var bodies = document.getElementsByTagName("body");
        var body = bodies[0];
        body.appendChild(div);
    }
    return div;
}

/**
 * Print to a div at the end of the page.
 * Return the span containing the new text.
 */
function prt(str) {
    var div = createDiv("myDiv");
    var span = document.createElement("span");
    var br = document.createElement("br");
    span.innerHTML = str;
    span.setAttribute("style", "font-family: 'Courier New', monospace;");
    div.appendChild(span);
    div.appendChild(br);
    return span;
}
