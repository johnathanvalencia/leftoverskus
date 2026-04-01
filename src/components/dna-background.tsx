"use client";

import { motion } from "framer-motion";

function HelixStrand({
  d,
  delay,
  duration,
  opacity,
}: {
  d: string;
  delay: number;
  duration: number;
  opacity: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#purpleGlow)"
      strokeWidth="1"
      strokeLinecap="round"
      opacity={opacity}
      initial={{ pathLength: 0, pathOffset: 0 }}
      animate={{
        pathLength: [0.3, 0.6, 0.3],
        pathOffset: [0, 1],
      }}
      transition={{
        pathLength: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
        pathOffset: { duration, repeat: Infinity, ease: "linear", delay },
      }}
    />
  );
}

function HelixRung({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#purpleGlow)"
      strokeWidth="0.5"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function DnaBackground() {
  const strand1 =
    "M-100,300 C50,200 150,100 300,150 C450,200 550,350 700,300 C850,250 950,100 1100,150 C1250,200 1350,350 1500,300 C1650,250 1750,100 1900,150";
  const strand2 =
    "M-100,150 C50,250 150,350 300,300 C450,250 550,100 700,150 C850,200 950,350 1100,300 C1250,250 1350,100 1500,150 C1650,200 1750,350 1900,300";
  const strand3 =
    "M-100,350 C100,250 200,150 400,200 C600,250 700,400 900,350 C1100,300 1200,150 1400,200 C1600,250 1700,400 1900,350";
  const strand4 =
    "M-100,100 C100,200 200,300 400,250 C600,200 700,50 900,100 C1100,150 1200,300 1400,250 C1600,200 1700,50 1900,100";

  const rungs = Array.from({ length: 12 }, (_, i) => {
    const x = (i + 1) * 140;
    const phase = (x / 700) * Math.PI;
    const y1Base = 225 + 75 * Math.sin(phase);
    const y2Base = 225 - 75 * Math.sin(phase);
    return { x1: x, y1: y1Base, x2: x, y2: y2Base, delay: i * 0.5 };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1800 450"
        fill="none"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow)">
          <HelixStrand d={strand1} delay={0} duration={12} opacity={0.4} />
          <HelixStrand d={strand2} delay={0.5} duration={12} opacity={0.4} />
          <HelixStrand d={strand3} delay={2} duration={16} opacity={0.15} />
          <HelixStrand d={strand4} delay={3} duration={16} opacity={0.15} />

          {rungs.map((rung, i) => (
            <HelixRung key={i} {...rung} />
          ))}
        </g>
      </svg>

      {/* Radial aura behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-purple/[0.04] blur-[120px]" />
    </div>
  );
}
