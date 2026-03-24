import { jetBrain } from "@/app/fonts/fonts";
import React from "react";

export const ButtonType = {
    BUTTON: "button",
    RESET: "reset",
    SUBMIT: "submit",
} as const;

export const VariantType = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DANGER: "danger"
} as const

interface Props {
    type?: typeof ButtonType[keyof typeof ButtonType],
    disabled: boolean,
    children: React.ReactNode,
    variant?: typeof VariantType[keyof typeof VariantType]
}


export const Button = ({ type = "button", disabled, children, variant = "primary" }: Props) => {

    const variantStyles = {
        primary: "bg-primary/90  text-background hover:bg-primary",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/80"
    };

    return (
        <button type={type} disabled={disabled} className={`${variantStyles[variant]} font-normal p-2 rounded cursor-pointer ease-in-out transition uppercase ${jetBrain.className}`}>{children}</button>
    )
}

