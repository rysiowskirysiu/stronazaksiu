"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Status = "loading" | "loaded" | "error";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
};

export function FallbackImage({
  src,
  alt,
  className,
  fallback,
}: FallbackImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<Status>(src ? "loading" : "error");

  useEffect(() => {
    const img = ref.current;
    if (img?.complete) setStatus(img.naturalWidth > 0 ? "loaded" : "error");
  }, []);

  return (
    <>
      {status !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element -- zewnętrzne źródła o nieznanych wymiarach
        <img
          ref={ref}
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={className}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
      {status !== "loaded" && fallback}
    </>
  );
}
