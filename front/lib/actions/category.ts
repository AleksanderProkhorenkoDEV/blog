"use server"

import { initStateCreateCategory, initStateDeleteCategory } from "@/types/category";
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

export const updateCategory = async (id: number, prevState: initStateCreateCategory, formData: FormData): Promise<initStateCreateCategory> => {
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
        await prisma.category.update({
            where: { id },
            data: { name: validateFields.data.name }
        })
        updateTag(`category-${id}`);
        updateTag("category");
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }

    return { success: true }
}

export const deleteCategory = async (id: number): Promise<initStateDeleteCategory> => {
    try {
        await prisma.category.delete({
            where: { id }
        })
        updateTag(`category-${id}`);
        updateTag("category");
    } catch (error) {
        return { success: false, formError: (error as Error).message }
    }
    return { success: true }
}
