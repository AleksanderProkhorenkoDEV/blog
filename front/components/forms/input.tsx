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
    return(
        <>
            <input
                type={type}
                name={name}
                id={name}
            />
            <p>{error}</p>
        </>
    )
}