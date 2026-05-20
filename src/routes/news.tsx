import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Events · TVK MLA Coimbatore North" },
      { name: "description", content: "Latest news, rallies, welfare camps and press releases from V. Sampathkumar's office." },
    ],
  }),
});

const events = [
  { id: 1, type: "Welfare Camp", date: "Dec 7, 2026", place: "Ward 12 Community Hall", title: "Free Medical & Eye Camp", desc: "Specialists from city hospitals. Free medicines and screening." },
  { id: 2, type: "Public Meeting", date: "Dec 14, 2026", place: "Saravanampatti Grounds", title: "Townhall with MLA", desc: "Open Q&A with citizens on local issues and development plans." },
  { id: 3, type: "Press Release", date: "Nov 28, 2026", place: "MLA Office", title: "New Road Project Approved", desc: "₹2.4 crore approved for ring road resurfacing in 4 wards." },
  { id: 4, type: "Field Visit", date: "Nov 22, 2026", place: "Ganapathy", title: "Drainage Inspection", desc: "On-site review with PWD officials after citizen complaints." },
  { id: 5, type: "Youth Event", date: "Nov 15, 2026", place: "Tatabad Community Hall", title: "Skill Development Workshop", desc: "Free workshop on digital skills for college students." },
  { id: 6, type: "Cultural", date: "Nov 1, 2026", place: "Constituency-wide", title: "Tamil Nadu Day Celebrations", desc: "Cultural programs across all wards celebrating Tamil heritage." },
];

const typeColors: Record<string, string> = {
  "Welfare Camp": "bg-green-500/15 text-green-700",
  "Public Meeting": "bg-tvk-red/15 text-tvk-red",
  "Press Release": "bg-blue-500/15 text-blue-700",
  "Field Visit": "bg-amber-500/15 text-amber-700",
  "Youth Event": "bg-purple-500/15 text-purple-700",
  "Cultural": "bg-tvk-gold/25 text-tvk-black",
};

function NewsPage() {
  const { tr } = useLang();
  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold">
            {tr("nav.news")}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl">{tr("news.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{tr("news.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative aspect-[16/10] bg-gradient-hero">
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${typeColors[e.type] || ""}`}>{e.type}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.date}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.place}</span>
                </div>
                <h3 className="mt-3 font-display text-xl">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{e.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tvk-red">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
