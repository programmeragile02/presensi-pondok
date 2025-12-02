import { PresensiMadrasahClient } from "./presensi-client"

export default async function PresensiMadrasahPage({ params }: { params: Promise<{ guruId: string }> }) {
  const { guruId } = await params

  return <PresensiMadrasahClient guruId={guruId} />
}
