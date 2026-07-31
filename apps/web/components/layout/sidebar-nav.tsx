"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { navIcons, type NavigationItem } from "@/lib/navigation"

export function SidebarNav({ items, className }: { items: NavigationItem[]; className?: string }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Sidebar navigation" className={cn("flex flex-col gap-0.5", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href
        const Icon = navIcons[item.icon]

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-9 items-center gap-2.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
