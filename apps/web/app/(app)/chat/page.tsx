import type { Metadata } from "next"

import { PageHeading } from "@/components/layout/page-heading"

export const metadata: Metadata = {
  title: "Chat",
}

export default function ChatPage() {
  return (
    <div className="p-6 lg:p-10">
      <PageHeading title="Chat" />
    </div>
  )
}
