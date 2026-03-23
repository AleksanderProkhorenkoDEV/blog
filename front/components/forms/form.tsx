import React from "react";

interface Props {
    action: (payload: FormData) => void;
    children: React.ReactNode
}

export const Form = ({ action, children }: Props) => {
    return (
        <form action={action} className="border flex flex-col gap-2">
            {children}
        </form>
    )
}