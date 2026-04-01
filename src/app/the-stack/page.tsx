import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RequestAccessButton } from "@/components/request-access-modal";
import {
  Sparkles,
  Video,
  ShieldCheck,
  Code,
  ArrowRight,
} from "lucide-react";

export default function TheStack() {
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
              <Badge className="mb-6">System_Architecture_v4.0</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-5xl font-extrabold uppercase tracking-tight sm:text-7xl lg:text-8xl">
                The Engine of
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Raw Intelligence
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We&apos;ve dismantled the traditional marketing funnel and
                replaced it with a synthetic feedback loop. Mining brand essence
                to generate infinite, high-fidelity digital output at enterprise
                scale.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Feature Cards ── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer
              className="grid gap-6 md:grid-cols-2"
              staggerDelay={0.15}
            >
              {/* Neural Crawling */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      01
                    </span>
                    <Sparkles className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Neural Crawling
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Extracting brand DNA from fragmented data sources. We
                    don&apos;t read assets, we ingest the aesthetic
                    subconscious of your brand history.
                  </p>

                  {/* Visual placeholder */}
                  <div className="hidden mt-6 h-32 rounded-md bg-gradient-to-br from-purple/10 via-surface-light to-surface-light" />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Specs
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        Deep_Mining
                      </p>
                    </div>
                    <div className="rounded-md border border-white/[0.06] bg-[#050510] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Efficiency
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold">
                        99.8% Acc
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Synthesis Engine */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-purple/20 bg-gradient-to-br from-purple/10 via-surface to-surface p-8 transition-colors hover:border-purple/30">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      02
                    </span>
                    <Video className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Synthesis Engine
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Infinite video generation powered by proprietary diffusion
                    models. High-octane aesthetic output tailored for every SKU
                    in your inventory.
                  </p>

                  {/* Visual placeholder */}
                  <div className="hidden mt-6 h-40 rounded-md bg-gradient-to-br from-purple/20 via-purple/5 to-transparent" />

                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-purple" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Live Generation Stream
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* Audit Layer */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      03
                    </span>
                    <ShieldCheck className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Audit Layer
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Rigorous governance and compliance. Every frame is scanned
                    against brand guidelines and legal constraints in
                    real-time. Zero hallucination tolerance.
                  </p>

                  <div className="mt-8 space-y-3">
                    {["Legal Compliance Sync", "Brand Voice Detection"].map(
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

              {/* Enterprise API & SDK */}
              <StaggerItem>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      04
                    </span>
                    <Code className="h-5 w-5 text-purple" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wider">
                    Enterprise API & SDK
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Deploy our intelligence directly into your workflow. Plug
                    into Shopify, Salesforce, or your proprietary CMS. Scale
                    from 10 to 10 million SKUs without breaking the aesthetic.
                  </p>

                  <Button className="hidden mt-8 bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                    View Documentation
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                Ready to Scale
                <br />
                The Rebellion?
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
