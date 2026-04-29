import React from "react"

export const Table = ({ children }: { children: React.ReactNode }) => {
    return (
        <table className="w-full h-full border-separate border-spacing-0 rounded-md border border-secondary/60 overflow-hidden">
            {children}
        </table>
    )
}