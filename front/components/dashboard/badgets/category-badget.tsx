import { Tag } from "lucide-react"

export const CategoryBadget = ({ name }: { name: string }) => {

    return (
        <span className="flex gap-2 items-center border border-border text-foreground/60 bg-secondary/20 hover:border-primary p-2 rounded-lg hover:bg-primary/20 hover:text-primary duration-200 transition ease-in-out">
            <Tag/>
            {name}
        </span>
    )

}