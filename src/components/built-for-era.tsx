import Image from "next/image";

export function BuiltForEra() {
  return (
    <section id="why-ramz" className="border-t border-hairline bg-canvas-off py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-heading-lg text-balance text-ink">
              From AI adoption to accountable governance.
            </h2>
            <p className="mt-5 text-body-lg text-muted">
              As AI adoption accelerates and regulatory expectations evolve,
              organizations need a structured way to understand and govern their
              AI landscape.
            </p>
            <p className="mt-4 text-body-md text-muted">
              Ramz maps AI systems and agents to the obligations that apply to
              them &mdash; including requirements under the EU AI Act &mdash; so
              governance teams can see what applies, where, and why. Using Ramz
              does not by itself make an organization compliant with the EU AI
              Act or any other regulation.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-hairline bg-canvas shadow-[0_30px_60px_-30px_rgb(0_0_0/0.15)]">
            <Image
              src="/images/product-eu-ai-act.jpg"
              alt="The Ramz policy requirements view for the EU Artificial Intelligence Act, showing obligations for high-risk AI systems grouped by section."
              width={1600}
              height={1125}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
