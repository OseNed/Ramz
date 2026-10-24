const steps = [
  { title: "Register", body: "Add your AI systems, models, and agents, with owners and context." },
  { title: "Connect", body: "Link each system to regulatory requirements, risks, and controls." },
  { title: "Assess", body: "Evaluate readiness and surface gaps before deployment." },
  { title: "Act", body: "Turn findings into deployment decisions with clear ownership." },
];

export function HowItWorks() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="container center">
        <div className="eyebrow">HOW IT WORKS</div>
        <h2 id="how-title" className="h2" style={{ maxWidth: 720 }}>
          From a list of AI systems to evidence you can act on.
        </h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className="step-num">{String(index + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="how-close">
          Responsible AI principles, turned into practice across the deployment lifecycle.
        </p>
      </div>
    </section>
  );
}
