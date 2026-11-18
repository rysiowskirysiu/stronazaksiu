import { FallbackImage } from "@/components/FallbackImage";
import { Icon } from "@/components/Icon";
import { RevealCard } from "@/components/RevealCard";
import { Section } from "@/components/Section";
import { Pill, Tag } from "@/components/ui";
import { giveaways, type Giveaway } from "@/lib/content";

export function Giveaways() {
  return (
    <Section id="gw-title" title="Giveawaye" className="in d4">
      <div className="flex flex-col gap-3.5">
        {giveaways.map((gw, i) => (
          <GiveawayCard key={gw.tag} giveaway={gw} index={i} />
        ))}
      </div>
    </Section>
  );
}

function GiveawayCard({ giveaway, index }: { giveaway: Giveaway; index: number }) {
  const hoverLift =
    "transition-transform duration-450 ease-smooth group-hover:-translate-y-0.5 group-hover:scale-[1.12] group-hover:-rotate-5";

  return (
    <RevealCard
      as="a"
      index={index}
      href={giveaway.href}
      target="_blank"
      rel="noopener"
      className="card--gw group grid grid-cols-[108px_1fr] items-center gap-3.5 border-l-4 border-l-brand p-3.5 min-[721px]:grid-cols-[136px_1fr_auto] min-[721px]:gap-5 min-[721px]:py-4 min-[721px]:pr-[22px] min-[721px]:pl-4"
    >
      <div className="showcase-bg cut grid h-[82px] w-[108px] place-items-center min-[721px]:h-[92px] min-[721px]:w-[136px]">
        <FallbackImage
          src={giveaway.image}
          alt={giveaway.imageAlt}
          className={`relative z-[2] h-[86%] w-[90%] object-contain [filter:drop-shadow(0_8px_12px_rgba(0,0,0,0.85))_drop-shadow(0_0_14px_rgba(31,77,255,0.4))] ${hoverLift}`}
          fallback={
            <Icon
              name={giveaway.fallbackIcon ?? "knife"}
              className={`absolute size-[52px] text-brand-light opacity-60 drop-shadow-[0_0_12px_rgba(31,77,255,0.55)] ${hoverLift}`}
            />
          }
        />
      </div>

      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{giveaway.tag}</Tag>
          <Pill>
            <span className="dot" />
            {giveaway.pill}
          </Pill>
        </div>
        <span className="display text-[clamp(17px,2.2vw,20px)]">{giveaway.prize}</span>
        {giveaway.requirements.map((req) => (
          <span key={req} className="inline-flex items-center gap-[7px] text-[13px] text-soft">
            <Icon name="check" size={15} className="shrink-0 text-brand-light" />
            {req}
          </span>
        ))}
      </div>

      <div className="col-span-full flex flex-row items-center justify-between gap-2.5 border-t border-dashed border-line-2 pt-2.5 min-[721px]:col-span-1 min-[721px]:flex-col min-[721px]:items-end min-[721px]:border-t-0 min-[721px]:pt-0">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted">
          <Icon name="cal" size={14} className="text-brand-light" />
          Losowanie: {giveaway.date}
        </span>
        <span className="cut inline-flex min-h-[38px] items-center gap-2 border border-brand bg-navy px-4 text-xs font-extrabold tracking-[0.06em] uppercase transition-colors duration-250 group-hover:bg-brand">
          {giveaway.ctaLabel ?? "Weź udział"}
          <Icon
            name="arrow"
            size={15}
            className="transition-transform duration-400 ease-smooth group-hover:translate-x-[5px]"
          />
        </span>
      </div>
    </RevealCard>
  );
}
