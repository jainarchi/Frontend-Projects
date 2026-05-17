// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });

// var a = document.querySelector("#e1");
// var imgSrc = a.getAttribute("data-imgSrc");
// let fixedDiv = document.querySelector("#fixed");
// fixedDiv.style.bg-img url(imgSrc)


let elemC = document.querySelector("#elementCont")
let fixedDiv = document.querySelector("#fixed")

elemC.addEventListener("mouseenter" , function(){
    fixedDiv.style.display = "block"
})
elemC.addEventListener("mouseleave" , function(){
     fixedDiv.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter" , function(){
        var img = e.getAttribute("data-imgSrc")
        fixedDiv.style.backgroundImage = `url(${img})`
    })
})

