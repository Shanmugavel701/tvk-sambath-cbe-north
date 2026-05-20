import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Gift,
  CalendarCheck,
  Siren,
  HardHat,
  GraduationCap,
  ArrowRight,
  MessageCircle,
  UserPlus,
  Quote,
  CheckCircle2,
  Users,
  MapPinned,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";
import heroSectionImg from "@/assets/Hero Section 1.png";
import feedImg1 from "@/assets/IMG_1605.JPG.jpeg";
import feedImg2 from "@/assets/IMG_1606.JPG.jpeg";
import feedImg3 from "@/assets/IMG_1608.JPG.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "V. Sampathkumar · TVK MLA Coimbatore North" },
      {
        name: "description",
        content:
          "Official home of V. Sampathkumar, TVK MLA candidate for Coimbatore North. Submit complaints, explore schemes, and engage directly.",
      },
    ],
  }),
});

const feedPosts = [
  { title: "Ward 12 Inspection", desc: "Drainage works near Saibaba Colony.", tag: "Field Visit", img: feedImg1 },
  { title: "Free Eye Camp", desc: "300+ citizens screened with Aravind Eye Hospital.", tag: "Welfare", img: feedImg2 },
  { title: "Student Townhall", desc: "Career & skill dialogue with college students.", tag: "Engagement", img: feedImg3 },
];

const testimonials = [
  { name: "Lakshmi R.", role: "Ward 8 Resident", text: "Street lights fixed within 10 days of our complaint." },
  { name: "Arun K.", role: "Auto Driver", text: "Welfare scheme application done in one visit." },
  { name: "Priya S.", role: "College Student", text: "Scholarship guidance — felt heard and supported." },
];

