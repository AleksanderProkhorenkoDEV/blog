'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { DropDownTolTips } from './drop-down-tol-tips'
import StarterKit from '@tiptap/starter-kit'
import { toolbarList } from './tol-tip-list'
import Image from '@tiptap/extension-image'
import { TolTip } from './toltip'

interface Props {
    placeholder?: string
}

export const TipTap = ({ placeholder = "Escribe aqui el contenido" }: Props) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image
        ],
        content: `<p>${placeholder}</p>`,
        immediatelyRender: false,
    })

    return (
        <div className="">
            <nav className='mb-2 '>
                <div className='flex gap-1.5 items-center bg-foreground  rounded-sm p-1'>
                    {toolbarList.map((item, index) => {
                        if (item.type === "button") {
                            return (
                                <TolTip
                                    key={index}
                                    command={item.tooltip.command}
                                    message={item.tooltip.message}
                                    customStyle={item.tooltip.customStyle}
                                />
                            );
                        }

                        if (item.type === "dropdown") {
                            return (
                                <DropDownTolTips item={item} key={index} />
                            );
                        }
                    })}
                </div>
            </nav>
            <div className="min-h-50 max-h-150 overflow-y-auto border rounded-sm p-1 bg-foreground text-popover">
                <EditorContent editor={editor} />
            </div>

        </div>
    )
}