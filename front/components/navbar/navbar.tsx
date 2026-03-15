"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavBarLink } from "./Link"

export const CustomNavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavBarLink href="/">{`>_ ~/init `}</NavBarLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavBarLink href="/">Inicio</NavBarLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <NavBarLink href="/contact">Contact</NavBarLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}