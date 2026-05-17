function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);                                                                   // locomotive js codepen 

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



}

locoScroll();



function cursorEffect() {
  var cursor = document.querySelector("#circle");
  var page1Content = document.querySelector("#page1Text");

  // page1Content.addEventListener("mousemove" , function(dets){
  //     cursor.style.left = dets.x + "px";
  //     cursor.style.top = dets.y + "px";
  // })

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();




function page1btm_Animation(){
    
 gsap.from("#page1btm #bottom p" , {
     y: 120 , 
     stagger:0.2 , 
     duration: 1 ,
     ScrollTrigger:{
      trigger: "#page1btm",
      scroller :"main",
      start : "top 90%",
      end:"bottom top",
      markers: true,
      scrub : 2 

     }
 })
}

// page1btm_Animation();










 function swiper(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      }
     
    });
 }

 swiper();


 var tl = gsap.timeline();

 tl.from("#loader h3" , {
    x: 40 ,
    opacity:0 ,
    duration: 1 ,
    stagger : 0.1
    
 })
 tl.to("#loader h3" , {
  x:-10,
  opacity: 0 ,
  duration: 1 , 
  stagger: 0.1  

 })
 tl.to( "#loader" , {
   opacity : 0 

 })
  tl.from("#page1Text h1 span" ,{
    y: 100 , 
    opacaity: 0 ,
    duration : 0.5 ,
    stagger: 0.1 ,
    delay: -0.5
  
 })
 tl.to("#loader" , {
  display : "none"

 })

