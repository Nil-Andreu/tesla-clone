import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animate = () => {
  const text = document.querySelector(".text");
  const land = document.querySelector(".land");
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: text,
    onEnter: (event) => {
      gsap.fromTo(text, { translateX: -1000}, { translateX: 0, duration: 1.5, delay: 1}); //Where the first state {first}, and then end state with properties of animation {second}
    },
  });

  ScrollTrigger.create({
    trigger: land,
    onEnter: (event) => {
      gsap.fromTo(land, { translateX: 1000}, { translateX: 0, duration: 1.5, delay: 2}); //Where the first state {first}, and then end state with properties of animation {second}
    },
  });
};
