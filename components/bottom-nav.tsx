"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Database, ClipboardCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/master", label: "Master Data", icon: Database },
    { href: "/absensi", label: "Absensi", icon: ClipboardCheck },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="max-w-[600px] mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-95",
                active ? "text-white" : "text-muted-foreground",
              )}
            >
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all",
                  active && "bg-[#0f766e]",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
