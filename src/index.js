import "./styles/main.scss"

import $ from "jquery"

console.log("index.js is working")
var first = document.getElementById("1");
console.log(first)

function getData(){
var first = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=30");
first.done(function(response){
    console.log("success got data", response);


var jiffs = response.data
var i = "";
for ( i in jiffs)
{
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style ='height:350px; width:350px;'/>")
}
})};
window.getData = getData
window.check = () => {console.log("this func is working")};
// window.getData = getData