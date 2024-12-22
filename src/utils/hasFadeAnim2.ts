import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function hasFadeAnim2(main_content) {
  if (main_content) {
    let device_width = window.innerWidth;
    const gsapFunction = (item) => {
      let tHero = gsap.context(() => {
        try {
          if (item) {
            if (device_width < 1023) {
              gsap.set(item, { opacity: 0, y: 60 });
              let featured2Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              featured2Timeline.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
              });
            } else {
              gsap.set(item, { opacity: 0, y: 40 });
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.2,
              });
            }
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    };
    if (typeof window !== "undefined") {
      let allBtn = [];
      if (main_content.children) {
        for (let i = 0; i < main_content.children.length; i++) {
          allBtn.push(main_content.children[i]);
        }
        gsapFunction(allBtn);
      }
    }
  }
}

