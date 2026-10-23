import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="bg-black pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-display-lg sm:text-display-xl text-balance text-white">
            AI Governance for the{" "}
            <span className="text-accent">Autonomous Era.</span>
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-on-dark-muted">
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

      <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20">
        <div className="overflow-hidden rounded-xl border border-hairline-dark bg-surface-elevated shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]">
          <Image
            src="/images/product-ai-systems.jpg"
            alt="The Ramz AI Systems inventory: a searchable list of an organization's AI systems, their lifecycle stage, and governance profile status."
            width={1600}
            height={1125}
            priority
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
