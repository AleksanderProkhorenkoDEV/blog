'use client'

import { useRouter } from "next/navigation";
import React from "react"

interface Props {
    children: React.ReactNode,
    url: string;
}

export const FloattingButton = ({ children, url }: Props) => {

    const router = useRouter()

    return (
        <button
            type="button"
            onClick={() => { router.push(url) }}
            className="absolute bottom-5 right-5 bg-primary/80 rounded-full size-12 hover:bg-primary duration-200 ease-in-out cursor-pointer"
        >
            <p className="uppercase text-2xl text-foreground">{children}</p>
        </button >
    )
}