import { useAuth } from "../../context/AuthContext";
import { useSignOut } from "../../hooks/useSignOut";
import { Button } from "../forms/parts/button";
import { getNavItems } from "./navItems";
import { ListItem } from "./ListItem";
import { LogOut } from "lucide-react";

export const UserMenu = () => {

    const { profile } = useAuth();
    const components = getNavItems(profile);

    const { isLoading, handleSignOutSession } = useSignOut()

    return (
        <ul className="flex flex-col gap-1 w-2xs">
            {components.map((item) => {

                if (item.title === "Cerrar sesión") {
                    return <Button
                        key={item.title}
                        type="button"
                        variant="danger"
                        onClick={handleSignOutSession}
                        disabled={isLoading}
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
    )
}