"use client";

import { useEffect } from "react";

/**
 * Section headings fade up once as they enter the viewport, and the platform
 * rail starts its draw-and-travel loop when its section scrolls into view.
 * The `.rv` class is only added here, so headings stay visible without JS.
 */
export function ScrollEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add(e.target.tagName === "SECTION" ? "on" : "in");
          io.unobserve(e.target);
        }),
      { threshold: 0.2 },
    );
    document.querySelectorAll("main h2").forEach((h) => {
      h.classList.add("rv");
      io.observe(h);
    });
    const plat = document.querySelector(".plat");
    if (plat) io.observe(plat);
    return () => io.disconnect();
  }, []);

  return null;
}
