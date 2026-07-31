import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-dvh items-center justify-center p-6">
      <Card className="border-border/60 w-full max-w-md shadow-2xl">
        <CardHeader className="items-center gap-3 text-center">
          <Badge variant="secondary">Foundation</Badge>
          <CardTitle className="text-2xl font-semibold tracking-tight">Nova AI</CardTitle>
          <CardDescription>Monorepo foundation is ready for the next milestone.</CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-center text-sm">
          Web · Packages · Docs
        </CardContent>
      </Card>
    </main>
  )
}
