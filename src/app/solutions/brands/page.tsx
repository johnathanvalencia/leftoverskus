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
  BarChart3,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PathLLM for Brands — Full-Catalog Product Video at Scale",
  description:
    "85% of your SKUs have zero video. PathLLM generates governed, on-brand product video for your entire catalog — every SKU, every market, every platform. Compliant from the first frame.",
  openGraph: {
    title: "PathLLM for Brands — Full-Catalog Product Video at Scale",
    description:
      "Generate governed, on-brand product video for every SKU in your catalog. Close the long-tail video gap and lift conversions across your entire product line.",
    url: "/solutions/brands",
    siteName: "PathLLM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathLLM for Brands — Full-Catalog Product Video at Scale",
    description:
      "Generate governed, on-brand product video for every SKU in your catalog. Close the long-tail video gap and lift conversions across your entire product line.",
  },
  alternates: {
    canonical: "/solutions/brands",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PathLLM for Brands",
  description:
    "AI-powered governed video production platform that generates on-brand product video for your entire catalog — every SKU, every market, every platform.",
  brand: { "@type": "Brand", name: "PathLLM" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    description: "First video free under NDA. Request a briefing.",
  },
};

export default function ForBrands() {
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
              <Badge className="mb-6">For Brands</Badge>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-2xl leading-none font-extrabold uppercase tracking-tight sm:text-5xl lg:text-7xl">
                85% of Your Products
                <br />
                Have Zero Video.
                <br />
                <em className="italic bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
                  That&apos;s a Revenue Gap.
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                PathLLM generates governed, on-brand product video for your
                entire catalog — not just the heroes. Every SKU, every market,
                every platform. Compliant from the first frame.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── The Long-Tail Video Problem ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-purple">
                The Core Problem
              </p>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                The Long-Tail
                <br />
                <span className="text-muted-foreground">Video Problem.</span>
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <SlideIn from="left" delay={0.15}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Your top 15% of SKUs get the budget, the video, the conversion
                  lift. The other 85%? Static images. Maybe a 360 spin. No
                  motion. No story. No discoverability.
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  That 85% isn&apos;t a low priority — it&apos;s an untapped
                  revenue layer. Every SKU without video is a conversion
                  you&apos;re leaving on the table, a search ranking you&apos;re
                  conceding, and a return rate you&apos;re inflating.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white font-semibold">
                  The production economics of traditional video make full-catalog
                  coverage impossible. PathLLM makes it inevitable.
                </p>
              </SlideIn>

              <SlideIn from="right" delay={0.25} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.06]">
                  <div className="flex items-center justify-between bg-purple px-5 py-3">
                    <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                      15% Heroes
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Budget + Video + Lift
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center bg-surface p-8">
                    <p className="font-heading text-7xl font-extrabold text-white">
                      85%
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold uppercase tracking-wider">
                      The Revenue Gap
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>No Video</span>
                      <span className="text-purple">&middot;</span>
                      <span>Lost Conversions</span>
                      <span className="text-purple">&middot;</span>
                      <span>Higher Returns</span>
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
                  icon: BarChart3,
                  num: "01",
                  title: "Full Catalog Coverage",
                  subtitle: "From 15% to 100%",
                  desc: "Generate governed product video for every SKU in your catalog. Not generic templates — videos built from your Brand DNA, maintaining the visual identity and compliance standards of your hero content across every product.",
                },
                {
                  icon: Clock,
                  num: "02",
                  title: "Speed to Shelf",
                  subtitle: "Hours, Not Weeks",
                  desc: "New product launch? Seasonal refresh? Platform-specific format? PathLLM collapses the production cycle from weeks to hours. Your products go live with video on day one, not day thirty.",
                },
                {
                  icon: ShieldCheck,
                  num: "03",
                  title: "Compliance by Default",
                  subtitle: "Every Frame Is Defensible",
                  desc: "Brand guidelines, legal requirements, platform specifications — all enforced at generation time. No review bottleneck. No compliance rework. Every asset comes with a full audit trail.",
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

        {/* ── The Commerce Case ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                The Commerce
                <br />
                Case
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-3"
              staggerDelay={0.12}
            >
              {[
                {
                  title: "SKU Coverage → Conversion Lift",
                  desc: "Products with video convert at 2–3x the rate of static imagery. Full-catalog video coverage doesn't just fill a content gap — it directly impacts revenue per SKU.",
                },
                {
                  title: "Platform-Native Delivery",
                  desc: "Amazon, Shopify, Walmart, TikTok Shop — each platform has different specs, aspect ratios, and content rules. PathLLM generates platform-native variants automatically. One product, every format.",
                },
                {
                  title: "Lower Return Rates",
                  desc: "Video gives buyers a more accurate understanding of the product before purchase. More accurate expectations = fewer returns. Full-catalog video reduces return rates across the long tail.",
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

        {/* ── How It Works ── */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                How It Works
              </h2>
            </FadeUp>

            <StaggerContainer
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.1}
            >
              {[
                {
                  num: "01",
                  title: "Upload",
                  desc: "Your product catalog and brand guidelines",
                },
                {
                  num: "02",
                  title: "Extract",
                  desc: "PathLLM extracts your Brand DNA — visual grammar, motion language, compliance rules",
                },
                {
                  num: "03",
                  title: "Select",
                  desc: "Individual products, bulk, or full catalog",
                },
                {
                  num: "04",
                  title: "Audit",
                  desc: "Every video pre-checked against your brand standards with full audit trail",
                },
              ].map((step) => (
                <StaggerItem key={step.num}>
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

        {/* ── CTA ── */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">
                See Your First
                <br />
                Product Video.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-10">
              <RequestAccessButton className="bg-purple hover:bg-purple-dark text-white font-mono text-xs uppercase tracking-wider">
                Book a Briefing
              </RequestAccessButton>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
                First video free under NDA.
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
