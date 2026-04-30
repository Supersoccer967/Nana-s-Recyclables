import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/treasures", label: "Treasures" },
  { to: "/visit", label: "Visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-soft">
            N
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Nana's <span className="text-terracotta">Recyclables</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/75 hover:text-terracotta transition-colors"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:6035424391"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition shadow-soft"
          >
            <Phone className="h-4 w-4" /> (603) 542-4391
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 px-5 py-4 flex flex-col gap-3 bg-background">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-1"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:6035424391"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold w-fit"
          >
            <Phone className="h-4 w-4" /> Call us
          </a>
        </div>
      )}
    </header>
  );
}
