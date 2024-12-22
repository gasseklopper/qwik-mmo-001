import { Power2, gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function imgAnimReveal(item) {
  const gsapFunction = (img_reveal) => {
    if (history.includes(img_reveal)) {
      return;
    } else {
      history.push(img_reveal);
      let tHero = gsap.context(() => {
        try {
          if (img_reveal) {
            let image = img_reveal.querySelector("img");
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: img_reveal,
                start: "top 50%",
              },
            });

            tl.set(img_reveal, { autoAlpha: 1 });
            tl.from(img_reveal, {
              opacity: 0,
              duration: 1.5,
              xPercent: -60,
              ease: Power2.out,
            });
            tl.from(image, {
              opacity: 1,
              duration: 1.5,
              xPercent: 100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out,
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    }
  };
  if (typeof window !== "undefined") {
    if (item.children) {
      let children = Object.values(item.children).filter((el) =>
        el.className.includes("img_anim_reveal")
      );
      if (children && children.length) {
        children.forEach((el, j) => {
          gsapFunction(children[j]);
        });
      } else {
        gsapFunction(item);
      }
    }
  }
}
