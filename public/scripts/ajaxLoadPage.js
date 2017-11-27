function PageLoader(pageUrl) {
    this.pageUrl = pageUrl;
    this.request = new XMLHttpRequest();
    this.request.onreadystatechange = this.loaded;
}
PageLoader.prototype.loaded = function() {

}
PageLoader.prototype.load = function() {

}
