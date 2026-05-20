import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, Target, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About V. Sampathkumar · TVK MLA Coimbatore North" },
      { name: "description", content: "Biography, political journey, achievements, and vision of TVK MLA candidate V. Sampathkumar for Coimbatore North." },
    ],
  }),
});

function AboutPage() {
  const { tr } = useLang();

  const timeline = [
    { year: "2005", title: "Community Organizer", desc: "Began grassroots work in Coimbatore neighborhoods." },
    { year: "2012", title: "Local Welfare Council", desc: "Led ward-level welfare and water-access initiatives." },
    { year: "2018", title: "District Coordinator", desc: "Coordinated relief operations during Coimbatore floods." },
    { year: "2024", title: "Joined TVK", desc: "Officially joined Tamilaga Vettri Kazhagam." },
    { year: "2026", title: "MLA Candidate", desc: "Contesting Coimbatore North under TVK banner." },
  ];

  const visions = [
    { icon: Target, title: "Zero Pending Complaints", desc: "Every public grievance resolved with transparent tracking." },
    { icon: Heart, title: "Healthcare for All", desc: "Mobile clinics and free camps in every ward." },
    { icon: GraduationCap, title: "Youth & Education", desc: "Scholarships, skill training, and exam coaching." },
    { icon: Users, title: "Women's Safety", desc: "Self-defense centers and rapid response in every area." },
  ];

  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold">
            {tr("nav.about")}
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl">{tr("mla.name")}</h1>
          <p className="mt-4 text-lg text-white/80">{tr("mla.title")} · {tr("mla.constituency")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">{tr("about.bio.title")}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">{tr("about.bio.text")}</p>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-display text-3xl">{tr("about.timeline.title")}</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
          <div className="relative mt-10 space-y-8 border-l-2 border-tvk-red/30 pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[42px] grid h-8 w-8 place-items-center rounded-full bg-tvk-red text-xs font-bold text-white">
                  <Award className="h-3.5 w-3.5" />
                </div>
                <div className="font-display text-tvk-red">{item.year}</div>
                <div className="mt-1 text-xl font-semibold">{item.title}</div>
                <p className="mt-1 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">{tr("about.vision.title")}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visions.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-tvk-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
