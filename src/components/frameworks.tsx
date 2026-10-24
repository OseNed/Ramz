const frameworks = [
  {
    name: "EU AI Act",
    body: "Regulatory requirements and risk-based obligations, organized against your AI systems.",
  },
  {
    name: "NIST AI RMF",
    body: "Risks and controls informed by the NIST AI RMF, connected to the systems they apply to.",
  },
  {
    name: "ISO/IEC 42001",
    body: "The AI system inventory, ownership, and accountability an AI management system builds on.",
  },
];

export function Frameworks() {
  return (
    <section id="frameworks" className="section frameworks" aria-labelledby="frameworks-title">
      <div className="container center">
        <div className="eyebrow">FRAMEWORKS</div>
        <h2 id="frameworks-title" className="h2 h2-sm" style={{ maxWidth: 720 }}>
          Connect regulatory requirements to governance activities.
        </h2>
        <div className="fw-grid">
          {frameworks.map((fw) => (
            <div key={fw.name} className="fw-item">
              <h3>{fw.name}</h3>
              <p>{fw.body}</p>
            </div>
          ))}
        </div>
        <p className="fw-note">
          RAMZ helps organizations organize their AI governance work around these frameworks. Using RAMZ does not
          by itself make an organization compliant with, or certified to, any regulation or
          standard.
        </p>
      </div>
    </section>
  );
}
