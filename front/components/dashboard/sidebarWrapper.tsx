'use client'

import React, { useState } from "react"
import { SideBar } from "./sidebar";
import { BackgroundDecor } from "../elements/BackgroundDecor";

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setOpen] = useState<boolean>(true);

    return (
        <main className={`h-svh grid ${isOpen ? "grid-cols-[300px_1fr]" : "grid-cols-[50px_1fr]"} transition-all duration-300 overflow-hidden`}>
            <SideBar isOpen={isOpen} toggleOpen={() => setOpen(!isOpen)} />
            <article className="p-2 flex items-center justify-center relative overflow-hidden">
                {children}
                <BackgroundDecor position="top-6 right-8">{"{"}</BackgroundDecor>
                <BackgroundDecor position="top-1/3 left-6">{"<"}</BackgroundDecor>
                <BackgroundDecor position="bottom-10 right-1/4">{">"}</BackgroundDecor>
                <BackgroundDecor position="bottom-6 left-10">{";"}</BackgroundDecor>
                <BackgroundDecor position="top-1/2 right-6">{"}"}</BackgroundDecor>
            </article>
        </main>
    )
}