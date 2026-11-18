import { Icon } from "@/components/Icon";
import { Pill } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-3.5 rounded-md border border-line-2 bg-[radial-gradient(circle_at_50%_0%,rgba(31,77,255,0.12),#08090f_70%)] px-6 py-[26px] text-center text-[13px] text-muted">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Pill>
          <Icon name="info" size={14} />
          Tylko dla osób 18+ · Graj odpowiedzialnie
        </Pill>
        <Pill>
          <Icon name="shield" size={14} />
          Ochrona Anty-Scam
        </Pill>
      </div>
      <p className="m-0 max-w-[700px] leading-[1.6]">
        Piszę tylko z konta playboyriczi. Nigdy nie proszę o hasło, 2FA,
        logowanie przez link ani o skiny do weryfikacji.
      </p>
      <p className="display m-0 text-xs tracking-[0.12em] text-[#4a5678]">
        RICZI © 2026
      </p>
    </footer>
  );
}
