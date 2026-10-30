"use client"

import {
    Bar, BarChart, CartesianGrid, ResponsiveContainer,
    Tooltip, XAxis, YAxis
} from "recharts"

type PostViews = { id: number; title: string; views: number }

const tick = { fontSize: 12, fill: "var(--primitive-gray)" }

function truncateTitle(title: string) {
    return title.length > 22 ? `${title.slice(0, 22).trimEnd()}…` : title
}

export function PostViewsChart({ data }: { data: PostViews[] }) {
    if (data.length === 0) {
        return (
            <div className="flex h-48 items-center justify-center text-sm text-(--primitive-gray)">
                Todavía no hay visitas registradas.
            </div>
        )
    }

    const height = Math.max(240, data.length * 44)

    return (
        <div className="w-full" style={{ height }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--primitive-border)"
                        horizontal={false}
                    />
                    <XAxis
                        type="number"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={tick}
                    />
                    <YAxis
                        type="category"
                        dataKey="title"
                        width={150}
                        tickLine={false}
                        axisLine={false}
                        tick={tick}
                        tickFormatter={truncateTitle}
                    />

                    <Tooltip
                        labelFormatter={(title) => String(title)}
                        formatter={(value) => [
                            Number(value).toLocaleString("es-ES"),
                            "Visitas"
                        ]}
                        contentStyle={{
                            background: "var(--primitive-surface)",
                            border: "1px solid var(--primitive-border)",
                            borderRadius: 12,
                            fontSize: 13,
                        }}
                        labelStyle={{ color: "var(--primitive-white)" }}
                        itemStyle={{ color: "var(--primitive-white)" }}
                        cursor={{ fill: "var(--primitive-subtle)", opacity: 0.15 }}
                    />

                    <Bar
                        dataKey="views"
                        name="Visitas"
                        fill="var(--primitive-green)"
                        radius={[0, 6, 6, 0]}
                        barSize={16}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
