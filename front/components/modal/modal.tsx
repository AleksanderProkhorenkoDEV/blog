'use client'

import { Button } from "@/components/forms/parts/button";
import { Konkhmer } from "@/app/fonts/fonts";
import { X } from "lucide-react";
import React from "react"
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode;
    title: string;
}

export const Modal = ({ children, title }: Props) => {

    const router = useRouter()

    return (
        <div className="fixed inset-0 z-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-popover/30 backdrop-blur-xs"></div>
            <article
                className="relative z-10 bg-foreground text-popover 
                            p-3 rounded-xl shadow-lg min-w-2xl flex flex-col gap-4
                            animate-in fade-in zoom-in-95 duration-200 ease-out
                        "
                role="dialog"
                aria-modal="true"
            >
                <header className="flex justify-between">
                    <p className={`${Konkhmer.className} tracking-wide text-xl`}>{title}</p>
                    <Button
                        type="button"
                        variant="icons"
                        onClick={() => router.back()}
                    >
                        <X />
                    </Button>
                </header>
                {children}
            </article>
        </div>
    )
}