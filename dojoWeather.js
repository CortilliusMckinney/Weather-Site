

var weatherReport = document.querySelector("burbank","chicago","dallas");

var removal = document.querySelector(".bottomDiv");
var celsiusTofahrenheit1 = document.querySelector("#span1");
var celsiusTofahrenheit2 = document.querySelector("#span2");
var fahrenheitToCelsius1 = document.querySelector("#span1");
var fahrenheitToCelsius2 = document.querySelector("#span2");

var celsiusTofahrenheit3 = document.querySelector("#span3");
var celsiusTofahrenheit4 = document.querySelector("#span4");
var fahrenheitToCelsius3 = document.querySelector("#span3");
var fahrenheitToCelsius4 = document.querySelector("#span4");


var celsiusTofahrenheit5 = document.querySelector("#span5");
var celsiusTofahrenheit6 = document.querySelector("#span6");
var fahrenheitToCelsius5 = document.querySelector("#span5");
var fahrenheitToCelsius6 = document.querySelector("#span6");


var celsiusTofahrenheit7 = document.querySelector("#span7");
var celsiusTofahrenheit8 = document.querySelector("#span8");
var fahrenheitToCelsius7 = document.querySelector("#span7");
var fahrenheitToCelsius8 = document.querySelector("#span8");


function weatherAlert(){ 
    alert("This page says\n\nLoading weather report...");
}

function cookieRemoval(){
    removal.remove();
}

function celsiusCovert(){
    celsiusTofahrenheit1.innerHTML = Math.round(5 / 9 * (span1.innerText -32));
    celsiusTofahrenheit2.innerHTML = Math.round(5 / 9 * (span2.innerText -32));

    celsiusTofahrenheit3.innerHTML = Math.round(5 / 9 * (span3.innerText -32));
    celsiusTofahrenheit4.innerHTML = Math.round(5 / 9 * (span4.innerText -32));

    celsiusTofahrenheit5.innerHTML = Math.round(5 / 9 * (span5.innerText -32));
    celsiusTofahrenheit6.innerHTML = Math.round(5 / 9 * (span6.innerText -32));

    celsiusTofahrenheit7.innerHTML = Math.round(5 / 9 * (span7.innerText -32));
    celsiusTofahrenheit8.innerHTML = Math.round(5 / 9 * (span8.innerText -32));
}

function celsiusCovert2(){
    fahrenheitToCelsius1.innerHTML = Math.round(9 / 5 * span1.innerText + 32);
    fahrenheitToCelsius2.innerHTML = Math.round(9 / 5 * span2.innerText + 32);

    fahrenheitToCelsius3.innerHTML = Math.round(9 / 5 * span3.innerText + 32);
    fahrenheitToCelsius4.innerHTML = Math.round(9 / 5 * span4.innerText + 32);

    fahrenheitToCelsius5.innerHTML = Math.round(9 / 5 * span5.innerText + 32);
    fahrenheitToCelsius6.innerHTML = Math.round(9 / 5 * span6.innerText + 32);

    fahrenheitToCelsius7.innerHTML = Math.round(9 / 5 * span7.innerText + 32);
    fahrenheitToCelsius8.innerHTML = Math.round(9 / 5 * span8.innerText + 32);
}                                               



