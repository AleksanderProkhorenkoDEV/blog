import { AlignCenterVertical, LucideIcon, Type } from "lucide-react";
import { jetBrain } from "@/app/fonts/fonts";
import type { Editor } from '@tiptap/core'

export interface Tooltip {
    command: string;
    message: string;
    customStyle?: string;
    action?: EditorCommand;
}

type ToolbarItem =
    | { type: "button"; tooltip: Tooltip }
    | { type: "dropdown"; items: Tooltip[], icon: LucideIcon };

type EditorCommand = (editor: Editor) => void;

export const toolbarList: ToolbarItem[] = [
    {
        type: "button",
        tooltip: {
            command: "B",
            message: "Negrita (Ctrl + b)",
            customStyle: "font-bold",
            action: (editor) => editor.chain().focus().toggleBold().run()
        }
    },
    {
        type: "button",
        tooltip: {
            command: "U",
            message: "Subrayado (Ctrl + U)",
            customStyle: "underline underline-offset-4"
        }
    },
    {
        type: "button",
        tooltip: {
            command: "I",
            message: "Cursiva (Ctrl + I)",
            customStyle: `italic ${jetBrain.className}`
        }
    },
    {
        type: "dropdown",
        icon: Type,
        items: [
            { command: "H1", message: "Título 1 (Ctrl + Alt + 1)" },
            { command: "H2", message: "Título 2 (Ctrl + Alt + 2)" }
        ]
    },
    {
        type: "dropdown",
        icon: AlignCenterVertical,
        items: [
            { command: "izquierda", message: "Alieneado izquierdo (Ctrl + Shift + L)" },
            { command: "centro", message: "Alieneado centro (Ctrl + Shift + E)" },
            { command: "derecha", message: "Alieneado derecha (Ctrl + Shift + R)" },
            { command: "justificado", message: "Alieneado justificado (Ctrl + Shift + J)" }
        ]
    }
];