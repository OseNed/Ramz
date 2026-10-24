const audiences = [
  {
    title: "AI teams",
    body: "Know what governance expects of a system before and after you ship it.",
    points: ["Register systems and agents", "See applicable requirements", "Attach evidence once"],
  },
  {
    title: "Risk and compliance teams",
    body: "Replace scattered reviews with connected risks, controls, and assessments.",
    points: ["Map obligations to systems", "Track controls and findings", "Keep an audit-ready record"],
  },
  {
    title: "Enterprise leaders",
    body: "Understand where AI is used and who owns the outcome.",
    points: ["Organization-wide visibility", "Clear accountability", "More confident deployment decisions"],
  },
];

export function Audience() {
  return (
    <section id="who" className="section section-warm" aria-labelledby="who-title">
      <div className="container center">
        <div className="eyebrow">WHO IT&apos;S FOR</div>
        <h2 id="who-title" className="h2" style={{ maxWidth: 760 }}>
          One shared view for the people accountable for AI.
        </h2>
        <div className="who-grid">
          {audiences.map((a) => (
            <article key={a.title} className="card who-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <ul>
                {a.points.map((point) => (
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
