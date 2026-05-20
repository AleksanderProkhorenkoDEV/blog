'use client'

import { createPost } from "@/lib/actions/post"
import { postSchema } from "@/schemas/post"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import z from "zod"

export const usePostCreate = () => {


    const [loading, setLoading] = useState<boolean>(false)
    const [inputErrors, setInputErrors] = useState<Partial<Record<keyof z.infer<typeof postSchema>, string[]>>>({})

    const router = useRouter()

    const handleCreatePost = async (formData: FormData) => {
        try {
            setLoading(true)

            const { success, inputErrors } = await createPost(formData)

            if (!success) {
                if (inputErrors) setInputErrors(inputErrors)
                return
            }
            toast.success('Post creado')
            router.back()
        } catch (error) {
            toast.error(`Ha ocurrido un error creando el post: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleCreatePost, inputErrors }
}