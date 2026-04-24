import React from "react"

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="size-9/10 rounded-sm bg-muted-foreground/80 overflow-y-auto fixex z-2">
            {children}
        </section>
    )
}