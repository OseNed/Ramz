const items = [
  {
    title: "Adoption is spreading",
    body: "AI systems and agents are appearing across teams, often before anyone has a full picture of what is in use.",
  },
  {
    title: "Everything keeps changing",
    body: "Models, tools, and behaviors change continuously, so a review done once goes stale quickly.",
  },
  {
    title: "Reviews are manual",
    body: "Spreadsheets and one-off assessments can't keep pace with the number of systems to govern.",
  },
];

export function Problem() {
  return (
    <section className="section section-dark problem" aria-labelledby="problem-title">
      <div className="container center">
        <div className="eyebrow eyebrow-dark">THE PROBLEM</div>
        <h2 id="problem-title" className="h2" style={{ maxWidth: 820 }}>
          AI adoption is moving faster than governance.
        </h2>
        <div className="problem-grid">
          {items.map((item) => (
            <div key={item.title} className="problem-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
