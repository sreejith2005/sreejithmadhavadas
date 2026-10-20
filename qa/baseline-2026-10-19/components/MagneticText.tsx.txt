"use client";

import { useEffect, useRef } from "react";

export default function MagneticText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
    const update = () => {
      enabled.current = preference.matches;
      if (!enabled.current && element) element.style.removeProperty("transform");
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      enabled.current = false;
      preference.removeEventListener("change", update);
      element?.style.removeProperty("transform");
    };
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!enabled.current) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    if (distance < 100) {
      if (ref.current) {
        ref.current.style.transform = `translate(${deltaX * 0.3}px, ${deltaY * 0.3}px)`;
      }
    }
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.removeProperty("transform");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)', display: 'inline-block' }}
    >
      {children}
    </div>
  );
}
