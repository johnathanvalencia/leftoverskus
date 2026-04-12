"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, Plus, ExternalLink, Loader2 } from "lucide-react";

interface CompetitorSearchDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockResults = [
  {
    id: "r1",
    title: "Brand X - Summer Campaign 2026",
    url: "youtube.com/watch?v=abc123",
    thumbnail: null,
    duration: "0:30",
    source: "YouTube",
  },
  {
    id: "r2",
    title: "Brand X - Product Launch Spot",
    url: "youtube.com/watch?v=def456",
    thumbnail: null,
    duration: "0:15",
    source: "YouTube",
  },
  {
    id: "r3",
    title: "Brand Y - Holiday Collection",
    url: "vimeo.com/789012",
    thumbnail: null,
    duration: "1:00",
    source: "Vimeo",
  },
];

export function CompetitorSearchDrawer({
  open,
  onOpenChange,
}: CompetitorSearchDrawerProps) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState<Set<string>>(new Set());

  function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 800);
  }

  function handleAdd(id: string) {
    setAdded((prev) => new Set(prev).add(id));
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader className="pb-0">
          <SheetTitle>Find Competitor Videos</SheetTitle>
          <SheetDescription>
            Search by brand name or paste a URL to find competitor videos online.
            Found videos will be added to your composition tagged as competitor.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {/* Search input */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Brand name or video URL..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-8"
              />
            </div>
            <Button size="default" onClick={handleSearch} disabled={loading}>
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <>
                  <Globe className="mr-1.5 size-3.5" />
                  Search
                </>
              )}
            </Button>
          </div>

          {/* Results */}
          {searched && !loading && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                {mockResults.length} results for &ldquo;{query}&rdquo;
              </p>
              {mockResults.map((result) => {
                const isAdded = added.has(result.id);
                return (
                  <div
                    key={result.id}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    {/* Thumbnail placeholder */}
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                      {result.duration}
                    </div>
                    <div className="flex-1 space-y-1 overflow-hidden">
                      <p className="truncate text-sm font-medium text-foreground">
                        {result.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {result.source}
                        </Badge>
                        <span className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                          <ExternalLink className="size-2.5" />
                          {result.url}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="xs"
                      variant={isAdded ? "secondary" : "default"}
                      onClick={() => handleAdd(result.id)}
                      disabled={isAdded}
                      className="shrink-0"
                    >
                      {isAdded ? (
                        "Added"
                      ) : (
                        <>
                          <Plus className="mr-1 size-3" /> Add
                        </>
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          )}

          {!searched && !loading && (
            <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
              <Globe className="size-8 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">
                Search for a competitor brand or paste a video URL to get started.
              </p>
            </div>
          )}
        </div>

        <SheetFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Done
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
