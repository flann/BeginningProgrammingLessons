function loadCss(href) {
    if (loadedCss.hasOwnProperty(href) == false) {
        $("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: href
        }).appendTo("head");
        window.gridsCssLoaded = true;
        loadedCss[href] = true;
        log(href + " is loaded");
    }
}
