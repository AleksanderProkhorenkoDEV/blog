'use client'

import { useState } from "react"

export const usePostCreate = (authorId: string | undefined) => {


    const [loading, setLoading] = useState<boolean>(false)

    const handleCreatePost = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true)
        const formData = new FormData(e.currentTarget)
        console.log(e.currentTarget);

        console.log(Object.fromEntries(formData.entries()))


        setLoading(false)
    }

    return { loading, handleCreatePost }
}