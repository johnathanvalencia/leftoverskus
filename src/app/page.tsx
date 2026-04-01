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
import { Badge } from "@/components/ui/badge";
import { RequestAccessButton } from "@/components/request-access-modal";
import { Shield, Eye, Scale } from "lucide-react";

const investors = ["a16z", "Sequoia", "Accenture", "Google Ventures"];
const brands = ["Nike", "Unilever", "L\u2019Or\u00e9al", "Shopify", "LVMH"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <DnaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <Badge className="mb-6">$18.5M Series A — Oversubscribed</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-5xl font-extrabold uppercase tracking-tight sm:text-7xl lg:text-8xl">
                Synthetic Video.
                <br />
                Infinite SKUs.
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Zero Waste.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The end of manual production is dead. We mine your brand&apos;s
                core essence to synthesize infinite, high-fidelity video assets.
                No cameras. No crews. Just raw digital genius.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="hidden mt-6 font-mono text-xs uppercase tracking-widest text-purple">
                Private Beta — 200+ Brands Onboarded
              </p>
            </FadeUp>

            {/* Investor logos */}
            <FadeIn delay={0.5} className="mt-10 border-t border-white/[0.06] pt-10">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Backed By
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                {investors.map((name) => (
                  <span
                    key={name}
                    className="font-heading text-lg font-bold uppercase tracking-wider text-white/30"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Brand logos */}
            <FadeIn delay={0.65} className="mt-10">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                In Private Beta With
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                {brands.map((name) => (
                  <span
                    key={name}
                    className="font-heading text-lg font-bold uppercase tracking-wider text-white/20"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Hero SKU Trap ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[60fr_40fr] lg:gap-32">
              <FadeUp>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                  The Efficiency Gap
                </p>
                <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                  The Hero
                  <br />
                  <span className="text-muted-foreground">SKU Trap.</span>
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Most brands pour 100% of their budget into the top{" "}
                  <span className="font-semibold text-white underline underline-offset-4 decoration-purple/50">
                    15% of products.
                  </span>
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  The other 85%? They&apos;re left to die in a graveyard of
                  static imagery. &ldquo;Left Over SKUs&rdquo; are the massive
                  missed opportunity for conversion, lower returns, and SEO
                  dominance.
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Traditional video is too slow. Hollywood crews are too
                  expensive. We use AI to bridge the gap, covering your entire
                  long-tail at the speed of thought.
                </p>
              </FadeUp>

              <SlideIn from="right" delay={0.2} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.06] lg:mt-6">
                  {/* 15% Heroes bar */}
                  <div className="flex items-center justify-between bg-purple px-5 py-3">
                    <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                      15% Heroes
                    </span>
                    <svg
                      className="h-6 w-6 text-white/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>

                  {/* 85% Left Overs block — grows to fill remaining height */}
                  <div className="flex flex-1 flex-col justify-center bg-surface p-8">
                    <p className="font-heading text-7xl font-extrabold text-white">
                      85%
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold uppercase tracking-wider">
                      The Left Overs
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>Untapped SEO</span>
                      <span className="text-purple">•</span>
                      <span>High Returns</span>
                      <span className="text-purple">•</span>
                      <span>Zero Video</span>
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

        {/* ── The Protocol ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                The
                <br />
                Protocol.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                Five steps from chaos to order. Our pipeline strips your brand
                to its visual atoms and reconstructs it for the synthetic era.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  num: "01",
                  title: "Upload",
                  desc: "Feed our engine your raw archive. Every frame, every font, every pixel of brand history.",
                },
                {
                  num: "02",
                  title: "Mine",
                  desc: "Neural crawlers extract your unique Brand DNA\u2014the subconscious cues that make you, you.",
                },
                {
                  num: "03",
                  title: "Create",
                  desc: "Define the intent. Set the mood. Orchestrate the vision through high-level tactical prompts.",
                },
                {
                  num: "04",
                  title: "Synthesize",
                  desc: "Watch as our engine renders high-fidelity assets in real-time. Native resolution, pure quality.",
                },
                {
                  num: "05",
                  title: "Audit",
                  desc: "Governance built into the grain. Every asset is verified for brand safety and legal compliance.",
                },
              ].map((step) => (
                <StaggerItem key={step.title}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
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
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Built for the Grind ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Built For
                <br />
                The Grind.
              </h2>
            </FadeUp>

            <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <FadeUp delay={0.1}>
                <div className="h-full rounded-lg border border-white/[0.06] bg-surface p-8">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider">
                    For Brands
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Scale your creative output without diluting your soul.
                    Maintain 100% brand consistency across every digital
                    touchpoint, globally, instantly.
                  </p>
                  <ul className="mt-6 space-y-3 font-mono text-xs uppercase tracking-wider text-white">
                    {[
                      "Infinite Scale",
                      "DNA Retention",
                      "Global Sync",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Center visual — circuit / chip pattern */}
              <FadeUp delay={0.15} className="hidden lg:flex">
                <div className="relative h-full w-28 overflow-hidden rounded-lg border border-white/[0.06] bg-surface">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] p-3">
                    {Array.from({ length: 24 }).map((_, row) => (
                      <div key={row} className="flex w-full gap-[3px]">
                        {Array.from({ length: 4 }).map((_, col) => {
                          const isPurple =
                            (row + col) % 5 === 0 || (row * col) % 7 === 0;
                          return (
                            <div
                              key={col}
                              className={`h-2 flex-1 rounded-[1px] ${
                                isPurple
                                  ? "bg-purple/30"
                                  : "bg-white/[0.04]"
                              }`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-surface to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-surface to-transparent" />
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="h-full rounded-lg border border-white/[0.06] bg-surface p-8">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider">
                    For Agencies
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The ultimate force multiplier for creative teams. Stop
                    fighting production bottlenecks and start designing at the
                    speed of thought.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The New Standard ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <FadeUp>
                <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                  The New
                  <br />
                  Standard.
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="max-w-sm text-lg italic text-muted-foreground lg:text-right">
                  &ldquo;Governance isn&apos;t a checkbox; it&apos;s the
                  foundation of the rebellion.&rdquo;
                </p>
              </FadeUp>
            </div>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: Shield,
                  title: "Neural Rights",
                  desc: "Your data never leaves your perimeter. We train on your terms, for your eyes only. No leakage. No shared weights.",
                },
                {
                  icon: Eye,
                  title: "Transparency Logs",
                  desc: "Full cryptographic audit trails for every synthesized asset. Know exactly what was used and when it was created.",
                },
                {
                  icon: Scale,
                  title: "Legal Guardrails",
                  desc: "Built-in compliance filters that automatically detect and prevent IP infringement before the first frame is rendered.",
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
          </div>
        </section>

        {/* ── Join The Unknown CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Join The
                <br />
                Unknown.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Request Access
              </RequestAccessButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
