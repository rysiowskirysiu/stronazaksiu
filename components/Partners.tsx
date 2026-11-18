import { CopyCodeButton } from "@/components/CopyCodeButton";
import { FallbackImage } from "@/components/FallbackImage";
import { Icon } from "@/components/Icon";
import { RevealCard } from "@/components/RevealCard";
import { Section } from "@/components/Section";
import { partners, type Partner } from "@/lib/content";

export function Partners() {
  return (
    <Section id="partners-title" title="Kody i partnerzy" className="in d5">
      <div className="grid grid-cols-1 gap-4 min-[621px]:grid-cols-2 min-[941px]:grid-cols-3">
        {partners.map((p, i) => (
          <PartnerCard key={p.name} partner={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  return (
    <RevealCard
      as="article"
      index={index}
      className="group flex flex-col gap-4 border-t-[3px] border-t-brand px-[18px] pt-5 pb-[18px]"
    >
      <div className="showcase-bg cut flex items-center gap-3.5 p-3 transition-colors duration-350 group-hover:border-brand-light/45">
        <span className="cut display relative grid size-[52px] flex-[0_0_52px] place-items-center overflow-hidden border border-[#26304a] bg-card text-[22px] text-brand-light transition-[scale,rotate,border-color] duration-400 ease-smooth group-hover:scale-[1.12] group-hover:-rotate-4 group-hover:border-brand-light">
          <FallbackImage
            src={partner.logo}
            alt={partner.logoAlt}
            className="absolute inset-0 z-[2] size-full object-contain p-1.5"
            fallback={<span>{partner.logoFallback}</span>}
          />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center justify-between gap-1.5">
            <span className="inline-flex items-center gap-[5px] text-[10px] font-extrabold tracking-[0.09em] text-brand-light">
              <span className="dot" />
              {partner.category}
            </span>
            <span className="border border-[#2a385c] bg-brand/[0.14] px-1.5 py-px text-[10px] font-extrabold text-soft">
              {partner.badge}
            </span>
          </div>
          <span className="display truncate text-lg leading-[1.1]">{partner.name}</span>
        </div>
      </div>

      <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px] text-soft">
        {partner.perks.map((perk) => (
          <li
            key={perk}
            className="flex items-center gap-2.5 rounded border border-l-2 border-line border-l-brand bg-card-2/55 px-[11px] py-[9px]"
          >
            <Icon name="check" size={15} className="shrink-0 text-brand-light" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-[1fr_auto] gap-2 border-t border-dashed border-line-2 pt-3.5">
        {partner.code ? (
          <CopyCodeButton code={partner.code} />
        ) : (
          <span className="cut inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 border border-line-2 bg-ink px-[11px] text-[11px] font-extrabold tracking-[0.06em] text-brand-light">
            <span className="dot" />
            SKUP SKINÓW
          </span>
        )}
        <a
          href={partner.href}
          target="_blank"
          rel="noopener"
          className="cut group/cta inline-flex min-h-[42px] items-center gap-1.5 bg-brand px-[15px] text-xs font-extrabold tracking-[0.05em] text-white uppercase shadow-[0_4px_16px_rgba(31,77,255,0.3)] transition-[translate,background-color,box-shadow] duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-[#3a63ff] hover:shadow-[0_6px_22px_rgba(31,77,255,0.5)]"
        >
          {partner.ctaLabel}
          <Icon
            name="arrow"
            size={15}
            className="transition-transform duration-400 ease-smooth group-hover/cta:translate-x-[5px]"
          />
        </a>
      </div>
    </RevealCard>
  );
}
