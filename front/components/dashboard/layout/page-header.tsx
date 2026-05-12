import { BackNavigation } from "@/components/link/back-navigation"
import { jetBrain } from "@/app/fonts/fonts"
import { LucideIcon } from "lucide-react"

export const PageHeader = ({ title, description, icon }: { title: string, description: string, icon: LucideIcon }) => {
    const Icon = icon
    return (
        <div className="flex flex-col gap-2 mt-0.5 mb-2.5">
            <div className="max-xl:max-w-xl">
                <BackNavigation text="Cancelar" />
            </div>
            <div className="flex items-center gap-2 max-xl:max-w-xl">
                <div className="h-full p-2 bg-primary/20 rounded-lg">
                    <Icon width={28} className="text-primary " />
                </div>
                <div>
                    <h1 className={`text-foreground text-2xl font-semibold max-sm:text-sm ${jetBrain.className}`}>{title}</h1>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>
    )
}