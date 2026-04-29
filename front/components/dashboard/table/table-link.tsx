import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const TableLink = ({ children, href }: { children: React.ReactNode, href: string }) => {

    return (
        <Link href={href} className="ease-in-out flex gap-0.5 group-hover:text-primary transition-text duration-200">
            {children}
            <MoveUpRight width={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </Link>
    )
}