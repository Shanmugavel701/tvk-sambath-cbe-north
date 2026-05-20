import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Heart, Target, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { PoliticalJourneyTimeline } from "@/components/PoliticalJourneyTimeline";
import { useLang } from "@/i18n";
import img5030 from "@/assets/IMG_5030.JPG.jpeg";
import img2005 from "@/assets/IMG_1605.JPG.jpeg";
import img2012 from "@/assets/IMG_1606.JPG.jpeg";
import img2018 from "@/assets/IMG_1607.JPG.jpeg";
import img2024 from "@/assets/IMG_1623.JPG.jpeg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About V. Sampathkumar · TVK MLA Coimbatore North" },
      {
        name: "description",
        content:
          "Biography, political journey, achievements, and vision of TVK MLA candidate V. Sampathkumar for Coimbatore North.",
      },
    ],
  }),
});

const journeyMilestones = [
  { year: "2005", titleKey: "about.journey.2005.title", descKey: "about.journey.2005.desc", image: img2005 },
  { year: "2012", titleKey: "about.journey.2012.title", descKey: "about.journey.2012.desc", image: img2012 },
  { year: "2018", titleKey: "about.journey.2018.title", descKey: "about.journey.2018.desc", image: img2018 },
  { year: "2024", titleKey: "about.journey.2024.title", descKey: "about.journey.2024.desc", image: img2024 },
  { year: "2026", titleKey: "about.journey.2026.title", descKey: "about.journey.2026.desc", image: img5030 },
] as const;

function AboutPage() {
  const { tr } = useLang();

  const visions = [
    { icon: Target, title: "Zero Pending Complaints", desc: "Every public grievance resolved with transparent tracking." },
    { icon: Heart, title: "Healthcare for All", desc: "Mobile clinics and free camps in every ward." },
    { icon: GraduationCap, title: "Youth & Education", desc: "Scholarships, skill training, and exam coaching." },
    { icon: Users, title: "Women's Safety", desc: "Self-defense centers and rapid response in every area." },
  ];

  return (
    <Layout>
      <PageHero
        centered
        badge={tr("nav.about")}
        title={tr("mla.name")}
        subtitle={`${tr("mla.title")} · ${tr("mla.constituency")}`}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl flex-1">
            <h2 className="font-display text-3xl font-bold">{tr("about.bio.title")}</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{tr("about.bio.text")}</p>
          </div>
          <figure className="m-0 flex shrink-0 justify-center lg:justify-end">
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={img5030}
                alt={tr("about.bio.imageAlt")}
                width={190}
                height={240}
                className="block h-[200px] w-[165px] object-cover object-top sm:h-[215px] sm:w-[178px]"
              />
            </div>
          </figure>
        </div>
      </section>

      <PoliticalJourneyTimeline milestones={[...journeyMilestones]} />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold">{tr("about.vision.title")}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-tvk-red" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visions.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-tvk-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
