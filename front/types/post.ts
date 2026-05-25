import { postSchema } from "@/schemas/post";
import z from "zod";

export interface initPostCreate {
    success: boolean,
    inputErrors?: Partial<Record<keyof z.infer<typeof postSchema>, string[]>>,
    formError?: string
}

export interface Post {
    id: number,
    title: string,
    content: string,
    slug: string,
    published: boolean,
    authorId: string,
    thumbnail: string,
    categories: { categoryId: number }[]
}