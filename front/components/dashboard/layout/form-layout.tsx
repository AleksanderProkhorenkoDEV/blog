import { jetBrain } from "@/app/fonts/fonts"
import { Lightbulb, LucideIcon } from "lucide-react"
import React from "react"


interface Props {
    children: React.ReactNode;
    tips: { label: string; text: string }[]
    title: string;
    description: string;
    icon: LucideIcon
}

export const FormLayout = ({ children, tips, title, description, icon }: Props) => {
    const Icon = icon;
    return (
        <div className="flex gap-4 flex-wrap max-xl:justify-center">
            <article className="w-fit border border-border p-4 rounded-sm max-xl:max-w-xl max-sm:max-w-md">
                <h3 className={`font-bold text-2xl ${jetBrain.className} flex gap-2 items-center mb-1`}> <Icon width={22} className="text-primary" /> {title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {description}
                </p>

                {children}
            </article>
            <article className="max-w-sm border border-border py-3 px-5 rounded-sm max-sm:max-w-md">
                <p className="font-semibold flex gap-2 mb-4"><Lightbulb className="text-warning" width={18} /> Consejos</p>
                {
                    tips.map((item, i) => {
                        return (
                            <p
                                key={i}
                                className="text-foreground text-wrap"
                            >
                                <span className="font-semibold text-primary">{item.label}</span>
                                {item.text}
                            </p>
                        )
                    })
                }
            </article>
        </div>
    )
}