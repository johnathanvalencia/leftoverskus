"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Globe, Pickaxe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CompositionsTable,
  mockCompositions,
} from "@/components/client-portal/compositions-table";
import { CompetitorSearchDrawer } from "@/components/client-portal/competitor-search-drawer";

const allBrands = Array.from(new Set(mockCompositions.map((c) => c.brand)));

const miningLabels: Record<string, string> = {
  "not-started": "Not mined",
  mining: "Mining",
  mined: "Mined",
  failed: "Failed",
};
const allStatuses = Array.from(
  new Set(mockCompositions.map((c) => c.miningStatus))
);

export default function CompositionsPage() {
  const [brandFilter, setBrandFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    let items = mockCompositions;
    if (brandFilter) items = items.filter((c) => c.brand === brandFilter);
    if (statusFilter)
      items = items.filter((c) => c.miningStatus === statusFilter);
    return items;
  }, [brandFilter, statusFilter]);

  const hasFilters = brandFilter || statusFilter;

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Compositions
          </h2>
          <p className="text-sm text-muted-foreground">
            Assign uploaded assets to a brand, product, and variant scope, then
            mine them to extract reusable tokens.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchOpen(true)}
          >
            <Globe className="mr-1.5 size-3.5" />
            Find Competitor Videos
          </Button>
          <Button size="sm">
            <Plus className="mr-1.5 size-3.5" />
            New Composition
          </Button>
        </div>
      </motion.div>

      {/* Filters + count */}
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="h-7 rounded-md border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50"
        >
          <option value="">All brands</option>
          {allBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-7 rounded-md border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50"
        >
          <option value="">All statuses</option>
          {allStatuses.map((s) => (
            <option key={s} value={s}>
              {miningLabels[s] ?? s}
            </option>
          ))}
        </select>

        {hasFilters && (
          <Button
            variant="ghost"
            size="xs"
            className="text-muted-foreground"
            onClick={() => {
              setBrandFilter("");
              setStatusFilter("");
            }}
          >
            <X className="mr-1 size-3" />
            Clear
          </Button>
        )}

        <span className="ml-auto text-xs text-muted-foreground">
          {filtered.length} of {mockCompositions.length} compositions
        </span>
      </div>

      {/* Table */}
      <CompositionsTable items={filtered} />

      {/* Competitor search drawer */}
      <CompetitorSearchDrawer
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
    </div>
  );
}
