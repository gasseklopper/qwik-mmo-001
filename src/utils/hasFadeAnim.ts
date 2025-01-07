import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const history: HTMLElement[] = [];

const DEFAULTS = {
  fadeDirection: "bottom",
  onscrollValue: 1,
  durationValue: 1.5,
  fadeOffset: 50,
  delayValue: 0.5,
  easeValue: "power2.out"
};

const getAttributeOrDefault = (element: HTMLElement, attribute: string, defaultValue: any) => {
  return element.getAttribute(attribute) || defaultValue;
};

interface AnimationParams {
  fadeDirection: string;
  onscrollValue: number;
  durationValue: number;
  fadeOffset: number;
  delayValue: number;
  easeValue: string;
}

const animateElement = (element: HTMLElement, params: AnimationParams) => {
  gsap.from(element, {
    y: params.fadeDirection === "top" || params.fadeDirection === "bottom"
       ? params.fadeDirection === "top" ? -params.fadeOffset : params.fadeOffset
       : 0,
    x: params.fadeDirection === "left" || params.fadeDirection === "right"
       ? params.fadeDirection === "left" ? -params.fadeOffset : params.fadeOffset
       : 0,
    opacity: 0,
    ease: params.easeValue,
    duration: params.durationValue,
    delay: params.delayValue,
    scrollTrigger: params.onscrollValue == 1 ? {
      trigger: element,
      start: "top 85%",
    } : undefined,
  });
};

export default function hasFadeAnim(item: HTMLElement) {
  if (!item || typeof window === "undefined") return;

  const applyAnimation = (el: HTMLElement) => {
    if (history.includes(el)) return;

    history.push(el);
    const params: AnimationParams = {
      fadeDirection: getAttributeOrDefault(el, "data-fade-from", DEFAULTS.fadeDirection),
      onscrollValue: parseFloat(getAttributeOrDefault(el, "data-on-scroll", DEFAULTS.onscrollValue.toString())),
      durationValue: parseFloat(getAttributeOrDefault(el, "data-duration", DEFAULTS.durationValue.toString())),
      fadeOffset: parseFloat(getAttributeOrDefault(el, "data-fade-offset", DEFAULTS.fadeOffset.toString())),
      delayValue: parseFloat(getAttributeOrDefault(el, "data-delay", DEFAULTS.delayValue.toString())),
      easeValue: getAttributeOrDefault(el, "data-ease", DEFAULTS.easeValue)
    };

    animateElement(el, params);
  };

  if (item.children) {
    const children = Array.from(item.children).filter(el =>
      el.className.includes("has_fade_anim")
    ) as HTMLElement[];

    if (children.length) {
      children.forEach(child => applyAnimation(child));
    } else {
      applyAnimation(item);
    }
  } else {
    applyAnimation(item);
  }
}