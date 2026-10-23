import Link from "next/link";
import { GovernanceGraph, GovernanceGraphMobile } from "./governance-graph";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-hero pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-display-lg sm:text-display-xl text-balance text-ink">
            AI Governance for the{" "}
            <span className="text-accent">Autonomous Era.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-muted">
            One connected platform to discover, govern, and assess AI systems
            and agents.
          </p>
          <div className="mt-9">
            <Link
              href="#request-access"
              className="inline-flex h-11 items-center rounded-md bg-accent px-6 text-sm font-medium text-white transition-opacity duration-150 ease-ramz hover:opacity-90"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6 sm:mt-24">
        <GovernanceGraph />
        <GovernanceGraphMobile />
      </div>
    </section>
  );
}
