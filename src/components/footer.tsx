import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand brand-footer">
            <Logo color="#fff" />
          </div>
          <p className="footer-tag">AI governance for connected, accountable AI.</p>
        </div>
        <div className="footer-meta">
          <a href="mailto:hello@getramz.com">hello@getramz.com</a>
          <p>&copy; 2026 RAMZ</p>
        </div>
      </div>
    </footer>
  );
}
