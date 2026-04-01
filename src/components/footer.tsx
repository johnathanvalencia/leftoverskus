import Link from "next/link";

const footerLinks = [
  { href: "/the-stack", label: "THE STACK" },
  { href: "/neural-debt", label: "NEURAL DEBT" },
  { href: "/company", label: "COMPANY" },
  { href: "#", label: "PRIVACY" },
  { href: "#", label: "TERMS" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-8">
        <Link
          href="/"
          className="font-heading text-sm font-bold uppercase tracking-wider"
        >
          Left Over SKUs
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          &copy; 2024 Left Over SKUs. Synthetic Media Things.
        </p>
      </div>
    </footer>
  );
}
