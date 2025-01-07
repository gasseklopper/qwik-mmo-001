import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function hasFadeAnim2(mainContent: HTMLElement) {
  if (!mainContent || typeof window === "undefined") return;

  const deviceWidth = window.innerWidth;

  const gsapFunction = (item: HTMLElement) => {
    const tHero = gsap.context(() => {
      try {
        if (item) {
          if (deviceWidth < 1023) {
            gsap.set(item, { opacity: 0, y: 60 });
            const featured2Timeline = gsap.timeline({
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
        console.error(e);
      }
    });
    return () => tHero.revert();
  };

  const allBtn: HTMLElement[] = [];
  if (mainContent.children) {
    for (let i = 0; i < mainContent.children.length; i++) {
      allBtn.push(mainContent.children[i] as HTMLElement);
    }
    allBtn.forEach(gsapFunction);
  }
}