"use client"

import {
    LineChart, Line, XAxis, YAxis, Tooltip,
    CartesianGrid, ResponsiveContainer,
    Legend
} from "recharts"

type Point = { day: number; views: number; likes: number }

const tick = { fontSize: 12, fill: "var(--primitive-gray)" }

export function MetricsChart({ data }: { data: Point[] }) {
    return (
        <div className="h-80 w-full">
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--primitive-border)"
                        vertical={false}
                    />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={tick} />

                    <YAxis
                        yAxisId="views"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={tick}
                        width={36}
                    />
                    <YAxis
                        yAxisId="likes"
                        orientation="right"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={tick}
                        width={36}
                        domain={[0, (max: number) => Math.max(max, 4)]}
                    />

                    <Tooltip
                        labelFormatter={(day) => `Día ${day}`}
                        contentStyle={{
                            background: "var(--primitive-surface)",
                            border: "1px solid var(--primitive-border)",
                            borderRadius: 12,
                            fontSize: 13,
                        }}
                        labelStyle={{ color: "var(--primitive-white)" }}
                        itemStyle={{ color: "var(--primitive-white)" }}
                        cursor={{ stroke: "var(--primitive-subtle)" }}
                    />
                    <Legend
                        iconType="circle"
                        wrapperStyle={{ fontSize: 13, color: "var(--primitive-gray)" }}
                    />

                    <Line
                        yAxisId="views"
                        type="monotone"
                        dataKey="views"
                        name="Visitas"
                        stroke="var(--primitive-green)"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                    <Line
                        yAxisId="likes"
                        type="monotone"
                        dataKey="likes"
                        name="Likes"
                        stroke="var(--primitive-red)"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}