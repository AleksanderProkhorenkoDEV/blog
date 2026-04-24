import { ChartArea, ChartBarBig, House, LucideIcon, MessageCircle, MessageCircleQuestionMark, Newspaper, Tag } from "lucide-react"


interface Group {
    label: string,
    items: Route[]
}

export interface Route {
    title: string,
    href: string,
    icon: LucideIcon
}

export const sidebarNavItems: Group[] = [
    {
        label: "General",
        items: [
            { title: "Inicio", href: "/dashboard", icon: House }
        ]
    },
    {
        label: "Contenido",
        items: [
            { title: "Posts", href: "/dashboard/posts", icon: Newspaper },
        ]
    },
    {
        label: "Tags",
        items: [
            { title: "Categorías", href: "/dashboard/categories", icon: Tag },
        ]
    },
    {
        label: "Comentarios",
        items: [
            { title: "Pendientes", href: "/dashboard/comments/pending", icon: MessageCircleQuestionMark },
            { title: "Aprobados", href: "/dashboard/comments/approve", icon: MessageCircle }
        ]
    },
    {
        label: "Metricas",
        items: [
            { title: "Post visitas", href: "/dashboard/metrics/posts", icon: ChartArea },
            { title: "Categorias más usadas", href: "/dashboard/metrics/categorys", icon: ChartBarBig }
        ]
    }
]