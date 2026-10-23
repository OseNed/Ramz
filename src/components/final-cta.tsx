import { RequestAccessForm } from "./request-access-form";

export function FinalCta() {
  return (
    <section
      id="request-access"
      className="border-t border-hairline bg-canvas-off py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 className="text-heading-lg text-balance text-ink">
            Ready to bring clarity to AI governance?
          </h2>
          <p className="mt-5 max-w-md text-body-lg text-muted">
            Explore how Ramz can help your organization build a more connected
            approach to AI governance.
          </p>
        </div>
        <RequestAccessForm />
      </div>
    </section>
  );
}
