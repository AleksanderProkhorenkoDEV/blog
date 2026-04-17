"use client"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { useAuth } from "../../context/AuthContext"
import { Konkhmer } from "../../app/fonts/fonts"
import { getNavItems } from "./NavItemsDropDown"
import { Button } from "../forms/parts/button"
import { LogOut, User } from "lucide-react"
import { logOut } from "../../actions/auth"
import { NavBarLink } from "./Link"
import { ListItem } from "./Item"
import { useActionState } from "react"


export const CustomNavBar = () => {
    const profile = useAuth();
    const components = getNavItems(profile);


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
                            <ul className="flex flex-col gap-1 w-2xs">
                                {components.map((item) => {

                                    if (item.title === "Cerrar sesión") {
                                        return <Button
                                            key={item.title}
                                            type="button"
                                            variant="danger"
                                            onClick={}
                                            disabled={}
                                        >
                                            <LogOut size={16} /> {item.title}
                                        </Button>
                                    }

                                    return (
                                        <ListItem
                                            key={item.title}
                                            title={item.title}
                                            href={item.href}
                                        />
                                    );
                                })}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

