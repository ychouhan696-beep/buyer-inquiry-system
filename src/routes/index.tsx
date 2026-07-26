import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Check, Sparkles, Target, LineChart, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import founderImg from "@/assets/founder.jpg";
import ads1 from "@/assets/ads-1.jpg";
import ads2 from "@/assets/ads-2.jpg";
import ads3 from "@/assets/ads-3.jpg";
import ads4 from "@/assets/ads-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20ElevenX%2C%20I%27d%20like%20to%20talk%20about%20a%20Buyer%20Inquiry%20Engine";

const metrics = [
  { value: "1574+", label: "Qualified Buyer Inquiries" },
  { value: "₹179.67", label: "Average CPL" },
  { value: "₹2.82L", label: "Meta Ad Spend" },
  { value: "Real Estate", label: "Performance Marketing" },
];

const pillars = [
  { icon: Sparkles, title: "Buyer Inquiry Engine™", body: "A proprietary system engineered end-to-end for buyer intent, not vanity leads." },
  { icon: Target, title: "Real Estate Focus", body: "We work exclusively with builders, developers, brokers and channel partners." },
  { icon: Layers, title: "Creative Testing", body: "Daily creative iteration on hooks, angles and offers until CPL breaks." },
  { icon: LineChart, title: "Performance Optimization", body: "Every rupee is tracked from impression to site-visit confirmation." },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground text-[11px] font-bold">11</span>
          ElevenX <span className="text-muted-foreground font-normal">Media</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#results" className="hover:text-foreground transition">Results</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground purple-glow hover:opacity-90 transition"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full" style={{ background: "var(--gradient-purple)" }} />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Performance Marketing for Real Estate
          </div>
          <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[72px] text-gradient">
            Generate qualified buyer inquiries that turn into site visits.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            ElevenX Media helps builders, developers, brokers and channel partners generate qualified buyer inquiries using the <span className="text-foreground">Buyer Inquiry Engine™</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground purple-glow hover:opacity-90 transition">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#results" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition">
              View Results
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -m-10 rounded-[40px]" style={{ background: "radial-gradient(circle at 60% 40%, oklch(0.66 0.22 295 / 55%), transparent 60%)" }} />
          <div className="relative glass-card overflow-hidden aspect-[4/5]">
            <img
              src={founderImg}
              alt="Founder, ElevenX Media"
              width={912}
              height={1104}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">
              <div>
                <div className="text-xs text-muted-foreground">Founder</div>
                <div className="text-sm font-medium">ElevenX Media</div>
              </div>
              <div className="text-xs text-primary">Available for 2 projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {metrics.map((m) => (
          <div key={m.label} className="px-6 py-10 md:px-8 md:py-14">
            <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{m.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            We build buyer inquiry systems.<br />
            <span className="text-muted-foreground">Not just Meta Ads campaigns.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground">
          <p>Most agencies focus on generating cheap leads.</p>
          <p className="text-foreground">
            ElevenX Media focuses on building complete buyer acquisition systems that attract serious buyers and convert them into qualified site visits.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-6">
            {["Intent-first targeting", "Buyer-grade creative", "CRM + call routing", "Site-visit attribution"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="results" className="relative mx-auto max-w-[1280px] px-6 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured case study</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Residential Township Project</h2>
          <p className="mt-2 text-muted-foreground">North India · 60-Day Performance Campaign</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="glass-card p-8 lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Challenge</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Poor quality leads</li>
            <li>Low site visits</li>
            <li>Need better inquiry quality</li>
          </ul>
        </div>
        <div className="glass-card p-8 lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Goal</div>
          <p className="mt-4 text-sm text-foreground">Increase qualified site visits from Meta Ads spend.</p>
        </div>
        <div className="glass-card p-8 lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Strategy</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Creative testing</li>
            <li>Offer optimization</li>
            <li>Audience refinement</li>
            <li>Buyer-focused messaging</li>
            <li>Continuous optimization</li>
          </ul>
        </div>

        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "1574+", l: "Qualified Inquiries" },
            { v: "₹179.67", l: "Average CPL" },
            { v: "₹2.82L", l: "Meta Ad Spend" },
            { v: "60 Days", l: "Campaign Window" },
          ].map((r) => (
            <div key={r.l} className="glass-card p-6">
              <div className="text-2xl font-semibold md:text-3xl">{r.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{r.l}</div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-8 glass-card overflow-hidden">
          <img src={ads1} alt="Meta Ads Manager campaign overview" loading="lazy" width={1400} height={900} className="w-full" />
        </div>
        <div className="lg:col-span-4 glass-card overflow-hidden">
          <img src={ads2} alt="Meta Ads Manager performance chart" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Campaign Highlights</div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Additional performance.</h2>
        <p className="mt-3 text-muted-foreground">A quiet look at more campaigns we've delivered for real-estate operators.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[ads3, ads4].map((src, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <img src={src} alt={`Campaign ${i + 1}`} loading="lazy" width={1400} height={900} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why ElevenX</div>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Built for buyer intent.</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

function FinalCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1280px] px-6 py-32">
      <div className="relative glass-card overflow-hidden px-8 py-20 text-center md:px-16 md:py-28">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 20%, oklch(0.66 0.22 295 / 35%), transparent 60%)" }} />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl text-gradient">
            Ready to generate more qualified buyer inquiries?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Let's build your Buyer Inquiry Engine.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground purple-glow hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">11</span>
          ElevenX Media
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ElevenX Media · Built for Real Estate Professionals
        </div>
      </div>
    </footer>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground purple-glow transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <About />
        <CaseStudy />
        <Highlights />
        <Why />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
