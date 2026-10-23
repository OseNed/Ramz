import { Shuffle, RefreshCw, ClipboardList } from "lucide-react";

const challenges = [
  {
    icon: Shuffle,
    title: "Rapid adoption",
    description: "AI systems and agents are spreading across organizations.",
  },
  {
    icon: RefreshCw,
    title: "Constant evolution",
    description: "Models, tools, and behaviors keep changing.",
  },
  {
    icon: ClipboardList,
    title: "Manual governance",
    description: "Traditional reviews and assessments struggle to keep pace.",
  },
];

export function Challenge() {
  return (
    <section className="border-t border-hairline bg-canvas-off py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-heading-lg text-balance text-ink">
          AI is scaling. Governance needs to keep up.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {challenges.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon className="h-5 w-5 text-stone" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 text-heading-md text-ink">{title}</h3>
              <p className="mt-2 text-body-md text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
