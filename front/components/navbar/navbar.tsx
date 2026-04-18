"use client"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Konkhmer } from "../../app/fonts/fonts"
import { User } from "lucide-react"
import { NavBarLink } from "./Link"
import { UserMenu } from "./UserMenu"


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

                    <NavigationMenuItem className="hidden md:flex">
                        <NavigationMenuTrigger className="hover:text-primary transition-colors">
                            <User />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <UserMenu />
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

