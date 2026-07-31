import type { Metadata } from "next"

import { PageHeading } from "@/components/layout/page-heading"

export const metadata: Metadata = {
  title: "Videos",
}

export default function VideosPage() {
  return (
    <div className="p-6 lg:p-10">
      <PageHeading title="Videos" />
    </div>
  )
}
