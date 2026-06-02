import { CategoryBadgetWrapper } from "@/components/blog/category-bagdet-wrapper";
import { getAllCategories } from "@/lib/data/categories";
import { Konkhmer } from "@/app/fonts/fonts";
import { Suspense } from "react";

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

    const category = (await searchParams).category

    return (
        <>
            <p className="text-primary">{"//"} todos los post</p>
            <h1 className={`${Konkhmer.className} text-2xl`}>Blog</h1>
            <p className="text-sm text-muted-foreground">Explorando ideas, exponiendo dudas y soluciones</p>
            <Suspense fallback={<p>Loading....</p>}>
                <CategoryList name={category} />
            </Suspense>
            <Suspense fallback={<p>Loading....</p>}>

            </Suspense>
        </>
    )
}


export const CategoryList = async ({ name }: { name: string | undefined }) => {
    const categories = await getAllCategories()

    return (
        <article className="border p-2 flex flex-wrap gap-2">
            <CategoryBadgetWrapper name="Todas" active={name === undefined} />
            {
                categories.map((item) => {
                    return <CategoryBadgetWrapper name={item.name} key={item.id} active={name === item.name} />
                })
            }
        </article>
    )
}

export const PostList = async ({ name }: { name: string | undefined }) => {
    
}