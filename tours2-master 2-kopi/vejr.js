/*Zell start*/
fetch("https://api.openweathermap.org/data/2.5/weather?q=zell,at&APPID=82becbcb432b12257fdce8f1965d5aa2&units=metric")

    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        const tempdiv = document.getElementById("temp");
        tempdiv.innerHTML = "" + post.main.temp + "&#8451;";
       
document.getElementById("vejret").insertAdjacentHTML('beforeend', `<p><img class="ikonvejr" src="https://openweathermap.org/img/wn/${post.weather[0].icon}@2x.png" alt="vejrikon"></p>`);
    })


/*Finkenberg */

fetch("https://api.openweathermap.org/data/2.5/weather?q=finkenberg,at&APPID=82becbcb432b12257fdce8f1965d5aa2&units=metric")

    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        const tempdiv = document.getElementById("temp1");
        tempdiv.innerHTML = "" + post.main.temp + "&#8451;";


        document.getElementById("vejret1").insertAdjacentHTML('beforeend', `<p><img class="ikonvejr" src="https://openweathermap.org/img/wn/${post.weather[0].icon}@2x.png" alt="vejrikon"></p>`);


    })

/*Mayrhofen */

fetch("https://api.openweathermap.org/data/2.5/weather?q=mayrhofen,at&APPID=82becbcb432b12257fdce8f1965d5aa2&units=metric")

    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        const tempdiv = document.getElementById("temp2");
        tempdiv.innerHTML = "" + post.main.temp + "&#8451;";


        document.getElementById("vejret2").insertAdjacentHTML('beforeend', `<p><img class="ikonvejr" src="https://openweathermap.org/img/wn/${post.weather[0].icon}@2x.png" alt="vejrikon"></p>`);

    })

/*Kaltenbach */

fetch("https://api.openweathermap.org/data/2.5/weather?q=kaltenbach,at&APPID=82becbcb432b12257fdce8f1965d5aa2&units=metric")

    .then(function (data) {
        return data.json();
    })

    .then(function (post) {
        const tempdiv = document.getElementById("temp3");
        tempdiv.innerHTML = "" + post.main.temp + "&#8451;";

        document.getElementById("vejret3").insertAdjacentHTML('beforeend', `<p><img class="ikonvejr" src="https://openweathermap.org/img/wn/${post.weather[0].icon}@2x.png" alt="vejrikon"></p>`);



    })
