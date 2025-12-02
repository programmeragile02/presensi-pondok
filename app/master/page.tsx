import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { BottomNav } from "@/components/bottom-nav";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, BookMarked } from "lucide-react";

export default function MasterPage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Master Data"
        subtitle="Kelola data guru, siswa, dan kelas"
      />

      <div className="max-w-[600px] mx-auto p-4 space-y-4 mt-4">
        <Link href="/master/madrasah">
          <Card className="shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer border-l-4 border-l-[#0f766e] mb-4">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-[#0f766e] p-3 rounded-2xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Master Madrasah Diniyah
                  </CardTitle>
                  <CardDescription className="text-base">
                    Kelola guru, siswa, dan kelas untuk madrasah sore
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/master/ngaji">
          <Card className="shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer border-l-4 border-l-[#22c55e]">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-[#22c55e] p-3 rounded-2xl">
                  <BookMarked className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Master Ngaji Al Qur&apos;an
                  </CardTitle>
                  <CardDescription className="text-base">
                    Kelola pengajar, kelompok ngaji, dan santri
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
