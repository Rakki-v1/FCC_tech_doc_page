var changeBack = document.getElementById("changeB");
var techDoc = document.body;
var nav = document.getElementById("navbar");

changeBack.addEventListener("click", function chB() {
  changeBack.classList.toggle("active");
  techDoc.classList.toggle("night");
  nav.classList.toggle("night");

})
