import { HTMLInputTypeAttribute } from "react"

interface InputProps {
    type: HTMLInputTypeAttribute
    name: string,
    placeholder?: string,
    error?: string,
    variant?: "light" | "dark",
    defaultValue?: string
}

const variants = {
    light: "bg-foreground text-popover",
    dark: "border border-popover shadow-lg",
}


export const CustomInput = ({
    type,
    name,
    placeholder,
    error,
    variant = "light",
    defaultValue,
}: InputProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                defaultValue={defaultValue}
                className={`rounded p-2 box-border    ${error ?
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