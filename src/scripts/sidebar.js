function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
window.openNav = openNav;
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
window.closeNav = closeNav;
