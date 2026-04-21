import { ProfileSummary } from "../../types/user";
import { NavItem } from "../../types/navigation";

export function getUserItems(user: ProfileSummary | null): NavItem[] {

    if (!user) {
        return [
            {
                title: "Iniciar sesión",
                href: "/login",
            },
        ];
    }

    if (user.role !== "ADMIN") {
        return [
            {
                title: "Cerrar sesión",
                href: "#",
            },
        ];
    }


    return [
        {
            title: "Panel de administrador",
            href: "/dashboard",
        },
        {
            title: "Cerrar sesión",
            href: "#",
        },
    ];
}