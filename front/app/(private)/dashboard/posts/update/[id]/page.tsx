import { Section } from "@/components/dashboard/layout/section"
import { getAllCategories } from "@/lib/data/categories"
import { PostForm } from "@/components/forms/post-form"
import { toSelectOptions } from "@/lib/utils/select"
import { getPost } from "@/lib/data/posts"
import { notFound } from "next/navigation"

export default async function UpdatePostPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    const categories = await getAllCategories()
    const categoriesOption = toSelectOptions(categories, "id", "name");
    const post = await getPost(id)
    console.log(post);


    if (!post) notFound()

    return (
        <Section className="p-4">
            <PostForm
                post={post ?? undefined}
                categories={categoriesOption}
            />
        </Section>
    )
}