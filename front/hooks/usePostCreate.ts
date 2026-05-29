'use client'

import { createPost, updatePost } from "@/lib/actions/post"
import { useState, useTransition } from "react"
import { ActionState } from "@/types/actions"
import { PostFormData } from "@/types/post"
import { toast } from "sonner"

export const usePostCreate = (postId?: number) => {


    const [inputErrors, setInputErrors] = useState<ActionState<PostFormData>>(null)
    const [pending, startTransition] = useTransition()

    const handleCreatePost = async (formData: FormData) => {
        startTransition(async () => {
            const result = postId
                ? await updatePost(null, formData)
                : await createPost(null, formData)

            if (!result) return

            if (!result.success) {
                if (result.inputErrors) setInputErrors(result)
                if (result.formError) toast.error(result.formError)
                return
            }
        })
    }

    const getFieldError = (field: keyof PostFormData): string | undefined => {
        if (!inputErrors || inputErrors.success) return undefined
        return inputErrors.inputErrors?.[field]?.[0]
    }

    return { pending, handleCreatePost, getFieldError }
}