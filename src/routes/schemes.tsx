import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, GraduationCap, Tractor, HeartPulse, Briefcase, Baby, Search, ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/schemes")({
  component: SchemesPage,
  head: () => ({
    meta: [
      { title: "Government Welfare Schemes · TVK MLA Coimbatore North" },
      { name: "description", content: "Explore Tamil Nadu & Central government schemes — eligibility, documents, and how to apply." },
    ],
  }),
});

const schemes = [
  { id: 1, icon: Users, cat: "Women", title: "Magalir Urimai Thogai", desc: "₹1,000/month to eligible women heads of family.", eligibility: "Tamil Nadu resident women, age 21+", link: "https://kmut.tn.gov.in" },
  { id: 2, icon: GraduationCap, cat: "Student", title: "Tamil Pudhalvan", desc: "₹1,000/month to male students from govt schools pursuing higher studies.", eligibility: "Studied class 6-12 in TN govt schools", link: "#" },
  { id: 3, icon: Tractor, cat: "Farmer", title: "PM-Kisan Samman Nidhi", desc: "₹6,000/year direct benefit to small farmers.", eligibility: "Landholding farmer families", link: "https://pmkisan.gov.in" },
  { id: 4, icon: HeartPulse, cat: "Health", title: "CMCHIS Health Insurance", desc: "Up to ₹5 lakh family health coverage in TN.", eligibility: "Annual income below ₹1.2 lakh", link: "https://www.cmchistn.com" },
  { id: 5, icon: Briefcase, cat: "Employment", title: "MGNREGA", desc: "Guaranteed 100 days of rural employment.", eligibility: "Adult member of rural household", link: "https://nrega.nic.in" },
  { id: 6, icon: Baby, cat: "Child", title: "Anganwadi Nutrition", desc: "Free nutrition for children under 6 & pregnant mothers.", eligibility: "Pregnant women, children under 6", link: "#" },
];

function SchemesPage() {
  const { tr } = useLang();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(schemes.map((s) => s.cat)))];
  const filtered = schemes.filter((s) =>
    (cat === "All" || s.cat === cat) &&
    (s.title.toLowerCase().includes(q.toLowerCase()) || s.desc.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold">
            {tr("nav.schemes")}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl">{tr("sch.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{tr("sch.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search schemes..." className="w-full rounded-lg border border-input bg-card pl-10 pr-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${cat === c ? "bg-tvk-red text-white" : "bg-card text-foreground border border-border hover:border-tvk-red"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.id} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-tvk-red hover:shadow-elegant">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-tvk-red/10 text-tvk-red">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-tvk-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tvk-black">{s.cat}</span>
                </div>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 rounded-lg bg-muted p-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-tvk-red">{tr("sch.eligibility")}</div>
                  <div className="mt-1 text-sm">{s.eligibility}</div>
                </div>
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-tvk-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-tvk-red">
                  {tr("sch.apply")} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">No schemes match your search.</div>
        )}
      </section>
    </Layout>
  );
}
