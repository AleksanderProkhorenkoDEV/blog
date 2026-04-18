'use client'

import React from "react";
import { jetBrain } from "../../../app/fonts/fonts";

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
    disabled?: boolean,
    children: React.ReactNode,
    variant?: typeof VariantType[keyof typeof VariantType]
    onClick?: () => void
}


export const Button = ({ type = "button", disabled, children, variant = "primary", onClick }: Props) => {

    const variantStyles = {
        primary: "bg-primary/90  text-background hover:bg-primary",
        secondary: "bg-none text-secondary border-2 border-border",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/80"
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${variantStyles[variant]} flex gap-2 items-center justify-center font-normal p-2 px-4 rounded cursor-pointer ease-in-out transition uppercase ${jetBrain.className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

