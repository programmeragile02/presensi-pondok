"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { SearchInput } from "@/components/search-input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { madrasahTeachers } from "@/lib/mock-data"

export default function AbsensiMadrasahPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeachers = madrasahTeachers.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Pilih Guru Madrasah" subtitle="Madrasah Diniyah (Sesi Sore)" showDate />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Cari guru..." />

        <div className="space-y-3">
          {filteredTeachers.map((teacher) => (
            <Link key={teacher.id} href={`/absensi/madrasah/${teacher.id}`}>
              <Card className="shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#0f766e] mb-2">{teacher.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {teacher.classes.map((cls, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-[#bbf7d0] text-[#0f766e] border-none">
                            {cls}
                          </Badge>
                        ))}
                      </div>
                      <Badge variant="outline" className="mt-2 border-[#0f766e] text-[#0f766e]">
                        Sesi Sore
                      </Badge>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
