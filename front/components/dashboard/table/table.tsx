import React from "react"

export const Table = ({ children }: { children: React.ReactNode }) => {
    return (
        <table className="border border-primary max-w-fit max-h-fit border-spacing-2">
            {children}
        </table>
    )
}