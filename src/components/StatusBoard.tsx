import { DEV_STATUS } from "@/content/roadmap";
import { Reveal, SectionHeading, StatusPill } from "@/components/ui";

export default function StatusBoard() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Azonera Development Status"
          title="Status produkcji"
          description="Żadnych lukrowanych statusów. Widzisz dokładnie, co jest testowane, co w produkcji, a co dopiero planowane."
        />
      </Reveal>

      <Reveal delay={120}>
        <div
          role="list"
          aria-label="Status poszczególnych obszarów produkcji"
          className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {DEV_STATUS.map((area) => (
            <div
              key={area.area}
              role="listitem"
              className="group flex items-center justify-between gap-4 bg-coal p-5 transition-colors duration-300 hover:bg-steel/80"
            >
              <div className="min-w-0">
                <p className="font-display text-base font-bold uppercase tracking-[0.12em] text-bone">
                  {area.area}
                </p>
                {area.note && (
                  <p className="mt-1 truncate text-xs text-dim">{area.note}</p>
                )}
              </div>
              <StatusPill status={area.status} className="shrink-0" />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
