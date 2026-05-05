import React from "react"

export const Modal = ({ children }: { children: React.ReactNode }) => {
    return (
        <article className="fixed z-50 rounded-sm bg-foreground text-popover p-2">
            {children}
        </article>
    )
}