import { Icon } from "@/components/Icon";
import { socials } from "@/lib/content";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav
      className={`mt-1 flex flex-wrap justify-center gap-3 ${className}`}
      aria-label="Social media"
    >
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          aria-label={s.name}
          target="_blank"
          rel="noopener"
          className="soc cut group relative grid size-[54px] place-items-center"
          style={s.color ? ({ "--hover-c": s.color } as React.CSSProperties) : undefined}
        >
          <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-10 -translate-x-1/2 translate-y-1.5 rounded-[3px] border border-(--c) bg-card-2 px-2 py-[3px] text-[10px] font-extrabold tracking-[0.08em] text-white uppercase opacity-0 transition-[opacity,translate] duration-250 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
            {s.name}
          </span>
          <Icon
            name={s.icon}
            className="relative z-[2] size-[22px] transition-[scale,filter] duration-350 ease-smooth group-hover:scale-[1.14]"
          />
        </a>
      ))}
    </nav>
  );
}
