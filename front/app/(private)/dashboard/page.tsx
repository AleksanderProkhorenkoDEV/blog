import { MetricsChart } from "@/components/dashboard/metrics-chart"
import { getMonthlyMetrics } from "@/lib/data/metrics"

export default async function Dashboard() {
    const now = new Date()
    const data = await getMonthlyMetrics(now.getUTCFullYear(), now.getUTCMonth())
    return (
        <MetricsChart data={data} />
    )
}