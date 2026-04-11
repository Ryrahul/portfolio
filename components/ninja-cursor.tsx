"use client";

import { useEffect, useRef, useState } from "react";

export default function NinjaCursor() {
  const ninjaRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const [facingLeft, setFacingLeft] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const prevX = target.current.x;
      target.current = { x: e.clientX, y: e.clientY };

      if (e.clientX < prevX) setFacingLeft(true);
      else if (e.clientX > prevX) setFacingLeft(false);

      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 150);
    };

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.08;
      pos.current.y += dy * 0.08;

      if (ninjaRef.current) {
        ninjaRef.current.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 28}px) scaleX(${facingLeft ? -1 : 1})`;
      }

      animFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame.current);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, [facingLeft]);

  return (
    <div
      ref={ninjaRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    >
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="16" cy="10" r="7" fill="#2d2d2d" />
        {/* Headband */}
        <rect x="8" y="7" width="16" height="3" rx="1" fill="#c0392b" />
        {/* Headband tail flowing */}
        <path
          d={
            isMoving
              ? "M8 8.5 Q2 6 -2 10 Q-4 12 -1 14"
              : "M8 8.5 Q5 10 4 12 Q3 14 5 15"
          }
          stroke="#c0392b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ transition: "d 0.3s ease" }}
        />
        {/* Eyes - narrow slits */}
        <ellipse cx="13.5" cy="10" rx="1.5" ry="0.7" fill="#e74c3c" />
        <ellipse cx="18.5" cy="10" rx="1.5" ry="0.7" fill="#e74c3c" />
        {/* Eye shine */}
        <circle cx="14" cy="9.8" r="0.4" fill="#fff" />
        <circle cx="19" cy="9.8" r="0.4" fill="#fff" />
        {/* Mask / face cover */}
        <path d="M10 11 Q16 15 22 11" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
        {/* Body */}
        <rect x="12" y="17" width="8" height="10" rx="2" fill="#1a1a1a" />
        {/* Scarf / cloak */}
        <path
          d={
            isMoving
              ? "M12 18 Q6 20 4 26 Q3 30 7 28 L12 24"
              : "M12 18 Q9 22 10 26 Q10 28 12 27 L12 24"
          }
          fill="#2d2d2d"
          style={{ transition: "d 0.3s ease" }}
        />
        {/* Arms */}
        <line
          x1="12"
          y1="19"
          x2={isMoving ? "6" : "9"}
          y2={isMoving ? "22" : "25"}
          stroke="#2d2d2d"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "all 0.2s ease" }}
        />
        <line
          x1="20"
          y1="19"
          x2={isMoving ? "26" : "23"}
          y2={isMoving ? "22" : "25"}
          stroke="#2d2d2d"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "all 0.2s ease" }}
        />
        {/* Kunai in hand when moving */}
        {isMoving && (
          <g>
            <line x1="25" y1="21" x2="30" y2="17" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="30,17 32,15 29,16" fill="#aaa" />
          </g>
        )}
        {/* Legs */}
        <line
          x1="14"
          y1="27"
          x2={isMoving ? "10" : "13"}
          y2="34"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "all 0.2s ease" }}
        />
        <line
          x1="18"
          y1="27"
          x2={isMoving ? "22" : "19"}
          y2="34"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "all 0.2s ease" }}
        />
        {/* Feet */}
        <ellipse cx={isMoving ? 10 : 13} cy="34.5" rx="2" ry="1" fill="#333" />
        <ellipse cx={isMoving ? 22 : 19} cy="34.5" rx="2" ry="1" fill="#333" />
      </svg>
    </div>
  );
}
