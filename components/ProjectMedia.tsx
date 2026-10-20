"use client";

import { useEffect, useRef } from "react";

type Media = { src: string; width: number; height: number; alt: string; caption: string };

export default function ProjectMedia({ media }: { media: Media }) {
  const viewport = useRef<HTMLDivElement>(null);
  const center = () => {
    const element = viewport.current;
    if (element) element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
  };

  useEffect(() => {
    center();
    if (!viewport.current || !("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(center);
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="project-media">
      <div ref={viewport} className="screenshot-window" tabIndex={0} aria-label="FMS builder screenshot. On smaller screens, scroll horizontally to explore.">
        <img src={media.src} alt={media.alt} width={media.width} height={media.height} onLoad={center} />
      </div>
      <figcaption>
        <span>{media.caption}<span className="screenshot-pan-hint"> · Scroll to explore →</span></span>
        <a href={media.src} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span></a>
      </figcaption>
    </figure>
  );
}
