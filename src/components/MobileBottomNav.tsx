import { Link } from "@tanstack/react-router";
import { Home, FileText, Gift, Calendar, Phone } from "lucide-react";
import { useLang } from "@/i18n";

const items = [
  { to: "/", icon: Home, key: "nav.home" },
  { to: "/complaints", icon: FileText, key: "qa.complaint" },
  { to: "/schemes", icon: Gift, key: "nav.schemes" },
  { to: "/news", icon: Calendar, key: "nav.news" },
  { to: "/contact", icon: Phone, key: "nav.contact" },
] as const;

export function MobileBottomNav() {
  const { tr } = useLang();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-5">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              activeOptions={{ exact: it.to === "/" }}
              activeProps={{ className: "text-tvk-red" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium text-muted-foreground"
            >
              <Icon className="h-5 w-5" />
              <span className="truncate px-1">{tr(it.key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
