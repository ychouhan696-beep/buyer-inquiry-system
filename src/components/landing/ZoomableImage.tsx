import { Plus, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  children?: ReactNode;
};

export function ZoomableImage({ src, alt, imageClassName = "", wrapperClassName = "", children }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${wrapperClassName}`}>
      <button type="button" onClick={() => setOpen(true)} aria-label={`View ${alt} fullscreen`} className="block h-full w-full cursor-zoom-in">
        <img src={src} alt={alt} loading="lazy" className={imageClassName} />
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge image"
        className="absolute top-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white text-background shadow-[0_8px_20px_-6px_oklch(0_0_0/60%)] transition-transform duration-300 hover:scale-105"
      >
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </button>
      {children}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </div>
  );
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-background/80 p-6 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close fullscreen image"
        className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white text-background shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain"
      />
    </div>,
    document.body,
  );
}
