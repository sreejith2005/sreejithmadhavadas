"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const syncRef = useRef<() => void>(() => {});
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let visible = false;
    let failed = false;
    let pending = false;
    let attempt = 0;
    const poster = () => { video.dataset.playing = "false"; };
    const shouldPlay = () => visible && !document.hidden && !preference.matches && !pausedRef.current && !failed && !disposed;
    const sync = () => {
      setAvailable(!preference.matches && !failed);
      if (!shouldPlay()) {
        ++attempt;
        pending = false;
        video.pause();
        poster();
        return;
      }
      if (pending || !video.paused) return;
      video.muted = true;
      pending = true;
      const current = ++attempt;
      void video.play().catch(() => {
        if (disposed || current !== attempt) return;
        failed = true;
        setAvailable(false);
        poster();
      }).finally(() => { if (current === attempt) pending = false; });
    };
    syncRef.current = sync;
    const playing = () => {
      if (shouldPlay()) video.dataset.playing = "true";
      else { video.pause(); poster(); }
    };
    const error = () => { failed = true; sync(); };
    // Load near the footer, but play only while it is onscreen.
    const loadObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || preference.matches || failed) return;
      if (!video.getAttribute("src")) {
        video.src = "/vids/Character_bobbing_head_web.mp4";
        video.load();
      }
      loadObserver.disconnect();
    }, { rootMargin: "300px 0px" });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !preference.matches && !video.getAttribute("src")) {
        video.src = "/vids/Character_bobbing_head_web.mp4";
      }
      sync();
    });
    const preferenceChanged = () => {
      if (!preference.matches && visible && !video.getAttribute("src")) video.src = "/vids/Character_bobbing_head_web.mp4";
      sync();
    };
    video.addEventListener("playing", playing);
    video.addEventListener("pause", poster);
    video.addEventListener("waiting", poster);
    video.addEventListener("error", error);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", preferenceChanged);
    loadObserver.observe(video);
    observer.observe(video);
    return () => {
      disposed = true;
      ++attempt;
      syncRef.current = () => {};
      loadObserver.disconnect();
      observer.disconnect();
      video.removeEventListener("playing", playing);
      video.removeEventListener("pause", poster);
      video.removeEventListener("waiting", poster);
      video.removeEventListener("error", error);
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", preferenceChanged);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <footer className="identity-footer">
      <div className="footer-media" aria-hidden="true">
        <img className="footer-poster" src="/vids/Character_bobbing_head_poster.jpg" alt="" width={1920} height={1080} loading="lazy" />
        <video ref={videoRef} className="footer-video" poster="/vids/Character_bobbing_head_poster.jpg" preload="none" loop muted playsInline />
      </div>
      {available && <button className="footer-motion-control" aria-pressed={paused} onClick={() => {
        pausedRef.current = !pausedRef.current;
        setPaused(pausedRef.current);
        syncRef.current();
      }}>{paused ? "Play animation" : "Pause animation"}</button>}
      <p className="font-display identity-name footer-name"><span>Sreejith</span><span>Madhavadas</span></p>
      <div className="footer-bottom">
        <span>AI Engineer &amp; App Builder</span>
        <span>© {new Date().getFullYear()} Sreejith Madhavadas</span>
      </div>
    </footer>
  );
}
