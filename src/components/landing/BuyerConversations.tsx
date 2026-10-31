import { Reveal, SectionHeading } from "./landing-primitives";
import { ZoomableImage } from "./ZoomableImage";

const conversations = [
  {
    image: "/images/final_precise_villa.png",
    alt: "WhatsApp conversation with Amit Jain about a Noida villa, loan approval and a Sunday site visit",
    label: "Amit Jain • Noida Villa • 65L Budget • Loan 45L Approved • Site Visit: Sunday 11AM",
  },
  {
    image: "/images/final_precise_plot.png",
    alt: "WhatsApp conversation with Sunil Sharma about a Noida plot, self buying and a Saturday site visit",
    label: "Sunil Sharma • Noida Plot • 50L Budget • Self Buyer (Not Broker) • Site Visit: Saturday 4PM Jewar",
  },
  {
    image: "/images/final_dharmesh_proof.png",
    alt: "WhatsApp conversation with Dharmesh Godara about lead volume and site visits",
    label: "Dharmesh Godara • Real WhatsApp Conversation • Leads & Site Visits",
  },
];

export function BuyerConversations() {
  return (
    <section id="conversations" className="relative overflow-hidden bg-[#0A1225] py-[120px]">
      <div className="section-glow pointer-events-none absolute inset-x-0 top-1/2 h-[600px] -translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Reveal>
          <SectionHeading title="Real Buyer Conversations" className="max-w-2xl" />
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-slate-300">
            Not just leads. Real conversations that reach your WhatsApp - already qualified, ready for site visit.
          </p>
        </Reveal>
        <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {conversations.map((chat, index) => (
            <Reveal key={chat.image} delay={index * 90}>
              <figure>
                <ZoomableImage
                  src={chat.image}
                  alt={chat.alt}
                  wrapperClassName="lift h-[500px] overflow-hidden rounded-[20px] border border-slate-800 bg-card shadow-[var(--shadow-card)] md:h-[700px]"
                  imageClassName="h-full w-full object-contain object-top"
                />
                <figcaption className="mt-3 text-center text-[13px] leading-[1.6] text-slate-400">{chat.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
