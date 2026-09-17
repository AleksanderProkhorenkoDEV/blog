'use client'

import React from "react";
import { jetBrain } from "../../../app/fonts/fonts";
import { LoaderCircle } from "lucide-react";

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
    loading?: boolean,
    children: React.ReactNode,
    className?: string,
    variant?: typeof VariantType[keyof typeof VariantType]
    onClick?: () => void
}


export const Button = ({ type = "button", disabled, loading, children, className, variant = "primary", onClick }: Props) => {

    const styleBase = `flex gap-2 items-center justify-center font-normal p-2 px-4 rounded cursor-pointer ease-in-out transition max-sm:text-sm ${jetBrain.className} ${disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : "cursor-pointer"}`

    const variantStyles = {
        primary: `bg-primary/90  text-background hover:bg-primary uppercase ${styleBase}`,
        secondary: `bg-none text-secondary border-2 border-border uppercase ${styleBase}`,
        danger: `bg-destructive text-destructive-foreground hover:bg-destructive/80 uppercase ${styleBase}`,
        icons: `bg-transparent hover:text-primary !p-0 ${styleBase}`,
        ghost: `text-muted-foreground capitalize hover:text-foreground transition ease-in-out duration-200 !p-0 w-fit ${styleBase}`
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {
                loading ? <span className="flex gap-2 text-inherit"><LoaderCircle className="animate-spin text-inherit" /> Cargando...</span> : children
            }
        </button>
    )
}

