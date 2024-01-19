let crsr = document.querySelector(".cursor");
let bcrsr = document.querySelector(".blur-cursor");
document.addEventListener("mousemove", (e) => {
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
  bcrsr.style.left = e.x - 90 + "px";
  bcrsr.style.top = e.y - 90 + "px";
});


gsap.to("nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -20%",
    end: "top -60%",
    scrub: 3,
  },
});


gsap.from(".about-us img , .about-us-in",{
y:50,
opacity:0,
duration:1,
scrollTrigger:{
  trigger:".about-us",
  scroller:"body",
  start:"top 60%",
  end:"top 58%",
  scrub:3
}
});

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})

gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})

gsap.from(".page4 h1", {
  y: 35,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});