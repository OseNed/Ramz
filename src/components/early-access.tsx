import { RequestAccessForm } from "./request-access-form";

export function EarlyAccess() {
  return (
    <section id="early-access" className="section section-tint" aria-labelledby="ea-title">
      <div className="container ea-grid">
        <div>
          <h2 id="ea-title" className="h2 ea-title">
            Bring clarity to AI governance.
          </h2>
          <p className="ea-lead">Request early access to RAMZ and help shape what comes next.</p>
        </div>
        <RequestAccessForm />
      </div>
    </section>
  );
}
