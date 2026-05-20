import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/constituency", key: "nav.constituency" },
  { to: "/complaints", key: "nav.complaints" },
  { to: "/schemes", key: "nav.schemes" },
  { to: "/development", key: "nav.development" },
  { to: "/news", key: "nav.news" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-tvk-black text-tvk-gold">
            <span className="font-display text-lg">TVK</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm tracking-wide text-tvk-red">{tr("brand.party")}</div>
            <div className="text-xs text-muted-foreground">{tr("mla.name")} · {tr("mla.constituency")}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-tvk-red" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-tvk-red"
            >
              {tr(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:border-tvk-red hover:text-tvk-red"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "தமிழ்" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-tvk-red" }}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
            >
              {tr(l.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
