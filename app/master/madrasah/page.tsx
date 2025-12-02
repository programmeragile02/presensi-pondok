"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { SearchInput } from "@/components/search-input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Phone, Users, GraduationCap } from "lucide-react"
import { madrasahTeachers, madrasahClasses, madrasahStudents } from "@/lib/mock-data"

type Tab = "guru" | "siswa" | "kelas"

export default function MasterMadrasahPage() {
  const [activeTab, setActiveTab] = useState<Tab>("guru")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeachers = madrasahTeachers.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredStudents = madrasahStudents.filter(
    (s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.nis.includes(searchQuery),
  )

  const getClassName = (classId: string) => {
    return madrasahClasses.find((c) => c.id === classId)?.name || ""
  }

  const getTeacherName = (teacherId: string) => {
    return madrasahTeachers.find((t) => t.id === teacherId)?.name || ""
  }

  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Master Madrasah Diniyah" subtitle="Kelola data madrasah sore" />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        {/* Tabs */}
        <div className="flex gap-2 bg-muted p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("guru")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "guru" ? "bg-white text-[#0f766e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Data Guru
          </button>
          <button
            onClick={() => setActiveTab("siswa")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "siswa" ? "bg-white text-[#0f766e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Data Siswa
          </button>
          <button
            onClick={() => setActiveTab("kelas")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              activeTab === "kelas" ? "bg-white text-[#0f766e] shadow-sm" : "text-muted-foreground"
            }`}
          >
            Data Kelas
          </button>
        </div>

        {/* Search for Guru and Siswa */}
        {(activeTab === "guru" || activeTab === "siswa") && (
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={activeTab === "guru" ? "Cari guru..." : "Cari siswa..."}
          />
        )}

        {/* Data Guru */}
        {activeTab === "guru" && (
          <div className="space-y-3">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-[#0f766e]">{teacher.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Phone className="w-3 h-3" />
                        <span>{teacher.phone}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Edit
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.classes.map((cls, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#bbf7d0] text-[#0f766e] border-none">
                        {cls}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#0f766e] hover:bg-[#0f766e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Guru
            </Button>
          </div>
        )}

        {/* Data Siswa */}
        {activeTab === "siswa" && (
          <div className="space-y-3">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#0f766e]">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">NIS: {student.nis}</p>
                      <Badge variant="outline" className="mt-2 border-[#22c55e] text-[#22c55e]">
                        {getClassName(student.classId)}
                      </Badge>
                    </div>
                    <GraduationCap className="w-8 h-8 text-[#0f766e]/30" />
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#0f766e] hover:bg-[#0f766e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Siswa
            </Button>
          </div>
        )}

        {/* Data Kelas */}
        {activeTab === "kelas" && (
          <div className="space-y-3">
            {madrasahClasses.map((kelas) => (
              <Card key={kelas.id} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-xl text-[#0f766e]">{kelas.name}</h3>
                    <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Guru:</span>
                      <span className="font-medium">{getTeacherName(kelas.teacherId)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Jumlah siswa:</span>
                      <span className="font-medium">{kelas.studentCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full h-14 bg-[#0f766e] hover:bg-[#0f766e]/90 rounded-2xl text-base shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Tambah Kelas
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
