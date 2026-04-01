import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RequestAccessButton } from "@/components/request-access-modal";
import { Clock, Target, DatabaseZap } from "lucide-react";

export default function NeuralDebt() {
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
              <Badge className="mb-6">Planning Institute</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-7xl lg:text-9xl">
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Neural
                </em>{" "}
                Debt
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The compounding cost of the &ldquo;Big Gap&rdquo; &mdash; an
                industry wake-up call.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Reality of Hidden SKUs ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                The Reality of
                <br />
                Hidden SKUs
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <SlideIn from="left" delay={0.15}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Most retailers are miscounting. They believe that top 15% of
                  SKUs are the business. They call this &ldquo;the
                  hero.&rdquo;
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  The truth? The remaining 85% are dying on the vine. This is
                  a blind spot — the invisible margin of a neglected data
                  universe, producing loss of opportunity that accumulates
                  faster in missed conversions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-heading text-4xl font-extrabold text-purple">
                      85%
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Untapped Focus
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-heading text-4xl font-extrabold text-purple">
                      -22%
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Conversion Decline
                    </p>
                  </div>
                </div>
              </SlideIn>

              <SlideIn from="right" delay={0.25}>
                <div className="relative overflow-hidden rounded-lg border border-white/[0.06]">
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple/15 via-surface to-surface-light">
                    <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                      <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-12 w-16 rounded-sm bg-gradient-to-br from-purple/20 to-purple/5"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-md border border-purple/30 bg-[#050510]/80 px-4 py-2 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-purple">
                      The Hero Trap
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* ── Three Info Cards ── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer
              className="grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  icon: Clock,
                  title: "SKU Lag",
                  desc: "In any data-over-demand era, your flat visuals become noise. If your SKUs are not visually engaged, they won't sell.",
                },
                {
                  icon: Target,
                  title: "The Hero SKU Trap",
                  desc: "Brand obsession's favorite blind spot. Your hero SKUs perform while your long tail inventory is the real source of lost ROI.",
                },
                {
                  icon: DatabaseZap,
                  title: "Data Decay",
                  desc: "Product data depreciates in value 1.4x every quarter. Static catalogs are a liability in a dynamic, volatile commerce landscape.",
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
                    <card.icon className="mb-4 h-5 w-5 text-purple" />
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.desc}
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

        {/* ── Every Second Is a Leak ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <SlideIn from="left" delay={0.1}>
                <div className="relative overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="aspect-[4/3] bg-gradient-to-br from-surface-light via-surface to-purple/5">
                    <div className="flex h-full items-center justify-center p-8">
                      <div className="grid grid-cols-2 gap-1 opacity-60">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-8 w-3 rounded-sm bg-gradient-to-t from-purple/30 to-purple/5"
                            style={{ height: `${20 + Math.random() * 40}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn from="right" delay={0.2}>
                <Badge variant="secondary" className="mb-4">
                  Impact of Debt
                </Badge>
                <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
                  Every Second
                  <br />
                  <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                    Is a Leak
                  </em>
                </h2>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      num: "01",
                      text: 'Your named "All Funds" are just all-hero expenses. They don\'t fill the performance debt of your SKU catalogue.',
                    },
                    {
                      num: "02",
                      text: "While you focus on the checkout button links, 85% of your product catalog is invisible to the search engines of enterprise.",
                    },
                    {
                      num: "03",
                      text: 'The gap between "BestSeller" and "Discoverable" is growing. Close it or get left behind.',
                    },
                  ].map((point) => (
                    <div key={point.num} className="flex gap-4">
                      <span className="shrink-0 font-heading text-lg font-bold text-purple">
                        {point.num}
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Stop Refining Waste.
                <br />
                Start Activating SKUs.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10 flex justify-center gap-4 flex-wrap">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Request Access
              </RequestAccessButton>
              <Button
                variant="outline"
                className="hidden border-purple/30 text-purple hover:bg-purple/10 font-mono text-xs uppercase tracking-wider"
              >
                Book a Demo
              </Button>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
