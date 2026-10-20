"use client";

import { usePathname } from "next/navigation";
import NavScrollEffect from "./NavScrollEffect";

export default function SiteNavigation({ home = false }: { home?: boolean }) {
  const pathname = usePathname();

  return (
    <>
      <NavScrollEffect />
      <nav data-nav data-hero-nav={home ? "" : undefined} className="site-navigation" aria-label="Main navigation">
        <span className="site-nav-role">AI Engineer<br />&amp; App Builder</span>
        <img src="/images/6068668461904237064_119.jpg" alt="" width={1448} height={1086} className="nav-avatar" />
        <ul>
          <li><a href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</a></li>
          <li><a href="/work" aria-current={pathname === "/work" ? "page" : undefined}>Work</a></li>
          <li><a href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</a></li>
          <li><a href={home ? "#contact" : "/#contact"}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
