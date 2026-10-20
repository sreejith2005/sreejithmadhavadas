"use client";

import { useRef, useEffect } from "react";

export const LOADER_READY = "portfolio:loader-ready";

export default function PageLoader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = ref.current;
    if (!loader) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let fadeTimer: ReturnType<typeof setTimeout>;
    let readyTimer: ReturnType<typeof setTimeout>;
    const finish = () => {
      clearTimeout(fadeTimer);
      clearTimeout(readyTimer);
      loader.style.opacity = "0";
      loader.dataset.ready = "true";
      window.dispatchEvent(new Event(LOADER_READY));
    };
    const onPreference = () => {
      if (preference.matches) finish();
    };
    preference.addEventListener("change", onPreference);
    if (preference.matches) {
      finish();
    } else {
      loader.dataset.ready = "false";
      loader.style.transition = "none";
      loader.style.opacity = "1";
      // Establish the opaque starting frame without an unintended fade-in.
      void loader.offsetWidth;
      loader.style.transition = "opacity 0.6s ease";
      fadeTimer = setTimeout(() => { loader.style.opacity = "0"; }, 100);
      readyTimer = setTimeout(finish, 700);
    }
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(readyTimer);
      preference.removeEventListener("change", onPreference);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-page-loader
      data-ready="false"
      aria-hidden="true"
      className="page-loader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#F4EDE5',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.6s ease',
      }}
    />
  );
}
