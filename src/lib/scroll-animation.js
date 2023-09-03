import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: 10.02,
    y: 5.07322,
    z: -8.73397,
    scrollTrigger: {
      trigger: ".menu",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: 0.64,
      y: -1.32,
      z: 0.66,
      scrollTrigger: {
        trigger: ".menu",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".banner", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".menu",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".menu", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".menu",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: -1.34525,
      y: -2.74495,
      z: -16.9419,
      scrollTrigger: {
        trigger: ".beverages",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: 0.64,
      y: -1.32,
      z: 0.66,
      scrollTrigger: {
        trigger: ".beverages",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".beverages", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".beverages ",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};
