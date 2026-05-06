"use server"

import { initStateCreateCategory } from "@/types/category";
import { categorySchema } from "@/schemas/category";
import { updateTag } from "next/cache";
import prisma from "../prisma/prisma";
import z from "zod";

export const createCategory = async (prevState: initStateCreateCategory, formData: FormData): Promise<initStateCreateCategory> => {
    const validateFields = categorySchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
            formData: {
                name: formData.get("name") as string,
            }
        }
    }

    try {
        await prisma.category.create({
            data: { name: validateFields.data.name }
        })
        updateTag("category");
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }

    return { success: true }
}
