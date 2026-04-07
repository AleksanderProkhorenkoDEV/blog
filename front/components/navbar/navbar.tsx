"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavBarLink } from "./Link"
import { Konkhmer } from "@/app/fonts/fonts"

export const CustomNavBar = () => {
    return (
        <header className="flex items-center justify-around p-2 border-b border-secondary">
            <div className={`flex gap-2 tracking-widest ${Konkhmer.className}`}>
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