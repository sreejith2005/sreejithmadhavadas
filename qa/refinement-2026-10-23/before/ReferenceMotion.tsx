"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/** One Home journey timeline; existing Lenis remains the sole scroll system. */
export default function ReferenceMotion() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = marker.current?.closest("main");
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const journey = root.querySelector<HTMLElement>(".home-journey");
      if (journey) {
        const experience = journey.querySelector<HTMLElement>(".experience-scene")!;
        const areas = journey.querySelector<HTMLElement>(".areas-section")!;
        const work = journey.querySelector<HTMLElement>(".work-invitation")!;
        const svg = journey.querySelector<SVGSVGElement>(".journey-thread")!;
        const track = svg.querySelector<SVGPathElement>(".journey-track")!;
        const ink = svg.querySelector<SVGPathElement>(".journey-ink")!;
        const pearl = svg.querySelector<SVGCircleElement>(".journey-pearl")!;
        const progress = { value: 0 };
        let length = 0;
        const draw = () => {
          const point = ink.getPointAtLength(length * progress.value);
          pearl.setAttribute("cx", String(point.x));
          pearl.setAttribute("cy", String(point.y));
          ink.style.strokeDashoffset = String(1 - progress.value);
        };
        const measure = () => {
          const width = journey.clientWidth;
          const compact = width < 768;
          const start = experience.offsetHeight - (compact ? 150 : 180);
          const middle = areas.offsetTop;
          const finish = work.offsetTop + journey.querySelector<HTMLElement>(".work-screen")!.offsetTop + 25;
          const rail = compact ? 12 : width * .075;
          const endX = width * .5;
          const path = `M ${compact ? rail : width * .38} ${start} C ${rail} ${start + 60}, ${rail} ${middle}, ${rail} ${middle + 140} L ${rail} ${work.offsetTop - 100} C ${rail} ${finish - 60}, ${endX} ${finish - 130}, ${endX} ${finish}`;
          svg.setAttribute("viewBox", `0 0 ${width} ${journey.offsetHeight}`);
          track.setAttribute("d", path);
          ink.setAttribute("d", path);
          length = ink.getTotalLength();
          draw();
        };
        measure();
        const timeline = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: {
          trigger: journey, start: "top 50%", endTrigger: work, end: "top -15%",
          scrub: true, invalidateOnRefresh: true, onRefresh: measure,
        }});
        timeline.fromTo(experience.querySelectorAll(".sculpture-object"),
          { y: (i) => [80, 55, 100, 65][i], rotation: (i) => [0, -12, 0, 10][i], transformOrigin: "50% 50%" },
          { y: 0, rotation: 0, duration: .26 }, 0);
        timeline.fromTo(experience.querySelectorAll(".scene-connection"),
          { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, autoRound: false, duration: .25 }, .05);
        timeline.to(progress, { value: 1, duration: .74, onUpdate: draw }, .26);
        timeline.fromTo(areas.querySelectorAll(".service-block"),
          { x: () => journey.clientWidth < 768 ? 12 : 45 }, { x: 0, stagger: .055, duration: .2 }, .38);
        timeline.fromTo(work.querySelector(".invitation-word"), { xPercent: -9 }, { xPercent: 0, duration: .28 }, .72);
        timeline.fromTo(work.querySelector(".work-screen-reveal"),
          { clipPath: "inset(42% 9% 42% 9%)", y: 55 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: .25, ease: "power2.out" }, .75);
        gsap.set(svg, { visibility: "visible" });
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
    const images = root.querySelectorAll(".work-screen img, .editorial-cover img");
    images.forEach(img => img.addEventListener("load", refresh));
    void document.fonts.ready.then(refresh);
    return () => { disposed = true; images.forEach(img => img.removeEventListener("load", refresh)); mm.revert(); };
  }, []);
  return <span ref={marker} hidden aria-hidden="true" />;
}
