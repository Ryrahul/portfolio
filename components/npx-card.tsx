"use client";

import { useState } from "react";

/**
 * The `npx ryrahul` terminal business card.
 *
 * It was already published to npm but mentioned nowhere on the site, so nobody
 * could discover it. One click copies the command — the whole point is that a
 * developer can paste it straight into the terminal they already have open.
 */
export default function NpxCard() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText("npx ryrahul");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; the text is selectable either way.
    }
  }

  return (
    <button
      onClick={copy}
      aria-label="Copy the command npx ryrahul"
      className="mt-3 inline-flex items-center gap-2 rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100"
    >
      <span className="select-none text-zinc-400">$</span>
      <span>npx ryrahul</span>
      <span className="ml-1 select-none text-[10px] uppercase tracking-wide text-zinc-400">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
