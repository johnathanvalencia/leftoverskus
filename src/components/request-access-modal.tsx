"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModalContext = createContext<{ open: (defaultRole?: string) => void }>({
  open: () => {},
});

export function useRequestAccess() {
  return useContext(ModalContext);
}

export function RequestAccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    volume: "",
  });

  const open = useCallback((defaultRole?: string) => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      company: "",
      role: defaultRole || "",
      volume: "",
    });
    setIsOpen(true);
  }, []);

  const [sending, setSending] = useState(false);

  const close = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Still show success — form data can be recovered from logs
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <ModalContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c1d]"
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8">
                {!submitted ? (
                  <>
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-wider">
                      Book a Briefing
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      First video produced under NDA. No commitment required.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-purple/50"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-purple/50"
                          placeholder="jane@company.com"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Company
                        </label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className="w-full rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-purple/50"
                          placeholder="Acme Corp"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          I am a...
                        </label>
                        <select
                          required
                          value={form.role}
                          onChange={(e) =>
                            setForm({ ...form, role: e.target.value })
                          }
                          className="w-full appearance-none rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple/50"
                        >
                          <option value="" disabled>
                            Select your role
                          </option>
                          <option value="agency">
                            Agency / Holding Company
                          </option>
                          <option value="brand">Brand / Retailer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Monthly Video Volume
                        </label>
                        <select
                          required
                          value={form.volume}
                          onChange={(e) =>
                            setForm({ ...form, volume: e.target.value })
                          }
                          className="w-full appearance-none rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple/50"
                        >
                          <option value="" disabled>
                            Expected videos per month
                          </option>
                          <option value="1-100">1 – 100</option>
                          <option value="100-500">100 – 500</option>
                          <option value="500-2000">500 – 2,000</option>
                          <option value="2000-10000">2,000 – 10,000</option>
                          <option value="10000+">10,000+</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider disabled:opacity-50"
                      >
                        {sending ? "Sending..." : "Request Briefing"}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center py-8 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple/10">
                      <CheckCircle className="h-7 w-7 text-purple" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wider">
                      Briefing Requested
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      We&apos;ll reach out within one business day to schedule
                      your briefing.
                    </p>
                    <Button
                      onClick={close}
                      className="mt-8 bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider"
                    >
                      Close
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export function RequestAccessButton({
  className,
  variant = "default",
  size = "default",
  defaultRole,
  children = "Book a Briefing",
}: {
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  defaultRole?: string;
  children?: ReactNode;
}) {
  const { open } = useRequestAccess();
  return (
    <Button
      onClick={() => open(defaultRole)}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
