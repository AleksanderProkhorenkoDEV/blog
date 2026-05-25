import { OptionSelect } from "@/components/forms/parts/select";

export const toSelectOptions = <T>(items: T[], value: keyof T, label: keyof T): OptionSelect[] => {
    return items.map((item) => ({
        value: item[value] as string | number,
        label: String(item[label]),
    }))
}