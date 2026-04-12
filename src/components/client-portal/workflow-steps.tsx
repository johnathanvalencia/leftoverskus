"use client";

import { motion } from "framer-motion";
import { UploadCloud, Layers, Sparkles, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Upload",
    description: "Drop your source videos, images, and packshots",
    icon: UploadCloud,
    cta: "Upload Assets",
    status: "Not started",
  },
  {
    number: 2,
    title: "Compose",
    description: "Assign brands, products, and mine reusable tokens",
    icon: Layers,
    cta: "Start Composing",
    status: "Not started",
  },
  {
    number: 3,
    title: "Synthesize",
    description: "Output new videos and images from your assets",
    icon: Sparkles,
    cta: "Create Synthesis",
    status: "Not started",
  },
  {
    number: 4,
    title: "Audit",
    description: "Approve, adjust DNA map, and blacklist content",
    icon: CheckCircle,
    cta: "View Videos",
    status: "Not started",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function WorkflowSteps() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {steps.map((step, index) => (
        <motion.div key={step.title} variants={itemVariants} className="relative">
          {/* Connector line (between cards on desktop) */}
          {index < steps.length - 1 && (
            <div className="absolute top-1/2 -right-4 hidden h-px w-4 bg-border xl:block" />
          )}

          <div
            className={cn(
              "group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            )}
          >
            {/* Step number badge */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <step.icon className="size-5" />
              </div>
              <div className="flex size-6 items-center justify-center rounded-full border border-border bg-muted text-xs font-bold text-muted-foreground">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <h3 className="font-heading text-base font-semibold text-card-foreground">
              {step.title}
            </h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>

            {/* Status */}
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-muted-foreground/40" />
                {step.status}
              </span>
              <button className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {step.cta} &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
