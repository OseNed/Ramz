import { Compass, Link2, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "Build visibility into the AI systems, models, and agents your organization uses.",
    flowTo: "AI inventory",
  },
  {
    icon: Link2,
    title: "Govern",
    description: "Connect AI assets to applicable requirements, risks, and controls.",
    flowTo: "Governance context",
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Bring assessments, evidence, and findings into one connected governance workflow.",
    flowTo: null,
  },
];

export function Platform() {
  return (
    <section id="platform" className="border-t border-hairline py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-heading-lg text-balance text-ink">
            Everything connected. Governance made actionable.
          </h2>
          <p className="mt-5 text-body-lg text-muted">
            Ramz connects AI systems, models, and agents with requirements, risks, and
            controls to support continuous governance and actionable assessments.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connecting line: a single continuous path through all three
              stages, so the sequence reads as one system, not three
              separate cards. */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16.5%] left-[16.5%] hidden h-px bg-gradient-to-r from-hairline via-accent/40 to-hairline sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-hairline via-accent/40 to-hairline sm:hidden"
          />

          <ol className="relative flex flex-col gap-10 sm:grid sm:grid-cols-3 sm:gap-8">
            {steps.map(({ icon: Icon, title, description, flowTo }, index) => (
              <li key={title} className="relative flex gap-5 sm:flex-col sm:gap-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-hairline bg-canvas">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="sm:mt-5">
                  <div className="text-label text-stone uppercase">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 text-heading-md text-ink">{title}</h3>
                  <p className="mt-2 text-body-md text-muted">{description}</p>
                  {flowTo && (
                    <p className="mt-3 hidden text-xs font-medium tracking-[0.01em] text-accent-deep lg:block">
                      → {flowTo}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
