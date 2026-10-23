import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#why-ramz", label: "Why Ramz" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hero-border bg-hero/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link href="#top" className="text-ink" aria-label="Ramz home">
          <Logo className="text-ink" />
        </Link>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-body-md text-muted transition-colors duration-150 ease-ramz hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#request-access"
          className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-white transition-opacity duration-150 ease-ramz hover:opacity-90"
        >
          Request Access
        </Link>
      </nav>
    </header>
  );
}
