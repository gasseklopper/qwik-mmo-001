import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const history = [];

const DEFAULTS = {
  fadeDirection: "bottom",
  onscrollValue: 1,
  durationValue: 1.5,
  fadeOffset: 50,
  delayValue: 0.5,
  easeValue: "power2.out"
};

const getAttributeOrDefault = (element, attribute, defaultValue) => {
  return element.getAttribute(attribute) || defaultValue;
};

const animateElement = (element, params) => {
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
    } : "",
  });
};

export default function hasFadeAnim(item) {
  if (!item || typeof window === "undefined") return;

  const applyAnimation = (el) => {
    if (history.includes(el)) return;

    history.push(el);
    const params = {
      fadeDirection: getAttributeOrDefault(el, "data-fade-from", DEFAULTS.fadeDirection),
      onscrollValue: getAttributeOrDefault(el, "data-on-scroll", DEFAULTS.onscrollValue),
      durationValue: getAttributeOrDefault(el, "data-duration", DEFAULTS.durationValue),
      fadeOffset: getAttributeOrDefault(el, "data-fade-offset", DEFAULTS.fadeOffset),
      delayValue: getAttributeOrDefault(el, "data-delay", DEFAULTS.delayValue),
      easeValue: getAttributeOrDefault(el, "data-ease", DEFAULTS.easeValue)
    };

    animateElement(el, params);
  };

  if (item.children) {
    const children = Array.from(item.children).filter(el =>
      el.className.includes("has_fade_anim")
    );

    if (children.length) {
      children.forEach(child => applyAnimation(child));
    } else {
      applyAnimation(item);
    }
  } else {
    applyAnimation(item);
  }
}
