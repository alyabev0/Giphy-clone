/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import $ from "jquery";

var first = "";
var pagIndex = 0;

function loadingWindow() {
  document.getElementById("1").value = "";
}
window.loadingWindow = loadingWindow;
window.addEventListener("load", loadingWindow);

$(document).ready(function () {
  $("input").keydown(function (e) {
    if (e.keyCode === 13) {
      getData();
    }
  });
});

function getData(n) {
  $(".inner").empty();
  $(".reload").empty();

  if (document.getElementById(1).value) {
    localStorage.clear();
    var input = $("#1").val();
  }
  if (n == 1) {
    var input = "Anime";
    document.getElementById(1).value = "";
    localStorage.clear();
    localStorage.setItem("Anime", 1);
  } else if (n == 2) {
    var input = "Sports";
    document.getElementById(1).value = "";
    localStorage.clear();
    localStorage.setItem("Sports", 1);
  } else if (n == 3) {
    var input = "Nature";
    document.getElementById(1).value = "";
    localStorage.clear();
    localStorage.setItem("Nature", 1);
  } else if (n == 4) {
    var input = "Science";
    document.getElementById(1).value = "";
    localStorage.clear();
    localStorage.setItem("Science", 1);
  } else if (n == 5) {
    var input = "Cars";
    document.getElementById(1).value = "";
    localStorage.clear();
    localStorage.setItem("Cars", 1);
  } else if (n == 15) {
    pagIndex = pagIndex + 15;
  }
  if (localStorage.Anime == 1) {
    input = "Anime";
  } else if (localStorage.Sports == 1) {
    input = "Sports";
  } else if (localStorage.Nature == 1) {
    input = "Nature";
  } else if (localStorage.Science == 1) {
    input = "SCience";
  } else if (localStorage.Cars == 1) {
    input = "Cars";
  }

  var first = $.get(
    "https://api.giphy.com/v1/gifs/search?q=" +
      input +
      "+&api_key=AM9Uhu5x5a9UXJUcGq8afp9ukWCApq8x&limit=15&offset=" +
      pagIndex +
      ""
  );
  first.done(function (response) {
    var jiffs = response.data;
    var i = "";
    for (i in jiffs) {
      $(".inner").append(
        "<img src='" +
          jiffs[i].images.original.url +
          "' class='inner-image' style ='margin-top: 0px;'/>"
      );
    }
    $(".reload").append(
      "<input type='button' class='reload-button' value='More GIFs' onclick='getData(15)'/>"
    );
  });
}

window.getData = getData;
