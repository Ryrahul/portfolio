"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#60a5fa",
  "#3b82f6",
  "#93c5fd",
  "#7dd3fc",
  "#38bdf8",
  "#a5b4fc",
  "#ffffff",
];

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

const MAX_PARTICLES = 80;

export default function SlashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const cursor = useRef({ x: -200, y: -200 });
  const animFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number) => {
      const count = 2;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        if (stars.current.length >= MAX_PARTICLES) {
          // Reuse oldest particle instead of allocating
          const old = stars.current.shift()!;
          old.x = x + (Math.random() - 0.5) * 4;
          old.y = y + (Math.random() - 0.5) * 4;
          old.vx = Math.cos(angle) * speed;
          old.vy = Math.sin(angle) * speed - 0.3;
          old.alpha = 1;
          old.size = Math.random() * 1.5 + 0.5;
          old.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          stars.current.push(old);
        } else {
          stars.current.push({
            x: x + (Math.random() - 0.5) * 4,
            y: y + (Math.random() - 0.5) * 4,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.3,
            alpha: 1,
            size: Math.random() * 1.5 + 0.5,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
      // Throttle spawning to ~every 16ms
      const now = performance.now();
      if (now - lastSpawn.current > 16) {
        lastSpawn.current = now;
        spawn(e.clientX, e.clientY);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove dead particles in-place
      let writeIdx = 0;
      for (let i = 0; i < stars.current.length; i++) {
        if (stars.current[i].alpha > 0.02) {
          stars.current[writeIdx++] = stars.current[i];
        }
      }
      stars.current.length = writeIdx;

      // Draw all particles — no shadowBlur (the main perf killer)
      for (let i = 0; i < stars.current.length; i++) {
        const s = stars.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.015;
        s.vx *= 0.99;
        s.alpha *= 0.95;

        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cursor dot
      const { x, y } = cursor.current;
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "#60a5fa";
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();

      animFrame.current = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrame.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
