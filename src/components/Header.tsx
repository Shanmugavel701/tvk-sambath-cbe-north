import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/TVK Logo.webp";

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
      <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-2 px-4 py-3 lg:gap-3 lg:px-6 xl:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border/60 bg-white shadow-sm sm:h-11 sm:w-11">
            <img src={logoImg} alt="TVK Logo" className="h-full w-full rounded-full object-cover" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="whitespace-nowrap font-display text-xs font-bold tracking-wide text-tvk-red sm:text-sm">
              {tr("brand.party")}
            </div>
            <div className="whitespace-nowrap text-[10px] font-semibold text-muted-foreground sm:text-xs">
              {tr("mla.name")} · {tr("mla.constituency")}
            </div>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "font-bold text-tvk-red" }}
              className="shrink-0 whitespace-nowrap rounded-md px-1.5 py-2 text-xs font-semibold text-foreground/90 transition-colors hover:text-tvk-red xl:px-2.5 xl:text-sm"
            >
              {tr(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:border-tvk-red hover:text-tvk-red"
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
              activeProps={{ className: "font-bold text-tvk-red" }}
              className="rounded-md px-3 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted"
            >
              {tr(l.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
