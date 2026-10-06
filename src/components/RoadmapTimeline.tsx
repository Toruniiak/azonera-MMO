import { ROADMAP, type RoadmapStatus } from "@/content/roadmap";
import { Reveal, SectionHeading, StatusPill, IconCheck } from "@/components/ui";

const DOT_STYLES: Record<RoadmapStatus, string> = {
  COMPLETED: "border-ember bg-ember",
  TESTING: "border-moss bg-moss status-dot",
  "IN DEVELOPMENT": "border-ash bg-abyss",
  PLANNED: "border-dim bg-abyss",
};

export default function RoadmapTimeline() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Roadmap"
          title="Droga Azonery"
          description="Fazy produkcji — od fundamentów po publiczne testy. Dat nie podajemy, dopóki nie jesteśmy pewni, że je dotrzymamy."
        />
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-12 space-y-0 border-l border-line pl-6 sm:pl-8">
          {ROADMAP.map((phase, i) => (
            <li key={phase.phase} className="relative pb-12 last:pb-0">
              {/* punkt na osi */}
              <span
                aria-hidden
                className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:-left-[43px] ${DOT_STYLES[phase.status]}`}
              />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-dim">
                  {phase.phase}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-[0.05em] text-bone">
                  {phase.title}
                </h3>
                <StatusPill status={phase.status} />
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ash">
                {phase.description}
              </p>
              <ul className="mt-4 flex flex-col gap-2 sm:max-w-md">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-bone/80"
                  >
                    <span
                      aria-hidden
                      className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                        phase.status === "COMPLETED"
                          ? "border-ember/60 bg-ember/15 text-ember"
                          : "border-line text-dim"
                      }`}
                    >
                      {phase.status === "COMPLETED" ? (
                        <IconCheck className="h-2.5 w-2.5" />
                      ) : (
                        <span className="h-1 w-1 rounded-full bg-current" />
                      )}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {i < ROADMAP.length - 1 && null}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-dim">
            Legenda:
          </span>
          <StatusPill status="COMPLETED" />
          <StatusPill status="IN DEVELOPMENT" />
          <StatusPill status="TESTING" />
          <StatusPill status="PLANNED" />
        </div>
      </Reveal>
    </div>
  );
}
