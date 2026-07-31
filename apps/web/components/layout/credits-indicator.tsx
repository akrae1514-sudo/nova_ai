import { CoinsIcon } from "lucide-react"

export function CreditsIndicator() {
  return (
    <div
      aria-label="Credits"
      title="Credits"
      className="border-border bg-background text-muted-foreground flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium"
    >
      <CoinsIcon className="text-brand size-3.5" />
      <span>0</span>
    </div>
  )
}
