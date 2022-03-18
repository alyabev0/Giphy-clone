import "./styles/main.scss"
import "./styles/reset.scss"
import "./scripts/main"


console.log("index.js is working")


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
window.openNav = openNav; 
  /* Установите ширину боковой панели на 0, а левое поле содержимого страницы - на 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  window.closeNav = closeNav