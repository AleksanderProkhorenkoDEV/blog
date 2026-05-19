import { initPostCreate } from "@/types/post";
import { postSchema } from "@/schemas/post";
import { updateTag } from "next/cache";
import prisma from "../prisma/prisma";
import z from "zod";

export const createPost = async (formData: FormData): Promise<initPostCreate> => {

    const validateFields = postSchema.safeParse(Object.fromEntries(formData.entries()))

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