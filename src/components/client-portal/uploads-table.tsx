"use client";

import { motion } from "framer-motion";
import {
  FileVideo,
  FileImage,
  Package,
  Swords,
  MoreHorizontal,
  Eye,
  Trash2,
  Download,
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

export interface UploadItem {
  id: string;
  filename: string;
  type: "video" | "image" | "packshot" | "competitor";
  subType?: string;
  size: string;
  date: string;
  status: "processing" | "ready" | "error";
}

const typeConfig = {
  video: { label: "Video", icon: FileVideo, color: "text-blue-500" },
  image: { label: "Image", icon: FileImage, color: "text-emerald-500" },
  packshot: { label: "Packshot", icon: Package, color: "text-amber-500" },
  competitor: { label: "Competitor", icon: Swords, color: "text-red-400" },
};

export const mockUploads: UploadItem[] = [
  { id: "1", filename: "hero-campaign-2025.mp4", type: "video", subType: "Campaign", size: "248 MB", date: "Apr 8, 2026", status: "ready" },
  { id: "2", filename: "product-lifestyle-shot.jpg", type: "image", subType: "Lifestyle", size: "4.2 MB", date: "Apr 8, 2026", status: "ready" },
  { id: "3", filename: "sku-1042-front.png", type: "packshot", subType: "Front View", size: "2.1 MB", date: "Apr 7, 2026", status: "ready" },
  { id: "4", filename: "competitor-brand-x-ad.mp4", type: "competitor", subType: "Social Ad", size: "87 MB", date: "Apr 7, 2026", status: "ready" },
  { id: "5", filename: "sku-1042-side.png", type: "packshot", subType: "Side View", size: "1.8 MB", date: "Apr 7, 2026", status: "ready" },
  { id: "6", filename: "unboxing-reveal.mp4", type: "video", subType: "UGC", size: "312 MB", date: "Apr 6, 2026", status: "processing" },
  { id: "7", filename: "pdp-banner-spring.jpg", type: "image", subType: "PDP Banner", size: "3.5 MB", date: "Apr 6, 2026", status: "ready" },
  { id: "8", filename: "competitor-brand-y-tv.mp4", type: "competitor", subType: "TV Spot", size: "156 MB", date: "Apr 5, 2026", status: "ready" },
  { id: "9", filename: "ingredient-closeup.jpg", type: "image", subType: "Detail", size: "5.8 MB", date: "Apr 5, 2026", status: "error" },
  { id: "10", filename: "sku-2099-hero.png", type: "packshot", subType: "Hero", size: "2.4 MB", date: "Apr 4, 2026", status: "ready" },
];

interface UploadsTableProps {
  items: UploadItem[];
}

export function UploadsTable({ items }: UploadsTableProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
          <FileVideo className="size-6 text-muted-foreground" />
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">No files found</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Upload files above or adjust your filter.
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
            <TableHead className="w-[340px]">File</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Sub-type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, i) => {
            const typeInfo = typeConfig[item.type];
            const TypeIcon = typeInfo.icon;

            return (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted", typeInfo.color)}>
                      <TypeIcon className="size-4" />
                    </div>
                    <span className="truncate font-medium text-foreground">
                      {item.filename}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">{typeInfo.label}</span>
                    {item.type === "competitor" && (
                      <Badge variant="outline" className="border-red-400/30 text-red-500 dark:text-red-400 text-[10px] px-1.5 py-0">
                        Competitor
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.subType || "—"}</TableCell>
                <TableCell className="text-muted-foreground">{item.size}</TableCell>
                <TableCell className="text-muted-foreground">{item.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon-xs" className="text-muted-foreground" />
                      }
                    >
                      <MoreHorizontal className="size-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 size-3.5" /> Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 size-3.5" /> Download
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Swords className="mr-2 size-3.5" />
                        {item.type === "competitor" ? "Remove competitor tag" : "Tag as competitor"}
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
