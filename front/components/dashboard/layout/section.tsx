import React from "react"

export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={`w-11/12 min-h-[60svh] max-h-[90svh] rounded-md bg-card/80 backdrop-blur-sm overflow-y-auto z-10 relative ${className}`}>
            {children}
        </section>
    )
}