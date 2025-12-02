"use client"

import { format } from "date-fns"
import { id } from "date-fns/locale"

interface PageHeaderProps {
  title: string
  subtitle?: string
  showDate?: boolean
}

export function PageHeader({ title, subtitle, showDate = false }: PageHeaderProps) {
  const today = format(new Date(), "EEEE, d MMMM yyyy", { locale: id })

  return (
    <div className="bg-gradient-to-br from-[#0f766e] to-[#14b8a6] text-white p-6 rounded-b-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      {subtitle && <p className="text-sm text-white/90">{subtitle}</p>}
      {showDate && <p className="text-sm text-white/90 mt-1">{today}</p>}
    </div>
  )
}
