"use client"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Konkhmer } from "../../app/fonts/fonts"
import { Menu, User } from "lucide-react"
import { NavBarLink } from "./Link"
import { UserMenu } from "./UserMenu"
import { getNavItems } from "./navItems"

const items = getNavItems()

export const CustomNavBar = () => {
    return (
        <header className="flex items-center justify-around p-2 border-b border-secondary">
            <div className={`flex gap-2 tracking-widest ${Konkhmer.className}`}>
                <span className="text-primary">{`>_`}</span><p>~/init</p>
            </div>

            <NavigationMenu className="hidden sm:flex">
                <NavigationMenuList>
                    {
                        items.map((item) => {
                            return (
                                <NavBarLink key={item.title} href={item.href}>{item.title}</NavBarLink>
                            )
                        })
                    }
                    <UserActions />
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="flex sm:hidden">
                <NavigationMenuList>
                    <MovileMenuLinks />
                    <UserActions />
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

const UserActions = () => {
    return (
        <NavigationMenuItem className="">
            <NavigationMenuTrigger className="hover:text-primary transition-colors">
                <User />
            </NavigationMenuTrigger>
            <NavigationMenuContent >
                <UserMenu />
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}


const MovileMenuLinks = () => {

    return (
        <NavigationMenuItem className="">
            <NavigationMenuTrigger className="hover:text-primary transition-colors">
                <Menu />
            </NavigationMenuTrigger>
            <NavigationMenuContent >
                {
                    items.map((item) => {
                        return (
                            <NavBarLink key={item.title} href={item.href}>{item.title}</NavBarLink>
                        )
                    })
                }
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}
