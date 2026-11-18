"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function observe(el: Element, onVisible: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        callbacks.get(entry.target)?.();
        observer!.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 32px 0px" },
  );
  callbacks.set(el, onVisible);
  observer.observe(el);
  return () => observer!.unobserve(el);
}

type RevealCardProps<T extends ElementType> = {
  as?: T;
  index: number;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function RevealCard<T extends ElementType = "div">({
  as,
  index,
  className = "",
  children,
  ...props
}: RevealCardProps<T>) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => observe(ref.current!, () => setVisible(true)), []);

  return (
    <Tag
      ref={ref}
      className={`card reveal-card ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
      {...props}
    >
      <span
        className="card-dots pointer-events-none absolute top-0 right-0 -z-10 h-[110px] w-[120px] opacity-50"
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
}
