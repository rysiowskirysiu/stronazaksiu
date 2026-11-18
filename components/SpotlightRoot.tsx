"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SpotlightRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const root = rootRef.current!;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let active = false;
    let frame = 0;

    const updateSpot = () => {
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      root.style.setProperty("--mx", `${rx}px`);
      root.style.setProperty("--my", `${ry}px`);
      active = Math.hypot(tx - rx, ty - ry) > 0.25;
      if (active) frame = requestAnimationFrame(updateSpot);
    };

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      if (!active) {
        rx = tx;
        ry = ty;
        active = true;
        frame = requestAnimationFrame(updateSpot);
      }

      const card = (e.target as Element).closest<HTMLElement>(".card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - r.left}px`);
        card.style.setProperty("--y", `${e.clientY - r.top}px`);
      }
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      root.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="root relative min-h-screen overflow-hidden">
      <div
        className="bg-stripes pointer-events-none absolute z-[1]"
        aria-hidden="true"
      />
      <div
        className="bg-tone pointer-events-none absolute z-[1]"
        aria-hidden="true"
      />
      <div
        className="bg-tone2 pointer-events-none absolute z-[1]"
        aria-hidden="true"
      />
      <div
        className="bg-spot pointer-events-none absolute z-[1]"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
