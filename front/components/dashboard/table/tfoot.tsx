import React from "react"

export const Tfoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <tfoot className="">
                {children}
        </tfoot>
    )
}