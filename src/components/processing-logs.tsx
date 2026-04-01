"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOG_ENTRIES = [
  { prefix: "CRAWLER", message: "ANALYZING 'FALL_COLLECTION_24' VECTORS" },
  { prefix: "SYNTH", message: "GENERATING 4K VIDEO STREAM #09923" },
  { prefix: "AUDIT", message: "COMPLIANCE VERIFIED: BRAND_DNA_HASH_E2" },
  { prefix: "CRAWLER", message: "EXTRACTING BRAND_DNA FROM SOURCE_MATRIX" },
  { prefix: "SYNTH", message: "RENDERING ASSET_BATCH_0847 AT 120FPS" },
  { prefix: "AUDIT", message: "RIGHTS_CHECK PASSED: LICENSE_VALID_2024" },
  { prefix: "CRAWLER", message: "MAPPING PRODUCT_TAXONOMY_V3.2" },
  { prefix: "SYNTH", message: "UPSCALING HERO_ASSET_0012 TO 8K" },
  { prefix: "AUDIT", message: "BRAND_VOICE CONSISTENCY: 99.2% MATCH" },
];

interface LogEntry {
  id: number;
  prefix: string;
  message: string;
}

export function ProcessingLogs() {
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    LOG_ENTRIES.slice(0, 3).map((entry, i) => ({ ...entry, id: i }))
  );
  const counterRef = useRef(3);

  useEffect(() => {
    const interval = setInterval(() => {
      const entry = LOG_ENTRIES[counterRef.current % LOG_ENTRIES.length];
      const newLog = { ...entry, id: counterRef.current };
      counterRef.current += 1;
      setLogs((prev) => [...prev.slice(1), newLog]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-lg border border-white/[0.06] bg-surface p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-purple" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Real-Time Processing Logs
        </span>
      </div>
      <div className="space-y-3 overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
              className="flex items-start gap-3 font-mono text-xs"
            >
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple/60" />
              <span className="shrink-0 text-purple">[{log.prefix}]</span>
              <span className="text-muted-foreground">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
