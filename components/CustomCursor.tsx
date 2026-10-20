"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const preference = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    let stopTracking = () => {};
    const configure = () => {
      stopTracking();
      if (!preference.matches) return;

      let mouseX = 0;
      let mouseY = 0;
      let ringX = 0;
      let ringY = 0;
      let active = false;
      let rafId = 0;

      const onLeave = () => {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "#E85D24";
      };
      const hide = () => {
        active = false;
        cancelAnimationFrame(rafId);
        rafId = 0;
        dot.style.visibility = "hidden";
        ring.style.visibility = "hidden";
        onLeave();
      };
      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        rafId = requestAnimationFrame(animateRing);
      };
      const onMouseMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse" || document.hidden) {
          hide();
          return;
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
        if (!active) {
          ringX = mouseX;
          ringY = mouseY;
          ring.style.left = `${ringX}px`;
          ring.style.top = `${ringY}px`;
          dot.style.visibility = "visible";
          ring.style.visibility = "visible";
          active = true;
          rafId = requestAnimationFrame(animateRing);
        }
      };
      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") hide();
      };
      const onEnter = () => {
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.borderColor = "rgba(232, 93, 36, 0.6)";
      };
      const interactiveElements = document.querySelectorAll("a, button");

      window.addEventListener("pointermove", onMouseMove);
      document.documentElement.addEventListener("pointerleave", hide);
      window.addEventListener("blur", hide);
      window.addEventListener("keydown", hide);
      document.addEventListener("visibilitychange", hide);
      window.addEventListener("pointerdown", onPointerDown);
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      stopTracking = () => {
        hide();
        window.removeEventListener("pointermove", onMouseMove);
        document.documentElement.removeEventListener("pointerleave", hide);
        window.removeEventListener("blur", hide);
        window.removeEventListener("keydown", hide);
        document.removeEventListener("visibilitychange", hide);
        window.removeEventListener("pointerdown", onPointerDown);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      };
    };
    preference.addEventListener("change", configure);
    configure();
    return () => {
      preference.removeEventListener("change", configure);
      stopTracking();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        aria-hidden="true"
        style={{
          visibility: "hidden",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#E85D24",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        aria-hidden="true"
        style={{
          visibility: "hidden",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid #E85D24",
          background: "transparent",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
