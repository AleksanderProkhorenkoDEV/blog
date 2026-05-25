import { cacheLife, cacheTag } from "next/cache";
import prisma from "../prisma/prisma"

export const getPosts = async (page: number = 1, limit: number = 10) => {
    'use cache'
    cacheTag('posts')
    cacheLife('days')
    const [posts, total] = await prisma.$transaction([
        prisma.post.findMany({
            select: {
                id: true,
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

export const getPost = async (id: string) => {
    'use cache'
    cacheTag(`post-${id}`)
    cacheLife("days")

    const idParse = Number(id)

    if (!Number.isInteger(idParse) || idParse <= 0) {
        throw new Error("ID inválido")
    }

    const post = await prisma.post.findUnique({
        select: {
            id: true,
            title: true,
            slug: true,
            thumbnail: true,
            content: true,
            authorId: true,
            published: true,
            categories: {
                select: {
                    categoryId: true,
                }
            }
        },
        where: { id: idParse }
    })

    return post;
}