"use client"

import {
    LineChart, Line, XAxis, YAxis, Tooltip,
    CartesianGrid, ResponsiveContainer
} from "recharts"

type Point = { day: number; views: number; likes: number }

export function MetricsChart({ data }: { data: Point[] }) {
    return (
        <div style={{ width: "80%", height: 320 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" name="Visitas" stroke="#2563eb" dot={false} />
                    <Line type="monotone" dataKey="likes" name="Likes" stroke="#e11d48" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}