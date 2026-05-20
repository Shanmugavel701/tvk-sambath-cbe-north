import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLang } from "@/i18n";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function PageHero({ badge, title, subtitle, centered }: PageHeroProps) {
  const { tr } = useLang();

  return (
    <section className="bg-gradient-hero py-12 text-white sm:py-16 lg:py-20">
      <div className={cn("mx-auto max-w-5xl px-4 lg:px-8", centered && "text-center")}>
        <Breadcrumb className={cn(centered && "flex justify-center")}>
          <BreadcrumbList className="text-white/70">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="font-semibold text-white/80 hover:text-white">
                  {tr("nav.home")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/50 [&>svg]:text-white/50" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-white">{badge}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div
          className={cn(
            "mt-6 inline-flex rounded-full border border-tvk-gold/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tvk-gold",
            centered && "mx-auto",
          )}
        >
          {badge}
        </div>
        <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className={cn("mt-4 max-w-2xl text-lg font-medium text-white/90", centered && "mx-auto")}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
