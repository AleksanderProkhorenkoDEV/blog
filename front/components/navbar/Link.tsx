import { usePathname } from "next/navigation"
import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";
import React from "react";

export const NavBarLink = ({ href, children, ...props }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = href === pathname

    return (
        <NavigationMenuLink asChild active={isActive}>
            <Link href={href} {...props} className="NavigationMenuLink">{children}</Link>
        </NavigationMenuLink>
    )
}