'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TolTip } from './toltip'
import { toolbarList } from './tol-tip-list'
import { DropDownTolTips } from './drop-down-tol-tips'

interface Props {
    placeholder?: string
}

export const TipTap = ({ placeholder = "Escribe aqui el contenido" }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: `<p>${placeholder}</p>`,
        immediatelyRender: false,
    })

    return (
        <div className=''>
            <nav className='border-b border-b-popover mb-2 p-2'>
                <div className='flex gap-1.5 items-center'>
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
            <EditorContent editor={editor} />
        </div>
    )
}