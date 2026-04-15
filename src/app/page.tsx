import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DnaBackground } from "@/components/dna-background";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { RequestAccessButton } from "@/components/request-access-modal";
import { Shield, Eye, Lock, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* ── Section 1: Hero ── */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <DnaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp delay={0.1}>
              <h1 className="font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Brand-Governed Video.
                <br />
                Commerce Scale.
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Zero Hallucinations.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The enterprise production platform for agencies and brands that
                need compliant video faster than any team can produce it.
              </p>
            </FadeUp>

            <FadeIn delay={0.4} className="mt-10 border-t border-white/[0.06] pt-10">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Trusted by Tier-1 agency networks &middot; Evidence-backed
                compliance &middot; Pay only for approved output
              </p>
            </FadeIn>

            <FadeUp delay={0.5} className="mt-6 flex flex-wrap gap-4">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Briefing
              </RequestAccessButton>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-purple/30 px-4 py-2 font-mono text-xs uppercase tracking-wider text-purple transition-colors hover:bg-purple/10"
              >
                See the Platform
                <ArrowRight className="h-3 w-3" />
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Section 2: The Brand Video Gap ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[60fr_40fr] lg:gap-32">
              <FadeUp>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                  The Core Problem
                </p>
                <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                  The Brand
                  <br />
                  <span className="text-muted-foreground">Video Gap.</span>
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Commerce demands thousands of product videos — per season, per
                  market, per platform. Brand governance demands every one of them
                  be compliant, on-brand, and legally defensible.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white font-semibold">
                  No production model bridges that gap. Until now.
                </p>
              </FadeUp>

              <SlideIn from="right" delay={0.2} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-heading text-5xl font-extrabold text-purple">
                      85%
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      of product SKUs have zero video coverage
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-heading text-5xl font-extrabold text-purple">
                      4–6 wks
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      average production cycle per video
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-heading text-5xl font-extrabold text-purple">
                      73%
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      of brands cite compliance as top AI video barrier
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Section 3: The Shift ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                From Production Line
                <br />
                <span className="text-muted-foreground">
                  to Production Platform.
                </span>
              </h2>
            </FadeUp>

            <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
              {[
                {
                  before: "Video is a service line",
                  after: "Video is infrastructure",
                },
                {
                  before: "Cost scales with headcount",
                  after: "Cost scales with output",
                },
                {
                  before: "Compliance is a review step",
                  after: "Compliance is built into generation",
                },
                {
                  before: "Brand guidelines are PDFs",
                  after: "Brand DNA is a living system",
                },
                {
                  before: "One video at a time",
                  after: "Thousands, governed, simultaneously",
                },
              ].map((row) => (
                <FadeUp key={row.before}>
                  <div className="grid grid-cols-2 bg-surface">
                    <div className="p-5 border-r border-white/[0.06]">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Before
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {row.before}
                      </p>
                    </div>
                    <div className="p-5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-purple mb-2">
                        After
                      </p>
                      <p className="text-sm text-white leading-relaxed">
                        {row.after}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                PathLLM is not a creative tool. It&apos;s the governed
                production layer your brand infrastructure has been missing.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Section 4: How It Works (The Engine) ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                How It
                <br />
                Works.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                Three steps from brand assets to governed video at scale.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  num: "01",
                  title: "Extract",
                  desc: "Upload brand assets and guidelines. PathLLM extracts your Brand DNA — the visual grammar, motion language, and compliance rules that make your brand yours.",
                },
                {
                  num: "02",
                  title: "Synthesize",
                  desc: "Define intent. Select products. The platform synthesizes governed video from verified brand elements — every frame composed against your Brand DNA, not imagined from a prompt.",
                },
                {
                  num: "03",
                  title: "Deploy",
                  desc: "Approved videos go live. Full audit trail. Every asset traceable, defensible, and yours.",
                },
              ].map((step) => (
                <StaggerItem key={step.title} className="h-full">
                  <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
                    <span className="font-heading text-2xl font-bold text-purple">
                      {step.num}
                    </span>
                    <h3 className="mt-3 font-heading text-sm font-bold uppercase tracking-wider">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.3} className="mt-8">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple transition-colors hover:text-purple-light"
              >
                See the full platform architecture
                <ArrowRight className="h-3 w-3" />
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Section 5: Who It's For ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Built for the Teams
                <br />
                <span className="text-muted-foreground">
                  That Scale Brands.
                </span>
              </h2>
            </FadeUp>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <FadeUp delay={0.1}>
                <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider">
                    For Agencies & Holding Companies
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Turn video production from a cost center into a
                    margin-positive capability. One deployment serves your entire
                    client portfolio — every brand governed independently, every
                    asset isolated.
                  </p>
                  <Link
                    href="/solutions/agencies"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple transition-colors hover:text-purple-light"
                  >
                    See agency solutions
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider">
                    For Brands
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Cover your full product catalog with governed video — not
                    just the hero SKUs. From 15% coverage to 100%, with every
                    asset compliant, on-brand, and legally defensible.
                  </p>
                  <Link
                    href="/solutions/brands"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple transition-colors hover:text-purple-light"
                  >
                    See brand solutions
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Section 6: Governance & Trust ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <FadeUp>
                <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                  Governance Isn&apos;t a Feature.
                  <br />
                  <span className="text-muted-foreground">
                    It&apos;s the Architecture.
                  </span>
                </h2>
              </FadeUp>
            </div>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: Shield,
                  title: "Zero Hallucinations",
                  desc: "Every output is evidence-backed. No generated elements outside your approved asset library.",
                },
                {
                  icon: Eye,
                  title: "Full Audit Trail",
                  desc: "Cryptographic provenance for every frame. Know exactly what was used and why.",
                },
                {
                  icon: Lock,
                  title: "Your Data, Your Perimeter",
                  desc: "Brand assets never leave your environment. No shared models. No cross-client leakage.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
                    <item.icon className="mb-4 h-5 w-5 text-purple" />
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.3} className="mt-8">
              <Link
                href="/governance"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple transition-colors hover:text-purple-light"
              >
                Read the full governance framework
                <ArrowRight className="h-3 w-3" />
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── Section 7: CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Close the Gap.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10 flex justify-center gap-4 flex-wrap">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Briefing
              </RequestAccessButton>
              <RequestAccessButton
                defaultRole="agency"
                variant="outline"
                className="border-purple/30 text-purple hover:bg-purple/10 font-mono text-xs uppercase tracking-wider"
              >
                Book an Agency Briefing
              </RequestAccessButton>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
                First video produced under NDA. Agency briefings available for
                qualified holding company and independent agency contacts. All
                assets fully deleted on exit. No commitment, no lock-in.
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
