import { PrimaryButton, SecondaryButton } from "./landing-primitives";

const stats = [
  { value: "3.5+ Years", label: "Industry Experience" },
  { value: "7,700+", label: "Total Buyer Leads Generated" },
  { value: "₹1.4 Cr+", label: "Total Ad Spend Managed" },
  { value: "Real Estate", label: "Industry Focus" },
];

export function Hero() {
  return (
    <section id="top" className="noise relative overflow-hidden pt-44 pb-32 md:pt-52 md:pb-40">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <h1 className="fade-up max-w-4xl text-[44px] sm:text-6xl lg:text-[76px]">
          We Don&rsquo;t Sell Leads.
          <span className="block text-muted-foreground">We Build Buyer Pipelines.</span>
        </h1>
        <p className="fade-up mt-8 max-w-xl text-base leading-[1.6] text-muted-foreground md:text-lg" style={{ animationDelay: "120ms" }}>
          Stop wasting your sales team&apos;s time on casual property enquiries. We help builders, developers &amp; channel
          partners with ₹5Cr+ inventory attract and qualify serious buyers through Meta Ads, funnels, and automated
          follow-ups.
        </p>
        <div className="fade-up mt-12 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
          <PrimaryButton className="w-full sm:w-auto" />
          <SecondaryButton href="#work" className="w-full sm:w-auto">
            See Campaign Proof
          </SecondaryButton>
        </div>
        <dl
          className="fade-up mx-auto mt-24 grid max-w-[1200px] grid-cols-2 gap-x-10 gap-y-12 border-t border-border pt-14 text-center md:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center gap-3">
              <dt className="text-sm text-slate-400">{stat.label}</dt>
              <dd className="font-display text-5xl font-extrabold tracking-[-0.03em] text-gold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
