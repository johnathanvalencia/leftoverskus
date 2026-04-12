"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadDropzone } from "@/components/client-portal/upload-dropzone";
import { UploadsTable, mockUploads } from "@/components/client-portal/uploads-table";
import { Button } from "@/components/ui/button";

const typeLabels: Record<string, string> = {
  video: "Video",
  image: "Image",
  packshot: "Packshot",
  competitor: "Competitor",
};

const allTypes = Array.from(new Set(mockUploads.map((u) => u.type)));
const allSubTypes = Array.from(
  new Set(mockUploads.map((u) => u.subType).filter(Boolean))
) as string[];

function filterItems(
  tab: string,
  typeFilter: string,
  subTypeFilter: string
) {
  let items = mockUploads;
  if (tab === "my-assets") items = items.filter((u) => u.type !== "competitor");
  if (tab === "competitor") items = items.filter((u) => u.type === "competitor");
  if (typeFilter) items = items.filter((u) => u.type === typeFilter);
  if (subTypeFilter) items = items.filter((u) => u.subType === subTypeFilter);
  return items;
}

const tabCounts = {
  all: mockUploads.length,
  "my-assets": mockUploads.filter((u) => u.type !== "competitor").length,
  competitor: mockUploads.filter((u) => u.type === "competitor").length,
};

export default function UploadsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [typeFilter, setTypeFilter] = useState("");
  const [subTypeFilter, setSubTypeFilter] = useState("");

  const filtered = useMemo(
    () => filterItems(activeTab, typeFilter, subTypeFilter),
    [activeTab, typeFilter, subTypeFilter]
  );

  const hasFilters = typeFilter || subTypeFilter;

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-1"
      >
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Uploads
        </h2>
        <p className="text-sm text-muted-foreground">
          Drop your source files here. They&apos;re automatically categorised by
          file extension.
        </p>
      </motion.div>

      {/* Drop zone */}
      <UploadDropzone />

      {/* Tabs + table */}
      <Tabs
        defaultValue="all"
        onValueChange={(val: string | number | null) => {
          setActiveTab(String(val ?? "all"));
          setTypeFilter("");
          setSubTypeFilter("");
        }}
      >
        <TabsList variant="line">
          {(["all", "my-assets", "competitor"] as const).map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab === "all" ? "All" : tab === "my-assets" ? "My Assets" : "Competitor"}
              <span className="ml-1.5 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-muted-foreground">
                {tabCounts[tab]}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Filters row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-7 rounded-md border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50"
          >
            <option value="">All types</option>
            {allTypes.map((t) => (
              <option key={t} value={t}>
                {typeLabels[t] ?? t}
              </option>
            ))}
          </select>

          <select
            value={subTypeFilter}
            onChange={(e) => setSubTypeFilter(e.target.value)}
            className="h-7 rounded-md border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50"
          >
            <option value="">All sub-types</option>
            {allSubTypes.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          {hasFilters && (
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground"
              onClick={() => {
                setTypeFilter("");
                setSubTypeFilter("");
              }}
            >
              <X className="mr-1 size-3" />
              Clear
            </Button>
          )}

          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} of {mockUploads.length} files
          </span>
        </div>

        {/* Single filtered table */}
        <div className="mt-4">
          <UploadsTable items={filtered} />
        </div>
      </Tabs>
    </div>
  );
}
