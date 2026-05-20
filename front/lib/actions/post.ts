'use server'

import { initPostCreate } from "@/types/post";
import { postSchema } from "@/schemas/post";
import { updateTag } from "next/cache";
import prisma from "../prisma/prisma";
import z from "zod";

export const createPost = async (formData: FormData): Promise<initPostCreate> => {

    const rawData = {
        title: formData.get('title'),
        slug: formData.get('slug'),
        thumbnail: formData.get('thumbnail'),
        categories: formData.getAll('categories[]'),
        content: formData.get('content'),
        authorId: formData.get('authorId'),
        published: formData.get('published') !== 'true',
    }

    const validateFields = postSchema.safeParse(rawData)

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
        }
    }

    const { categories, ...postData } = validateFields.data


    try {
        await prisma.post.create({
            data: {
                ...postData,
                authorId: postData.authorId,
                categories: {
                    create: categories.map(categoryId => ({
                        categoryId: Number(categoryId),
                    }))
                }
            }
        })
        updateTag("posts");
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }

    return { success: true }
}