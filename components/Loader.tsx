"use client";

import { useEffect, useRef, useState } from "react";
import { FallbackImage } from "@/components/FallbackImage";

const DURATION = 1750;

function getTargetProgress(t: number) {
  if (t < 0.35) return (t / 0.35) * 0.48;
  if (t < 0.62) return 0.48 + ((t - 0.35) / 0.27) * 0.18;
  return 0.66 + Math.pow((t - 0.62) / 0.38, 1.6) * 0.34;
}

function getStatusText(pct: number) {
  if (pct < 35) return "Łączenie z serwerem...";
  if (pct < 70) return "Wczytywanie skinów CS2...";
  if (pct < 98) return "Weryfikacja kodów...";
  return "Dostęp przyznany";
}

export function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const bgNumRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const loaderEl = loaderRef.current!;
    const timers: number[] = [];
    let frame = 0;
    let start: number | null = null;
    let current = 0;

    const tick = (now: number) => {
      start ??= now;
      const raw = Math.min(1, (now - start) / DURATION);
      const target = getTargetProgress(raw) * 100;
      current += (target - current) * 0.22;
      if (raw >= 1) current = 100;

      const pct = Math.round(current);
      const padded = String(pct).padStart(2, "0");

      loaderEl.style.setProperty("--p", `${current.toFixed(1)}%`);
      loaderEl.style.setProperty("--p-num", (current / 100).toFixed(3));
      pctRef.current!.textContent = `${padded}%`;
      bgNumRef.current!.textContent = padded;
      txtRef.current!.textContent = getStatusText(pct);

      if (raw < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        loaderEl.classList.add("is-ready");
        timers.push(
          window.setTimeout(() => {
            document.body.classList.remove("is-loading");
            timers.push(window.setTimeout(() => setMounted(false), 900));
          }, 240),
        );
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className="loader pointer-events-auto fixed inset-0 z-[9999] grid place-items-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="slash-panel slash-panel--top" />
      <div className="slash-panel slash-panel--bottom" />
      <div className="slash-beam pointer-events-none absolute inset-0 z-[4]" />

      <div
        ref={bgNumRef}
        className="loader-bg-num display pointer-events-none absolute z-[2] text-[clamp(140px,28vw,310px)] leading-none tracking-[-0.06em] text-brand/[0.045] select-none"
      >
        00
      </div>

      <div className="loader-stage relative z-[3] flex w-[min(440px,88vw)] flex-col items-center gap-7">
        <div className="relative grid size-[108px] place-items-center">
          <span className="animate-radar absolute -inset-2.5 rounded-full border border-brand/20" />
          <span className="hud-ring-1 animate-spin-fast absolute inset-0 rounded-full" />
          <span className="animate-spin-reverse absolute inset-[11px] rounded-full border-[1.5px] border-dashed border-brand-light/40" />
          <span className="hud-core cut display relative grid size-[66px] place-items-center overflow-hidden border border-brand-light/45 text-[32px] text-white">
            <FallbackImage
              src="/avatar.png"
              alt="RICZI"
              className="absolute inset-0 z-[2] size-full object-cover"
              fallback={<span>R</span>}
            />
          </span>
        </div>

        <div className="relative inline-grid place-items-center px-[18px] py-1">
          <span className="loader-logo-slash absolute inset-x-0 top-[56%] bottom-1.5 bg-brand shadow-[0_0_26px_rgba(31,77,255,0.8)]" />
          <span className="display col-start-1 row-start-1 text-[clamp(54px,12vw,78px)] leading-[0.92] tracking-[-0.03em] text-white/[0.08] select-none">
            RICZI
          </span>
          <span className="loader-word--fill display col-start-1 row-start-1 text-[clamp(54px,12vw,78px)] leading-[0.92] tracking-[-0.03em] text-white [text-shadow:0_0_28px_rgba(31,77,255,0.65)] select-none">
            RICZI
          </span>
        </div>

        <div className="cut flex w-full flex-col gap-2.5 border border-line-2 bg-card/[0.78] px-[18px] py-4 backdrop-blur-md">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.08em] uppercase">
            <span className="inline-flex items-center gap-2 text-soft">
              <span className="dot" />
              <span ref={txtRef}>Łączenie z serwerem...</span>
            </span>
            <span
              ref={pctRef}
              className="text-[15px] font-extrabold text-brand-light [text-shadow:0_0_12px_rgba(110,155,255,0.6)]"
            >
              00%
            </span>
          </div>
          <div className="hud-track relative h-2 -skew-x-[18deg] overflow-hidden border border-[#1e263b] bg-[#05070c]">
            <span className="hud-bar relative block size-full shadow-[0_0_20px_var(--color-brand)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
