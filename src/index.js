import "./styles/main.scss"
import "./styles/reset.scss"
import $ from "jquery"

console.log("index.js is working")

var first = ""
var pagIndex = 0

//очистка input после перезагрузки
// function loadingWindow() {
//   window.onload = console.log("loadingWindow() is working")
//   document.getElementById('1').value = ""
// }
// window.loadingWindow = loadingWindow
// window.addEventListener("load", loadingWindow)

// function getData(n){
// //очистка блока с гифками и удаление кнопки reload
//     $(".inner").empty()
//     $(".reload").empty()

//     if (document.getElementById(1).value) {
//       console.log(document.getElementById(1).value)
//       var input = $("#1").val()
//     }
//     // var input = $("#1").val()
//     // var pagIndex = 0;
//     //механизм сортировки по поиску
// if (n == 1){
//   console.log('sorting works')
//   var input = "Anime";
// } else if (n == 2) {
//   var input = "Sports";
// } else if (n == 3) {
//   var input = "Nature";
// } else if (n == 4) {
//   var input = "Science";
// } else if (n == 5) {
//   var input = "Cars";
// } else if (n == 15) {

//   pagIndex = pagIndex + 15
//   console.log(pagIndex)
// };
 



// var first = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=15&offset="+pagIndex+"");
// first.done(function(response){
//     console.log("success got data", response);

//     //http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=32&offset=32



// var jiffs = response.data
// var i = "";
// for ( i in jiffs)
// {
//     $('.inner').append("<img src='"+jiffs[i].images.original.url+"' class='inner-image' style ='margin-top: 0px;'/>") //height:350px; width:350px; 

//   }
//   $('.reload').append("<input type='button' class='reload-button' value='More GIFs' onclick='reload()'/>")
// })};


window.getData = getData
window.check = () => {console.log("this func is working")};


//нажатие на "Enter"
$(document).ready(function() {
    $('input').keydown(function(e) {
      if(e.keyCode === 13) {
        console.log("works");
        getData();
      }
    });
  });

  function reload(){

    console.log("reload works")

    getData(15);








  }
  window.reload = reload
  //cooking category - https://api.giphy.com/v1/gifs/categories/actions/cooking?+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=32 

  function getData(n){
    //очистка блока с гифками и удаление кнопки reload
        $(".inner").empty()
        $(".reload").empty()


    //если в строке поиска что-то есть, инпут это получает это
        if (document.getElementById(1).value) {
          console.log(document.getElementById(1).value)
          var input = $("#1").val()
        }
        //механизм сортировки по поиску
    if (n == 1){
      console.log('sorting works')
      var input = "Anime";
      document.getElementById(1).value = ""
      localStorage.clear();
      localStorage.setItem('Anime', 1);
      console.log(localStorage)
      // document.getElementById(1).value = "Anime"   --- с этой строкой все работает
    } else if (n == 2) {
      var input = "Sports";
      document.getElementById(1).value = ""
      localStorage.clear();
      localStorage.setItem('Sports', 1);
      console.log(localStorage)
    } else if (n == 3) {
      var input = "Nature";
      document.getElementById(1).value = ""
      localStorage.clear();
      localStorage.setItem('Nature', 1);
      console.log(localStorage)
    } else if (n == 4) {
      var input = "Science";
      document.getElementById(1).value = ""
      localStorage.clear();
      localStorage.setItem('Science', 1);
      console.log(localStorage)
    } else if (n == 5) {
      var input = "Cars";
      document.getElementById(1).value = ""
      localStorage.clear();
      localStorage.setItem('Cars', 1);
      console.log(localStorage)
    } else if (n == 15) {
      pagIndex = pagIndex + 15
      console.log(pagIndex)
    };



    if (localStorage.Anime == 1) {
      input = "Anime" 
    } else if (localStorage.Sports == 1) {
      input = "Sports"
    } else if (localStorage.Nature == 1) {
      input = "Nature"
    } else if (localStorage.Science == 1) {
      input = "SCience"
    } else if (localStorage.Cars == 1) {
      input = "Cars"
    } 
    
    var first = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=15&offset="+pagIndex+"");
    first.done(function(response){
        console.log("success got data", response);
    
        //http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=32&offset=32
    
    var jiffs = response.data
    var i = "";
    var counter = 0;
    for ( i in jiffs)
    {
        $('.inner').append("<img src='"+jiffs[i].images.original.url+"' class='inner-image' style ='margin-top: 0px;'/>") //height:350px; width:350px; 
      }
      $('.reload').append("<input type='button' class='reload-button' value='More GIFs' onclick='reload()'/>")
    })};
    