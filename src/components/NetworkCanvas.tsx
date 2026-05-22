"use client";

import { useEffect, useRef } from "react";

/** Hero: a glowing, self-rewiring network of innovation nodes — cyan/violet/magenta. */
export default function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = (canvas.width = canvas.clientWidth * dpr);
    let h = (canvas.height = canvas.clientHeight * dpr);

    type N = { x: number; y: number; vx: number; vy: number; r: number; t: number };
    const COUNT = Math.min(70, Math.floor((w * h) / (34000 * dpr)));
    const nodes: N[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3 * dpr, vy: (Math.random() - 0.5) * 0.3 * dpr,
      r: (1 + Math.random() * 2.4) * dpr, t: Math.random(),
    }));

    const col = (t: number, a: number) => {
      // cyan → violet → magenta
      if (t < 0.5) { const k = t / 0.5; return `rgba(${56 + k * (139 - 56)},${225 + k * (124 - 225)},${255 + k * (255 - 255)},${a})`; }
      const k = (t - 0.5) / 0.5; return `rgba(${139 + k * (255 - 139)},${124 + k * (93 - 124)},${255 + k * (177 - 255)},${a})`;
    };

    const onResize = () => { w = canvas.width = canvas.clientWidth * dpr; h = canvas.height = canvas.clientHeight * dpr; };
    window.addEventListener("resize", onResize);
    const link = 165 * dpr;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) {
            ctx.strokeStyle = col((a.t + b.t) / 2, (1 - d / link) * 0.3);
            ctx.lineWidth = 0.7 * dpr;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = col(n.t, 0.95);
        ctx.shadowColor = col(n.t, 0.8); ctx.shadowBlur = 10 * dpr;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
