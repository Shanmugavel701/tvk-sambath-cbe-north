import { createFileRoute } from "@tanstack/react-router";
import { School, Hospital, Bus, Train, Building2, Landmark, TreePine, ShieldCheck, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";
import heroBg from "@/assets/IMG_1602.JPG.jpeg";

export const Route = createFileRoute("/constituency")({
  component: ConstituencyPage,
  head: () => ({
    meta: [
      { title: "Coimbatore North Constituency · TVK MLA Office" },
      { name: "description", content: "Wards, demographics, schools, hospitals, transport and key facilities across Coimbatore North." },
    ],
  }),
});

function ConstituencyPage() {
  const { tr } = useLang();

  const wards = [
    "Saibaba Colony", "RS Puram", "Tatabad", "Gandhipuram", "Saravanampatti",
    "Peelamedu", "Vadavalli", "Thudiyalur", "Ganapathy", "Cheran Ma Nagar",
    "Sundarapuram", "Kuniamuthur", "Singanallur (N)", "Vellalore"
  ];

  const facilities = [
    { icon: School, label: "Schools & Colleges", count: "120+" },
    { icon: Hospital, label: "Hospitals & Clinics", count: "45" },
    { icon: ShieldCheck, label: "Police Stations", count: "8" },
    { icon: Bus, label: "Bus Routes", count: "60+" },
    { icon: Train, label: "Railway Stations", count: "2" },
    { icon: Building2, label: "Govt Offices", count: "25" },
    { icon: Landmark, label: "Public Centers", count: "18" },
    { icon: TreePine, label: "Parks & Lakes", count: "12" },
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-hero py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-tvk-black via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold backdrop-blur-md">
            {tr("nav.constituency")}
          </div>
          <h1 className="mt-5 font-display text-5xl drop-shadow-md">{tr("mla.constituency")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 drop-shadow-sm">{tr("con.intro")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">{tr("con.facilities")}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-tvk-red/10 text-tvk-red">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-2xl">{f.count}</div>
                  <div className="text-sm text-muted-foreground">{f.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl">Major Wards & Areas</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
          <div className="mt-8 flex flex-wrap gap-3">
            {wards.map((w) => (
              <span key={w} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-card hover:border-tvk-red">
                <MapPin className="h-3.5 w-3.5 text-tvk-red" /> {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">Interactive Map</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="Coimbatore North Map"
            src="https://www.google.com/maps?q=Coimbatore+North&output=embed"
            className="h-[450px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
