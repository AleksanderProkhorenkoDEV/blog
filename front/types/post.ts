export type PostFormData = {
    title: string,
    slug: string,
    content: string,
    thumbnail: string,
    categories: string[],
    published: string,
    authorId: string
}

export type Post = {
    id: number,
    title: string,
    slug: string,
    content: string,
    thumbnail: string,
    categories: { categoryId: number }[],
    published: boolean,
    authorId: string,
}

export type PostCard = {
    id: number,
    title: string,
    slug: string,
    content: string,
    createdAt: Date,
    categories: { category: { name: string } }[]
}