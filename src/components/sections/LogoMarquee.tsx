import { Container } from "@/components/ui/Container";

const BRANDS = [
  "Orbital", "Fluxwave", "Northpeak", "Cedarline", "Vertexa",
  "Haloform", "Driftlab", "Basecamp Labs", "Ionsphere", "Meridian",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border-subtle py-10 dark:border-white/10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Powering products for forward-thinking teams
        </p>
      </Container>
      <div className="mask-fade-x relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="shrink-0 whitespace-nowrap text-xl font-bold tracking-tight text-muted/50 transition-colors hover:text-primary"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
