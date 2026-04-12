"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/client-portal/theme-toggle";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/client-portal/dashboard");
    }, 600);
  }

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-purple)_0%,transparent_50%)] opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-purple-dark)_0%,transparent_50%)] opacity-[0.05]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Theme toggle in corner */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/5 dark:shadow-black/30">
          {/* Logo / wordmark */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="size-6 text-primary" />
            </div>
            <div className="text-center">
              <h1 className="font-heading text-xl font-bold tracking-tight text-foreground">
                Left Over SKUs
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to your portal
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <Button
              type="submit"
              className="h-10 w-full text-sm font-medium"
              disabled={loading}
            >
              {loading ? (
                <motion.div
                  className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="text-primary transition-colors hover:text-primary/80"
              >
                Request access
              </button>
            </p>
          </div>
        </div>

        {/* Subtle branding footer */}
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          AI-powered video synthesis at enterprise scale
        </p>
      </motion.div>
    </div>
  );
}
