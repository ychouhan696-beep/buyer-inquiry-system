import { Reveal, SectionHeading } from "./landing-primitives";

const conversations = [
  {
    image: "/images/social-proof.jpg",
    alt: "WhatsApp conversation with a client asking about lead volume and site visits",
  },
  {
    image: "/images/client-communication.jpg",
    alt: "WhatsApp conversation with a client about leads and site visits, personal details hidden",
  },
];

export function BuyerConversations() {
  return (
    <section id="conversations" className="border-y border-border bg-muted/40 py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <SectionHeading title="Real Buyer Conversations" className="max-w-2xl" />
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-muted-foreground">
            Not just leads. Real conversations that reach your WhatsApp - already qualified, ready for site visit.
          </p>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {conversations.map((chat, index) => (
            <Reveal key={chat.image} delay={index * 90}>
              <figure className="lift overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
                <img
                  src={chat.image}
                  alt={chat.alt}
                  loading="lazy"
                  className="h-[560px] w-full rounded-xl object-cover object-top"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
