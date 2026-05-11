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
    ICONS: "icons",
    GHOST: "ghost",
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
        primary: "bg-primary/90  text-background hover:bg-primary uppercase",
        secondary: "bg-none text-secondary border-2 border-border uppercase",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/80 uppercase",
        icons: "bg-transparent hover:text-primary !p-0",
        ghost: "text-muted-foreground capitalize hover:text-foreground transition ease-in-out duration-200 !p-0"
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${variantStyles[variant]} ${className} flex gap-2 items-center justify-center font-normal p-2 px-4 rounded cursor-pointer ease-in-out transition ${jetBrain.className} ${disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : "cursor-pointer"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

