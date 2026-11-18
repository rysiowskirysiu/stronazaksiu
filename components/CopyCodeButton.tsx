"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

const DEFAULT_LABEL = "Kopiuj";

export function CopyCodeButton({ code }: { code: string }) {
  const [label, setLabel] = useState(DEFAULT_LABEL);
  const timer = useRef<number>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setLabel("Skopiowano!");
    } catch {
      setLabel("Skopiuj ręcznie");
    }
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel(DEFAULT_LABEL), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="cut inline-flex min-h-[42px] w-full cursor-pointer items-center justify-between border border-dashed border-[#2e3b59] bg-ink px-[11px] text-white transition-[transform,border-color,background] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand-light hover:bg-navy active:scale-[0.97]"
    >
      <span className="inline-flex items-center gap-1.5">
        <span className="text-[10px] font-bold text-muted">KOD</span>
        <span className="font-mono text-sm font-bold tracking-[0.05em]">{code}</span>
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-light">
        <Icon name="copy" size={13} />
        <span>{label}</span>
      </span>
    </button>
  );
}
