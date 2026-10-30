import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./landing-primitives";

const testimonials = [
  {
    quote:
      "Our inventory had been sitting for months. Within the first campaign the site visit calendar filled with buyers who were already serious about their budget.",
    founder: "[Founder Name]",
    project: "[Project Name]",
  },
  {
    quote:
      "We stopped chasing enquiries that went nowhere. Every lead that reaches our sales team now has a clear budget and timeline.",
    founder: "[Founder Name]",
    project: "[Project Name]",
  },
  {
    quote:
      "The team treats our launch like their own. The pipeline is clean, the reporting is honest, and the WhatsApp follow-up never slips.",
    founder: "[Founder Name]",
    project: "[Project Name]",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="mx-auto max-w-[1200px] px-6 py-[120px]">
      <Reveal>
        <SectionHeading title="Builders Trust Us With Inventory" className="max-w-2xl" />
      </Reveal>
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={index} delay={index * 90}>
            <figure className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <Quote className="h-8 w-8 text-foreground" strokeWidth={1.5} aria-hidden="true" />
              <div className="mt-6 flex gap-1 text-muted-foreground" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-[15px] leading-[1.7] text-foreground/90">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <div className="font-display text-base font-extrabold tracking-[-0.02em]">{item.founder}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.project}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
