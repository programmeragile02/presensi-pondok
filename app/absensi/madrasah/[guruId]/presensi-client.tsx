"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { madrasahTeachers, madrasahStudents, madrasahClasses } from "@/lib/mock-data"

type AttendanceStatus = "hadir" | "alpa" | "izin" | "sakit"

export function PresensiMadrasahClient({ guruId }: { guruId: string }) {
  const router = useRouter()
  const { toast } = useToast()

  const teacher = madrasahTeachers.find((t) => t.id === guruId)
  const teacherClasses = madrasahClasses.filter((c) => c.teacherId === guruId)
  const selectedClass = teacherClasses[0]
  const students = madrasahStudents.filter((s) => s.classId === selectedClass?.id)

  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    students.reduce((acc, student) => ({ ...acc, [student.id]: "hadir" }), {}),
  )

  const handleMarkAll = () => {
    const newAttendance = students.reduce(
      (acc, student) => ({
        ...acc,
        [student.id]: "hadir",
      }),
      {},
    )
    setAttendance(newAttendance)
  }

  const handleSave = () => {
    toast({
      title: "Berhasil!",
      description: "Presensi berhasil disimpan.",
      className: "bg-[#0f766e] text-white border-none",
    })
    setTimeout(() => router.push("/absensi"), 1500)
  }

  const getStatusColor = (status: AttendanceStatus) => {
    switch (status) {
      case "hadir":
        return "bg-[#22c55e] text-white"
      case "alpa":
        return "bg-red-500 text-white"
      case "izin":
        return "bg-yellow-500 text-white"
      case "sakit":
        return "bg-orange-500 text-white"
    }
  }

  const hadirCount = Object.values(attendance).filter((s) => s === "hadir").length
  const tidakHadirCount = students.length - hadirCount

  if (!teacher || !selectedClass) {
    return <div className="p-4 text-center">Teacher not found</div>
  }

  return (
    <div className="min-h-screen pb-32">
      <PageHeader title="Presensi Madrasah - Sore" subtitle={`${teacher.name} • ${selectedClass.name}`} showDate />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        {/* Summary */}
        <Card className="bg-gradient-to-br from-[#bbf7d0] to-[#86efac] border-none shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <p className="text-sm text-[#065f46]">Hadir</p>
                <p className="text-3xl font-bold text-[#0f766e]">{hadirCount}</p>
              </div>
              <div className="w-px h-12 bg-[#0f766e]/20" />
              <div className="text-center">
                <p className="text-sm text-[#065f46]">Tidak Hadir</p>
                <p className="text-3xl font-bold text-[#0f766e]">{tidakHadirCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full h-12 rounded-xl border-[#0f766e] text-[#0f766e] bg-transparent"
          onClick={handleMarkAll}
        >
          Tandai Semua Hadir
        </Button>

        {/* Student List */}
        <div className="space-y-3">
          {students.map((student) => (
            <Card key={student.id} className="shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f766e]">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">NIS: {student.nis}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {(["hadir", "alpa", "izin", "sakit"] as AttendanceStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => setAttendance((prev) => ({ ...prev, [student.id]: status }))}
                      className={`py-2 px-3 rounded-xl font-medium capitalize transition-all active:scale-95 ${
                        attendance[student.id] === status ? getStatusColor(status) : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-border shadow-lg">
        <div className="max-w-[600px] mx-auto">
          <Button
            className="w-full h-14 bg-[#0f766e] hover:bg-[#0f766e]/90 rounded-2xl text-base shadow-md"
            onClick={handleSave}
          >
            Simpan Presensi
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
