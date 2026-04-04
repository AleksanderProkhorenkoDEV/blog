import React from "react";

interface Props {
    action: (payload: FormData) => void;
    children: React.ReactNode,
    className?: string,
}

export const Form = ({ action, children, className }: Props) => {
    return (
        <form action={action} className={`flex flex-col gap-2 box-border rounded min-w-lg ${className}`}>
            {children}
        </form>
    )
}