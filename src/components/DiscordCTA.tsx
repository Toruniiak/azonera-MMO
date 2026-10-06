import { DISCORD_URL, FACEBOOK_URL } from "@/config/site";
import { asset } from "@/lib/format";
import { Reveal, IconDiscord, IconFacebook } from "@/components/ui";

export default function DiscordCTA() {
  return (
    <section aria-label="Dołącz do Discorda" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={asset("images/media/morvenhal-dzien.jpg")}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-abyss/88" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 80% at 20% 50%, rgba(216,162,74,0.12), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Reveal>
            <div>
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
                <span aria-hidden className="h-px w-8 bg-ember/60" />
                Społeczność
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase leading-tight tracking-[0.04em] text-bone sm:text-4xl">
                Centrum Azonery działa{" "}
                <span className="text-emberbright">na Discordzie</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash">
                Ogłoszenia buildów, kanały dla testerów, feedback i kontakt z
                zespołem. Wszystko, co ważne, dzieje się tam jako pierwsze.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="w-full max-w-sm">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cut w-full !px-6 !py-4 text-[13px]"
              >
                <IconDiscord className="h-5 w-5" />
                Dołącz do Discorda
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost cut mt-3 w-full !px-6 !py-3.5 text-[13px]"
              >
                <IconFacebook className="h-5 w-5" />
                Obserwuj na Facebooku
              </a>
              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-dim">
                Testy · Aktualizacje · Zrzuty z gry
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
