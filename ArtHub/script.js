const openMenuBtn = document.querySelector("#openMenu");
const closeMenuBtn = document.querySelector("#closeMenu");


const Menu = document.querySelector("#sidemenu");




openMenuBtn.addEventListener("click", function () {
  Menu.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";

});




closeMenuBtn.addEventListener("click", function () {
  Menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  

   
});
