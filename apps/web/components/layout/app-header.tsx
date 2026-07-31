import { CreditsIndicator } from "@/components/layout/credits-indicator"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModelSelector } from "@/components/layout/model-selector"
import { UserMenu } from "@/components/layout/user-menu"

export function AppHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b px-4 backdrop-blur-md lg:px-6">
      <MobileNav />
      <div className="flex-1" />
      <ModelSelector />
      <CreditsIndicator />
      <UserMenu />
    </header>
  )
}
