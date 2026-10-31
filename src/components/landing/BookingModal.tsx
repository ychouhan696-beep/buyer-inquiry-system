import { Modal } from "./Modal";
import { goldButtonClass } from "./button-classes";

const fields = [
  { id: "booking-name", label: "Name", type: "text", autoComplete: "name" },
  { id: "booking-phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "booking-location", label: "Project Location", type: "text", autoComplete: "off" },
  { id: "booking-inventory", label: "Inventory Value", type: "text", autoComplete: "off" },
];

export function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal label="Book Your Free Strategy Call" onClose={onClose}>
      <div className="max-h-[90vh] w-[min(92vw,30rem)] overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card-hover)] md:p-10">
        <h2 className="text-3xl tracking-[-0.03em]">Book Your Free Strategy Call</h2>
        <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
          Fill this 60 sec form, my team will call you within 24h
        </p>
        <div id="google-form-embed" className="mt-8">
          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            {fields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-foreground">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-foreground outline-none transition-colors duration-300 focus:border-glow"
                />
              </div>
            ))}
            <button type="submit" className={`${goldButtonClass} w-full px-7 py-4 text-[15px]`}>
              Submit
            </button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">No spam. We review your inventory before the call.</p>
      </div>
    </Modal>
  );
}
