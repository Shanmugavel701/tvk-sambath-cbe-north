import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Siren, Ambulance, ShieldAlert, Flame, Heart, Baby } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Appointment · TVK MLA Coimbatore North" },
      { name: "description", content: "Reach the MLA office, request an appointment, and access emergency contact numbers." },
    ],
  }),
});

const emergencies = [
  { icon: Ambulance, label: "Ambulance", num: "108" },
  { icon: ShieldAlert, label: "Police", num: "100" },
  { icon: Flame, label: "Fire Service", num: "101" },
  { icon: Heart, label: "Women Helpline", num: "1091" },
  { icon: Baby, label: "Child Helpline", num: "1098" },
  { icon: Siren, label: "Disaster Response", num: "1077" },
];

function ContactPage() {
  const { tr } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Layout>
      <PageHero badge={tr("nav.contact")} title={tr("contact.title")} subtitle={tr("contact.subtitle")} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4 lg:col-span-1">
          {[
            { icon: MapPin, label: "Office", value: tr("contact.address") },
            { icon: Phone, label: tr("contact.phone"), value: "+91 422 000 0000" },
            { icon: Mail, label: tr("contact.email"), value: "office@tvk-cbenorth.in" },
            { icon: Clock, label: "Hours", value: "Mon - Sun · 9 AM – 8 PM" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-tvk-red/10 text-tvk-red">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 whitespace-pre-line text-sm font-medium">{c.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl">Request an Appointment</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required maxLength={80} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
                <input required pattern="[0-9]{10}" placeholder="Phone (10 digits)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              </div>
              <input required maxLength={120} placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              <textarea required maxLength={1000} rows={5} placeholder="Tell us how we can help" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-tvk-red px-6 py-3 font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02]">
                <Send className="h-4 w-4" /> Send Request
              </button>
              {sent && <div className="rounded-lg bg-green-500/10 p-3 text-sm text-green-700">Thank you — your request has been received.</div>}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-tvk-black py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Siren className="h-6 w-6 text-tvk-red" />
            <h2 className="font-display text-3xl">Emergency Contacts</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {emergencies.map((e) => {
              const Icon = e.icon;
              return (
                <a key={e.label} href={`tel:${e.num}`} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-tvk-red hover:bg-tvk-red/10">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-tvk-red/20 text-tvk-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{e.label}</div>
                      <div className="text-xs text-white/60">Tap to call</div>
                    </div>
                  </div>
                  <div className="font-display text-2xl text-tvk-gold">{e.num}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
