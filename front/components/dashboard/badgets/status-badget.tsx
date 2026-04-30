const VariantType = {
    SUCCESS: "success",
    DANGER: "danger",
    INFO: "info"
} as const


interface Props {
    title: string
    variant?: typeof VariantType[keyof typeof VariantType]
}

export const StatusBadget = ({ title, variant = "success" }: Props) => {

    const variantStyles = {
        success: "border border-primary bg-primary/40 text-foreground shadow-xs shadow-primary",
        danger: "border border-destructive bg-destructive/40 shadow-xs shadow-destructive",
        info: "border border-warning bg-warning/40 shadow-xs shadow-warning"
    }

    return (
        <span className={`${variantStyles[variant]} p-1 rounded-sm text-sm`}>
            {title}
        </span>
    )
}