import { LucideIcon } from "lucide-react";
import { Tooltip } from "./tol-tip-list";
import { TolTip } from "./toltip";



type DropdownItem = {
    type: "dropdown";
    items: Tooltip[];
    icon: LucideIcon;
};

interface Props {
    item: DropdownItem;
}

export const DropDownTolTips = ({ item }: Props) => {
    const Icon = item.icon;
    return (
        <div className="relative group/dropdown cursor-pointer">
            <Icon size={16} />

            <div className="
                absolute top-full left-0
                hidden group-hover/dropdown:block
                pt-1 z-20
            ">
                <div className="bg-popover text-popover-foreground border border-border shadow-md p-2 rounded-sm">
                    {item.items.map((subItem, i) => (
                        <TolTip
                            key={`${subItem.command}-${i}`}
                            message={subItem.message}
                            command={subItem.command}
                            customStyle={subItem.customStyle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}