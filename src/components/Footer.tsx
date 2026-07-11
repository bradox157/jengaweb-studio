import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <Link to="/" className="font-display text-xl font-bold tracking-tighter">
          JENGAWEB
        </Link>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            Twitter
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            Dribbble
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            Instagram
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} JengaWeb Design Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
