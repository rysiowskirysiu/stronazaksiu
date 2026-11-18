import { FallbackImage } from "@/components/FallbackImage";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <header className="relative flex flex-col items-center gap-[18px] text-center">
      <div
        className="hero-banner pointer-events-none absolute -top-[72px] -bottom-[46px] left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
        aria-hidden="true"
      >
        <FallbackImage
          src="/banner.png"
          alt=""
          className="size-full scale-[1.03] object-cover object-center opacity-[0.34] brightness-75 contrast-[1.12] saturate-[1.15]"
        />
      </div>

      <div className="in d1 relative grid size-28 place-items-center">
        <div className="avatar-ring animate-spin-slow absolute inset-0 rounded-full" />
        <div className="display relative grid size-[104px] place-items-center overflow-hidden rounded-full border-4 border-bg bg-card text-[40px] text-brand">
          <FallbackImage
            src="/avatar1.png"
            alt="RICZI"
            className="absolute inset-0 z-[2] size-full object-cover"
            fallback={<span>R</span>}
          />
        </div>
      </div>

      <div className="in d2 relative inline-grid place-items-center px-6 py-1">
        <span className="title-bar absolute inset-x-0 bottom-1.5 h-[38%] bg-brand" />
        <h1 className="display relative m-0 text-[clamp(48px,10vw,80px)] leading-[0.95] tracking-[-0.02em]">
          RICZI
        </h1>
      </div>

      <p className="in d2 m-0 inline-flex items-center gap-2 text-sm text-soft">
        Wszystko co potrzebne w jednym miejscu.
      </p>

      <SocialLinks className="in d3" />
    </header>
  );
}
