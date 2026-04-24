import { LogOut, PanelLeftClose, PanelRightClose } from "lucide-react"
import { Route, sidebarNavItems } from "./sidebar-nav-items"
import { useSignOut } from "../../hooks/useSignOut"
import { CustomLink } from "../link/customLink"
import { Button } from "../forms/parts/button"

interface Props {
    isOpen: boolean,
    toggleOpen: () => void
}


export const SideBar = ({ isOpen, toggleOpen }: Props) => {

    const { isLoading, handleSignOutSession } = useSignOut()

    return (
        <aside className={`flex flex-col justify-between ${isOpen ? "py-2 px-2" : ""}`}>
            <div className="flex justify-end w-full p-1">
                <Button type="button" variant="icons" onClick={toggleOpen}>
                    {isOpen ? <PanelLeftClose /> : <PanelRightClose />}
                </Button>
            </div>
            <section className="pl-4">
                {sidebarNavItems.map((group, index) => (
                    <div key={`${group.label}-${index}`} className="mb-2 flex flex-col gap-1.5">
                        {isOpen ? <p className="text-xs text-muted-foreground">{group.label}</p> : null}
                        {
                            group.items.map((item, index) => (
                                <NavItem key={`${item.title}-${index}`} item={item} isOpen={isOpen} />
                            ))
                        }
                    </div>
                ))}
            </section>
            <div className={isOpen ? "w-auto" : "px-2 pb-2 "}>
                <Button
                    type="button"
                    variant="danger"
                    className={isOpen ? "w-full" : "!p-1"}
                    onClick={handleSignOutSession}
                    disabled={isLoading}
                >
                    <LogOut />
                    {isOpen ? <p>Cerrar sesión</p> : null}
                </Button>
            </div>
        </aside >
    )
}

const NavItem = ({ item, isOpen }: { item: Route, isOpen: boolean }) => {
    const Icon = item.icon;
    return (
        <CustomLink href={item.href}>
            <Icon width={20} />
            {isOpen && <span>{item.title}</span>}
        </CustomLink>
    )
}