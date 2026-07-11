import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tighter">
          <div className="flex size-8 items-center justify-center rounded-sm bg-primary">
            <div className="size-4 bg-primary-foreground" />
          </div>
          <span>JENGAWEB</span>
        </Link>
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
      </div>
    </nav>
  );
}
