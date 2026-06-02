import { cn } from "@/lib/utils"
import { Tag } from "lucide-react"

type BadgetVariant = "light" | "dark" | "active"

const variants: Record<BadgetVariant, string> = {
    light: "bg-secondary/20 text-foreground/60 hover:border-primary hover:bg-primary/20 hover:text-primary",
    dark: "border border-border/40  bg-background/10  hover:border-primary/70 hover:bg-primary/20 hover:text-primary",
    active: "bg-primary/20 text-primary"
}

interface Props {
    name: string
    variant?: BadgetVariant,
    icon?: boolean,
    className?: string
}


export const CategoryBadget = ({ name, variant = "light", icon = false, className }: Props) => {

    return (
        <span className={cn(
            `flex gap-2 max-h-8 items-center p-2 rounded-lg duration-200 transition ease-in-out capitalize px-4 py-2 ${className}`,
            variants[variant]
        )}>
            {icon ? <Tag size={16} /> : null}
            {name}
        </span>
    )

}