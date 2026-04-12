"use client";

import { motion } from "framer-motion";
import {
  Layers,
  MoreHorizontal,
  Pickaxe,
  Eye,
  Trash2,
  FileVideo,
  FileImage,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface CompositionItem {
  id: string;
  brand: string;
  product: string;
  variant: string;
  assets: { videos: number; images: number; packshots: number };
  miningStatus: "not-started" | "mining" | "mined" | "failed";
  tokensExtracted: number;
  lastUpdated: string;
}

const miningStatusConfig = {
  "not-started": {
    label: "Not mined",
    className: "bg-muted text-muted-foreground",
  },
  mining: {
    label: "Mining...",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  mined: {
    label: "Mined",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  failed: {
    label: "Failed",
    className: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
};

export const mockCompositions: CompositionItem[] = [
  {
    id: "c1",
    brand: "Acme Beauty",
    product: "Radiance Serum",
    variant: "30ml Original",
    assets: { videos: 2, images: 3, packshots: 2 },
    miningStatus: "mined",
    tokensExtracted: 47,
    lastUpdated: "Apr 8, 2026",
  },
  {
    id: "c2",
    brand: "Acme Beauty",
    product: "Radiance Serum",
    variant: "50ml Deluxe",
    assets: { videos: 1, images: 2, packshots: 1 },
    miningStatus: "mined",
    tokensExtracted: 28,
    lastUpdated: "Apr 8, 2026",
  },
  {
    id: "c3",
    brand: "Acme Beauty",
    product: "Glow Moisturizer",
    variant: "Day Cream SPF30",
    assets: { videos: 3, images: 4, packshots: 3 },
    miningStatus: "mining",
    tokensExtracted: 0,
    lastUpdated: "Apr 7, 2026",
  },
  {
    id: "c4",
    brand: "Acme Wellness",
    product: "Vitality Supplement",
    variant: "60 Capsules",
    assets: { videos: 1, images: 1, packshots: 2 },
    miningStatus: "not-started",
    tokensExtracted: 0,
    lastUpdated: "Apr 6, 2026",
  },
  {
    id: "c5",
    brand: "Acme Wellness",
    product: "Calm Tea Blend",
    variant: "20 Sachets",
    assets: { videos: 0, images: 2, packshots: 1 },
    miningStatus: "not-started",
    tokensExtracted: 0,
    lastUpdated: "Apr 5, 2026",
  },
  {
    id: "c6",
    brand: "Acme Beauty",
    product: "Lip Color Kit",
    variant: "Berry Collection",
    assets: { videos: 2, images: 5, packshots: 4 },
    miningStatus: "failed",
    tokensExtracted: 0,
    lastUpdated: "Apr 4, 2026",
  },
];

interface CompositionsTableProps {
  items: CompositionItem[];
}

export function CompositionsTable({ items }: CompositionsTableProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
          <Layers className="size-6 text-muted-foreground" />
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">
          No compositions yet
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Create a composition to assign assets to a brand, product, and variant.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="rounded-xl border border-border"
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Brand</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Variant</TableHead>
            <TableHead>Assets</TableHead>
            <TableHead>Mining</TableHead>
            <TableHead>Tokens</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const status = miningStatusConfig[item.miningStatus];
            const totalAssets =
              item.assets.videos + item.assets.images + item.assets.packshots;

            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-foreground">
                  {item.brand}
                </TableCell>
                <TableCell className="text-foreground">{item.product}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.variant}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {item.assets.videos > 0 && (
                      <span className="inline-flex items-center gap-1 text-xs">
                        <FileVideo className="size-3 text-blue-500" />
                        {item.assets.videos}
                      </span>
                    )}
                    {item.assets.images > 0 && (
                      <span className="inline-flex items-center gap-1 text-xs">
                        <FileImage className="size-3 text-emerald-500" />
                        {item.assets.images}
                      </span>
                    )}
                    {item.assets.packshots > 0 && (
                      <span className="inline-flex items-center gap-1 text-xs">
                        <Package className="size-3 text-amber-500" />
                        {item.assets.packshots}
                      </span>
                    )}
                    {totalAssets === 0 && (
                      <span className="text-xs">—</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      status.className
                    )}
                  >
                    {item.miningStatus === "mining" && (
                      <span className="mr-1.5 size-1.5 animate-pulse rounded-full bg-amber-500" />
                    )}
                    {status.label}
                  </span>
                </TableCell>
                <TableCell className="tabular-nums text-muted-foreground">
                  {item.tokensExtracted > 0 ? item.tokensExtracted : "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {item.lastUpdated}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="text-muted-foreground"
                        />
                      }
                    >
                      <MoreHorizontal className="size-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 size-3.5" /> View details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pickaxe className="mr-2 size-3.5" /> Mine assets
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 size-3.5" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
}
