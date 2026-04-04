import Link from "next/link"
import React from "react"

interface Props {
    href: string,
    children: React.ReactElement
}

export const CustomLink = ({ href, children }: Props) => {
    return (
        <Link href={href} className={`font-semibold underline underline-offset-4 hover:text-primary`}>{children}</Link>
    )
}