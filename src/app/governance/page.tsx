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
  Shield,
  FileCheck,
  Lock,
  Scale,
  Eye,
} from "lucide-react";

export default function Governance() {
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
              <Badge className="mb-6">Trust & Compliance</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Governance Isn&apos;t
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  a Checkbox.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-2 font-heading text-2xl font-extrabold uppercase tracking-tight text-muted-foreground sm:text-3xl lg:text-4xl">
                It&apos;s the Entire Architecture.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Most AI video tools add compliance as a filter. PathLLM builds
                it into the generation layer. The difference: every frame is
                governed before it exists, not reviewed after.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Governance Problem ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                The Trust
                <br />
                Deficit
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <SlideIn from="left" delay={0.15}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Enterprise AI adoption has a trust deficit. Teams want the
                  speed. Legal wants the control. Brand wants the consistency. IT
                  wants the isolation.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white font-semibold">
                  Most platforms ask you to choose. PathLLM was built so you
                  don&apos;t have to.
                </p>
              </SlideIn>

              <SlideIn from="right" delay={0.25}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Speed", who: "Teams" },
                    { label: "Control", who: "Legal" },
                    { label: "Consistency", who: "Brand" },
                    { label: "Isolation", who: "IT" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/[0.06] bg-surface p-6"
                    >
                      <p className="font-heading text-2xl font-extrabold text-purple">
                        {item.label}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {item.who} want this
                      </p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Pillars ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                Five Pillars
              </p>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                The Governance
                <br />
                Framework
              </h2>
            </FadeUp>

            <div className="mt-16 space-y-6">
              {[
                {
                  icon: Shield,
                  num: "01",
                  title: "Zero Hallucination Architecture",
                  desc: "PathLLM doesn't generate from imagination. It composes from verified elements — your approved assets, your brand tokens, your visual grammar. Every element in every frame traces to an approved source. There is no \"creative interpretation\" of your brand by a model that learned from the entire internet.",
                  note: "This is not a claim about accuracy. It's a description of the architecture.",
                },
                {
                  icon: FileCheck,
                  num: "02",
                  title: "Evidence-Backed Provenance",
                  desc: "Every generated video includes a complete audit trail: which source assets were used, which brand rules were applied, which compliance checks passed, and when the asset was created. Cryptographically signed. Immutable. Defensible in any review.",
                  note: null,
                },
                {
                  icon: Lock,
                  num: "03",
                  title: "Brand DNA Isolation",
                  desc: "For agencies: each client's Brand DNA, assets, and outputs are fully isolated. No shared model weights. No cross-contamination. No possibility that Brand A's visual language leaks into Brand B's output. For brands: your data never leaves your perimeter. No training on your assets for other clients. Full deletion on exit.",
                  note: null,
                },
                {
                  icon: Scale,
                  num: "04",
                  title: "Legal Guardrails",
                  desc: "Automated compliance filters detect and prevent IP infringement, regulatory violations, and platform policy breaches before the first frame renders. Built-in, not bolted on.",
                  note: null,
                },
                {
                  icon: Eye,
                  num: "05",
                  title: "Transparency & Auditability",
                  desc: "Full logs. Full provenance. Full explainability. When legal asks \"can you prove this video doesn't contain third-party IP?\" — the answer is immediate, documented, and specific.",
                  note: null,
                },
              ].map((pillar) => (
                <FadeUp key={pillar.num}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <pillar.icon className="h-6 w-6 text-purple" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-lg font-bold text-purple">
                            {pillar.num}
                          </span>
                          <h3 className="font-heading text-lg font-bold uppercase tracking-wider">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                          {pillar.desc}
                        </p>
                        {pillar.note && (
                          <p className="mt-3 text-sm italic text-purple/70">
                            {pillar.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Enterprise Controls ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise
                <br />
                Controls
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.08}
            >
              {[
                "SOC 2 Type II compliance",
                "GDPR-compliant data handling",
                "Custom data retention policies",
                "SSO and role-based access",
                "Dedicated infrastructure options",
                "On-premise deployment available",
              ].map((control) => (
                <StaggerItem key={control}>
                  <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-surface px-5 py-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple" />
                    <span className="text-sm text-muted-foreground">
                      {control}
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
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Trust Is the Foundation.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10 flex justify-center gap-4 flex-wrap">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Security Briefing
              </RequestAccessButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
