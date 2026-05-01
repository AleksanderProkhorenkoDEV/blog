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
    DANGER: "danger",
    ICONS: "icons"
} as const

interface Props {
    type?: typeof ButtonType[keyof typeof ButtonType],
    disabled?: boolean,
    children: React.ReactNode,
    className?: string,
    variant?: typeof VariantType[keyof typeof VariantType]
    onClick?: () => void
}


export const Button = ({ type = "button", disabled, children, className, variant = "primary", onClick }: Props) => {

    const variantStyles = {
        primary: "bg-primary/90  text-background hover:bg-primary",
        secondary: "bg-none text-secondary border-2 border-border",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        icons: "bg-transparent hover:text-primary !p-0"
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${variantStyles[variant]} ${className} flex gap-2 items-center justify-center font-normal p-2 px-4 rounded cursor-pointer ease-in-out transition uppercase ${jetBrain.className} ${disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : "cursor-pointer"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

