import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-line-2 bg-card-2 px-[9px] py-[3px] text-[11px] font-bold tracking-[0.05em] text-brand-light">
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="-skew-x-10 bg-brand px-2.5 py-1 text-[11px] font-extrabold tracking-[0.07em] uppercase">
      {children}
    </span>
  );
}
