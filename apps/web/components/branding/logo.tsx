import { SparklesIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="from-brand via-brand text-brand-foreground shadow-brand/30 flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br to-indigo-600 shadow-md">
        <SparklesIcon className="size-4" />
      </span>
      {showText && (
        <span className="text-foreground text-sm font-semibold tracking-tight">Nova AI</span>
      )}
    </span>
  )
}
