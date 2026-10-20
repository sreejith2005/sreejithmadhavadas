"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LOADER_READY } from "./PageLoader";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimator() {
  const entered = useRef(false);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({
      motion: "(prefers-reduced-motion: no-preference)",
      reduce: "(prefers-reduced-motion: reduce)",
    }, ({ conditions }) => {
      if (conditions?.reduce) {
        entered.current = true;
        return;
      }
      let context: gsap.Context | undefined;
      let restoreNames = () => {};
      const start = () => {
        if (context || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        // Both tweens write the names' transform; preserve the pre-animation value
        // independently of their start times and GSAP's reverse reversion order.
        const names = gsap.utils.toArray<HTMLElement>('[data-hero-first], [data-hero-last]');
        const transforms = names.map((name) => ({
          value: name.style.getPropertyValue("transform"),
          priority: name.style.getPropertyPriority("transform"),
        }));
        restoreNames = () => names.forEach((name, index) => {
          const { value, priority } = transforms[index];
          if (value) name.style.setProperty("transform", value, priority);
          else name.style.removeProperty("transform");
        });
        context = gsap.context(() => {
          if (!entered.current) {
            entered.current = true;
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            tl.fromTo('[data-hero-nav]',      { y: -20 }, { y: 0, duration: 0.6 }, 0);
            tl.fromTo('[data-hero-first]',    { x: -12 }, { x: 0, duration: 0.8 }, 0.3);
            tl.fromTo('[data-hero-last]',     { x:  12 }, { x: 0, duration: 0.8 }, 0.3);


          }
          // Own entrance and scroll transforms on the hero names together.
          const section = document.querySelector('[data-hero-section]');
          if (section) {
            gsap.to('[data-hero-first], [data-hero-last]', {
              y: -60, ease: 'none',
              scrollTrigger: {
                trigger: section, start: 'top top', end: 'bottom top', scrub: true,
              },
            });
          }
        });
      };
      window.addEventListener(LOADER_READY, start);
      const loader = document.querySelector<HTMLElement>('[data-page-loader]');
      if (!loader || loader.dataset.ready === "true") start();
      return () => {
        window.removeEventListener(LOADER_READY, start);
        context?.revert();
        restoreNames();
      };
    });
    return () => media.revert();
  }, []);

  return null;
}
