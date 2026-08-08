import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Target,
  LineChart,
  Layers,
  ShieldCheck,
  Menu,
  X,
  CalendarCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import founderImg from "@/assets/founder-cutout.png";
import ads1 from "@/assets/ads-1.jpg";
import ads2 from "@/assets/ads-2.jpg";
import ads3 from "@/assets/ads-3.jpg";
import ads4 from "@/assets/ads-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElevenX Media — Qualified Buyer Inquiries for Real Estate" },
      {
        name: "description",
        content:
          "ElevenX Media helps real estate developers and channel partners build predictable buyer acquisition systems with the Buyer Inquiry Engine™.",
      },
      { property: "og:title", content: "ElevenX Media — Qualified Buyer Inquiries for Real Estate" },
      {
        property: "og:description",
        content:
          "Buyer Inquiry Engine™ — qualified buyer inquiries that turn into site visits. Real campaign results from Meta Ads.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/919999999999?text=Hi%20ElevenX%2C%20I%27d%20like%20to%20talk%20about%20a%20Buyer%20Inquiry%20Engine";
// EDITABLE PLACEHOLDER: replace with the real booking/calendar link when available.
const BOOKING_URL =
  "https://wa.me/919999999999?text=Hi%20ElevenX%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call";

const navLinks = [
  { href: "#results", label: "Results" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const heroMetrics = [
  { value: "₹2.82L+", label: "Meta Ad Spend" },
  { value: "5+", label: "Years Experience" },
  { value: "1,574+", label: "Qualified Buyer Inquiries" },
  { value: "21+", label: "Clients Served" },
];

const resultMetrics = [
  { value: "1,574+", label: "Qualified Buyer Inquiries" },
  { value: "₹179.67", label: "Average CPL" },
  { value: "₹2.82L", label: "Meta Ad Spend" },
  { value: "60 Days", label: "Campaign Window" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Buyer Inquiry Engine™",
    body: "A complete buyer acquisition system designed around buyer intent.",
  },
  {
    icon: Target,
    title: "Real Estate Focus",
    body: "Focused on real estate acquisition rather than generic marketing.",
  },
  { icon: Layers, title: "Creative Testing", body: "Continuous testing of hooks, angles and offers." },
  {
    icon: LineChart,
    title: "Performance Optimization",
    body: "Campaign decisions driven by real performance data.",
  },
];

const caseStudies = [
  {
    title: "Residential Township Project",
    meta: "North India · 60-Day Performance Campaign",
    challenge: ["Poor quality leads", "Low site visits", "Need better inquiry quality"],
    approach: [
      "Creative testing",
      "Offer optimization",
      "Audience refinement",
      "Buyer-focused messaging",
      "Continuous optimization",
    ],
    results: ["1,574+ Qualified Buyer Inquiries", "₹179.67 Average CPL", "₹2.82L Meta Ad Spend", "60 Days"],
    proof: ads1,
    placeholder: false,
  },
  {
    title: "Case Study 2 — Project Name",
    meta: "Location · Campaign Window",
    challenge: ["Add challenge point", "Add challenge point"],
    approach: ["Add approach point", "Add approach point"],
    results: ["Add verified result", "Add verified result"],
    proof: ads3,
    placeholder: true,
  },
  {
    title: "Case Study 3 — Project Name",
    meta: "Location · Campaign Window",
    challenge: ["Add challenge point", "Add challenge point"],
    approach: ["Add approach point", "Add approach point"],
    results: ["Add verified result", "Add verified result"],
    proof: ads4,
    placeholder: true,
  },
];

const audience = [
  {
    title: "Real Estate Developers & Channel Partners",
    body: "For teams looking to generate a more predictable flow of qualified buyer inquiries.",
  },
  {
    title: "Teams Ready For A Complete System",
    body: "For businesses that want an inquiry-to-site-visit system instead of simply increasing ad spend.",
  },
  {
    title: "Decision Makers Ready To Act",
    body: "For decision-makers who can evaluate the strategy and move forward within the next 30 days.",
  },
];

function PrimaryCTA({ className = "", label = "Book a Free Strategy Call" }: { className?: string; label?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground purple-glow transition hover:opacity-90 ${className}`}
    >
      <CalendarCheck className="h-4 w-4 shrink-0" />
      {label}
      <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-6">
        <a href="#" className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-[11px] font-bold text-primary-foreground">
            11
          </span>
          <span className="truncate">
            ElevenX <span className="font-normal text-muted-foreground">Media</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground purple-glow transition hover:opacity-90 md:inline-flex"
          >
            Book a Free Strategy Call
          </a>
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
            <PrimaryCTA className="mt-3 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroMetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card px-4 py-3 md:px-5 md:py-4">
      <div className="text-lg font-semibold tracking-tight md:text-xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-purple)" }}
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-14 px-5 md:px-6 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Performance Marketing for Real Estate
          </div>
          <h1 className="mt-6 text-[34px] font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl lg:text-[60px]">
            Generate Qualified Buyer Inquiries That Turn Into Site Visits.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We help real estate developers and channel partners build predictable buyer acquisition systems using the{" "}
            <span className="text-foreground">Buyer Inquiry Engine™</span>.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCTA className="w-full sm:w-auto" />
            <a
              href="#results"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-card sm:w-auto"
            >
              View Results
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute inset-0 -m-6 rounded-[40px]"
              style={{ background: "radial-gradient(circle at 50% 45%, oklch(0.66 0.22 295 / 40%), transparent 62%)" }}
            />
            <img
              src={founderImg}
              alt="Yogesh Chouhan, Founder of ElevenX Media"
              width={944}
              height={1152}
              className="relative mx-auto w-full max-w-[420px] object-contain"
            />
            {/* Desktop floating metric cards */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-0 top-6 w-44"><HeroMetricCard {...heroMetrics[0]} /></div>
              <div className="absolute right-0 top-16 w-40"><HeroMetricCard {...heroMetrics[1]} /></div>
              <div className="absolute bottom-16 left-0 w-52"><HeroMetricCard {...heroMetrics[2]} /></div>
              <div className="absolute bottom-6 right-0 w-40"><HeroMetricCard {...heroMetrics[3]} /></div>
            </div>
          </div>
          {/* Mobile / tablet 2x2 grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
            {heroMetrics.map((m) => (
              <HeroMetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            We Build Buyer Acquisition Systems.
            <br />
            <span className="text-muted-foreground">Not Just Meta Ads Campaigns.</span>
          </h2>
        </div>
        <div className="space-y-5 text-base text-muted-foreground md:text-lg lg:col-span-6 lg:col-start-7">
          <p>Most agencies focus on generating cheap leads.</p>
          <p className="text-foreground">
            ElevenX Media focuses on building complete buyer acquisition systems designed to attract serious buyers and
            improve the journey from inquiry to site visit.
          </p>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Results</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Real Campaign Results.</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {resultMetrics.map((m) => (
          <div key={m.label} className="glass-card p-5 md:p-6">
            <div className="text-2xl font-semibold tracking-tight md:text-3xl">{m.value}</div>
            <div className="mt-1 text-xs text-muted-foreground md:text-sm">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="glass-card overflow-hidden lg:col-span-8">
          <img src={ads1} alt="Meta Ads Manager campaign overview" loading="lazy" width={1400} height={900} className="w-full" />
        </div>
        <div className="glass-card overflow-hidden lg:col-span-4">
          <img
            src={ads2}
            alt="Meta Ads Manager performance breakdown"
            loading="lazy"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Studies</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Selected Projects.</h2>
      </div>
      <div className="mt-10 space-y-6">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 md:p-8 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{cs.title}</h3>
                  {cs.placeholder && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                      Placeholder — add details
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{cs.meta}</p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-primary">Challenge</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {cs.challenge.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-primary">Approach</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {cs.approach.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">Results</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.results.map((r) => (
                      <span key={r} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative min-h-[220px] border-t border-border lg:col-span-5 lg:border-l lg:border-t-0">
                <img
                  src={cs.proof}
                  alt={`${cs.title} campaign proof`}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CampaignProof() {
  const gallery = [ads2, ads3, ads4];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Campaign Proof</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Straight From Ads Manager.</h2>
          <p className="mt-3 text-muted-foreground">
            Unedited performance views from live real estate campaigns.
          </p>
        </div>
        <div className="mt-10 glass-card overflow-hidden">
          <img src={ads1} alt="Featured Meta Ads Manager proof" loading="lazy" width={1400} height={900} className="w-full" />
        </div>
      </div>
      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-auto md:max-w-[1280px] md:grid md:grid-cols-3 md:overflow-visible md:px-6">
        {gallery.map((src, i) => (
          <div key={i} className="glass-card w-[85%] shrink-0 snap-center overflow-hidden md:w-auto">
            <img
              src={src}
              alt={`Supporting campaign screenshot ${i + 1}`}
              loading="lazy"
              width={1400}
              height={900}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why ElevenX</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Built For Buyer Intent.</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="glass-card p-6 transition hover:-translate-y-1 hover:border-white/20">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <div className="mt-6 text-base font-medium">{p.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Social Proof</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">What Clients Say.</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="glass-card flex min-h-[320px] items-center justify-center p-8 text-center lg:col-span-5">
          <div>
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Placeholder — drop the WhatsApp client feedback screenshot here (personal details blurred). Nothing is
              shown until the real screenshot is added.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg text-foreground md:text-xl">
            Client feedback is shown exactly as received — no rewritten testimonials.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Add the original WhatsApp screenshot to publish this section.
          </p>
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="glass-card relative overflow-hidden p-8 md:p-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 20% 0%, oklch(0.66 0.22 295 / 25%), transparent 60%)" }}
        />
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">90-Day Performance Commitment</h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-foreground">
              If we don't generate the agreed number of qualified buyer inquiries within the agreed 90-day period, we
              continue working at no additional management fee until the agreed target is achieved.
            </p>
            <p className="text-muted-foreground">
              Our goal isn't to generate more leads. It's to generate the right buyer inquiries.
            </p>
            <p className="text-xs text-muted-foreground">
              Subject to mutually agreed project criteria, ad spend, tracking and qualification standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Fit</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Who This Strategy Call Is Best For.</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {audience.map((a, i) => (
          <div key={a.title} className="glass-card p-6">
            <div className="text-xs text-primary">0{i + 1}</div>
            <div className="mt-4 text-base font-medium">{a.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-6 md:py-20">
      <div className="glass-card grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-[auto_minmax(0,1fr)] md:p-10">
        <img
          src={founderImg}
          alt="Yogesh Chouhan, Founder of ElevenX Media"
          loading="lazy"
          width={472}
          height={576}
          className="mx-auto h-40 w-40 rounded-2xl bg-primary/10 object-cover object-top md:h-48 md:w-48"
        />
        <div className="min-w-0">
          <div className="text-xl font-semibold tracking-tight md:text-2xl">Yogesh Chouhan</div>
          <div className="mt-1 text-sm text-muted-foreground">Founder, ElevenX Media</div>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Helping real estate developers and channel partners build predictable buyer acquisition systems through
            performance marketing.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 py-20 md:px-6 md:py-28">
      <div className="glass-card relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 20%, oklch(0.66 0.22 295 / 35%), transparent 60%)" }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-gradient md:text-5xl">
            Ready To Generate More Qualified Buyer Inquiries?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Let's review your project and see whether the Buyer Inquiry Engine™ is a good fit.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCTA className="w-full sm:w-auto" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-card sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-5 py-10 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
            11
          </span>
          ElevenX Media
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ElevenX Media · Performance Marketing for Real Estate
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <About />
        <Results />
        <CaseStudies />
        <CampaignProof />
        <Why />
        <SocialProof />
        <Commitment />
        <Audience />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
