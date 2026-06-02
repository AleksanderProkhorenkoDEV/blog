import Link from "next/link"
import React from "react"

interface Props {
    href: string,
    children: React.ReactNode,
    isUnderline?: boolean
    className?: string
}

export const CustomLink = ({ href, children, isUnderline = true, className }: Props) => {
    return (
        <Link
            href={href}
            className={`font-semibold ${isUnderline ?? "underline"} ${className} flex items-center gap-2 underline-offset-4 hover:text-primary duration-200 transition-colors ease-in-out`}
        >
            {children}
        </Link>
    )
}