import { NavigationMenuLink } from "../ui/navigation-menu";
import { usePathname } from "next/navigation"
import Link from "next/link";
import React from "react";

export const NavBarLink = ({ href, children, ...props }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = href === pathname

    return (
        <NavigationMenuLink asChild  data-active={isActive} key={`nav-home-${pathname}`}>
            <Link href={href} {...props}>{children}</Link>
        </NavigationMenuLink>
    )
}