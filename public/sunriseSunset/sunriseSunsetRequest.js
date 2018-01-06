class SunriseSunsetRequest {
    constructor(latitude, longitude) {
        this.url = "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude + "&date=today";
        this.request = new XMLHttpRequest();
        this.request.addEventListener("load", this.loaded.bind(this));
    }
    loaded() {
        let data = JSON.parse(this.request.responseText);
        let status = data.status;
        if (status != "OK") {
            console.log("AAAAHHHHH!!");
        } else {
            console.dir(data);
            let sunrise = document.getElementById("sunrise");
            sunrise.innerHTML = data.results.sunrise + ", Sunset " + data.results.sunset;
    //convert time to local time. Look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        }
    }
    load() {
        this.request.open("GET", this.url);
        // this.request.responseType = "json";
        this.request.send();
    }
}
