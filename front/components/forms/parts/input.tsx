import { HTMLInputTypeAttribute } from "react"

interface InputProps {
    type: HTMLInputTypeAttribute
    name: string
    error?: string
    variant?: "light" | "dark"
}

const variants = {
    light: "bg-foreground text-popover",
    dark: "border border-popover shadow-lg",
}


export const CustomInput = ({
    type,
    name,
    error,
    variant ="light"
}: InputProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                className={`rounded p-2 box-border w-full   ${error ?
                    'bg-destructive/50 text-secondary-foreground' :
                    `${variants[variant]}`}
                `}
            />
            <p className={`min-h-5 text-sm ${error
                ? "text-destructive before:content-['*'] before:mr-0.5"
                : ""
                }`}
            >
                {error ?? ""}
            </p>
        </>
    )
}