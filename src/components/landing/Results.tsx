import { Reveal, SectionHeading } from "./landing-primitives";

const campaigns = [
  {
    project: "Plot Project",
    image: "/images/proof-plot-1.png",
    spend: "₹3,44,896",
    cpl: "₹189.19",
    leads: "1,823",
  },
  {
    project: "Residential Project",
    image: "/images/proof-residential-1.png",
    spend: "₹1,27,689",
    cpl: "₹392.89",
    leads: "325",
  },
  {
    project: "Villa Project",
    image: "/images/proof-villa-1.png",
    spend: "₹3,33,490",
    cpl: "₹311.09",
    leads: "1,072",
  },
];

export function Results() {
  return (
    <section id="work" className="border-y border-border bg-muted/40 py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeading title="Proof, Not Promises" className="max-w-2xl" />
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-muted-foreground">
            Figures taken straight from Meta Ads Manager for recent builder campaigns, shown as recorded.
          </p>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <Reveal key={campaign.project} delay={index * 90}>
              <article className="lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="border-b border-border bg-background/40">
                  <img
                    src={campaign.image}
                    alt={`${campaign.project} Meta Ads Manager results`}
                    loading="lazy"
                    width={1080}
                    height={2340}
                    className="mx-auto h-[360px] w-auto object-contain object-top p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg tracking-[-0.02em]">{campaign.project}</h3>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    <Metric label="Spend" value={campaign.spend} />
                    <Metric label="CPL" value={campaign.cpl} />
                    <Metric label="Leads" value={campaign.leads} />
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-display text-lg font-extrabold tracking-[-0.02em] text-gold">{value}</dd>
    </div>
  );
}
