import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/i18n";
import logoImg from "@/assets/TVK Logo.webp";

export function Footer() {
  const { tr } = useLang();
  return (
    <footer className="mt-20 border-t border-border bg-tvk-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-white overflow-hidden shadow-sm">
              <img src={logoImg} alt="TVK Logo" className="h-full w-full object-contain p-1" />
            </div>
            <div>
              <div className="font-display text-lg">{tr("mla.name")}</div>
              <div className="text-sm text-white/70">{tr("mla.constituency")}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">{tr("footer.tagline")}</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-tvk-red" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
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
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {tr("mla.name")} · {tr("footer.rights")}
      </div>
    </footer>
  );
}
