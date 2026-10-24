const steps = [
  {
    title: "Discover",
    description: "Build a clear inventory of AI systems, models, agents, and their relationships.",
    points: ["AI system register", "Ownership and relationships"],
  },
  {
    title: "Govern",
    description: "Connect systems to requirements, risks, controls, and accountability.",
    points: ["Requirement mapping", "Risk and control links"],
  },
  {
    title: "Assess",
    description: "Evaluate governance readiness and identify gaps before deployment.",
    points: ["Assessments and evidence", "Readiness and gap findings"],
  },
];

// Rail nodes sit over the centre of each of the three cards.
const nodePositions = ["16.667%", "50%", "83.333%"];

export function Platform() {
  return (
    <section id="platform" className="section section-warm plat" aria-labelledby="platform-title">
      <div className="container center">
        <div className="eyebrow">PLATFORM</div>
        <h2 id="platform-title" className="h2" style={{ maxWidth: 780 }}>
          One connected platform, built around your AI systems.
        </h2>
        <p className="lead">
          RAMZ covers AI governance, regulatory compliance, and responsible AI in one place.
          Teams manage AI systems, connect regulatory requirements to governance activities,
          assess risks, and support accountability before deployment.
        </p>
        <div className="rail" aria-hidden="true">
          <div className="rail-track" />
          <div className="rail-line" />
          <div className="rail-dot" />
          {nodePositions.map((left) => (
            <div key={left} className="rail-node" style={{ left }} />
          ))}
        </div>
        <div className="plat-grid">
          {steps.map((step, index) => (
            <article key={step.title} className={`card plat-card g${index + 1}`}>
              <span className="plat-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <ul>
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
