import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Zohre",
    title: "Shot Caller",
    sub: "Runs things. All the things.",
    image: "/zohre.png",
  },
  {
    name: "Alex",
    title: "AI / LLM Guy",
    sub: "Whispers to models. They listen.",
    image: "/alex.png",
  },
  {
    name: "Johnathan",
    title: "Product Guy",
    sub: "Does product things. Moves pixels.",
    image: "/johnathan.png",
  },
  {
    name: "Amir",
    title: "🎉 Happy April Fools, Amir",
    sub: "Brings coffee and tea.",
    image: "/amir.png",
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
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <FadeUp>
              <Badge>The Team</Badge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-6 font-heading text-3xl leading-none font-extrabold uppercase tracking-tight sm:text-7xl lg:text-8xl">
                The Humans
                <br />
                <span className="text-muted-foreground">Behind the Rebellion.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Four people. $18.5M. No adult supervision.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Leadership Grid ── */}
        <section className="pb-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Leadership
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                The founding team rewriting the rules of synthetic media.
              </p>
            </FadeUp>

            <StaggerContainer
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.12}
            >
              {team.map((member) => (
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
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {member.sub}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
