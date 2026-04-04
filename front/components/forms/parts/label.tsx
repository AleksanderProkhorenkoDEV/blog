import React from "react"

interface Props {
    className?: string,
    htmlFor: string,
    children: React.ReactNode
}

export const Label = ({ className, htmlFor, children }: Props) => {
    return (
        <label htmlFor={htmlFor} className={`${className}`}>{children}</label>
    )
}