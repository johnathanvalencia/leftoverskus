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

const ModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useRequestAccess() {
  return useContext(ModalContext);
}

export function RequestAccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", skuSize: "" });

  const open = useCallback(() => {
    setSubmitted(false);
    setForm({ name: "", email: "", skuSize: "" });
    setIsOpen(true);
  }, []);

  const close = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c1d]"
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
                      Request Access
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Join the private beta. Limited spots available.
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
                          Email
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
                          SKU Size
                        </label>
                        <select
                          required
                          value={form.skuSize}
                          onChange={(e) =>
                            setForm({ ...form, skuSize: e.target.value })
                          }
                          className="w-full appearance-none rounded-lg border border-white/[0.06] bg-[#050510] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple/50"
                        >
                          <option value="" disabled>
                            Select your catalog size
                          </option>
                          <option value="1-500">1 – 500 SKUs</option>
                          <option value="500-5000">500 – 5,000 SKUs</option>
                          <option value="5000-50000">
                            5,000 – 50,000 SKUs
                          </option>
                          <option value="50000+">50,000+ SKUs</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider"
                      >
                        Submit Request
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center py-8 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple/10">
                      <CheckCircle className="h-7 w-7 text-purple" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wider">
                      You&apos;re In
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      We&apos;ll send a confirmation to your inbox with next
                      steps. Welcome to the rebellion.
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
  children = "Request Access",
}: {
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  children?: ReactNode;
}) {
  const { open } = useRequestAccess();
  return (
    <Button onClick={open} className={className} variant={variant} size={size}>
      {children}
    </Button>
  );
}
