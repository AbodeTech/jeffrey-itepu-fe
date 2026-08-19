import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { AdminSourceTable } from "@/features/admin"
import { getAdminSource } from "@/features/admin/catalog"
import { loadSourceTable } from "@/features/admin/queries"
import { hasAdminSession } from "@/lib/admin/guard"

type PageProps = {
  params: Promise<{ source: string }>
  searchParams: Promise<{ q?: string; page?: string }>
}

export async function generateMetadata({ params }: Pick<PageProps, "params">): Promise<Metadata> {
  const source = getAdminSource((await params).source)
  return {
    title: source ? `${source.label} — Admin` : "Admin",
    robots: { index: false, follow: false },
  }
}

export default async function AdminSourcePage({ params, searchParams }: PageProps) {
  if (!(await hasAdminSession())) {
    redirect("/admin")
  }

  const { source: sourceId } = await params
  const source = getAdminSource(sourceId)
  if (!source) {
    notFound()
  }

  const query = await searchParams
  const page = Number.parseInt(query.page ?? "1", 10)
  const data = await loadSourceTable(source, page, query.q ?? "")
  return <AdminSourceTable data={data} />
}
