import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Gift, CalendarCheck, Siren, HardHat, GraduationCap, ArrowRight, MessageCircle, Quote, CheckCircle2, Users, TrendingUp, MapPinned } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";
import heroImg from "@/assets/IMG_1623.JPG.jpeg";
import feedImg1 from "@/assets/IMG_1605.JPG.jpeg";
import feedImg2 from "@/assets/IMG_1606.JPG.jpeg";
import feedImg3 from "@/assets/IMG_1608.JPG.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "V. Sampathkumar · TVK MLA Coimbatore North" },
      { name: "description", content: "Official home of V. Sampathkumar, TVK MLA candidate for Coimbatore North. Submit complaints, explore schemes, and engage directly." },
    ],
  }),
});

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
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.82 0.16 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.55 0.22 27 / 0.4), transparent 50%)"
        }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold backdrop-blur">
              {tr("brand.party")}
            </div>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {tr("mla.name")}
            </h1>
            <p className="mt-3 text-xl text-tvk-gold">{tr("mla.title")} · {tr("mla.constituency")}</p>
            <p className="mt-6 max-w-xl text-balance text-lg text-white/90">{tr("slogan.main")}</p>
            <p className="mt-3 max-w-xl text-white/70">{tr("hero.welcome")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-tvk-red px-6 py-3 text-sm font-semibold shadow-elegant transition-transform hover:scale-105">
                {tr("cta.connect")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/complaints" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-tvk-black shadow-elegant transition-transform hover:scale-105">
                {tr("cta.complaint")}
              </Link>
              <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> {tr("cta.whatsapp")}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-tvk-red/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-2 border-tvk-gold/60 shadow-elegant">
              <img src={heroImg} alt={tr("mla.name")} width={1280} height={1280} className="aspect-square w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tvk-black via-tvk-black/60 to-transparent p-6">
                <div className="text-xs uppercase tracking-widest text-tvk-gold">2026</div>
                <div className="font-display text-2xl">{tr("mla.constituency")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl sm:text-4xl">{tr("qa.title")}</h2>
          <div className="h-1 flex-1 max-w-[120px] bg-gradient-gold ml-6 rounded-full" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccess.map((q) => {
            const Icon = q.icon;
            return (
              <Link key={q.key} to={q.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className={`mb-4 grid h-14 w-14 place-items-center rounded-xl text-white ${q.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl text-foreground">{tr(q.key)}</h3>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-tvk-red opacity-0 transition-opacity group-hover:opacity-100">
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-tvk-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl">{tr("stats.title")}</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-gold" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.key} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                  <Icon className="mx-auto h-8 w-8 text-tvk-gold" />
                  <div className="mt-3 font-display text-4xl text-tvk-gold">{s.value}</div>
                  <div className="mt-1 text-sm text-white/70">{tr(s.key)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLIC FEED */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Latest Activities</h2>
            <p className="mt-2 text-muted-foreground">Field visits, meetings, and updates from the constituency.</p>
          </div>
          <Link to="/news" className="hidden text-sm font-semibold text-tvk-red hover:underline sm:inline-flex">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Ward 12 Inspection", desc: "Site visit to inspect new drainage works near Saibaba Colony.", tag: "Field Visit", img: feedImg1 },
            { title: "Free Eye Camp", desc: "300+ citizens screened in collaboration with Aravind Eye Hospital.", tag: "Welfare", img: feedImg2 },
            { title: "Student Townhall", desc: "Direct dialogue with college students on career & skill development.", tag: "Engagement", img: feedImg3 },
          ].map((post, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div>
                  <div className="inline-flex rounded-full bg-tvk-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-tvk-red">{post.tag}</div>
                </div>
                <h3 className="mt-3 font-display text-xl">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl">{tr("testi.title")}</h2>
            <p className="mt-2 text-muted-foreground">{tr("testi.subtitle")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Lakshmi R.", role: "Ward 8 Resident", text: "Our street got proper lights within 10 days of raising the complaint. Truly responsive office." },
              { name: "Arun K.", role: "Auto Driver", text: "MLA office helped me apply for the welfare scheme. The whole process took just one visit." },
              { name: "Priya S.", role: "College Student", text: "Got guidance for my scholarship application — felt heard and supported." },
            ].map((t, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <Quote className="h-7 w-7 text-tvk-red" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">{t.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-display text-tvk-black">{t.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-tvk-red py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Have an issue? We're listening.</h2>
            <p className="mt-2 text-white/90">Submit it in 60 seconds and track resolution end-to-end.</p>
          </div>
          <Link to="/complaints" className="inline-flex items-center gap-2 rounded-lg bg-tvk-black px-6 py-3 font-semibold text-tvk-gold shadow-elegant transition-transform hover:scale-105">
            <FileText className="h-4 w-4" /> {tr("cta.complaint")}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
