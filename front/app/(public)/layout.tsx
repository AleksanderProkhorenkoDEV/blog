import { CustomNavBar } from "@/components/navbar/navbar";
import React from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CustomNavBar />
            {children}
        </>
    )
}