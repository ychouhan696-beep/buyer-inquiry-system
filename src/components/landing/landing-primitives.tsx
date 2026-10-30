import { useEffect, useRef, type ReactNode } from "react";
import logoImg from "@/assets/elevenx-logo.png";
import { BOOKING_URL } from "@/lib/site-config";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <a href="#top" aria-label="ElevenX Media, back to top" className="flex shrink-0 items-center">
      <img src={logoImg} alt="ElevenX Media" className={`w-auto ${className}`} width={1560} height={569} />
    </a>
  );
}

const buttonBase =
  "btn-lift inline-flex items-center justify-center rounded-full font-medium tracking-tight whitespace-nowrap";

export function PrimaryButton({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const size = compact ? "px-5 py-2.5 text-sm" : "px-7 py-4 text-[15px]";
  if (!BOOKING_URL) {
    return (
      <button
        type="button"
        disabled
        title="Booking link coming soon"
        className={`${buttonBase} ${size} ${className} cursor-not-allowed bg-primary text-primary-foreground opacity-60`}
      >
        Book Strategy Call
      </button>
    );
  }
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`${buttonBase} ${size} ${className} bg-primary text-primary-foreground hover:bg-white/90 hover:shadow-[0_14px_32px_-14px_oklch(1_0_0/45%)]`}
    >
      Book Strategy Call
    </a>
  );
}

export function SecondaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`${buttonBase} px-7 py-4 text-[15px] ${className} border border-glow/60 text-foreground shadow-[0_0_28px_-10px_oklch(0.62_0.19_260/70%)] hover:bg-glow/10 hover:shadow-[0_0_36px_-8px_oklch(0.62_0.19_260/85%)]`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({ title, className = "" }: { title: string; className?: string }) {
  return <h2 className={`text-4xl tracking-[-0.035em] md:text-5xl ${className}`}>{title}</h2>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
