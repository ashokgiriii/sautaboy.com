const tl = gsap.timeline()
tl.from("#loading-screen img", {
    opacity: 0,
    duration: 2.5,
    scale: 0,
    delay: .2,
    rotate: 360,
    ease: "power2.out"
}).to("#loading-screen", {
    y: "-100%",
    duration: 1,
    backgroundColor: "transparent",
    ease: "power2.inOut"
}).to("header,main,footer", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
})
