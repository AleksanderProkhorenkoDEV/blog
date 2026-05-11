import { cacheLife, cacheTag } from "next/cache";
import prisma from "../prisma/prisma";

export const getCategories = async (page: number = 1, limit: number = 10) => {
    'use cache'
    cacheTag("category")
    cacheLife("days")
    const [categories, total] = await prisma.$transaction([
        prisma.category.findMany({
            select: {
                id: true,
                name: true,
            },
            skip: (page - 1) * limit,
            take: limit,
        }),
        prisma.category.count()
    ]);

    return { categories, total, pages: Math.ceil(total / limit) }
}

export const getCategory = async (id: string) => {
    'use cache'
    cacheTag(`category-${id}`)
    cacheLife("days")

    const idParse = Number(id)

    if (!Number.isInteger(idParse) || idParse <= 0) {
        throw new Error("ID inválido")
    }

    const category = await prisma.category.findUnique({
        where: { id: idParse }
    })

    return category;
}