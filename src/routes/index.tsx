import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Megaphone,
  LayoutTemplate,
  UserCheck,
  MessageCircle,
  ClipboardList,
  Menu,
  X,
  PhoneCall,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

// Images live in /public/images so they work on any static host (Vercel, Netlify, etc.).
const caseStudy1 = "/images/case-study-1.png";
const caseStudy2 = "/images/case-study-2.png";
const meetingPhoto = "/images/meeting-photo.png";
const clientCommunication = "/images/client-communication.jpg";
const proofPlot1 = "/images/proof-plot-1.png";
const proofPlot2 = "/images/proof-plot-2.png";
const proofResidential1 = "/images/proof-residential-1.png";
const proofResidential2 = "/images/proof-residential-2.png";
const proofVilla1 = "/images/proof-villa-1.png";
const proofVilla2 = "/images/proof-villa-2.png";
const proofVilla3 = "/images/proof-villa-3.png";
const proofVilla4 = "/images/proof-villa-4.png";
import logoImg from "@/assets/elevenx-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElevenX Media — Real Estate Meta Ads & Buyer Inquiry Systems" },
      {
        name: "description",
        content:
          "ElevenX Media helps real estate builders, developers and channel partners turn ad spend into better buyer inquiries — with real Meta Ads campaign results to show for it.",
      },
      {
        property: "og:title",
        content: "ElevenX Media — Real Estate Meta Ads & Buyer Inquiry Systems",
      },
      {
        property: "og:description",
        content:
          "Real Meta Ads campaign screenshots for real estate projects. One system for lead generation, qualification and follow-up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// EDITABLE PLACEHOLDER — replace with the real WhatsApp contact link (e.g. https://wa.me/91XXXXXXXXXX).
const WHATSAPP_URL = "";
// EDITABLE PLACEHOLDER — replace with the real booking/calendar link when configured.
const BOOKING_URL = "";

const navLinks = [
  { href: "#results", label: "Results" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#services", label: "What We Do" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const proofScreenshots = [
  { src: proofPlot1, label: "Plot Project" },
  { src: proofPlot2, label: "Plot Project" },
  { src: proofResidential1, label: "Residential Project" },
  { src: proofResidential2, label: "Residential Project" },
  { src: proofVilla1, label: "Villa Project" },
  { src: proofVilla2, label: "Villa Project" },
  { src: proofVilla3, label: "Villa Project" },
  { src: proofVilla4, label: "Villa Project" },
];

const caseStudies = [
  {
    title: "Campaign Case Study 1",
    image: caseStudy1,
    description:
      "Campaign performance proof from Meta Ads Manager for a residential plots project, shown exactly as recorded.",
  },
  {
    title: "Campaign Case Study 2",
    image: caseStudy2,
    description:
      "Campaign performance proof from Meta Ads Manager for a residential apartment project, shown exactly as recorded.",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    body: "Plan, launch, and manage Facebook and Instagram lead-generation campaigns.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages and Funnels",
    body: "Build pages that explain the property offer and help interested buyers submit their details.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    body: "Organise inquiries and help identify which prospects match the project's buyer criteria.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Follow-Up Automation",
    body: "Set up follow-up messages and workflows to help reduce missed inquiries.",
  },
  {
    icon: ClipboardList,
    title: "CRM and Sales Pipeline",
    body: "Organise leads, track follow-up status, and give the sales team a clearer view of each inquiry.",
  },
];

const processSteps = [
  {
    title: "Understand the Project",
    body: "Learn about the location, inventory, target buyer, price range, and sales process.",
  },
  {
    title: "Launch Campaigns",
    body: "Set up Meta Ads and the relevant lead capture page or form.",
  },
  {
    title: "Organise and Follow Up",
    body: "Capture inquiries, apply the agreed qualification criteria, and organise follow-up through WhatsApp and the CRM where configured.",
  },
  {
    title: "Review and Improve",
    body: "Review campaign performance and lead quality, then improve the process based on the data.",
  },
];

function Logo({ className = "h-6 sm:h-7" }: { className?: string }) {
  return (
    <a href="#" className="flex min-w-0 items-center" aria-label="ElevenX Media — home">
      <img
        src={logoImg}
        alt="ElevenX Media"
        className={`w-auto shrink-0 ${className}`}
        width={1560}
        height={569}
      />
    </a>
  );
}

const ctaBase = "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition";

function DisabledCta({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <button
      type="button"
      disabled
      title={`${label} — contact link being set up`}
      className={`${ctaBase} cursor-not-allowed bg-primary text-primary-foreground opacity-60 ${compact ? "px-4 py-2" : "px-6 py-3.5"}`}
    >
      {label}
    </button>
  );
}

function PrimaryCta({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  if (!BOOKING_URL) return <DisabledCta label="Book a Free Audit Call" compact={compact} />;
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`${ctaBase} bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.55_0.22_295/45%)] hover:opacity-90 ${compact ? "px-4 py-2" : "px-6 py-3.5"} ${className}`}
    >
      <PhoneCall className="h-4 w-4 shrink-0" />
      Book a Free Audit Call
      <ArrowRight className="h-4 w-4 shrink-0" />
    </a>
  );
}

function WhatsAppCta({ className = "" }: { className?: string }) {
  if (!WHATSAPP_URL) return <DisabledCta label="Chat on WhatsApp" />;
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-muted ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      Chat on WhatsApp
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-6">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <PrimaryCta compact />
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-2">
              <PrimaryCta className="w-full" />
              <WhatsAppCta className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 md:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            ElevenX Media
          </div>
          <h1 className="mt-6 max-w-2xl text-[34px] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            Turn Real Estate Ad Spend Into Better Buyer Inquiries
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We help real estate builders, developers, and channel partners attract buyer inquiries through Meta Ads and
            build a better process to qualify, follow up with, and manage those leads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCta className="w-full sm:w-auto" />
            <a
              href="#results"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-muted sm:w-auto"
            >
              View Our Results
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[24px] border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0_0_0/25%)]">
            <img
              src={proofPlot1}
              alt="Original Meta Ads Manager screenshot from a real estate plot project campaign"
              width={1080}
              height={2340}
              className="h-[520px] w-full object-cover object-top"
            />
            <figcaption className="border-t border-border bg-background px-4 py-2.5 text-center text-xs text-muted-foreground">
              Original campaign screenshot — Plot Project
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Lightbox({ src, caption, onClose }: { src: string; caption: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
      className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
    >
      <img
        src={src}
        alt={caption}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-auto max-w-full cursor-zoom-in rounded-2xl border border-border bg-background object-contain shadow-2xl"
      />
      <p className="mt-3 text-sm text-background/90">{caption} — tap anywhere to close</p>
    </div>
  );
}

