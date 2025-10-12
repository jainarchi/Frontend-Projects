const sidebar = document.querySelector("#sidebar");
const menuBtn = document.querySelector("#menubtn")
const closeBtn = document.querySelector("#closebtn")


menuBtn.addEventListener("click" , function(){
    sidebar.classList.remove("hidden")
    sidebar.classList.add('show');
})


closeBtn.addEventListener("click" , function(){
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
})








