import { MetricsChart } from "@/components/dashboard/metrics-chart"
import { Skeleton } from "@/components/ui/skeleton"
import { getMonthlyMetrics } from "@/lib/data/metrics"
import { connection } from "next/server"
import { Suspense } from "react"

export default function Dashboard() {
    return (
        <section className="mx-auto flex min-h-full w-full max-w-4xl flex-col items-center gap-8 px-4 py-12 sm:px-6">
            <header className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Resumen mensual
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-balance text-neutral-500">
                    Evolución diaria de las visitas y los likes recibidos por todas
                    las publicaciones del blog durante el mes en curso.
                </p>
            </header>

            <div className="w-full space-y-6">
                <Suspense fallback={<MetricsSkeleton />}>
                    <MonthlyMetrics />
                </Suspense>
            </div>
        </section>
    )
}

async function MonthlyMetrics() {
    await connection()

    const now = new Date()
    const data = await getMonthlyMetrics(now.getUTCFullYear(), now.getUTCMonth())

    const totalViews = data.reduce((acc, d) => acc + d.views, 0)
    const totalLikes = data.reduce((acc, d) => acc + d.likes, 0)

    const monthName = new Intl.DateTimeFormat("es-ES", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(now)

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <StatCard label="Visitas" value={totalViews} color="bg-[var(--primitive-green)]" />
                <StatCard label="Likes" value={totalLikes} color="bg-[var(--primitive-red)]" />
            </div>

            <div className="rounded-2xl border border-(--primitive-border) bg--primitive-surface) p-4 shadow-sm sm:p-6">
                <p className="mb-4 text-sm font-medium capitalize text-(--primitive-gray)">
                    {monthName}
                </p>
                <MetricsChart data={data} />
            </div>
        </>
    )
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div className="rounded-2xl border border-(--primitive-border) bg-(--primitive-surface) p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-(--primitive-gray)">
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                {label}
            </div>
            <p className="mt-2 text-3xl font-semibold tracking-tight">
                {value.toLocaleString("es-ES")}
            </p>
        </div>
    )
}

function MetricsSkeleton() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-24 rounded-2xl" />
                <Skeleton className="h-24 rounded-2xl" />
            </div>
            <Skeleton className="h-96 rounded-2xl" />
        </>
    )
}