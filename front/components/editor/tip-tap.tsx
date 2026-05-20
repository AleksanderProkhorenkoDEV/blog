'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { DropDownTolTips } from './drop-down-tol-tips'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import { toolbarList } from './tol-tip-list'
import Image from '@tiptap/extension-image'
import { TolTip } from './toltip'


interface Props {
    content: string,
    setContent: (content: string) => void;
    error: string | undefined
}

export const TipTap = ({ content, setContent, error }: Props) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML())
        },
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
                                    editor={editor}
                                    command={item.tooltip.command}
                                    message={item.tooltip.message}
                                    customStyle={item.tooltip.customStyle}
                                    action={item.tooltip.action}
                                    isActive={item.tooltip.isActive}
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
            <div className={`min-h-50 max-h-150 overflow-y-auto rounded-sm p-1  ${error ? "border border-destructive bg-destructive/30 text-foreground" : " border bg-foreground text-popover"}`}>
                <EditorContent editor={editor} />
            </div>

        </div>
    )
}