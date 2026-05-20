import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Hammer, IndianRupee, Calendar } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/development")({
  component: DevPage,
  head: () => ({
    meta: [
      { title: "Development Works · TVK MLA Coimbatore North" },
      { name: "description", content: "Transparent updates on roads, drainage, water, schools and welfare infrastructure across Coimbatore North." },
    ],
  }),
});

const projects = [
  { id: 1, title: "Saibaba Colony Road Resurfacing", cat: "Roads", status: "Completed", progress: 100, budget: "₹1.8 Cr", year: 2025 },
  { id: 2, title: "Saravanampatti Drinking Water Phase-2", cat: "Water", status: "In Progress", progress: 65, budget: "₹4.2 Cr", year: 2025 },
  { id: 3, title: "Smart Classrooms in 8 Govt Schools", cat: "Education", status: "Completed", progress: 100, budget: "₹95 L", year: 2024 },
  { id: 4, title: "Storm Water Drains – Peelamedu", cat: "Drainage", status: "In Progress", progress: 40, budget: "₹2.3 Cr", year: 2025 },
  { id: 5, title: "Solar Street Lights – 1,200 units", cat: "Infrastructure", status: "Completed", progress: 100, budget: "₹1.1 Cr", year: 2024 },
  { id: 6, title: "Women Welfare Center – Ganapathy", cat: "Welfare", status: "Planned", progress: 10, budget: "₹70 L", year: 2026 },
];

const statusStyle = {
  "Completed": "bg-green-500/15 text-green-700",
  "In Progress": "bg-tvk-gold/25 text-tvk-black",
  "Planned": "bg-blue-500/15 text-blue-700",
} as const;

function DevPage() {
  const { tr } = useLang();
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", "Roads", "Water", "Education", "Drainage", "Infrastructure", "Welfare"];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold">
            {tr("nav.development")}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl">{tr("dev.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{tr("dev.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${filter === c ? "bg-tvk-red text-white" : "bg-card text-foreground border border-border hover:border-tvk-red"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative aspect-[16/9] bg-gradient-hero">
                <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${statusStyle[p.status as keyof typeof statusStyle]}`}>{p.status}</span>
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-tvk-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-tvk-gold backdrop-blur">
                  <Hammer className="h-3 w-3" /> {p.cat}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><IndianRupee className="h-3 w-3" /> {p.budget}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.year}</span>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{p.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-to-r from-tvk-red to-tvk-gold" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs">
                  {p.status === "Completed" ? <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> : <Clock className="h-3.5 w-3.5 text-tvk-red" />}
                  <span className="text-muted-foreground">{p.status === "Completed" ? "Delivered to citizens" : "Active site work"}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
