"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/** Route-local progressive enhancement. Text is never masked or made invisible. */
export default function ScrollAnimator() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = marker.current?.closest("main");
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    let disposed = false;
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 768px) and (min-height: 600px)",
      compact: "(max-width: 767.98px), (max-height: 599.98px)",
      motion: "(prefers-reduced-motion: no-preference)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, ({ conditions }) => {
      if (!conditions?.motion) return;
      const desktop = conditions.desktop;
      root.querySelectorAll<HTMLElement>("[data-scene]").forEach(section => {
        const parts = section.querySelectorAll<HTMLElement>("[data-arrival]");
        if (!parts.length) return;
        if (desktop) {
          // One owner for entry/exit; the middle 60% of travel stays still.
          gsap.timeline({ scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true } })
            .fromTo(parts, { y: 56 }, { y: 0, duration: .3, ease: "power2.out" }, 0)
            .to(parts, { y: -24, duration: .1, ease: "none" }, .9);
        } else {
          gsap.from(parts, { y: 16, duration: .45, ease: "power2.out", clearProps: "transform",
            scrollTrigger: { trigger: section, start: "top 90%", once: true } });
        }
      });
      root.querySelectorAll<HTMLElement>(".scene-rule").forEach(rule => {
        gsap.fromTo(rule, { scaleX: .08 }, { scaleX: 1, ease: "none",
          scrollTrigger: { trigger: rule.closest("section"), start: "top 90%", end: "top 20%", scrub: true } });
      });
      // Evidence and body copy remain still; only section markers arrive.
      root.querySelectorAll<HTMLElement>(".case-section-label, .about-note > .section-eyebrow, .footer-name").forEach(label => {
        gsap.from(label, { y: 16, duration: .5, clearProps: "transform", ease: "power2.out",
          scrollTrigger: { trigger: label, start: "top 94%", once: true } });
      });
    }, root);
    // State cues survive reduced motion and never hide inactive chapters.
    const chapters = root.querySelectorAll<HTMLElement>(".case-section, .case-capabilities");
    const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(entries => {
      entries.forEach(entry => (entry.target as HTMLElement).dataset.inView = String(entry.isIntersecting));
    }, { rootMargin: "-15% 0px -25% 0px" }) : null;
    chapters.forEach(chapter => observer?.observe(chapter));
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    const images = Array.from(root.querySelectorAll("img"));
    images.forEach(img => img.addEventListener("load", refresh));
    void document.fonts.ready.then(refresh);
    window.addEventListener("pageshow", refresh);
    const frame = requestAnimationFrame(refresh);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      images.forEach(img => img.removeEventListener("load", refresh));
      window.removeEventListener("pageshow", refresh);
      chapters.forEach(chapter => delete chapter.dataset.inView);
      media.revert();
    };
  }, []);
  return <span ref={marker} hidden aria-hidden="true" />;
}
