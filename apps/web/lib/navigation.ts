import { HistoryIcon, ImageIcon, MessageSquareIcon, SettingsIcon, VideoIcon } from "lucide-react"

export const navIcons = {
  "message-square": MessageSquareIcon,
  image: ImageIcon,
  video: VideoIcon,
  history: HistoryIcon,
  settings: SettingsIcon,
} as const

export type NavIconName = keyof typeof navIcons

export type NavigationItem = {
  title: string
  href: string
  icon: NavIconName
}

export const navigationItems: NavigationItem[] = [
  { title: "Chat", href: "/chat", icon: "message-square" },
  { title: "Images", href: "/images", icon: "image" },
  { title: "Videos", href: "/videos", icon: "video" },
  { title: "History", href: "/history", icon: "history" },
]

export const navigationFooterItems: NavigationItem[] = [
  { title: "Settings", href: "/settings", icon: "settings" },
]
