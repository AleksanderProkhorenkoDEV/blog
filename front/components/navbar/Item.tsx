import { NavigationMenuLink } from "../ui/navigation-menu"
import Link from "next/link"

export const ListItem = ({
    title,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent/20 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="font-medium">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}