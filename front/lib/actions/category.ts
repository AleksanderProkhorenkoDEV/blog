"use server"

import { formError, validationError } from "../utils/validate";
import { categorySchema } from "@/schemas/category";
import { ActionState } from "@/types/actions";
import { redirect } from "next/navigation";
import { revalidateTag, updateTag } from "next/cache";
import prisma from "../prisma/prisma";

type CategoryFormData = { name: string }

export async function createCategory(
    prevState: ActionState<CategoryFormData>,
    formData: FormData
): Promise<ActionState<CategoryFormData>> {

    const raw = { name: formData.get('name') as string }
    const parsed = categorySchema.safeParse(raw)

    if (!parsed.success) return validationError(parsed.error, raw)

    try {
        await prisma.category.create({
            data: {
                name: parsed.data.name
            }
        })
        revalidateTag('category', 'max')
    } catch (error) {
        return formError(error)
    }
    redirect('/dashboard/categories')
}


export async function updateCategory(
    id: number,
    prevState: ActionState<CategoryFormData>,
    formData: FormData
): Promise<ActionState<CategoryFormData>> {
    const raw = { name: formData.get('name') as string }
    const parsed = categorySchema.safeParse(raw)

    if (!parsed.success) return validationError(parsed.error, raw)

    try {
        await prisma.category.update({ where: { id: id }, data: { name: parsed.data.name } })
        updateTag(`category-${id}`)
        updateTag('category')
    } catch (error) {
        return formError(error)
    }
    redirect('/dashboard/categories')
}

export async function deleteCategory(
    id: number
): Promise<ActionState> {
    try {
        const hasPost = await postHasCategory(id)
        if (hasPost > 0) {
            return formError('No se puede eliminar una categoría con post asociados')
        }
        await prisma.category.delete({ where: { id: id } })
        updateTag(`category-${id}`)
        updateTag('category')
    } catch (error) {
        return formError(error)
    }
    return { success: true }
}

async function postHasCategory(
    id: number
): Promise<number> {
    return await prisma.categoryPost.count({
        where: {
            categoryId: id
        }
    })
}