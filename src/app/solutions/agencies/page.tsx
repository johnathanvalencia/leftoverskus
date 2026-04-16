import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { RequestAccessButton } from "@/components/request-access-modal";
import {
  TrendingUp,
  Layers,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PathLLM for Agencies — Governed AI Video Production at Portfolio Scale",
  description:
    "One platform deployment. Every brand in your portfolio. PathLLM replaces per-video production costs with governed AI video — margin-positive, compliant, and scalable across all clients.",
  openGraph: {
    title: "PathLLM for Agencies — Governed AI Video at Portfolio Scale",
    description:
      "Replace per-video production costs with governed AI video. One platform, every brand, margin-positive economics for agencies and holding companies.",
    url: "/solutions/agencies",
    siteName: "PathLLM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathLLM for Agencies — Governed AI Video at Portfolio Scale",
    description:
      "Replace per-video production costs with governed AI video. One platform, every brand, margin-positive economics for agencies and holding companies.",
  },
  alternates: {
    canonical: "/solutions/agencies",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PathLLM for Agencies",
  description:
    "AI-powered governed video production platform that serves an agency's entire client portfolio — each brand governed by its own DNA, fully isolated, margin-positive.",
  brand: { "@type": "Brand", name: "PathLLM" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    description: "Book an agency briefing. References available under NDA.",
  },
};

export default function ForAgencies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <Badge className="mb-6">For Agencies & Holding Companies</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-2xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Your Production Model
                <br />
                Is Your Margin Problem.
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  PathLLM Fixes the Economics.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                One platform deployment. Every brand in your portfolio. Governed,
                compliant, margin-positive video production — without the
                headcount, the rework, or the client retention risk.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Agency Problem ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                The Structural Problem
              </p>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                The Margin
                <br />
                <span className="text-muted-foreground">
                  Compression Loop.
                </span>
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <SlideIn from="left" delay={0.15}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Video production is your highest-cost, lowest-margin service
                  line. Headcount scales linearly. Client demand doesn&apos;t.
                  And every year, more clients threaten to bring it in-house —
                  not because they can do it better, but because they think they
                  can do it cheaper.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white font-semibold">
                  This isn&apos;t a production problem. It&apos;s a structural
                  economics problem. And it requires an infrastructure solution,
                  not a faster editing tool.
                </p>
              </SlideIn>

              <SlideIn from="right" delay={0.25}>
                <div className="relative overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="bg-surface p-8">
                    <div className="space-y-6">
                      {[
                        { label: "Headcount Cost", trend: "Linear growth" },
                        { label: "Client Demand", trend: "Exponential growth" },
                        { label: "Margin", trend: "Compression" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-wider text-purple">
                            {item.trend}
                          </span>
                        </div>
                      ))}
                    </div>
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

        {/* ── Value Props ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                The PathLLM
                <br />
                Advantage
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: TrendingUp,
                  num: "01",
                  title: "Margin Recovery",
                  subtitle: "Turn Production Into a Profit Center",
                  desc: "Replace per-video production costs with a governed AI pipeline. Near-zero marginal cost per additional video. Reprice the output. Keep the margin. Your clients get faster delivery. You get better economics on every brief.",
                },
                {
                  icon: Layers,
                  num: "02",
                  title: "Portfolio Scale",
                  subtitle: "One Implementation, Every Brand",
                  desc: "A single PathLLM deployment serves your entire client portfolio. Each brand is governed by its own DNA, fully isolated — assets, learnings, and outputs never cross-contaminate. The more brands you onboard, the stronger the economics.",
                },
                {
                  icon: Zap,
                  num: "03",
                  title: "Competitive Moat",
                  subtitle: "Your AI Story Becomes a Live Capability",
                  desc: "Every holding company is pitching AI transformation. PathLLM gives your teams a deployed, provable production workflow — not a roadmap slide. Bring it to your next pitch as a working demo.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                    <div className="flex items-start justify-between">
                      <span className="font-heading text-2xl font-bold text-purple">
                        {item.num}
                      </span>
                      <item.icon className="h-5 w-5 text-purple" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-purple">
                      {item.subtitle}
                    </p>
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

        {/* ── Use Cases ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Use Cases
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  title: "Retail Media Activation",
                  desc: "Amazon, Walmart Connect, TikTok Shop — retail media networks demand fresh creative at a cadence no human team can sustain. PathLLM handles activation-speed production. Your teams stay on strategy.",
                },
                {
                  title: "Seasonal Refresh at Scale",
                  desc: "Format adaptations, market localizations, seasonal updates across hundreds of SKUs — the high-volume variation layer that consumes creative talent but doesn't require creative judgment.",
                },
                {
                  title: "New Business Pitching",
                  desc: "Walk into a pitch with a live AI production capability already deployed. Show the prospect their own product rendered through governed AI video in real time.",
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Deployment Model ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Deployment
                <br />
                Model
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                PathLLM routes through your existing agency framework.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.08}
            >
              {[
                "Multi-brand contracts under single procurement",
                "White-label and co-brand deployment",
                "Client-facing dashboards under your brand",
                "Full data isolation per client",
                "Output-based billing — pay for approved videos",
                "Dedicated account architecture",
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
                Fix the Economics.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10">
              <RequestAccessButton defaultRole="agency" className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book an Agency Briefing
              </RequestAccessButton>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
                References available under NDA via current Tier-1 agency
                partners.
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
