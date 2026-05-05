import prisma from "../prisma/prisma";

export const getCategories = async (page: number = 1, limit: number = 10) => {
    const [categories, total] = await prisma.$transaction([
        prisma.category.findMany({
            select: {
                id: true,
                name:true,
            },
            skip: (page - 1) * limit,
            take: limit,
        }),
        prisma.post.count()
    ]);

    return { categories, total, pages: Math.ceil(total / limit) }
}