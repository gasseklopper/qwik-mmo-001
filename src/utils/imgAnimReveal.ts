import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealedImages: HTMLElement[] = [];

export default function imgAnimReveal(item: HTMLElement) {
  const gsapFunction = (img_reveal: HTMLElement) => {
    if (revealedImages.includes(img_reveal)) {
      return;
    } else {
      revealedImages.push(img_reveal);
      const tHero = gsap.context(() => {
        try {
          if (img_reveal) {
            const image = img_reveal.querySelector("img");
            const tl = gsap.timeline({
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
              ease: Power2.easeOut,
            });
            if (image) {
              tl.from(image, {
                opacity: 1,
                duration: 1.5,
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.easeOut,
              });
            }
          }
        } catch (e) {
          console.error(e);
        }
      });
      return () => tHero.revert();
    }
  };

  if (typeof window !== "undefined") {
    if (item.children) {
      const children = Array.from(item.children).filter((el) =>
        el.className.includes("img_anim_reveal")
      ) as HTMLElement[];
      if (children.length) {
        children.forEach((el) => {
          gsapFunction(el);
        });
      } else {
        gsapFunction(item);
      }
    }
  }
}