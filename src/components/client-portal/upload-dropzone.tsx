"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface UploadDropzoneProps {
  onUpload?: (files: File[]) => void;
}

export function UploadDropzone({ onUpload }: UploadDropzoneProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) onUpload?.(files);
    },
    [onUpload]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-10 transition-all",
          dragOver
            ? "border-primary bg-primary/5"
            : "border-border bg-card/50 hover:border-primary/30"
        )}
      >
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-xl transition-colors",
            dragOver ? "bg-primary/15" : "bg-primary/10"
          )}
        >
          <UploadCloud className={cn("size-6", dragOver ? "text-primary" : "text-primary/70")} />
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">
          Drag &amp; drop files here
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          or click to browse &middot; files are auto-categorised by extension
        </p>
        <Button variant="outline" size="sm" className="mt-4">
          Browse Files
        </Button>
        {dragOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-xl bg-primary/5"
          />
        )}
      </div>
    </motion.div>
  );
}
