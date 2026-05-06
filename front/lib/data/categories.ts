import { cacheLife, cacheTag } from "next/cache";
import prisma from "../prisma/prisma";

export const getCategories = async (page: number = 1, limit: number = 10) => {
    'use cache'
    cacheTag("category")
    cacheLife("weeks")
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