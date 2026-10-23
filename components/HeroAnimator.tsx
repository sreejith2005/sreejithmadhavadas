"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeroAnimator() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const hero = marker.current?.closest("main")?.querySelector<HTMLElement>("[data-hero-section]");
    if (!hero) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Entrance owns inner names; scroll owns their parent. No loader gate.
      if (window.scrollY < 20 && !window.location.hash) {
        gsap.fromTo(hero.querySelectorAll(".hero-name > span"),
          { y: 24 }, { y: 0, duration: .8, stagger: .08, ease: "power3.out", clearProps: "transform" });
      }
    }, hero);
    media.add("(min-width: 768px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(hero.querySelector(".hero-name"), {
        y: -64, ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
      });
    }, hero);
    return () => media.revert();
  }, []);
  return <span ref={marker} hidden aria-hidden="true" />;
}
