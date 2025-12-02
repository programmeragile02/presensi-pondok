"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { SearchInput } from "@/components/search-input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Phone, Users } from "lucide-react"
import { ngajiTeachers, kelompokNgaji, santriNgaji } from "@/lib/mock-data"

type Tab = "pengajar" | "kelompok" | "santri"

export default function MasterNgajiPage() {
  const [activeTab, setActiveTab] = useState<Tab>("pengajar")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeachers = ngajiTeachers.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredSantri = santriNgaji.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const getTeacherName = (teacherId: string) => {
    return ngajiTeachers.find((t) => t.id === teacherId)?.name || ""
  }

  const getKelompokName = (kelompokId: string) => {
    return kelompokNgaji.find((k) => k.id === kelompokId)?.name || ""
  }

  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Master Ngaji Al Qur'an" subtitle="Kelola data ngaji pagi dan malam" />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        {/* Tabs */}
        <div className="flex gap-2 bg-muted p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("pengajar")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "pengajar" ? "bg-white text-[#22c55e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Pengajar
          </button>
          <button
            onClick={() => setActiveTab("kelompok")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "kelompok" ? "bg-white text-[#22c55e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Kelompok
          </button>
          <button
            onClick={() => setActiveTab("santri")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "santri" ? "bg-white text-[#22c55e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Santri
          </button>
        </div>

        {/* Search */}
        {(activeTab === "pengajar" || activeTab === "santri") && (
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={activeTab === "pengajar" ? "Cari pengajar..." : "Cari santri..."}
          />
        )}

        {/* Data Pengajar */}
        {activeTab === "pengajar" && (
          <div className="space-y-3">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-[#22c55e]">{teacher.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Phone className="w-3 h-3" />
                        <span>{teacher.phone}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{teacher.groupCount} Kelompok</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Pengajar
            </Button>
          </div>
        )}

        {/* Data Kelompok */}
        {activeTab === "kelompok" && (
          <div className="space-y-3">
            {kelompokNgaji.map((kelompok) => (
              <Card key={kelompok.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-[#22c55e]">{kelompok.name}</h3>
                        <Badge variant="outline" className="border-[#0f766e] text-[#0f766e] capitalize">
                          {kelompok.session}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Pengajar:</span>
                          <span className="font-medium">{getTeacherName(kelompok.teacherId)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Jumlah santri:</span>
                          <span className="font-medium">{kelompok.santriCount}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Kelompok
            </Button>
          </div>
        )}

        {/* Data Santri */}
        {activeTab === "santri" && (
          <div className="space-y-3">
            {filteredSantri.map((santri) => (
              <Card key={santri.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-[#22c55e]">{santri.name}</h3>
                      <Badge variant="outline" className="mt-2 border-[#0f766e] text-[#0f766e]">
                        {getKelompokName(santri.kelompokId)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Santri
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
