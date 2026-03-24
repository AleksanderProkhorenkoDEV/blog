import { jetBrain } from "@/app/fonts/fonts"
import React from "react"

interface Props {
    position: string,
    children: React.ReactNode
}

export const CurliBraces = ({ position, children }: Props) => {
    return (
        <span className={`${jetBrain.className} absolute  ${position} text-9xl text-secondary/55 hover:text-primary/60 ease-in-out transition-all`}>{children}</span>
    )
}