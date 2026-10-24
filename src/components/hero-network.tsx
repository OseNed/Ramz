"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 26;
const FRAME_MS = 33; // ~30fps cap
const PULSE_MS = 1600;
const POINTER_RADIUS = 160;

/**
 * Hero governance network: faint indigo nodes drifting slowly, joined by
 * hairline connectors, with a pulse that travels along a random connector
 * every few seconds. Pauses offscreen and in hidden tabs; with reduced motion
 * it draws one still frame.
 */
export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00004,
      vy: (Math.random() - 0.5) * 0.00004,
      r: 2 + Math.random() * 2,
    }));
    let W = 0;
    let H = 0;
    let visible = true;
    let last = 0;
    let raf = 0;
    let pulse: { e: [number, number]; s: number } | null = null;
    let nextPulse = 1500;
    let mx = -1e4;
    let my = -1e4;

    const size = () => {
      const d = Math.min(2, window.devicePixelRatio || 1);
      const r = c.getBoundingClientRect();
      W = r.width;
      H = r.height;
      c.width = W * d;
      c.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };

    // Nodes lean slightly away from the pointer.
    const pos = (n: (typeof nodes)[number]): [number, number] => {
      let x = n.x * W;
      let y = n.y * H;
      const dx = x - mx;
      const dy = y - my;
      const d = Math.hypot(dx, dy);
      if (d < POINTER_RADIUS && d > 0) {
        const k = (1 - d / POINTER_RADIUS) * 6;
        x += (dx / d) * k;
        y += (dy / d) * k;
      }
      return [x, y];
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      const L = Math.min(W, H) * 0.3 + 80;
      const P = nodes.map(pos);
      const edges: [number, number][] = [];
      ctx.lineWidth = 1;
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const d = Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]);
          if (d >= L) continue;
          edges.push([i, j]);
          ctx.strokeStyle = `rgba(73,79,223,${(0.2 * (1 - d / L)).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(P[i][0], P[i][1]);
          ctx.lineTo(P[j][0], P[j][1]);
          ctx.stroke();
        }
      }
      if (!reducedMotion) {
        if (!pulse && t > nextPulse && edges.length) {
          pulse = { e: edges[Math.floor(Math.random() * edges.length)], s: t };
        }
        if (pulse) {
          const k = (t - pulse.s) / PULSE_MS;
          if (k >= 1) {
            pulse = null;
            nextPulse = t + 2600 + Math.random() * 1400;
          } else {
            const a = P[pulse.e[0]];
            const b = P[pulse.e[1]];
            ctx.fillStyle = `rgba(73,79,223,${(0.5 * Math.sin(k * Math.PI)).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, 3.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.fillStyle = "rgba(73,79,223,.32)";
      nodes.forEach((n, i) => {
        ctx.beginPath();
        ctx.arc(P[i][0], P[i][1], n.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    size();
    const ro = new ResizeObserver(() => {
      size();
      if (reducedMotion) draw(0);
    });
    ro.observe(c);

    if (reducedMotion) {
      draw(0);
      return () => ro.disconnect();
    }

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible || document.hidden || t - last < FRAME_MS) return;
      const dt = Math.min(t - last, 100);
      last = t;
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      draw(t);
    };
    raf = requestAnimationFrame(tick);

    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    io.observe(c);

    const onPointerMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-net" aria-hidden="true" />;
}
