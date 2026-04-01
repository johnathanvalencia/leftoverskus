"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { RequestAccessButton } from "@/components/request-access-modal";

const navLinks = [
  { href: "/the-stack", label: "THE STACK" },
  { href: "/neural-debt", label: "NEURAL DEBT" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#050510]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-sm font-bold uppercase tracking-wider"
        >
          Left Over SKUs
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-mono text-[11px] uppercase tracking-wider transition-colors hover:text-white",
                pathname === link.href
                  ? "text-white font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <RequestAccessButton
            className="hidden md:inline-flex bg-purple hover:bg-purple-dark text-white text-[11px] uppercase tracking-wider font-mono"
            size="sm"
          >
            Request Access
          </RequestAccessButton>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#050510]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider transition-colors",
                  pathname === link.href
                    ? "text-white"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <RequestAccessButton
              className="mt-2 bg-purple hover:bg-purple-dark text-white text-xs uppercase tracking-wider font-mono"
              size="sm"
            >
              Request Access
            </RequestAccessButton>
          </div>
        </div>
      )}
    </nav>
  );
}
