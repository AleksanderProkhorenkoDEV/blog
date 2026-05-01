import prisma from "../prisma/prisma"

export const getPost = async (page: number = 1, limit: number = 10) => {
    const [posts, total] = await prisma.$transaction([
        prisma.post.findMany({
            select: {
                title: true,
                slug: true,
                published: true,
                author: {
                    select: {
                        name: true
                    }
                },
                createdAt: true
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: "desc" },
        }),
        prisma.post.count()
    ]);

    return { posts, total, pages: Math.ceil(total / limit) }
}