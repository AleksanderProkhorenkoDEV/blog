import prisma from "../prisma/prisma";

export async function getMonthlyMetrics(year: number, month: number) {
    const start = new Date(Date.UTC(year, month, 1))
    const end = new Date(Date.UTC(year, month + 1, 1))

    const rows = await prisma.postDailyMetrics.groupBy({
        by: ["date"],
        where: { date: { gte: start, lt: end } },
        _sum: { views: true, likes: true },
        orderBy: { date: "asc" }
    })

    const byDay = new Map(
        rows.map(r => [r.date.toISOString().slice(0, 10), r._sum])
    )

    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()

    return Array.from({ length: daysInMonth }, (_, i) => {
        const d = new Date(Date.UTC(year, month, i + 1))
        const key = d.toISOString().slice(0, 10)
        return {
            day: i + 1,
            views: byDay.get(key)?.views ?? 0,
            likes: byDay.get(key)?.likes ?? 0
        }
    })
}