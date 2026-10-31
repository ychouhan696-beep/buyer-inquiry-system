import { Reveal, SectionHeading } from "./landing-primitives";

const services = [
  {
    title: "Ad Architecture",
    body: "Intent-driven campaign strategy built around buyer segments, project positioning, and purchase intent—not just interest-based targeting.",
  },
  {
    title: "Inquiry Funnels",
    body: "Mobile-first landing pages designed to capture buyer details and pre-qualify prospects based on budget, location, and purchase timeline.",
  },
  {
    title: "Buyer Qualification",
    body: "A structured qualification system that filters irrelevant enquiries, brokers, and job seekers while identifying prospects who match your buyer criteria.",
  },
  {
    title: "Pipeline & Automation",
    body: "Connect WhatsApp, CRM, and automated follow-ups to organize enquiries, speed up responses, and prevent potential buyers from slipping through the cracks.",
  },
];

export function Services() {
  return (
    <section id="services" className="noise relative overflow-hidden bg-[#0A1225] py-[120px]">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading title="A System, Not Just Ads" className="max-w-2xl" />
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="lift sheen-card h-full rounded-2xl border border-border border-l-2 border-l-gold/40 bg-card p-8 shadow-[var(--shadow-card)]">
                <span className="gold-glow font-display text-4xl font-extrabold tracking-[-0.02em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[18px] font-bold tracking-[-0.02em] text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-slate-300">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
