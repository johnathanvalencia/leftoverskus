"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { PortalSidebar } from "@/components/client-portal/portal-sidebar";
import { PortalTopbar } from "@/components/client-portal/portal-topbar";
import { MobileSidebar } from "@/components/client-portal/mobile-sidebar";

const pageTitles: Record<string, string> = {
  "/client-portal/dashboard": "Dashboard",
  "/client-portal/catalog": "Catalog",
  "/client-portal/catalog2": "Catalog v2",
  "/client-portal/uploads": "Uploads",
  "/client-portal/compositions": "Compositions",
  "/client-portal/storylines": "Storylines",
  "/client-portal/synthesis": "Synthesis",
  "/client-portal/videos": "Videos",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Portal";

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <PortalSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar open={mobileOpen} onOpenChange={setMobileOpen} />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <PortalTopbar
          title={title}
          onMenuToggle={() => setMobileOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
