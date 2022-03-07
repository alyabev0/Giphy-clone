import "./styles/main.scss"
import "./styles/reset.scss"
import $ from "jquery"

console.log("index.js is working")

var first = ""

//очистка input после перезагрузки
function loadingWindow() {
  window.onload = console.log("loadingWindow() is working")
  document.getElementById('1').value = ""
}
window.loadingWindow = loadingWindow
window.addEventListener("load", loadingWindow)

function getData(){

    $(".inner").empty()

var input = $("#1").val()
var first = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=32");
first.done(function(response){
    console.log("success got data", response);


var jiffs = response.data
var i = "";
for ( i in jiffs)
{
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style ='height:350px; width:350px; margin-top: 0px;'/>")
}
})};
window.getData = getData
window.check = () => {console.log("this func is working")};



$(document).ready(function() {
    $('input').keydown(function(e) {
      if(e.keyCode === 13) {
        console.log("works");
        getData();
      }
    });
  });

  //cooking category - https://api.giphy.com/v1/gifs/categories/actions/cooking?+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=32 