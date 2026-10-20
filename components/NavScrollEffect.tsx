"use client";

import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.style.backdropFilter = "blur(12px)";
        nav.style.background = "rgba(244, 237, 229, 0.85)";
        nav.style.transition = "all 0.3s ease";
      } else {
        nav.style.backdropFilter = "none";
        nav.style.background = "rgba(244, 237, 229, 0.95)";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
