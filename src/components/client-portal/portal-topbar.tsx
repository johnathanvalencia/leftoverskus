"use client";

import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/client-portal/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface PortalTopbarProps {
  title: string;
  onMenuToggle: () => void;
}

export function PortalTopbar({ title, onMenuToggle }: PortalTopbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card/50 px-4 backdrop-blur-sm">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 lg:hidden"
          onClick={onMenuToggle}
        >
          <Menu className="size-4" />
        </Button>
        <h1 className="font-heading text-lg font-semibold text-foreground">
          {title}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="size-8 text-muted-foreground">
          <Search className="size-4" />
        </Button>

        <ThemeToggle />

        <Button variant="ghost" size="icon" className="relative size-8 text-muted-foreground">
          <Bell className="size-4" />
          <span className="absolute top-1 right-1 size-2 rounded-full bg-primary" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" size="icon" className="ml-1 size-8" />}
          >
            <Avatar className="size-7">
              <AvatarFallback className="bg-primary/10 text-xs font-medium text-primary">
                JD
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-muted-foreground">jane@acme.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/client-portal/login" className="text-destructive">
                Sign out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
