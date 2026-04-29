import React from "react"

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={`size-9/10 rounded-sm bg-border/80 overflow-y-auto fixex z-2 ${className}`}>
            {children}
        </section>
    )
}