import { Logo } from "./logo";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#how", label: "How it works" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#who", label: "Who it's for" },
];

export function Nav() {
  return (
    <header className="site-header">
      <nav aria-label="Primary" className="nav">
        <a href="#top" className="brand" aria-label="RAMZ home">
          <Logo />
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#early-access" className="btn btn-primary btn-sm">
          Request early access
        </a>
      </nav>
    </header>
  );
}
