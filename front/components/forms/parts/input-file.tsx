'use client'

import { jetBrain } from "@/app/fonts/fonts"
import React from "react"


interface Props {
    name: string,
    children: React.ReactNode,
    className?: string,
    onChange: (file: File) => void,
    accept?: string,
}

export const CustomInputFiles = ({ name, children, className, onChange, accept = "image/*"}: Props) => {
    return (
        <label
            htmlFor={name}
            className={`${className} cursor-pointer ${jetBrain.className}`}
        >
            <input
                type="file"
                id={name}         
                className="hidden" 
                accept={accept}
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) onChange(file)
                }}
            />
            <div className="flex items-center gap-2 w-fit bg-primary/90  text-popover hover:bg-primary uppercase rounded-sm p-2 duration-200 ease-in-out transition">
                {children}
            </div>
        </label>
    )
}