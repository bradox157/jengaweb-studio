import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter">
          <div className="flex size-8 items-center justify-center rounded-sm bg-primary">
            <div className="size-4 bg-primary-foreground" />
          </div>
          <span>JENGAWEB</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/work" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Work
          </Link>
          <Link to="/services" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Services
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Contact
          </Link>
          <a
            href="mailto:hello@jengaweb.design"
            className="rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-all hover:bg-primary/90"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-b border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/work" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Work
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Services
            </Link>
            <Link to="/" hash="contact" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Contact
            </Link>
            <a
              href="mailto:hello@jengaweb.design"
              className="rounded-full bg-primary px-5 py-2.5 text-center text-primary-foreground transition-all hover:bg-primary/90"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
