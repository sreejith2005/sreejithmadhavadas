"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollAnimator() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Move whole blocks together so headings never cross their descriptions.
      // No opacity changes: content remains readable if animation stops.
      gsap.utils.toArray<HTMLElement>("[data-tagline-block], .services-intro, .service-header, .cta-grid").forEach((block) => {
        gsap.fromTo(block, { y: 12 }, {
          y: 0, immediateRender: false, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: block, start: "top 92%", once: true },
        });
      });
      ScrollTrigger.refresh();
    });
    return () => media.revert();
  }, []);
  return null;
}
