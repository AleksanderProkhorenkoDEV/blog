import { CategoryBadgetWrapper } from "@/components/blog/category-bagdet-wrapper";
import { PostCardItem } from "@/components/elements/post-card";
import { getAllCategories } from "@/lib/data/categories";
import { getPostBySlug, getPublishedPost } from "@/lib/data/posts";
import { Konkhmer } from "@/app/fonts/fonts";
import { Suspense } from "react";
import { BackgroundDecor } from "@/components/elements/background-decorator";
import { CategoryListSkeleton } from "@/components/blog/category-list-skeleton";
import { PostListSkeleton } from "@/components/blog/post-list-skeleton";
import { Metadata } from "next";

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {

    const category = (await searchParams).category

    return (
        <section className="flex flex-col gap-4">
            <p className="text-primary mt-8">{"//"} todos los post</p>
            <h1 className={`${Konkhmer.className} text-2xl`}>Blog</h1>
            <p className="text-sm text-muted-foreground">Explorando ideas, exponiendo dudas y soluciones</p>
            <Suspense fallback={<CategoryListSkeleton />}>
                <CategoryList categoryName={category} />
            </Suspense>
            <Suspense fallback={<PostListSkeleton />}>
                <PostList categoryName={category} />
            </Suspense>
            <BackgroundDecor position="left-10 bottom-1/2 max-sm:hidden">{'{'}</BackgroundDecor>
            <BackgroundDecor position="right-55 bottom-1 max-xs:hidden">*</BackgroundDecor>
        </section>
    )
}


export const CategoryList = async ({ categoryName }: { categoryName: string | undefined }) => {
    const categories = await getAllCategories()

    return (
        <article className="p-2 flex flex-wrap gap-2">
            <CategoryBadgetWrapper name="Todas" active={categoryName === undefined} />
            {
                categories.map((item) => {
                    return <CategoryBadgetWrapper name={item.name} key={item.id} active={categoryName === item.name} />
                })
            }
        </article>
    )
}

export const PostList = async ({ categoryName }: { categoryName: string | undefined }) => {
    const posts = await getPublishedPost(categoryName)

    return (
        <>
            {
                posts.map((item) => {
                    return (
                        <PostCardItem post={item} key={item.id} />
                    )
                })
            }
        </>
    )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.content ?? post.title,
        openGraph: {
            title: post.title,
            images: [post.thumbnail],
        },
    };
}