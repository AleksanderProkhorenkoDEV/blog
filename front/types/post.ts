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
    categories: {categoryId: number}[],
    published: string,
    authorId: string,
}