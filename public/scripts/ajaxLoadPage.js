function PageLoader(pageUrl) {
    this.pageUrl = pageUrl;
    this.request = new XMLHttpRequest();
    this.request.addEventListener("load", this.loaded.bind(this));
}

PageLoader.prototype.loaded = function() {
    let pageText = this.request.responseText;

    let parsed = $.parseHTML(pageText, null, true);

    let $content = $( "#content" );
    $content.empty();

    $content.append(parsed);
}

PageLoader.prototype.load = function() {
    this.request.open("GET", this.pageUrl);
    this.request.responseType = "text";
    this.request.send();
}
