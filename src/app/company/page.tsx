import Image from "next/image";
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

const leadership = [
  {
    name: "Amir Zarkesh",
    title: "CEO & Co-Founder",
    image: "/amir-2.png",
  },
  {
    name: "Alex Zakharenkov",
    title: "Engineering VP",
    image: "/alex.png",
  },
  {
    name: "Johnathan Valencia",
    title: "Head of Product",
    image: "/johnathan.png",
  },
  {
    name: "Zohre Elahian",
    title: "Chief of People & Co-Founder",
    image: "/zohre.png",
  },
];

const advisors = [
  {
    name: "Bill Jia",
    role: "Board of Directors",
    credential: "VP of Engineering @ Google — Core ML/AI, Ex-VP Meta",
  },
  {
    name: "Kamran Elahian",
    role: "Chairman, Advisory Board",
    credential: "High Tech Entrepreneur with 4 Unicorn IPOs",
  },
  {
    name: "James Thomson",
    role: "Advisor",
    credential: "Ex-Head of Amazon Marketplace Services",
  },
  {
    name: "Spencer Greene",
    role: "Advisor",
    credential: "General Partner @ TSVC",
  },
  {
    name: "Reza Sadri",
    role: "Advisor",
    credential: "Director, AI Bootcamp @ Caltech",
  },
  {
    name: "Behzad Tabibian",
    role: "Advisor",
    credential: "ML Applied Scientist @ Amazon",
  },
];

export default function Company() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <Badge>About PathLLM.ai</Badge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-6 font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Brand Video Should Be
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  Governed, Not Guessed.
                </em>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We built PathLLM to give brands full control over AI-generated
                video. You set the Brand DNA. We enforce it. Every frame traces
                to approved sources. Every output is auditable.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Story ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                Our Path
              </p>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                From Physics
                <br />
                <span className="text-muted-foreground">to Governance.</span>
              </h2>
            </FadeUp>

            <div className="mt-16 space-y-6">
              {[
                {
                  year: "2022",
                  title: "The Foundation",
                  desc: "PathLLM began by challenging a fundamental assumption: that interactive 3D worlds were too complex for LLMs. Inspired by Feynman Path Integrals, we invented a technology that gives AI a physical sense it inherently lacks.",
                },
                {
                  year: "2023",
                  title: "Solving Hallucination",
                  desc: "By freezing specific subpaths based on mined Brand DNA, we discovered how to squeeze out hallucination entirely. This led to our three core technologies: PathLLM, DNA AI, and the Metaform Agentic Platform.",
                },
                {
                  year: "2025–26",
                  title: "The Convergence",
                  desc: "These technologies converged into the Brand E-commerce Agent — the first system capable of generating mass personalized, brand-aligned video at scale without drift or risk. Now live with Tier-1 agency partners.",
                },
              ].map((milestone) => (
                <FadeUp key={milestone.year}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                    <div className="flex items-start gap-6">
                      <span className="shrink-0 font-heading text-2xl font-bold text-purple">
                        {milestone.year}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold uppercase tracking-wider">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">
                          {milestone.desc}
                        </p>
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

        {/* ── Core Technologies ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Three Core
                <br />
                Technologies
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  num: "01",
                  title: "PathLLM",
                  label: "US Patent 12,229,913 B2",
                  desc: "Applies Feynman Path Integrals to AI control, expanding LLMs to understand and manipulate interactive 3D worlds. Grounds generative AI in physical reality.",
                },
                {
                  num: "02",
                  title: "DNA AI",
                  label: "Anti-Hallucination Engine",
                  desc: "Freezes specific subpaths based on your mined Brand DNA. Locks the model onto your brand truth, eliminating drift and the cost of babysitting video AI.",
                },
                {
                  num: "03",
                  title: "Metaform Platform",
                  label: "Orchestration Layer",
                  desc: "Orchestrates 10+ enterprise-grade models through hundreds of specialized agents. Captures complex enterprise processes with velocity traditional software can't match.",
                },
              ].map((tech) => (
                <StaggerItem key={tech.title}>
                  <div className="group h-full rounded-lg border border-white/[0.06] bg-surface p-8 transition-colors hover:border-purple/20">
                    <span className="font-heading text-2xl font-bold text-purple">
                      {tech.num}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-wider">
                      {tech.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-purple">
                      {tech.label}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {tech.desc}
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

        {/* ── How We Operate ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                How We
                <br />
                <span className="text-muted-foreground">Operate</span>
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-2"
              staggerDelay={0.1}
            >
              {[
                {
                  title: "Governance Over Hacks",
                  desc: "Executable contracts beat vague prompts. Provenance beats \"trust me.\" When compliance matters, governance is the only answer.",
                },
                {
                  title: "Customer Truth First",
                  desc: "Your Brand DNA is sacred. We mine it from approved assets. We enforce it through deterministic rules. We never use your learnings for other clients.",
                },
                {
                  title: "Model-Agnostic by Design",
                  desc: "We orchestrate the best available models — today and tomorrow. When better models arrive, we swap them in. Your governance stays intact.",
                },
                {
                  title: "Compounding Advantage",
                  desc: "Every video makes the system smarter for your brand. Every batch increases first-pass approval rates. Your investment compounds. Your moat deepens.",
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

        {/* ── Leadership ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Leadership
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Deep expertise across product, technology, enterprise growth,
                and AI infrastructure.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.12}
            >
              {leadership.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-surface transition-colors hover:border-purple/20">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="font-heading text-lg font-bold uppercase tracking-wider">
                        {member.name}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-purple">
                        {member.title}
                      </p>
                    </div>
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

        {/* ── Board & Advisors ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                Board &
                <br />
                Advisors
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              staggerDelay={0.1}
            >
              {advisors.map((advisor) => (
                <StaggerItem key={advisor.name}>
                  <div className="group rounded-lg border border-white/[0.06] bg-surface p-6 transition-colors hover:border-purple/20">
                    <p className="font-heading text-lg font-bold uppercase tracking-wider">
                      {advisor.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-purple">
                      {advisor.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {advisor.credential}
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

        {/* ── Company Facts ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                At a Glance
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.08}
            >
              {[
                { label: "Founded", value: "November 2022" },
                { label: "HQ", value: "Saratoga, CA" },
                { label: "US Patent", value: "12,229,913 B2" },
                { label: "AI Models", value: "10+ in Production" },
              ].map((fact) => (
                <StaggerItem key={fact.label}>
                  <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold uppercase tracking-wider">
                      {fact.value}
                    </p>
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
                See It in Action.
              </h2>
              <p className="mx-auto mt-6 max-w-md text-muted-foreground">
                First video free under NDA. Up and running in hours.
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
