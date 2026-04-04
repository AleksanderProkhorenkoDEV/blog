import { HTMLInputTypeAttribute } from "react"

interface InputProps {
    type: HTMLInputTypeAttribute
    name: string
    error?: string
}


export const CustomInput = ({
    type,
    name,
    error,
}: InputProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                className={`rounded p-2 box-border w-full ${error ?
                    'bg-destructive/50 text-secondary-foreground    ' :
                    'bg-foreground text-secondary'}
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