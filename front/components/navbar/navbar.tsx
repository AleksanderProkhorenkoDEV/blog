"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavBarLink } from "./Link"

export const CustomNavBar = () => {
    return (
        <header className="flex items-center justify-between border p-2">
            <div className="flex gap-2 border">
                <span className="text-primary">{`>_`}</span><p>~/init</p>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavBarLink href="/">Inicio</NavBarLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavBarLink href="/blog">Blog</NavBarLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavBarLink href="/contact">Contact</NavBarLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}