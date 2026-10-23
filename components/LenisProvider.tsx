"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        // Reduce travel per wheel gesture, not just the time taken to reach it.
        wheelMultiplier: 0.45,
      });

      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tick);

      // Connect only this Lenis instance to ScrollTrigger.
      lenis.on("scroll", ScrollTrigger.update);

      return () => {
        gsap.ticker.remove(tick);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    });
    return () => media.revert();
  }, []);

  return null;
}
