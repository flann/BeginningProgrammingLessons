class SunriseSunsetRequest {
    constructor(latitude, longitude) {
        this.url = "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude + "&date=today&formatted=0";
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
            let sunriseSpan = document.getElementById("sunrise");
            var sunrise = new Date(data.results.sunrise);
            var sunset = new Date(data.results.sunset);

            sunriseSpan.innerHTML = "Sunrise " + this.time2String(data.results.sunrise) + ", Sunset " + this.time2String(data.results.sunset);


            //Homework: convert time to local time. Look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        }
    }
    load() {
        this.request.open("GET", this.url);
        // this.request.responseType = "json";
        this.request.send();
    }
    time2String(dateString) {
        var date = new Date(dateString);
        var minutes = date.getMinutes() + "";
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
        var hours = date.getHours();
        let allHours = hours;
        if (hours>12){
            allHours = allHours - 12;
        }
        var ampm = "PM";
        if (hours<12){
            ampm = "AM";
        }
        var time = allHours + ":" + minutes + " " + ampm;
        return time;
    }

}
