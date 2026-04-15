import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { RequestAccessButton } from "@/components/request-access-modal";
import {
  Sparkles,
  Video,
  ShieldCheck,
  Code,
  Layers,
} from "lucide-react";

export default function Platform() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <Badge className="mb-6">Platform Architecture</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-2xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                The Engine Behind
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Governed Video
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A production architecture built on Brand DNA — not prompt
                engineering. Every component exists to ensure the output is
                compliant before it&apos;s created, not after.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Architecture Overview ── */}
        <section id="architecture" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                The Pipeline
              </p>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Full Architecture
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 md:grid-cols-2"
              staggerDelay={0.15}
            >
              {/* 01 — Brand DNA Extraction */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      01
                    </span>
                    <Sparkles className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Brand DNA Extraction
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    PathLLM ingests your brand assets, guidelines, motion
                    language, and compliance rules. It doesn&apos;t read a PDF —
                    it builds a structured representation of your brand&apos;s
                    visual identity that governs every downstream decision.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Accuracy
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        99.8%
                      </p>
                    </div>
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Formats
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        200+
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* 02 — Token Mining */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-purple/20 bg-gradient-to-br from-purple/10 via-surface to-surface p-8 transition-colors hover:border-purple/30">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      02
                    </span>
                    <Layers className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Token Mining
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Source videos and images are analyzed to extract reusable
                    visual tokens — patterns, segments, transitions, motion
                    verbs. These populate your brand&apos;s private token
                    library.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-purple" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Every token attributed and traceable to source
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* 03 — Governed Generation */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      03
                    </span>
                    <Video className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Governed Generation
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Videos are synthesized by assembling tokens against your
                    Brand DNA. The generation engine doesn&apos;t improvise — it
                    composes from verified elements. Brand governance is enforced
                    at generation time, not review time.
                  </p>
                  <div className="mt-8 space-y-3">
                    {["Zero Hallucination Architecture", "Verified Elements Only"].map(
                      (feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-purple" />
                          {feature}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </StaggerItem>

              {/* 04 — Compliance Audit */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      04
                    </span>
                    <ShieldCheck className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Compliance Audit
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Every generated asset passes through automated compliance
                    checks — brand guidelines, legal constraints, platform
                    specifications — before it&apos;s marked as approved.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Scoring
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        Real-time
                      </p>
                    </div>
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Audit Trail
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        Cryptographic
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* 05 — Enterprise Deployment (full-width) */}
            <FadeUp className="mt-6">
              <div className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    05
                  </span>
                  <Code className="h-5 w-5 text-purple" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                  Enterprise Deployment
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                  Approved assets deploy through your existing workflow —
                  Shopify, Salesforce, direct API, or custom CMS integration.
                  Scale from 10 to 10,000 SKUs without changing the pipeline.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {["API & SDK Available", "Platform-Native Delivery", "Bulk Deployment"].map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-purple" />
                        {feature}
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Technical Differentiators ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Technical
                <br />
                Differentiators
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  title: "Brand DNA Layer",
                  desc: "Not a style transfer. Not a prompt template. A structured, queryable representation of your brand's visual grammar that acts as a constitutional constraint on every generation decision.",
                },
                {
                  title: "Evidence-Backed Output",
                  desc: "Every element in every frame traces back to an approved source asset. If a client asks \"where did this come from?\" — the answer is immediate, specific, and auditable.",
                },
                {
                  title: "Multi-Brand Isolation",
                  desc: "For agencies running multiple brands: each client's Brand DNA, assets, and outputs are fully isolated. No cross-contamination. No shared model weights. Separate governance, separate audit trails.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
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
          </div>
        </section>

        {/* Divider */}
        <div className="hidden mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Integrations (hidden) ── */}
        <section id="integrations" className="hidden py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Integrations
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                PathLLM operates as infrastructure — it plugs into your stack,
                not the other way around.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.1}
            >
              {[
                {
                  category: "Commerce",
                  items: ["Shopify", "BigCommerce", "Salesforce Commerce"],
                },
                {
                  category: "DAM Systems",
                  items: ["Bynder", "Brandfolder", "Salsify"],
                },
                {
                  category: "Retail Media",
                  items: ["Amazon", "Walmart Connect", "Instacart"],
                },
                {
                  category: "Custom",
                  items: ["REST API", "SDK", "Custom CMS"],
                },
              ].map((group) => (
                <StaggerItem key={group.category}>
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-purple">
                      {group.category}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
                See It In Action.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10 flex justify-center gap-4 flex-wrap">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Technical Briefing
              </RequestAccessButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
