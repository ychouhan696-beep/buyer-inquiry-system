import { PrimaryButton, Reveal } from "./landing-primitives";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 pb-[120px]">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-24 text-center shadow-[var(--shadow-card)] md:px-16">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl tracking-[-0.035em] md:text-5xl">
              Let&rsquo;s Talk About Your Next Launch
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.6] text-muted-foreground">
              We review your inventory, your target buyer and how enquiries reach your team today, then tell you
              plainly what we would change.
            </p>
            <div className="mt-12 flex justify-center">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
