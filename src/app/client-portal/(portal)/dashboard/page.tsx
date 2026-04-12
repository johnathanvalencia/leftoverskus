"use client";

import { motion } from "framer-motion";
import {
  UploadCloud,
  Layers,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { WorkflowSteps } from "@/components/client-portal/workflow-steps";
import { StatCard } from "@/components/client-portal/stat-card";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Uploads", value: 0, icon: UploadCloud },
  { label: "Compositions", value: 0, icon: Layers },
  { label: "Synthesis Batches", value: 0, icon: Sparkles },
  { label: "Approved Videos", value: 0, icon: CheckCircle },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 lg:p-8">
      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Welcome to Left Over SKUs
        </h2>
        <p className="mt-1 text-muted-foreground">
          Your governed video &amp; image synthesis pipeline.
          Follow the steps below to get started.
        </p>
      </motion.div>

      {/* Workflow steps */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Getting Started
          </h3>
          <span className="text-xs text-muted-foreground">0 of 4 complete</span>
        </div>
        <WorkflowSteps />
      </section>

      {/* Stats overview */}
      <section>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Overview
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              delay={0.5 + i * 0.08}
            />
          ))}
        </div>
      </section>

      {/* Empty state CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col items-center rounded-xl border border-dashed border-border bg-card/50 py-12 text-center"
      >
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
          <UploadCloud className="size-7 text-primary" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
          No assets yet
        </h3>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Upload your first batch of videos, images, or packshots to begin
          building your synthesis pipeline.
        </p>
        <Button className="mt-5 gap-2" size="lg">
          Upload your first asset
          <ArrowRight className="size-4" />
        </Button>
      </motion.section>
    </div>
  );
}
