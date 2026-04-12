"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UploadCloud,
  Layers,
  BookOpen,
  Sparkles,
  Play,
  Zap,
  LogOut,
  ChevronLeft,
  FolderTree,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const enabledRoutes = new Set([
  "/client-portal/dashboard",
  "/client-portal/catalog",
  "/client-portal/catalog2",
  "/client-portal/uploads",
  "/client-portal/compositions",
]);

const navItems = [
  { label: "Dashboard", href: "/client-portal/dashboard", icon: LayoutDashboard },
  { label: "Catalog", href: "/client-portal/catalog", icon: FolderTree },
  { label: "Catalog v2", href: "/client-portal/catalog2", icon: FolderTree },
  { label: "Uploads", href: "/client-portal/uploads", icon: UploadCloud },
  { label: "Compositions", href: "/client-portal/compositions", icon: Layers },
  { label: "Storylines", href: "/client-portal/storylines", icon: BookOpen },
  { label: "Synthesis", href: "/client-portal/synthesis", icon: Sparkles },
  { label: "Videos", href: "/client-portal/videos", icon: Play },
];

interface PortalSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function PortalSidebar({ collapsed, onToggle }: PortalSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Zap className="size-4 text-primary" />
        </div>
        {!collapsed && (
          <span className="font-heading text-sm font-bold tracking-tight text-sidebar-foreground">
            Left Over SKUs
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isEnabled = enabledRoutes.has(item.href);

          return (
            <Link
              key={item.href}
              href={isEnabled ? item.href : "#"}
              title={collapsed ? item.label + (!isEnabled ? " (Coming soon)" : "") : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                !isEnabled && "cursor-default opacity-50",
                collapsed && "justify-center px-0"
              )}
              onClick={!isEnabled ? (e) => e.preventDefault() : undefined}
            >
              <item.icon className={cn("size-4 shrink-0", isActive && "text-primary")} />
              {!collapsed && (
                <span className="truncate">{item.label}</span>
              )}
              {!collapsed && !isEnabled && (
                <span className="ml-auto rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-sidebar-border p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={cn(
            "w-full justify-center text-sidebar-foreground/50 hover:text-sidebar-foreground",
            !collapsed && "justify-start"
          )}
        >
          <ChevronLeft
            className={cn(
              "size-4 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
          {!collapsed && <span className="ml-2 text-xs">Collapse</span>}
        </Button>
      </div>

      {/* User section */}
      <div className="border-t border-sidebar-border p-3">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <Avatar className="size-8 shrink-0">
            <AvatarFallback className="bg-primary/10 text-xs font-medium text-primary">
              JD
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-sidebar-foreground">
                Jane Doe
              </p>
              <p className="truncate text-xs text-muted-foreground">
                jane@acme.com
              </p>
            </div>
          )}
          {!collapsed && (
            <Link
              href="/client-portal/login"
              title="Sign out"
              className="inline-flex size-7 items-center justify-center rounded-md text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <LogOut className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
