import { cn } from "@/lib/utils"
import { Tag } from "lucide-react"

type BadgetVariant = "light" | "dark"

const variants: Record<BadgetVariant, string> = {
    light: "border border-border  bg-secondary/20 text-foreground/60 hover:border-primary hover:bg-primary/20 hover:text-primary",
    dark: "border border-border/40  bg-background/10  hover:border-primary/70 hover:bg-primary/20 hover:text-primary",
}

interface Props {
    name: string
    variant?: BadgetVariant
}


export const CategoryBadget = ({ name, variant = "light" }: Props) => {

    return (
        <span className={cn(
            "flex gap-2 max-h-8 items-center p-2 rounded-lg duration-200 transition ease-in-out",
            variants[variant]
        )}>
            <Tag size={16} />
            {name}
        </span>
    )

}