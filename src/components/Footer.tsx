import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, UserPlus } from "lucide-react";
import { useLang } from "@/i18n";
import logoImg from "@/assets/TVK Logo.webp";

export function Footer({ compact = false }: { compact?: boolean }) {
  const { tr } = useLang();
  return (
    <footer className={compact ? "mt-6 border-t border-border bg-tvk-black text-white" : "mt-20 border-t border-border bg-tvk-black text-white"}>
      <div
        className={
          compact
            ? "mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-4 lg:px-8"
            : "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8"
        }
      >
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/15 bg-white shadow-md">
              <img src={logoImg} alt="TVK Logo" className="h-full w-full object-contain p-1.5" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg font-bold leading-tight text-white">{tr("mla.name")}</div>
              <div className="mt-0.5 text-sm font-medium text-white/75">{tr("mla.constituency")}</div>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{tr("footer.tagline")}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="https://tvk.family"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-tvk-red px-5 py-2 text-sm font-bold text-tvk-gold shadow-sm transition-colors hover:bg-tvk-red/90"
            >
              <UserPlus className="h-4 w-4 shrink-0 stroke-[2.5]" />
              {tr("cta.joinTvk")}
            </a>
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-tvk-red"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tvk-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-tvk-gold">{tr("nav.about")}</Link></li>
            <li><Link to="/complaints" className="hover:text-tvk-gold">{tr("nav.complaints")}</Link></li>
            <li><Link to="/schemes" className="hover:text-tvk-gold">{tr("nav.schemes")}</Link></li>
            <li><Link to="/development" className="hover:text-tvk-gold">{tr("nav.development")}</Link></li>
            <li><Link to="/news" className="hover:text-tvk-gold">{tr("nav.news")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tvk-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-tvk-red" /><span className="whitespace-pre-line">{tr("contact.address")}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-tvk-red" /><a href="tel:+910422" className="hover:text-tvk-gold">+91 422 000 0000</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-tvk-red" /><a href="mailto:office@tvk-cbenorth.in" className="hover:text-tvk-gold">office@tvk-cbenorth.in</a></li>
          </ul>
        </div>
      </div>
      <div className={compact ? "border-t border-white/10 py-3 text-center text-xs text-white/60" : "border-t border-white/10 py-5 text-center text-xs text-white/60"}>
        © {new Date().getFullYear()} {tr("mla.name")} · {tr("footer.rights")}
      </div>
    </footer>
  );
}
