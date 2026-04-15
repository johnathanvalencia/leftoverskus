import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { RequestAccessButton } from "@/components/request-access-modal";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <Badge className="mb-6">Pricing</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Pay for
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Approved Output.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                No per-seat licensing. No platform fees for unused capacity.
                You pay for governed video that passes compliance — nothing else.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Pricing Principles ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                How Pricing
                <br />
                Works
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  title: "Output-Based",
                  desc: "You're billed for approved, compliant videos that pass governance checks. Iterations and rejected outputs don't count against your usage.",
                },
                {
                  title: "Volume-Tiered",
                  desc: "Economics improve as you scale. Whether you're producing 100 or 10,000 governed videos per month, the per-unit cost decreases with commitment.",
                },
                {
                  title: "Enterprise-Flexible",
                  desc: "Multi-brand contracts, agency portfolio pricing, and custom deployment models. Every engagement is scoped to your specific infrastructure needs.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── What's Included ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Every Plan
                <br />
                Includes
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.08}
            >
              {[
                "Brand DNA extraction and setup",
                "Full governance and compliance engine",
                "Cryptographic audit trails",
                "Multi-platform format delivery",
                "Dedicated onboarding",
                "API and SDK access",
                "SSO and role-based access",
                "Data isolation per brand",
                "Priority support",
              ].map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-surface px-5 py-4">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Let&apos;s Scope It.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Every deployment is different. Tell us about your catalog size,
                brand portfolio, and production volume — we&apos;ll build a
                proposal that fits.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Briefing
              </RequestAccessButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
