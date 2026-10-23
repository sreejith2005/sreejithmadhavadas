"use client";

import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    if (!nav) return;

    const handleScroll = () => {
      const next = String(window.scrollY > 60);
      if (nav.dataset.scrolled !== next) nav.dataset.scrolled = next;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
