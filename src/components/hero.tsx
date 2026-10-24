import { HeroNetwork } from "./hero-network";

export function Hero() {
  return (
    <section id="top" className="hero">
      <HeroNetwork />
      <div className="hero-fade" aria-hidden="true" />
      <div className="hero-inner">
        <div className="pill">
          <span className="pill-dot" />
          Enterprise AI governance platform
        </div>
        <h1 className="hero-title">
          From AI Governance to <span className="accent">Responsible AI.</span>
        </h1>
        <p className="hero-sub">
          Manage AI systems, navigate regulatory requirements, and turn responsible AI
          principles into practice, all in one connected platform.
        </p>
        <div className="hero-ctas">
          <a href="#early-access" className="btn btn-primary btn-lg">
            Request early access
          </a>
          <a href="#how" className="btn btn-secondary btn-lg">
            See how it works
          </a>
        </div>
        <p className="hero-frameworks">EU AI Act · NIST AI RMF · ISO/IEC 42001</p>
      </div>
    </section>
  );
}
