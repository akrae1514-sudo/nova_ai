import { navigationFooterItems } from "@/lib/navigation"

import { SidebarNav } from "@/components/layout/sidebar-nav"

export function SidebarFooter() {
  return (
    <div className="border-border/60 flex flex-col gap-1 border-t pt-3">
      <p className="text-sidebar-foreground/50 px-2 pb-1.5 text-xs font-medium">Workspace</p>
      <SidebarNav items={navigationFooterItems} />
    </div>
  )
}
