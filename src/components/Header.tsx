import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border border-border bg-background/70 px-6 shadow-lg backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tighter">
          <div className="flex size-7 items-center justify-center rounded-sm bg-primary">
            <div className="size-3.5 bg-primary-foreground" />
          </div>
          <span>JENGAWEB</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <Link to="/work" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Projects
          </Link>
          <Link to="/pricing" className="transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
            Pricing
          </Link>
          <a
            href="tel:+254700206558"
            aria-label="Call us"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/254700206558?text=Hi%20JengaWeb%2C%20I%27d%20like%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-all hover:bg-primary/90"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
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
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-background/80 px-6 py-4 shadow-lg backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/work" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-primary">
              Pricing
            </Link>
            <a
              href="https://wa.me/254700206558?text=Hi%20JengaWeb%2C%20I%27d%20like%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-center text-primary-foreground transition-all hover:bg-primary/90"
            >
              Start a Project
            </a>
            <a href="tel:+254700206558" className="text-center text-sm text-muted-foreground hover:text-foreground">
              or call us: 0700 206 558
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
