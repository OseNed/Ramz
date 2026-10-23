const chain = [
  {
    label: "AI assets",
    title: "What your organization builds or uses",
    description: "Systems, models, and agents in production, testing, or development.",
  },
  {
    label: "Governance obligations",
    title: "What applies, and where",
    description:
      "Requirements drawn from frameworks such as the EU AI Act, mapped to the assets they govern.",
  },
  {
    label: "Organizational accountability",
    title: "Who owns the outcome",
    description:
      "Risks, controls, and assessments attributed to the people responsible for them.",
  },
];

export function BuiltForEra() {
  return (
    <section id="why-ramz" className="border-t border-hairline bg-canvas-off py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-start lg:gap-16">
          <div>
            <h2 className="text-heading-lg text-balance text-ink">
              From AI adoption to accountable governance.
            </h2>
            <p className="mt-5 max-w-md text-body-lg text-muted">
              As AI adoption accelerates and regulatory expectations evolve,
              organizations need a structured way to understand and govern their
              AI landscape.
            </p>
            <p className="mt-4 max-w-md text-body-md text-muted">
              Ramz maps AI systems and agents to the obligations that apply to
              them &mdash; including requirements under the EU AI Act &mdash; so
              governance teams can see what applies, where, and why. Using Ramz
              does not by itself make an organization compliant with the EU AI
              Act or any other regulation.
            </p>
          </div>

          <ol className="relative">
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent/50 via-hairline to-hairline"
            />
            {chain.map((item) => (
              <li key={item.label} className="relative pb-10 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-canvas-off"
                />
                <div className="text-label text-stone uppercase">{item.label}</div>
                <h3 className="mt-1.5 text-heading-md text-ink">{item.title}</h3>
                <p className="mt-1.5 text-body-md text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
