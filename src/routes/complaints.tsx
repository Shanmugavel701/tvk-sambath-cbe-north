import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Clock, Search, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/complaints")({
  component: ComplaintsPage,
  head: () => ({
    meta: [
      { title: "Submit & Track Complaints · TVK MLA Coimbatore North" },
      { name: "description", content: "Submit public complaints to the TVK MLA office for Coimbatore North and track resolution status." },
    ],
  }),
});

type Status = "Submitted" | "Under Review" | "Assigned" | "In Progress" | "Resolved";

interface Complaint {
  id: string;
  category: string;
  name: string;
  phone: string;
  ward: string;
  description: string;
  status: Status;
  createdAt: string;
}

const STATUS_COLORS: Record<Status, string> = {
  "Submitted": "bg-blue-500/10 text-blue-600",
  "Under Review": "bg-amber-500/10 text-amber-600",
  "Assigned": "bg-purple-500/10 text-purple-600",
  "In Progress": "bg-tvk-gold/20 text-tvk-black",
  "Resolved": "bg-green-500/10 text-green-600",
};

function ComplaintsPage() {
  const { tr, lang } = useLang();
  const categories = lang === "ta"
    ? ["சாலை", "குடிநீர்", "மின் இணைப்பு", "வடிகால்", "குப்பை", "ஓய்வூதியம்", "ரேஷன் கார்டு", "மருத்துவ அவசரம்", "பெண்கள் பாதுகாப்பு", "தெரு விளக்கு"]
    : ["Road", "Drinking Water", "Electricity (EB)", "Drainage", "Garbage", "Pension", "Ration Card", "Medical Emergency", "Women Safety", "Street Light"];

  const [form, setForm] = useState({ category: categories[0], name: "", phone: "", ward: "", description: "" });
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [trackId, setTrackId] = useState("");
  const [tracked, setTracked] = useState<Complaint | null>(null);
  const [trackError, setTrackError] = useState("");

  useEffect(() => {
    setForm((f) => ({ ...f, category: categories[0] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TVK-${Math.floor(10000 + Math.random() * 90000)}`;
    const complaint: Complaint = {
      id, ...form,
      status: "Submitted",
      createdAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("complaints") || "[]");
    localStorage.setItem("complaints", JSON.stringify([complaint, ...existing]));
    setSubmittedId(id);
    setForm({ category: categories[0], name: "", phone: "", ward: "", description: "" });
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError("");
    setTracked(null);
    const existing: Complaint[] = JSON.parse(localStorage.getItem("complaints") || "[]");
    const found = existing.find((c) => c.id.toLowerCase() === trackId.trim().toLowerCase());
    if (found) setTracked(found);
    else setTrackError(lang === "ta" ? "புகார் கிடைக்கவில்லை" : "Complaint not found");
  };

  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tvk-gold">
            {tr("nav.complaints")}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl">{tr("comp.title")}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{tr("comp.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-5 lg:px-8">
        {/* SUBMIT FORM */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl">{tr("cta.complaint")}</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">{tr("comp.form.category")}</label>
                <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">{tr("comp.form.name")}</label>
                  <input required maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">{tr("comp.form.phone")}</label>
                  <input required pattern="[0-9]{10}" placeholder="9XXXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{tr("comp.form.ward")}</label>
                <input required maxLength={120} value={form.ward} onChange={(e) => setForm({ ...form, ward: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{tr("comp.form.desc")}</label>
                <textarea required maxLength={1000} rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-tvk-red px-6 py-3 font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02] sm:w-auto">
                <Send className="h-4 w-4" /> {tr("comp.form.submit")}
              </button>
            </form>

            {submittedId && (
              <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-700">{tr("comp.success")}</div>
                    <div className="mt-1 font-display text-2xl text-green-700">{submittedId}</div>
                    <div className="mt-1 text-xs text-green-700/80">Save this ID to track your complaint anytime.</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TRACKER */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-2xl">{tr("comp.track.title")}</h2>
            <form onSubmit={handleTrack} className="mt-4 flex gap-2">
              <input value={trackId} onChange={(e) => setTrackId(e.target.value)} placeholder={tr("comp.track.placeholder")} className="flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-tvk-red focus:outline-none" />
              <button type="submit" className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-tvk-red text-white">
                <Search className="h-4 w-4" />
              </button>
            </form>

            {trackError && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" /> {trackError}
              </div>
            )}

            {tracked && (
              <div className="mt-5 rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg">{tracked.id}</div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[tracked.status]}`}>{tracked.status}</span>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div><strong className="text-foreground">{tr("comp.form.category")}:</strong> {tracked.category}</div>
                  <div><strong className="text-foreground">{tr("comp.form.ward")}:</strong> {tracked.ward}</div>
                  <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {new Date(tracked.createdAt).toLocaleString()}</div>
                </div>
              </div>
            )}

            <div className="mt-6 rounded-xl bg-tvk-black p-4 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-tvk-gold">Need help?</div>
              <div className="mt-1 text-sm text-white/80">Call the MLA office helpline 24/7.</div>
              <a href="tel:+910422" className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-tvk-red py-2 text-sm font-semibold">
                +91 422 000 0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
