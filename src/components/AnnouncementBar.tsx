import { Megaphone } from "lucide-react";
import { useLang } from "@/i18n";

export function AnnouncementBar() {
  const { tr } = useLang();
  const items = [tr("ann.1"), tr("ann.2"), tr("ann.3")];
  return (
    <div className="overflow-hidden border-y border-tvk-red/30 bg-tvk-black text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
        <span className="flex items-center gap-2 rounded-full bg-tvk-red px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest">
          <Megaphone className="h-3 w-3" /> {tr("ann.label")}
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-sm text-white/90">
            {[...items, ...items].map((s, i) => (
              <span key={i}>• {s}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
