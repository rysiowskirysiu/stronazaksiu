import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, className = "", children }: SectionProps) {
  return (
    <section
      className={`flex flex-col gap-4 ${className}`}
      aria-labelledby={id}
    >
      <div className="sec-head flex items-center gap-3">
        <h2
          id={id}
          className="display m-0 text-sm tracking-[0.16em] uppercase"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
