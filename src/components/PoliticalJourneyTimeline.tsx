import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";

export type JourneyMilestone = {
  year: string;
  titleKey: string;
  descKey: string;
  image: string;
};

type PoliticalJourneyTimelineProps = {
  milestones: JourneyMilestone[];
};

export function PoliticalJourneyTimeline({ milestones }: PoliticalJourneyTimelineProps) {
  const { tr } = useLang();
  const [active, setActive] = useState(0);
  const current = milestones[active];
  const progress =
    milestones.length > 1 ? (active / (milestones.length - 1)) * 100 : 0;

  const goPrev = () => setActive((i) => Math.max(0, i - 1));
  const goNext = () => setActive((i) => Math.min(milestones.length - 1, i + 1));

  return (
    <section className="relative overflow-hidden bg-muted/30 py-14 lg:py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <div className="font-display text-[20rem] font-bold text-tvk-red">TVK</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-tvk-red sm:text-4xl">
          {tr("about.timeline.title")}
        </h2>

        <div className="mt-10 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative min-w-[520px] px-2 sm:min-w-full">
            <div className="absolute left-0 right-0 top-[15px] h-px bg-border" />
            <div
              className="absolute left-0 top-[14px] h-0.5 bg-tvk-red transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />

            <div className="relative flex justify-between gap-2">
              {milestones.map((milestone, index) => {
                const isActive = index === active;
                const isPast = index < active;
                const highlighted = isActive || isPast;

                return (
                  <button
                    key={milestone.year}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group flex min-w-[4.5rem] flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-tvk-red focus-visible:ring-offset-2"
                    aria-pressed={isActive}
                    aria-label={`${milestone.year} — ${tr(milestone.titleKey)}`}
                  >
                    <Star
                      className={cn(
                        "h-6 w-6 transition-colors sm:h-7 sm:w-7",
                        highlighted
                          ? "fill-tvk-red text-tvk-red"
                          : "fill-muted text-muted-foreground/35 group-hover:fill-tvk-red/30 group-hover:text-tvk-red/50",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-bold sm:text-sm",
                        isActive ? "text-tvk-red" : highlighted ? "text-foreground/70" : "text-muted-foreground",
                      )}
                    >
                      {milestone.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={active === 0}
            className="inline-flex items-center gap-1 rounded-md bg-tvk-gold px-3 py-1.5 text-sm font-bold text-tvk-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            {active > 0 ? milestones[active - 1].year : ""}
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={active === milestones.length - 1}
            className="inline-flex items-center gap-1 rounded-md bg-tvk-gold px-3 py-1.5 text-sm font-bold text-tvk-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          >
            {active < milestones.length - 1 ? milestones[active + 1].year : ""}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img
              key={current.year}
              src={current.image}
              alt={tr(current.titleKey)}
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>
          <div key={`content-${active}`}>
            <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-tvk-red sm:text-2xl lg:text-3xl">
              {tr(current.titleKey)}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {tr(current.descKey)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
