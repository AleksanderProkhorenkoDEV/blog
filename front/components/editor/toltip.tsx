'use client'

import { Editor } from "@tiptap/core";

interface Props {
    message: string;
    command: string;
    customStyle?: string;
    editor: Editor | null
    action?: (editor: Editor) => void
    isActive?: (editor: Editor) => boolean
}

export const TolTip = ({ message, command, customStyle, editor, action, isActive }: Props) => {

    const active = editor ? isActive?.(editor) : false

    return (
        <div className='group relative w-fit cursor-pointer'>
            <button
                type="button"
                title={message}
                className={`cursor-pointer p-1 text-popover hover:bg-primary rounded ${customStyle} ${active ? 'bg-primary' : ''}`}
                onClick={() => editor && action?.(editor)}
            >
                {command}
            </button>
            <article className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                bg-popover text-foreground text-xs px-2 py-1 rounded whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                z-10 border border-border shadow-sm
            ">
                {message}
            </article>
        </div>
    )
}