document.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor , #blurCursor", {
    y: dets.y,
    x: dets.x,
    xPercent: -50,
    yPercent: -50,
  });
});

gsap.to("nav", {
  scrollTrigger: {
    scroller: "body",
    trigger: "nav",
    start: "top -2%",
  },
  backgroundColor: "black",
  height: "95px",
});


gsap.to('main' ,{
    backgroundColor: "#000" ,
   
    scrollTrigger: {
       scroller : "body", 
       trigger : "page1",
       start : "top -50%" ,
       end : "top -100%",
       markers : true ,
       scrub : 2 
    }

})