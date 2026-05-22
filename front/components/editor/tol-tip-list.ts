import { AlignCenterVertical, List, LucideIcon, Type } from "lucide-react";
import { jetBrain } from "@/app/fonts/fonts";
import { type Editor } from '@tiptap/core'

export interface Tooltip {
    command: string;
    message: string;
    customStyle?: string;
    action?: EditorCommand;
    isActive?: (editor: Editor) => boolean;
}

type ToolbarItem =
    | { type: "button"; tooltip: Tooltip }
    | { type: "dropdown"; items: Tooltip[], icon: LucideIcon }
    | { type: "image" };

type EditorCommand = (editor: Editor) => void;

export const toolbarList: ToolbarItem[] = [
    {
        type: "button",
        tooltip: {
            command: "B",
            message: "Negrita (Ctrl + b)",
            customStyle: "font-bold",
            action: (editor) => editor.chain().focus().toggleBold().run(),
            isActive: (editor) => editor.isActive('bold')
        }
    },
    {
        type: "button",
        tooltip: {
            command: "U",
            message: "Subrayado (Ctrl + U)",
            customStyle: "underline underline-offset-4",
            action: (editor) => editor.chain().focus().toggleUnderline().run(),
            isActive: (editor) => editor.isActive('underline')
        }
    },
    {
        type: "button",
        tooltip: {
            command: "I",
            message: "Cursiva (Ctrl + I)",
            customStyle: `italic ${jetBrain.className}`,
            action: (editor) => editor.chain().focus().toggleItalic().run(),
            isActive: (editor) => editor.isActive('italic')
        }
    },
    {
        type: "button",
        tooltip: {
            command: "</>",
            message: "Bloque de código (Ctrl + E)",
            customStyle: `${jetBrain.className}`,
            action: (editor) => editor.chain().focus().toggleCode().run(),
            isActive: (editor) => editor.isActive('code')
        }
    },
    {
        type: "dropdown",
        icon: Type,
        items: [
            {
                command: "H1",
                message: "Título 1 (Ctrl + Alt + 1)",
                action: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                isActive: (editor) => editor.isActive('heading', { level: 1 })
            },
            {
                command: "H2",
                message: "Título 2 (Ctrl + Alt + 2)",
                action: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                isActive: (editor) => editor.isActive('heading', { level: 2 })
            },
            {
                command: "H3",
                message: "Título 3 (Ctrl + Alt + 3)",
                action: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                isActive: (editor) => editor.isActive('heading', { level: 3 })
            }
        ]
    },
    {
        type: "dropdown",
        icon: AlignCenterVertical,
        items: [
            {
                command: "izquierda",
                message: "Alineado izquierdo (Ctrl + Shift + L)",
                action: (editor) => editor.chain().focus().setTextAlign('left').run(),
                isActive: (editor) => editor.isActive({ textAlign: 'left' })
            },
            {
                command: "centro",
                message: "Alineado centro (Ctrl + Shift + E)",
                action: (editor) => editor.chain().focus().setTextAlign('center').run(),
                isActive: (editor) => editor.isActive({ textAlign: 'center' })
            },
            {
                command: "derecha",
                message: "Alineado derecha (Ctrl + Shift + R)",
                action: (editor) => editor.chain().focus().setTextAlign('right').run(),
                isActive: (editor) => editor.isActive({ textAlign: 'right' })
            },
            {
                command: "justificado",
                message: "Alineado justificado (Ctrl + Shift + J)",
                action: (editor) => editor.chain().focus().setTextAlign('justify').run(),
                isActive: (editor) => editor.isActive({ textAlign: 'justify' })
            }
        ]
    },
    {
        type: "dropdown",
        icon: List,
        items: [
            {
                command: "Lista viñetas",
                message: "(Ctrl + Shift + 8)",
                customStyle: "text-sm",
                action: (editor) => editor.chain().focus().toggleBulletList().run(),
                isActive: (editor) => editor.isActive('bulletList')
            },
            {
                command: "Lista ordenada",
                message: "(Ctrl + Shift + 9)",
                customStyle: "text-sm",
                action: (editor) => editor.chain().focus().toggleTaskList().run(),
                isActive: (editor) => editor.isActive('tasklist')
            }
        ]
    },
    {
        type: "button",
        tooltip: {
            command: "🧷",
            message: "Inserta una imagen por URL",
            action: (editor) => {
                const url = window.prompt('URL de la imagen')
                if (url) editor.chain().focus().setImage({ src: url }).run()
            },
            isActive: (editor) => editor.isActive('image')
        }
    }
];