import React from "react";
import { CustomNavBar } from "../../components/navbar/navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CustomNavBar />
            <main className="max-w-7xl mx-auto max-2xl:w-6xl max-xl:w-4xl max-lg:w-xl max-sm:w-full max-sm:px-8">
                {children}
            </main>
        </>
    )
}