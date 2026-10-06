import Link from "next/link";
import { Sigil, IconArrowRight } from "@/components/ui";
import { asset } from "@/lib/format";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={asset("images/media/puszcza.jpg")}
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss/80 to-abyss" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 45%, rgba(216,162,74,0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="px-6 py-24 text-center">
        <Sigil className="mx-auto h-14 w-14 opacity-80" />
        <p className="mt-8 font-display text-[clamp(4.5rem,18vw,9rem)] font-black leading-none tracking-[0.08em] text-line">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.12em] text-bone sm:text-3xl">
          Zabłądziłeś w świecie Azonery
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ash">
          Ta lokacja nie istnieje w obecnym buildzie. Wróć na główną ścieżkę —
          reszta świata czeka.
        </p>
        <Link href="/" className="btn btn-primary cut mt-9">
          Wróć do gry
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
