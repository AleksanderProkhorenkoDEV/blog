import { CustomNavBar } from "@/components/navbar/navbar";
import React from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CustomNavBar />
            <main className="max-w-7xl mx-auto">
                {children}
            </main>
        </>
    )
}