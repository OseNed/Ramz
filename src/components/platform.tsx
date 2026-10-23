import { Compass, Link2, ClipboardCheck } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "Build visibility into the AI systems, models, and agents your organization uses.",
  },
  {
    icon: Link2,
    title: "Govern",
    description: "Connect AI assets to applicable requirements, risks, and controls.",
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Bring assessments, evidence, and findings into one connected governance workflow.",
  },
];

const tiers = [
  {
    label: "AI assets",
    items: ["AI Systems", "Models", "Agents"],
    tone: "cat-systems" as const,
  },
  {
    label: "Governance context",
    items: ["Requirements", "Risks", "Controls"],
    tone: "cat-requirements" as const,
  },
  {
    label: "Actionable outputs",
    items: ["Assessments", "Evidence", "Findings"],
    tone: "cat-evidence" as const,
  },
];

const toneClasses: Record<(typeof tiers)[number]["tone"], string> = {
  "cat-systems": "border-[#DBDDE1] bg-[#EEF0F3] text-[#5D6577]",
  "cat-requirements": "border-[#E0DCE7] bg-[#F1EDF5] text-[#745E91]",
  "cat-evidence": "border-[#E7E1DE] bg-[#F5EEEB] text-[#7D635A]",
};

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

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-center lg:gap-12">
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <li key={title}>
                <div className="flex items-center gap-2 text-label text-stone uppercase">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <Icon className="mt-3 h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-3 text-heading-md text-ink">{title}</h3>
                <p className="mt-2 text-body-md text-muted">{description}</p>
              </li>
            ))}
          </ol>

          <div
            aria-hidden="true"
            className="rounded-xl border border-hairline bg-canvas-off p-6 sm:p-8"
          >
            <div className="flex flex-col items-stretch">
              {tiers.map((tier, index) => (
                <div key={tier.label}>
                  <div className="text-center text-label uppercase text-stone">
                    {tier.label}
                  </div>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {tier.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-md border px-3 py-1.5 text-sm font-medium ${toneClasses[tier.tone]}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {index < tiers.length - 1 && (
                    <div className="mx-auto my-5 h-6 w-px bg-hairline" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
