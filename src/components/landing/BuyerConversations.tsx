import { Reveal, SectionHeading } from "./landing-primitives";
import { ZoomableImage } from "./ZoomableImage";

const conversations = [
  {
    image: "/images/social-proof.jpg",
    alt: "WhatsApp conversation with a client asking about lead volume and site visits",
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
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {conversations.map((chat, index) => (
            <Reveal
              key={chat.image}
              delay={index * 90}
              className="w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <ZoomableImage
                src={chat.image}
                alt={chat.alt}
                wrapperClassName="lift h-[500px] w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]"
                imageClassName="h-full w-full object-cover object-top"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
