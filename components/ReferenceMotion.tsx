"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/** Owns only the three reference-led areas; existing Lenis remains the sole scroll system. */
export default function ReferenceMotion() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = marker.current?.closest("main");
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const experience = root.querySelector<HTMLElement>(".experience-scene");
      const invitation = root.querySelector<HTMLElement>(".work-invitation");
      if (experience) {
        const objects = experience.querySelectorAll(".sculpture-object");
        gsap.fromTo(objects, { y: (i) => [95, 70, 125, 85][i], rotation: (i) => [0, -12, 0, 10][i], transformOrigin: "50% 50%" }, {
          y: 0, rotation: 0, ease: "power2.out",
          scrollTrigger: { trigger: experience, start: "top 45%", end: "top -20%", scrub: true, invalidateOnRefresh: true },
        });
        gsap.fromTo(experience.querySelectorAll(".scene-connection"), { strokeDasharray: 1, strokeDashoffset: 1 }, {
          strokeDashoffset: 0, autoRound: false, ease: "none", scrollTrigger: { trigger: experience, start: "top 35%", end: "top -20%", scrub: true },
        });
      }
      if (invitation) {
        gsap.fromTo(invitation.querySelector(".invitation-word"), { xPercent: -7 }, { xPercent: 0, ease: "power2.out",
          scrollTrigger: { trigger: invitation, start: "top bottom", end: "top top", scrub: true } });
        gsap.fromTo(invitation.querySelector(".aperture-motion"), { scale: .76, y: 85 }, { scale: 1, y: 0, ease: "power2.out",
          scrollTrigger: { trigger: invitation, start: "top 65%", end: "top 0%", scrub: true } });
      }
      const cover = root.querySelector(".editorial-cover");
      if (cover) {
        // Finish before the screenshot reaches its reading position; reverse scrolling retraces entry.
        gsap.fromTo(cover.querySelector(".project-media"), { scale: .88, y: 60 }, { scale: 1, y: 0, ease: "power2.out",
          scrollTrigger: { trigger: cover.querySelector(".project-media"), start: "top 95%", end: "top 35%", scrub: true, invalidateOnRefresh: true } });
      }
    }, root);
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const scene = root.querySelector<HTMLElement>(".experience-scene");
      const sculpture = scene?.querySelector<HTMLElement>(".experience-sculpture");
      if (!scene || !sculpture) return;
      const x = gsap.quickTo(sculpture, "x", { duration: .6, ease: "power3.out" });
      const move = (event: PointerEvent) => { const rect = scene.getBoundingClientRect(); x(((event.clientX - rect.left) / rect.width - .5) * 28); };
      const leave = () => x(0);
      scene.addEventListener("pointermove", move);
      scene.addEventListener("pointerleave", leave);
      return () => { scene.removeEventListener("pointermove", move); scene.removeEventListener("pointerleave", leave); };
    }, root);
    let disposed = false;
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    const images = root.querySelectorAll(".work-aperture img, .editorial-cover img");
    images.forEach(img => img.addEventListener("load", refresh));
    void document.fonts.ready.then(refresh);
    return () => { disposed = true; images.forEach(img => img.removeEventListener("load", refresh)); mm.revert(); };
  }, []);
  return <span ref={marker} hidden aria-hidden="true" />;
}
