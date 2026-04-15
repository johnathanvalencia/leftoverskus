"use client";

import Link from "next/link";
import { useRequestAccess } from "@/components/request-access-modal";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "How It Works" },
      { href: "/platform#architecture", label: "Architecture" },
      { href: "/platform#integrations", label: "Integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/agencies", label: "For Agencies" },
      { href: "/solutions/brands", label: "For Brands" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "About" },
      { href: "/governance", label: "Governance" },
      { href: "#contact", label: "Contact", action: "modal" as const },
    ],
  },
  // {
  //   title: "Legal",
  //   links: [
  //     { href: "#", label: "Privacy Policy" },
  //     { href: "#", label: "Terms of Service" },
  //     { href: "#", label: "Security" },
  //   ],
  // },
];

export function Footer() {
  const { open } = useRequestAccess();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"action" in link && link.action === "modal" ? (
                      <button
                        onClick={() => open()}
                        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-white"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:justify-between">
          <div>
            <Link
              href="/"
              className="font-heading text-sm font-bold tracking-wider"
            >
              PathLLM.ai
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Governed video production at commerce scale.
            </p>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            &copy; 2026 PathLLM.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
