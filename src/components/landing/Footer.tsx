import { Logo } from "./landing-primitives";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <Logo className="h-6" />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ElevenX Media. Built for real estate builders and developers.
        </p>
      </div>
    </footer>
  );
}
