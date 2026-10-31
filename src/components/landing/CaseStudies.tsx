import { Reveal, SectionHeading } from "./landing-primitives";

type CaseStudy = {
  image: string;
  alt: string;
  title: string;
  body: string;
  goldTerms: string[];
};

const caseStudies: CaseStudy[] = [
  {
    image: "/images/case-study-1.png",
    alt: "Meta Ads dashboard showing ₹29 lakh ad spend on a plot project",
    title: "Case Study 01: Plot Project - ₹29L Scale",
    body: "A plotted development project sitting on 5Cr+ inventory with low-quality portal leads. We rebuilt targeting to land-owner intent + pre-qualification funnel. Result: 1,800+ qualified inquiries at ₹189 CPL, sales team only spoke to site-visit ready buyers. No timepass.",
    goldTerms: ["1,800+", "₹189"],
  },
  {
    image: "/images/case-study-2.png",
    alt: "Meta Ads dashboard showing ₹9 lakh ad spend on a villa and apartment project",
    title: "Case Study 02: Villa & Apartment - ₹9L Scale",
    body: "Premium villa project where CPL was ₹400+ and 70% leads were irrelevant. We introduced budget filter + WhatsApp qualification layer. Result: 325+ high-intent buyers at 34% lower CPL, 3x more site visits in 30 days.",
    goldTerms: ["₹400+", "70%", "325+", "34%", "3x"],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1280px] px-6 py-[120px]">
      <Reveal>
        <SectionHeading title="Case Studies" className="max-w-2xl" />
      </Reveal>
      <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 90}>
            <article className="lift flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="h-[500px] border-b border-border bg-background p-6">
                <img
                  src={study.image}
                  alt={study.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl tracking-[-0.025em]">{study.title}</h3>
                <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
                  <Highlighted text={study.body} terms={study.goldTerms} />
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlighted({ text, terms }: { text: string; terms: string[] }) {
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`);
  return (
    <>
      {text.split(pattern).map((part, index) =>
        terms.includes(part) ? (
          <span key={index} className="font-display font-extrabold text-gold">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
