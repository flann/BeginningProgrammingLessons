class AjaxRequest {
    constructor(requestUrl) {
        this.url = requestUrl;
        this.request = new XMLHttpRequest();
        this.request.addEventListener("load", this.loaded.bind(this));
    }
    loaded() {
        let data = JSON.parse(this.request.responseText);
        let status = data.status;
        if (status != "OK") {
            console.log("AAAAHHHHH!!");
        } else {
            // data is available

        }
    }
    load() {
        this.request.open("GET", this.url);
        // this.request.responseType = "json";
        this.request.send();
    }
}
