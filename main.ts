/// <reference path="typings/index.d.ts"/>

var myAPI = "4b4ed19606331172627ba0a85c0de2dd";
var goBtn = $("#goButton");
var input = $("#city");


$('form').submit(function(event) {
  event.preventDefault();
  if (input.val().length !== 0) {
    var city = input.val();
    console.log(city);
    input.val('')
  }
});
