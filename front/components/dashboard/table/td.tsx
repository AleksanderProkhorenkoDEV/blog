import { Montserrat} from "../../../app/fonts/fonts"
import React from "react"

export const Td = ({ children, className, colSpan }: { children: React.ReactNode, className?: string, colSpan?: number }) => {
    return (
        <td
            colSpan={colSpan}
            className={`text-center align-middle border-b border-secondary/60 px-4 py-3 ${className} ${Montserrat.className}`}
        >
            {children}
        </td>
    )
}