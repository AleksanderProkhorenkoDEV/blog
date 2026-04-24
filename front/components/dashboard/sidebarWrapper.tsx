'use client'

import React, { useState } from "react"
import { SideBar } from "./sidebar";

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setOpen] = useState<boolean>(true);

    return (
        <main className={`min-h-svh grid ${isOpen ? "grid-cols-[300px_1fr]" : "grid-cols-[50px_1fr]"} transition-all duration-300`}>
            <SideBar isOpen={isOpen} toggleOpen={() => setOpen(!isOpen)} />
            <article className="border border-primary p-2">
                {children}
            </article>
        </main>
    )
}