function Index() {
  const { tr } = useLang();

  const quickAccess = [
    { icon: FileText, key: "qa.complaint", to: "/complaints", color: "bg-tvk-red" },
    { icon: Gift, key: "qa.schemes", to: "/schemes", color: "bg-tvk-black" },
    { icon: CalendarCheck, key: "qa.appointment", to: "/contact", color: "bg-tvk-gold text-tvk-black" },
    { icon: Siren, key: "qa.emergency", to: "/contact", color: "bg-tvk-red" },
    { icon: HardHat, key: "qa.development", to: "/development", color: "bg-tvk-black" },
    { icon: GraduationCap, key: "qa.students", to: "/schemes", color: "bg-tvk-gold text-tvk-black" },
  ] as const;

  const stats = [
    { icon: CheckCircle2, value: "1,240+", key: "stats.complaints" },
    { icon: HardHat, value: "86", key: "stats.projects" },
    { icon: Users, value: "32k+", key: "stats.beneficiaries" },
    { icon: MapPinned, value: "60", key: "stats.wards" },
  ];

  return (
    <Layout compactFooter>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.82 0.16 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.22 27 / 0.4), transparent 50%)",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-l from-black/70 via-black/20 to-transparent lg:block" />
        <div className="relative mx-auto grid min-h-[min(72vh,520px)] max-w-7xl items-center gap-6 px-4 py-10 sm:min-h-[min(68vh,560px)] sm:py-12 lg:grid-cols-[1fr_auto] lg:gap-10 lg:px-8 lg:py-14 xl:min-h-[min(65vh,620px)] xl:py-16">
          <div className="min-w-0 py-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-tvk-gold">
              {tr("brand.party")}
            </div>
            <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {tr("mla.name")}
            </h1>
            <p className="mt-2 text-base font-semibold text-tvk-gold sm:text-lg">
              {tr("mla.title")} · {tr("mla.constituency")}
            </p>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{tr("slogan.main")}</p>
            <p className="mt-2 max-w-xl text-sm text-white/75 sm:text-base">{tr("hero.welcome")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-tvk-red px-5 py-2.5 text-sm font-semibold shadow-elegant transition-transform hover:scale-105"
              >
                {tr("cta.connect")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/complaints"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-tvk-black shadow-elegant transition-transform hover:scale-105"
              >
                {tr("cta.complaint")}
              </Link>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> {tr("cta.whatsapp")}
              </a>
            </div>
          </div>
          <div className="relative flex h-full shrink-0 items-end justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-tvk-red/25 blur-3xl" />
            <img
              src={heroSectionImg}
              alt={tr("mla.name")}
              width={800}
              height={1000}
              className="relative z-10 h-auto max-h-[280px] w-auto max-w-[240px] object-contain object-bottom sm:max-h-[340px] sm:max-w-[290px] lg:max-h-[400px] lg:max-w-[340px] xl:max-h-[460px] xl:max-w-[380px]"
            />
          </div>
        </div>
      </section>

      {/* QUICK ACCESS + STATS */}
      <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8 lg:py-6">
        <div className="xl:grid xl:grid-cols-[1.35fr_1fr] xl:items-start xl:gap-6">
          <section>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{tr("qa.title")}</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-3">
              {quickAccess.map((q) => {
                const Icon = q.icon;
                return (
                  <Link
                    key={q.key}
                    to={q.to}
                    className="group flex items-center gap-2 rounded-lg border border-border bg-card p-2.5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant sm:gap-2.5 sm:p-3"
                  >
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-md text-white ${q.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="line-clamp-2 text-xs font-semibold leading-tight text-foreground sm:text-sm">
                      {tr(q.key)}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-5 rounded-xl bg-tvk-black p-4 text-white xl:mt-0">
            <h2 className="text-center font-display text-lg font-bold sm:text-xl">{tr("stats.title")}</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.key} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-center">
                    <Icon className="mx-auto h-4 w-4 text-tvk-gold" />
                    <div className="mt-1 font-display text-lg font-bold text-tvk-gold sm:text-xl">{s.value}</div>
                    <div className="text-[10px] leading-tight text-white/70 sm:text-xs">{tr(s.key)}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* ACTIVITIES + TESTIMONIALS */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-5 lg:px-8 lg:pt-10 lg:pb-6 xl:grid xl:grid-cols-2 xl:gap-6">
        <section>
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="font-display text-xl font-bold sm:text-2xl">Latest Activities</h2>
            <Link to="/news" className="shrink-0 text-xs font-semibold text-tvk-red hover:underline sm:text-sm">
              View all <ArrowRight className="ml-0.5 inline h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {feedPosts.map((post, i) => (
              <article
                key={i}
                className="flex w-[min(72vw,220px)] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card sm:w-auto"
              >
                <div className="relative h-20 overflow-hidden bg-muted sm:h-24">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-2.5">
                  <span className="rounded-full bg-tvk-red/10 px-2 py-0.5 text-[9px] font-bold uppercase text-tvk-red">
                    {post.tag}
                  </span>
                  <h3 className="mt-1 line-clamp-1 text-sm font-semibold">{post.title}</h3>
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">{post.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-xl bg-muted/50 p-4 xl:mt-0">
          <h2 className="font-display text-xl font-bold sm:text-2xl">{tr("testi.title")}</h2>
          <div className="mt-3 space-y-2">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex gap-2.5 rounded-lg border border-border bg-card p-2.5">
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-tvk-red" />
                <div className="min-w-0">
                  <blockquote className="line-clamp-2 text-xs leading-snug text-foreground">{t.text}</blockquote>
                  <figcaption className="mt-1 text-[11px] font-semibold text-foreground">
                    {t.name}{" "}
                    <span className="font-normal text-muted-foreground">· {t.role}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-tvk-red py-5 text-white lg:py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-8">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-xl font-bold sm:text-2xl">Have an issue? We're listening.</h2>
            <p className="mt-0.5 text-xs text-white/90 sm:text-sm">Submit in 60 seconds — track end-to-end.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="https://tvk.family"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-tvk-gold/60 bg-tvk-black px-4 py-2 text-sm font-semibold text-tvk-gold transition-transform hover:scale-105 hover:bg-tvk-black/90"
            >
              <UserPlus className="h-4 w-4" /> {tr("cta.joinTvk")}
            </a>
            <Link
              to="/complaints"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-tvk-black px-4 py-2 text-sm font-semibold text-tvk-gold transition-transform hover:scale-105"
            >
              <FileText className="h-4 w-4" /> {tr("cta.complaint")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
