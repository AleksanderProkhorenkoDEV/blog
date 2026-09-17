'use server'

import { formError, validationError } from "../utils/validate";
import { postSchema, updatePostSchema } from "@/schemas/post";
import { revalidateTag, updateTag } from "next/cache";
import { ActionState } from "@/types/actions";
import { PostFormData } from "@/types/post";
import { redirect } from "next/navigation";
import { getProfileUUID } from "./auth";
import prisma from "../prisma/prisma";


const extractPostRawData = (formData: FormData) => ({
    title: formData.get('title'),
    slug: formData.get('slug'),
    thumbnail: formData.get('thumbnail'),
    categories: formData.getAll('categories[]'),
    content: formData.get('content'),
    authorId: formData.get('authorId'),
    published: formData.get('published') !== 'true',
})

export async function createPost(
    _: ActionState<PostFormData>,
    formData: FormData
): Promise<ActionState<PostFormData>> {
    const parsed = postSchema.safeParse(extractPostRawData(formData))
    if (!parsed.success) return validationError(parsed.error, {})

    const { categories, ...postData } = parsed.data

    try {
        await prisma.post.create({
            data: {
                ...postData,
                archived: false,
                categories: {
                    create: categories.map(categoryId => ({
                        categoryId: Number(categoryId)
                    }))
                },
                metrics: {
                    create: {}
                }
            },
        })
        revalidateTag("posts", "max")
    } catch (error) {
        return formError(error)
    }
    redirect("/dashboard/posts")
}

export async function updatePost(
    _: ActionState<PostFormData>,
    formData: FormData
): Promise<ActionState<PostFormData>> {

    const parsed = updatePostSchema.safeParse({
        id: formData.get('id'),
        ...extractPostRawData(formData)
    })
    if (!parsed.success) return validationError(parsed.error, {})

    const { categories, id, ...postData } = parsed.data

    try {
        await prisma.post.update({
            where: { id },
            data: {
                ...postData,
                categories: {
                    deleteMany: {},
                    create: categories.map(categoryId => ({
                        categoryId: Number(categoryId)
                    }))
                }
            }
        })
        updateTag("posts")
        updateTag(`post-${id}`)
        return { success: true }
    } catch (error) {
        return formError(error)
    }
}

export async function changePublishedStatus(
    id: number,
    published: boolean
): Promise<ActionState> {
    try {
        await prisma.post.update({ where: { id }, data: { published } })
        updateTag("posts")
        return { success: true }
    } catch (error) {
        return formError(error)
    }
}

export async function archivePost(
    id: number,
    archived: boolean
): Promise<ActionState> {
    try {
        await prisma.post.update({
            where: { id },
            data: { archived: !archived, published: false }
        })
        updateTag("posts")
        updateTag(`post-${id}`)
        return { success: true }
    } catch (error) {
        return formError(error)
    }
}

export async function likePost(
    postId: number,
    email: string,
    slug: string,
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    try {
        const uuid = await getProfileUUID(email)

        const existingLike = await prisma.postLike.findUnique({
            where: {
                postId_profileId: {
                    postId,
                    profileId: uuid
                }
            }
        })

        if (existingLike) {
            await prisma.postLike.delete({
                where: {
                    postId_profileId: {
                        postId,
                        profileId: uuid
                    }
                }
            })
            await prisma.postMetrics.update({
                where: {
                    postId: postId
                },
                data: {
                    likes: { decrement: 1 }
                }
            })
            return { success: true, message: "Articulo eliminado como me gusta" }
        } else {
            await prisma.postLike.create({
                data: { postId, profileId: uuid }
            })
            await prisma.postMetrics.update({
                where: {
                    postId: postId
                },
                data: {
                    likes: { increment: 1 }
                }
            })
            return { success: true, message: "Articulo marcado como me gusta" }
        }

    } catch (error) {
        return formError(error)
    } finally {
        updateTag(`post-${slug}`)
    }

}

export async function isPostLiked(
    email: string,
    postId: number,
): Promise<boolean> {
    const uuid = await getProfileUUID(email)

    try {
        const isLiked = await prisma.postLike.findUnique({
            where: {
                postId_profileId: {
                    postId,
                    profileId: uuid
                }
            }
        })

        if (!isLiked) return false
        return true
    } catch {
        return false
    }
}

export async function increaseView(
    slug: string,
): Promise<void> {
    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            select: { id: true }
        })

        if (!post) return

        await prisma.postMetrics.update({
            where: { postId: post.id },
            data: { views: { increment: 1 } }
        })
    } catch (error) {
        console.error(error)
    }
}