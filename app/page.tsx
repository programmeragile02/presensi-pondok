import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Sun, Moon } from "lucide-react"

export default function BerandaPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Beranda" showDate />

      <div className="max-w-[600px] mx-auto p-4 space-y-4">
        {/* Greeting Card */}
        <Card className="bg-gradient-to-br from-[#bbf7d0] to-[#86efac] border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-[#0f766e] text-xl">Assalamu&apos;alaikum,</CardTitle>
            <CardDescription className="text-[#065f46] font-medium">Operator Madrasah</CardDescription>
          </CardHeader>
        </Card>

        {/* Madrasah Diniyah Summary */}
        <Card className="shadow-lg border-l-4 border-l-[#0f766e]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0f766e]" />
              <CardTitle className="text-lg">Madrasah Diniyah (Sore)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Presensi hari ini:</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#0f766e]">75</span>
                <span className="text-xl text-muted-foreground">/ 90 santri hadir</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Jumlah guru: 5</span>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 h-12 rounded-xl border-[#0f766e] text-[#0f766e] hover:bg-[#0f766e] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/absensi/madrasah">Pergi ke Absensi Madrasah</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Ngaji Al Qur'an Summary */}
        <Card className="shadow-lg border-l-4 border-l-[#22c55e]">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#22c55e]" />
              <CardTitle className="text-lg">Ngaji Al Qur&apos;an</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f0fdf4] p-4 rounded-2xl border border-[#bbf7d0]">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-4 h-4 text-[#22c55e]" />
                  <Badge variant="outline" className="border-[#22c55e] text-[#22c55e]">
                    Pagi
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-[#0f766e]">40</p>
                <p className="text-sm text-muted-foreground">/ 50 hadir</p>
              </div>
              <div className="bg-[#f0fdf4] p-4 rounded-2xl border border-[#bbf7d0]">
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-4 h-4 text-[#0f766e]" />
                  <Badge variant="outline" className="border-[#0f766e] text-[#0f766e]">
                    Malam
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-[#0f766e]">35</p>
                <p className="text-sm text-muted-foreground">/ 50 hadir</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 h-12 rounded-xl border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/absensi/ngaji">Pergi ke Absensi Ngaji</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
