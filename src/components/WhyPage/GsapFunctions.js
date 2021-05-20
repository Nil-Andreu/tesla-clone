import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animate = (delaycard, delaylist) => {
    const line = document.querySelector(".line");
    const title = document.querySelector(".title");

    const card1 = document.querySelector(".card1");
    const card2 = document.querySelector(".card2");
    const card3 = document.querySelector(".card3");


    gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: line,
        onEnter: (self) => {
          gsap.from(line, {
            scaleX: 0,
            delay: 1.5,
            duration: 4,
          });
        },
      });
  
      ScrollTrigger.create({
        trigger: title,
        onEnter: (self) => {
          gsap.to(title, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 2,
            delay: 1.5
          });
        },
      });

    ScrollTrigger.create({
      trigger: card1,
      onEnter: (self) => {
        gsap.to(card1, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 4,
          delay: 3.5,
        });
      },
    });

    ScrollTrigger.create({
      trigger: card2,
      onEnter: (self) => {
        gsap.to(card2, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 4,
          delay: 3.5,
        });
      },
    });
    ScrollTrigger.create({
      trigger: card3,
      onEnter: (self) => {
        gsap.to(card3, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          duration: 4,
          delay: 3.5,
        });
      },
    });
}