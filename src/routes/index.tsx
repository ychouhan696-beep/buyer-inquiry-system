import { Hero } from "@/components/landing/Hero";
import { BuyerConversations } from "@/components/landing/BuyerConversations";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ContactCta } from "@/components/landing/ContactCta";
import { Footer } from "@/components/landing/Footer";
import { Nav } from "@/components/landing/Nav";
import { Results } from "@/components/landing/Results";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElevenX Media \u2014 We Build Buyer Pipelines for Real Estate" },
      {
        name: "description",
        content:
          "ElevenX Media runs Meta Ads and funnel systems for builders and developers that filter timepass enquiries and deliver site-visit ready buyers to WhatsApp.",
      },
      {
        property: "og:title",
        content: "ElevenX Media \u2014 We Build Buyer Pipelines for Real Estate",
      },
      {
        property: "og:description",
        content: "Intent-based Meta Ads, qualification and pipeline management for plots, villas and apartments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <BuyerConversations />
        <Results />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
