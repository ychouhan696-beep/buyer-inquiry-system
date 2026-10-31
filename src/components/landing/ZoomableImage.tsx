import { Plus } from "lucide-react";
import { useCallback, useState, type ReactNode } from "react";
import { Modal } from "./Modal";

type ZoomableImageProps = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  children?: ReactNode;
};

export function ZoomableImage({ src, alt, imageClassName = "", wrapperClassName = "", children }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className={`relative ${wrapperClassName}`}>
      <button type="button" onClick={() => setOpen(true)} aria-label={`View ${alt} fullscreen`} className="block h-full w-full cursor-zoom-in">
        <img src={src} alt={alt} loading="lazy" className={imageClassName} />
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge image"
        className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-background shadow-[0_8px_20px_-6px_oklch(0_0_0/60%)] transition-transform duration-300 hover:scale-105"
      >
        <Plus className="h-4 w-4" strokeWidth={2.5} />
      </button>
      {children}
      {open && (
        <Modal label={alt} onClose={close}>
          <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain" />
        </Modal>
      )}
    </div>
  );
}
