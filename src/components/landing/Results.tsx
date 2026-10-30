import { useState } from "react";
import { proofCards, proofHeadline, type ProofCard } from "@/lib/proof-cards";
import { Reveal, SectionHeading, secondaryButtonClass } from "./landing-primitives";

const INITIAL_VISIBLE = 6;

export function Results() {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? proofCards : proofCards.slice(0, INITIAL_VISIBLE);

  return (
    <section id="work" className="border-y border-border bg-muted/40 py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-display text-sm font-extrabold tracking-[0.12em] text-gold uppercase">{proofHeadline}</p>
          <SectionHeading title="Proof, Not Promises" className="mt-4 max-w-2xl" />
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-muted-foreground">
            Figures taken straight from Meta Ads Manager and client conversations, shown as recorded.
          </p>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCards.map((card, index) => (
            <Reveal key={card.id} delay={(index % 3) * 90}>
              <ProofCardView card={card} />
            </Reveal>
          ))}
        </div>
        {!showAll && proofCards.length > INITIAL_VISIBLE && (
          <div className="mt-16 flex justify-center">
            <button type="button" onClick={() => setShowAll(true)} className={`${secondaryButtonClass} w-full px-7 py-4 text-[15px] sm:w-auto`}>
              View All Results
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProofCardView({ card }: { card: ProofCard }) {
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="relative m-3 h-[400px] overflow-hidden rounded-2xl border border-border bg-background">
        <img
          src={card.image}
          alt={card.alt}
          loading="lazy"
          className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.03]"
        />
        <span className="absolute top-4 left-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
          {card.pill}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-4 pb-6">
        <h3 className="text-lg tracking-[-0.02em]">{card.projectType}</h3>
        {card.metrics ? (
          <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5">
            <Metric label="Spend" value={card.metrics.spend} />
            <Metric label="CPL" value={card.metrics.cpl} />
            <Metric label="Leads" value={card.metrics.leads} />
          </dl>
        ) : (
          <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">{card.caption}</p>
        )}
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{label}</dt>
      <dd className="mt-2 font-display text-lg font-extrabold tracking-[-0.02em] text-gold">{value}</dd>
    </div>
  );
}
