"use client";

import { useRef, useEffect } from "react";

export default function TypingArea() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      className="min-h-[120px] outline-none whitespace-pre-wrap caret-zinc-900"
      aria-label="Type here"
    />
  );
}
