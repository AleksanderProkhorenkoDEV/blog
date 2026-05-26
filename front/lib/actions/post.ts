'use server'

import { initPostCreate } from "@/types/post";
import { postSchema, updatePostSchema } from "@/schemas/post";
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
                archived: false,
                categories: {
                    create: categories.map(categoryId => ({
                        categoryId: Number(categoryId),
                    }))
                }
            }
        })
        updateTag("posts");
        return { success: true }
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }
}

export const updatePost = async (formData: FormData): Promise<initPostCreate> => {

    const rawData = {
        id: formData.get('id'),
        title: formData.get('title'),
        slug: formData.get('slug'),
        thumbnail: formData.get('thumbnail'),
        categories: formData.getAll('categories[]'),
        content: formData.get('content'),
        authorId: formData.get('authorId'),
        published: formData.get('published') !== 'true',
    }

    const validateFields = updatePostSchema.safeParse(rawData)

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
        }
    }

    const { categories, id, ...postData } = validateFields.data

    try {
        await prisma.post.update({
            where: { id },
            data: {
                ...postData,
                categories: {
                    deleteMany: {},
                    create: categories.map(categoryId => ({
                        categoryId: Number(categoryId),
                    }))
                }
            }
        })
        updateTag("posts")
        updateTag(`post-${id}`)
        return { success: true }
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }
}

export const changePublishedStatus = async (id: number, published: boolean) => {
    try {
        await prisma.post.update({
            where: { id },
            data: {
                published: published
            }
        })
        updateTag("posts")
        return { success: true }
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }
}