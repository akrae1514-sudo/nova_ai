import { Logo } from "@/components/branding/logo"
import { SidebarFooter } from "@/components/layout/sidebar-footer"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { navigationItems } from "@/lib/navigation"

export function AppSidebar() {
  return (
    <aside className="border-border bg-sidebar hidden w-64 shrink-0 flex-col border-r lg:flex">
      <div className="border-border/60 flex h-14 shrink-0 items-center border-b px-4">
        <Logo />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-3">
        <SidebarNav items={navigationItems} className="gap-1" />
        <div className="mt-auto">
          <SidebarFooter />
        </div>
      </div>
    </aside>
  )
}
