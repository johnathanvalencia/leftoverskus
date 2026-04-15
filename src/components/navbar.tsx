"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { RequestAccessButton } from "@/components/request-access-modal";

const navLinks = [
  { href: "/platform", label: "PLATFORM" },
  {
    label: "SOLUTIONS",
    children: [
      { href: "/solutions/agencies", label: "For Agencies" },
      { href: "/solutions/brands", label: "For Brands" },
    ],
  },
  { href: "/governance", label: "GOVERNANCE" },
  { href: "/pricing", label: "PRICING" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSolutionsActive =
    pathname.startsWith("/solutions/agencies") ||
    pathname.startsWith("/solutions/brands");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#050510]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="cursor-pointer font-heading text-sm font-bold tracking-wider"
        >
          PathLLM.ai
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={cn(
                    "cursor-pointer flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider transition-colors hover:text-white",
                    isSolutionsActive
                      ? "text-white font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-44 overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0c1d] backdrop-blur-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className={cn(
                          "cursor-pointer block px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors hover:bg-white/[0.04] hover:text-white",
                          pathname === child.href
                            ? "text-white font-semibold"
                            : "text-muted-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className={cn(
                  "cursor-pointer font-mono text-[11px] uppercase tracking-wider transition-colors hover:text-white",
                  pathname === link.href
                    ? "text-white font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <RequestAccessButton
            className="cursor-pointer hidden md:inline-flex items-center justify-center rounded-lg bg-purple hover:bg-purple-dark text-white text-[11px] uppercase tracking-wider font-mono h-8 px-3 transition-colors"
            size="sm"
          >
            Book a Briefing
          </RequestAccessButton>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer md:hidden text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#050510]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.label} className="flex flex-col gap-3">
                  <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "cursor-pointer pl-4 font-mono text-sm uppercase tracking-wider transition-colors",
                        pathname === child.href
                          ? "text-white"
                          : "text-muted-foreground"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "cursor-pointer font-mono text-sm uppercase tracking-wider transition-colors",
                    pathname === link.href
                      ? "text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <RequestAccessButton
              className="cursor-pointer mt-2 inline-flex items-center justify-center rounded-lg bg-purple hover:bg-purple-dark text-white text-xs uppercase tracking-wider font-mono h-8 px-3 transition-colors"
              size="sm"
            >
              Book a Briefing
            </RequestAccessButton>
          </div>
        </div>
      )}
    </nav>
  );
}
