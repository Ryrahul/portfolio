"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#60a5fa", // blue-400
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#93c5fd", // blue-300
  "#7dd3fc", // sky-300
  "#38bdf8", // sky-400
  "#a5b4fc", // indigo-300
  "#ffffff", // bright star
];

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  isBright: boolean; // renders as 4-pointed star
}

function drawStar4(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const radius = i % 2 === 0 ? r : r * 0.35;
    ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
  }
  ctx.closePath();
  ctx.fill();
}

export default function SlashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const cursor = useRef({ x: -200, y: -200 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number) => {
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.2;
        const isBright = Math.random() < 0.2;
        stars.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          alpha: 1,
          size: isBright ? Math.random() * 3 + 2 : Math.random() * 1.5 + 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          isBright,
        });
      }
      if (stars.current.length > 300) stars.current.splice(0, 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      spawn(e.clientX, e.clientY);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.current = stars.current.filter((s) => s.alpha > 0.015);

      for (const s of stars.current) {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.018; // very gentle gravity — drift, not fall
        s.vx *= 0.99;
        s.alpha *= 0.96;

        ctx.save();
        ctx.globalAlpha = s.alpha;

        if (s.isBright) {
          ctx.shadowColor = "#60a5fa";
          ctx.shadowBlur = 10;
          ctx.fillStyle = s.color;
          drawStar4(ctx, s.x, s.y, s.size);
        } else {
          ctx.shadowColor = "#3b82f6";
          ctx.shadowBlur = 5;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // Cursor: glowing orb
      const { x, y } = cursor.current;
      ctx.save();
      // Outer halo
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 14);
      grad.addColorStop(0, "rgba(96,165,250,0.25)");
      grad.addColorStop(1, "rgba(96,165,250,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
      // Core dot
      ctx.shadowColor = "#60a5fa";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

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
