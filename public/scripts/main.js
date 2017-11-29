var loadedCss = {};
var resizeSubscribers = [];

function loadPage(pageURL) {
    resizeSubscribers = [];
    var loader = new PageLoader(pageURL);
    loader.load();
}

function subscribeForResize(subscriber) {
    resizeSubscribers.push(subscriber);
}

window.onresize = function() {
    resizeSubscribers.forEach(function(sub) {
        sub();
    });
}
