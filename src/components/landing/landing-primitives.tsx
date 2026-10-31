import { useEffect, useRef, type ReactNode } from "react";
import logoImg from "@/assets/elevenx-logo.png";
import { goldButtonClass, secondaryButtonClass } from "./button-classes";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfFSSR58dz_s4eJMR_avdg8vGqwv4og8P70l2QNQ7Jr_6izcw/viewform?usp=header";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <a href="#top" aria-label="ElevenX Media, back to top" className="flex shrink-0 items-center">
      <img
        src={logoImg}
        alt="ElevenX Media"
        className={`w-auto drop-shadow-[0_0_14px_oklch(0.62_0.19_260/45%)] ${className}`}
        width={1560}
        height={569}
      />
    </a>
  );
}

export function PrimaryButton({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const size = compact ? "px-5 py-2.5 text-sm" : "px-7 py-4 text-[15px]";
  return (
    <button
      type="button"
      onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
      className={`${goldButtonClass} ${size} ${className}`}
    >
      Book a Free Strategy Call
    </button>
  );
}

export function SecondaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={`${secondaryButtonClass} px-7 py-4 text-[15px] ${className}`}>
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
