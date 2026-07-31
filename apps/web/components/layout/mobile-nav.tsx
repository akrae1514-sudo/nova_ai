"use client"

import { MenuIcon } from "lucide-react"

import { Logo } from "@/components/branding/logo"
import { SidebarFooter } from "@/components/layout/sidebar-footer"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from "@/lib/navigation"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Open navigation" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 gap-0 p-0">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Primary navigation menu</SheetDescription>
        <div className="border-border/60 flex h-14 shrink-0 items-center border-b px-4">
          <Logo />
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-3">
          <SidebarNav items={navigationItems} className="gap-1" />
          <div className="mt-auto">
            <SidebarFooter />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