function Results() {
  const [zoom, setZoom] = useState<(typeof proofScreenshots)[number] | null>(null);
  return (
    <section id="results" className="border-y border-border bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Results &amp; Proof</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Real Campaign Screenshots. Shown As-Is.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Original Meta Ads Manager screenshots from real estate campaigns. Tap any image to enlarge and inspect it.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {proofScreenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setZoom(shot)}
              className="group overflow-hidden rounded-2xl border border-border bg-card p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative overflow-hidden rounded-xl bg-muted">
                <img
                  src={shot.src.url}
                  alt={`${shot.label} — Meta Ads Manager campaign screenshot ${i + 1}`}
                  loading="lazy"
                  width={1080}
                  height={2340}
                  className="h-[300px] w-full object-cover object-top transition group-hover:scale-[1.02] sm:h-[340px]"
                />
                <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-background/85 text-foreground opacity-0 transition group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
              <div className="px-1 pb-1 pt-2.5 text-sm font-medium">{shot.label}</div>
            </button>
          ))}
        </div>
        <p className="mt-8 max-w-3xl rounded-2xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
          Campaign results reflect past performance. Every project receives a tailored strategy designed to improve lead quality, optimize ad spend, and drive measurable growth.
        </p>
      </div>
      {zoom && <Lightbox src={zoom.src.url} caption={zoom.label} onClose={() => setZoom(null)} />}
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Case Studies</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Campaign Case Studies</h2>
        <p className="mt-3 text-muted-foreground">
          Performance proof put together from real campaign data. Original figures kept intact.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="flex justify-center bg-muted p-4">
              <img
                src={cs.image.url}
                alt={`${cs.title} — campaign performance proof`}
                loading="lazy"
                width={1600}
                height={2000}
                className="h-[420px] w-auto rounded-xl object-contain md:h-[520px]"
              />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">{cs.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cs.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-border bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">What We Do</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            One System to Manage Your Buyer Inquiries
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-base font-medium">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-primary/25 bg-primary/5 p-6">
            <p className="text-base font-medium">One connected process — from ad to follow-up.</p>
            <div className="mt-4">
              <PrimaryCta className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">How It Works</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">A Simple Four-Step Process</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-semibold text-primary">Step {i + 1}</div>
            <div className="mt-3 text-base font-medium">{step.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BehindTheScenes() {
  return (
    <section className="border-y border-border bg-muted/50 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-5 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img
              src={meetingPhoto.url}
              alt="Planning and execution meeting over Google Meet"
              loading="lazy"
              width={1920}
              height={1020}
              className="w-full"
            />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Behind the Campaigns</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Planning and Execution</h2>
          <p className="mt-3 text-muted-foreground">
            Campaign reviews and planning sessions that sit behind the ad accounts — understanding the project, refining
            targeting and offers, and improving lead quality week by week.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClientCommunication() {
  const [zoom, setZoom] = useState(false);
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Client Communication</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Real Client Conversations</h2>
          <p className="mt-3 text-muted-foreground">
            A real client conversation about lead flow and site visits, shared exactly as received — with personal
            details hidden.
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-7">
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="group mx-auto block w-full max-w-[320px] overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-sm transition hover:shadow-md"
          >
            <img
              src={clientCommunication.url}
              alt="WhatsApp conversation with a client about leads and site visits, personal details hidden"
              loading="lazy"
              width={1077}
              height={1965}
              className="h-[420px] w-full rounded-2xl object-cover object-top"
            />
          </button>
        </div>
      </div>
      {zoom && (
        <Lightbox
          src={clientCommunication.url}
          caption="Client communication"
          onClose={() => setZoom(false)}
        />
      )}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">About</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              About ElevenX Media
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              ElevenX Media helps real estate businesses connect Meta Ads, lead capture, qualification, follow-up, and
              CRM into one organised process. The goal is to generate relevant inquiries and help teams manage them more
              effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-sm md:px-16 md:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
          Let&rsquo;s Review Your Real Estate Lead Generation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Share your project details, current lead generation process, and goals. We can identify opportunities to
          improve your campaigns and inquiry follow-up.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta className="w-full sm:w-auto" />
          <WhatsAppCta className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 py-10 md:flex-row md:items-center md:px-6">
        <Logo />
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ElevenX Media · Built for Real Estate Professionals
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Results />
        <CaseStudies />
        <Services />
        <Process />
        <BehindTheScenes />
        <ClientCommunication />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
