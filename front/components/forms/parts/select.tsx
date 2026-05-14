interface Props {
    name: string,
    multiple?: boolean,
    options: OptionSelect[],
    onChange?: (value: string[]) => void
    variant?: "light" | "dark",
    className?: string

}

export type OptionSelect = {
    value: string | number;
    label: string
}

const variants = {
    light: "bg-foreground text-popover",
    dark: "border border-popover shadow-lg",
}

export const CustomSelect = ({ name, multiple = false, options, onChange, variant = "light", className }: Props) => {
    return (
        <select
            name={name}
            multiple={multiple}
            onChange={(e) => {
                if (multiple) {
                    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value)
                    onChange?.(selected)
                } else {
                    onChange?.([e.target.value])
                }
            }}
            className={`${variants[variant]} rounded-sm p-2 ${multiple ? "h-32" : ""} ${className}`}
        >
            {
                options.map((item, index) => {
                    return (
                        <option
                            key={`${item.label}-${index}`}
                            value={item.value}
                            className={`hover:bg-primary px-0.5 rounded-sm transition duration-200 ease-in-out cursor-pointer mb-1`}
                        >
                            {item.label}
                        </option>
                    )
                })
            }
        </select>
    )
}