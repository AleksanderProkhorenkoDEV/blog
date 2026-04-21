import { NavItem } from "../../types/navigation"

export const getNavItems = (): NavItem[] => {
    return [
        {
            title: "Inicio",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog"
        },
        {
            title: "Contacto",
            href: "/contact"
        }
    ]
}