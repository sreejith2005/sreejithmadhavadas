"use client";

import { useRef } from "react";

interface DraggableStripProps {
  children: React.ReactNode;
}

export default function DraggableStrip({ children }: DraggableStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft || 0);
    scrollLeft.current = ref.current?.scrollLeft || 0;
    if (ref.current) ref.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch support
  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].pageX;
    scrollLeft.current = ref.current?.scrollLeft || 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!ref.current) return;
    const walk = (e.touches[0].pageX - touchStart.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={{
        display: "flex",
        gap: "16px",
        padding: "24px 60px",
        overflowX: "scroll",
        scrollbarWidth: "none",
        cursor: "grab",
        userSelect: "none",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
      }}
    >
      {children}
    </div>
  );
}
