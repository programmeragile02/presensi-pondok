"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { SearchInput } from "@/components/search-input"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Phone, Users } from "lucide-react"
import { ngajiTeachers } from "@/lib/mock-data"

export default function AbsensiNgajiPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeachers = ngajiTeachers.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Pilih Pengajar Ngaji" subtitle="Absensi Ngaji Al Qur'an" showDate />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Cari pengajar..." />

        <div className="space-y-3">
          {filteredTeachers.map((teacher) => (
            <Link key={teacher.id} href={`/absensi/ngaji/${teacher.id}`}>
              <Card className="shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#22c55e] mb-2">{teacher.name}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          <span>{teacher.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{teacher.groupCount} Kelompok</span>
                        </div>
                      </div>
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
