import { PresensiNgajiClient } from "./presensi-client"

export default async function PresensiNgajiPage({ params }: { params: Promise<{ pengajarId: string }> }) {
  const { pengajarId } = await params

  return <PresensiNgajiClient pengajarId={pengajarId} />
}
