import type { Metadata } from "next";
import { TestHero, HowToTest, FeedbackForm } from "@/components/TestCenter";
import { Reveal, Ornament } from "@/components/ui";

export const metadata: Metadata = {
  title: "Test Center",
  description:
    "Azonera MMO Test Center — gra wchodzi w fazę testów. Jak przetestować build, jak zgłaszać błędy i dołączyć do społeczności na Discordzie.",
};

export default function TestsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-coal/40">
        <div
          className="absolute inset-0 -z-10 opacity-[0.16]"
          aria-hidden
          style={{
            background:
              "radial-gradient(50% 60% at 80% 20%, rgba(216,162,74,0.5), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <TestHero />
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:space-y-24 sm:px-6 sm:py-20">
        <section aria-labelledby="howto">
          <HowToTest />
        </section>

        <Ornament className="max-w-4xl mx-auto" />

        <section aria-labelledby="feedback">
          <Reveal>
            <FeedbackForm />
          </Reveal>
        </section>
      </div>
    </>
  );
}
