import { Reveal, SectionHeading } from "./landing-primitives";

const steps = [
  {
    title: "Market & Buyer Intelligence",
    body: "Research the local property market, competitors, project positioning, pricing, inventory, and ideal buyer segments.",
  },
  {
    title: "Buyer Acquisition Strategy",
    body: "Develop the campaign strategy, buyer angles, ad creatives, landing pages, and qualification criteria.",
  },
  {
    title: "Acquisition & Qualification",
    body: "Launch Meta Ads, capture enquiries, filter prospects against buyer criteria, and route them into WhatsApp and CRM.",
  },
  {
    title: "Performance & Optimisation",
    body: "Analyse campaign and lead-quality data, identify bottlenecks, improve performance, and scale winning campaigns.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-b from-card to-background py-[120px]">
      <div className="section-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading title="The Buyer Engine System" className="max-w-2xl" />
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-slate-300">
            Our 4-step system that turns cold traffic into site-visit ready buyers
          </p>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="lift sheen-card relative h-full rounded-2xl border border-border border-l-2 border-l-sky-500 bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 font-display text-sm font-extrabold text-background">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute top-[44px] -right-6 hidden h-px w-6 bg-sky-500/50 lg:block" />
                )}
                <h3 className="mt-8 text-lg tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-slate-300">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
