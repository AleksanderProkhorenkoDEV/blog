import React from "react";
import { CustomNavBar } from "../../components/navbar/navbar";

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