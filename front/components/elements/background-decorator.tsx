import React from "react"
import { jetBrain } from "../../app/fonts/fonts"

interface Props {
    position: string,
    children: React.ReactNode
}

export const BackgroundDecor = ({ position, children }: Props) => {
    return (
        <span className={`${jetBrain.className} fixed z-[-999]  ${position} text-9xl text-secondary/55 hover:text-primary/60 ease-in-out transition-all`}>
            {children}
        </span>
    )
}