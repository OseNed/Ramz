import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="text-ink" />
          <p className="mt-2 text-sm text-muted">AI Governance for the Autonomous Era.</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <a href="mailto:hello@getramz.com" className="underline-offset-4 hover:underline">
            hello@getramz.com
          </a>
          <p className="mt-1 text-stone">&copy; 2026 Ramz</p>
        </div>
      </div>
    </footer>
  );
}
