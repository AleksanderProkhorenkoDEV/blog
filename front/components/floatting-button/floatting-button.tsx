'use client'

import Link from "next/link";
import React from "react"

interface Props {
    children: React.ReactNode,
    url: string;
}

export const FloattingButton = ({ children, url }: Props) => {

    return (
        <Link
            href={url}
            className="absolute bottom-5 right-5 flex items-center justify-center uppercase text-2xl text-foreground bg-primary/80 rounded-full size-12 hover:bg-primary duration-200 ease-in-out cursor-pointer"
        >
            {children}
        </Link >
    )
}