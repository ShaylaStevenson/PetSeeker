$(document).ready(function () {

    var apiKey = "ab4e3f62fc75a94eba1a7edfb36f1353";
    var query = "https://api.openweathermap.org/data/2.5/weather";
    var Url = "https://api.openweathermap.org/data/2.5/forecast";
    var history;

    function rander() {
     $("#search").empty();
        history = JSON.parse(localStorage.getItem("Searched Cities"));
        if (!history) {
            history = [];
        }
        for (var i = 0; i < history.length; i++) {
            var city = history[i];
            var button = $("<button></button>");
            button.addClass("btn btn-outline-light");
            button.text(city);
            $("#search").append(button);
        }
    }
    function succesForcast(hourForecasts) {
        console.log(hourForecasts);
        
        var dayForecasts = hourForecasts.list.filter(forecast => forecast.dt_txt.includes('15:00:00'));
            $("#5-day-forecast").empty();
        for (var i = 0; i < dayForecasts.length; i++) {
            var forecast = dayForecasts[i]
            var date = new Date(forecast.dt_txt).toLocaleDateString();
            var weatherIcon = "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            var temp = forecast.main.temp;
            var humidity = forecast.main.humidity;
            var card = $("<div class='card forecastCard'></div>");
            card.append("<h4>" + date + "</h4>");
            card.append("<p class='card-text'>" + "<img src=" + weatherIcon + "></img><br>Temp: " + temp + "°F<br>Humidity: " + humidity + "%</p>");
            $("#5-day-forecast").append(card);
        }
    }
    function get(city) {
        var req = {
            q: city,
            appid: apiKey,
            units: "imperial"
        };
        $.get(query, req)
            .done(data => success(data, city))
            .fail(err);

        $.get(Url, req)
            .done(succesForcast)
            .fail(errFrocast);
    }
    function err(res) {
        console.log("error");
        if (res.status >= 400 && res.status < 500) {
            alert("Please try again.")
        }
        else if (res.status >= 500 && res.status < 600) {
            alert("Please try again later.")
        }
        else {
            alert("Error")
        }
    }
    function success(data, city) {
        function display() {
            console.log(data);
            var date = new Date();
            var weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            var req = {
                lat: data.coord.lat,
                lon: data.coord.lon,
                appid: apiKey
            }
            var uvIndex = "https://api.openweathermap.org/data/2.5/onecall"
           
            $.get(uvIndex, req)
                .done(uvData => {
                    $("#weather").append($("<p>UV Index: <span id='uvIndex'>" + uvData.current.uvi + "</span></p>"));
                    var uvDisplay = $("#uvIndex");
                    if (uvData.current.uvi <= 2) {
                        uvDisplay.attr("style", "color:green;")
                    }
                    else if (uvData.current.uvi > 2 && uvData.current.uvi <= 5) {
                        uvDisplay.attr("style", "color:oragne;")
                    }
                    else if (uvData.current.uvi > 5 && uvData.current.uvi <= 7) {
                        uvDisplay.attr("style", "color:ora1e;")
                    }
                    else if (uvData.current.uvi > 7 && uvData.current.uvi <= 10) {
                        uvDisplay.attr("style", "color:orange;")
                    }
                    else {
                        uvDisplay.attr("style", "color:light-purple;")
                    }
                })
                .fail(error => console.log(error));
            $("#weather").empty();
            $("#weather").append($("<h3>" + data.name + " (" + date.toLocaleDateString() + ")" + "<img src=" + weatherIcon + "></img></h3>"));
            $("#weather").append($("<p>Temperature: " + data.main.temp + " °F</p>"));
            $("#weather").append($("<p>Humidity: " + data.main.humidity + " %</p>"));
            $("#weather").append($("<p>Wind Speed: " + data.wind.speed + " MPH</p>"));
        }
        function addHistoryButton() {
            var newSearch = $("<button>" + city + "</button>");
            newSearch.addClass("btn btn-outline-light");
            $("#search").append(newSearch);
        }
        function storeHistory() {
            history.push(city);
            localStorage.setItem("Searched Cities", JSON.stringify(history))
        }

        display();
        
        if (!history.includes(city)) {
            addHistoryButton();
            storeHistory();
        }
    }
    function errFrocast() {
        console.log("error");
    }
        rander();

    $("#button").on("click", function (event) {
        event.preventDefault();
        var city = $("#city").val();
        $("#city").val("");
        get(city);
    });

    $("#search").on("click", "button", function () {
        get($(this).text());

    });
});