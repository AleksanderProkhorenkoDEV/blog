'use client'

import { createPost, updatePost } from "@/lib/actions/post"
import { postSchema } from "@/schemas/post"
import { useState } from "react"
import { toast } from "sonner"
import z from "zod"

export const usePostCreate = (postId?: number) => {


    const [loading, setLoading] = useState<boolean>(false)
    const [inputErrors, setInputErrors] = useState<Partial<Record<keyof z.infer<typeof postSchema>, string[]>>>({})

    const handleCreatePost = async (formData: FormData) => {
        try {
            setLoading(true)

            const { success, inputErrors } = postId
                ? await updatePost(formData)
                : await createPost(formData)

            if (!success) {
                if (inputErrors) setInputErrors(inputErrors)
                return
            }
            toast.success(postId ? 'Post actualizado' : 'Post creado')
        } catch (error) {
            toast.error(`Ha ocurrido un error: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleCreatePost, inputErrors }
}