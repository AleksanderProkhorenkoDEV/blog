import { BackNavigation } from "@/components/link/back-navigation"
import { jetBrain } from "@/app/fonts/fonts"
import { LucideIcon } from "lucide-react"

export const PageHeader = ({ title, description, icon }: { title: string, description: string, icon: LucideIcon }) => {
    const Icon = icon
    return (
        <>
            <div>
                <BackNavigation text="Cancelar" />
            </div>
            <div className="flex items-center gap-2">
                <div className="h-full p-2 bg-primary/20 rounded-lg">
                    <Icon width={28} className="text-primary" />
                </div>
                <div>
                    <h1 className={`text-foreground text-2xl font-semibold ${jetBrain.className}`}>{title}</h1>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </>
    )
}