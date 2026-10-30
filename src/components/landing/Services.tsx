import { Reveal, SectionHeading } from "./landing-primitives";

const services = [
  {
    title: "Ad Architecture",
    body: "Intent-based targeting, not interest-based.",
  },
  {
    title: "Inquiry Funnels",
    body: "Mobile-first pages that pre-qualify budget & timeline.",
  },
  {
    title: "Qualification Layer",
    body: "Auto filter removes low-intent enquiries, brokers and job seekers.",
  },
  {
    title: "Pipeline OS",
    body: "Instant WhatsApp, CRM and follow-up with zero leakage.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-[120px]">
      <Reveal>
        <SectionHeading title="A System, Not Just Ads" className="max-w-2xl" />
      </Reveal>
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 90}>
            <article className="lift h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <span className="font-display text-sm font-extrabold tracking-wide text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/25 to-transparent" />
              <h3 className="mt-8 text-xl tracking-[-0.02em]">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">{service.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
