import { SidebarWrapper } from "../../components/dashboard/layout/sidebarWrapper"
import React from "react"



export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarWrapper>{children}</SidebarWrapper>
    )
}