import { Konkhmer } from "@/app/fonts/fonts"
import { CategoryBadget } from "@/components/dashboard/badgets/category-badget"
import { BackgroundDecor } from "@/components/elements/background-decorator"
import { Button } from "@/components/forms/parts/button"
import { BackNavigation } from "@/components/link/back-navigation"
import { getPostBySlug } from "@/lib/data/posts"
import { formatDatePost } from "@/lib/utils/post-date"
import { Calendar, Eye, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug

    return (
        <>
            <Suspense fallback={<p>loading post....</p>}>
                <PostContent slug={slug} />
            </Suspense>
            <hr className="border border-secondary mb-10"></hr>
            <Suspense fallback={<p>loading comments....</p>}>
                <Comments />
            </Suspense>
            <BackgroundDecor position="left-15 top-45">/</BackgroundDecor>
            <BackgroundDecor position="right-23 bottom-20">*</BackgroundDecor>
        </>
    )
}

const PostContent = async ({ slug }: { slug: string }) => {
    const post = await getPostBySlug(slug)

    if (!post) return notFound()

    return (
        <article className="my-10 flex flex-col gap-4">
            <BackNavigation text="volver" />
            <div className="relative group w-full h-84 rounded-md overflow-hidden">
                <Image
                    src={post.thumbnail}
                    alt={`${post.title} - ${post.thumbnail}`}
                    fill
                    loading="lazy"
                    className="object-cover pointer-events-none"
                />
            </div>
            <h1 className={`${Konkhmer.className} text-4xl`}>{post.title}</h1>
            <div className="flex flex-wrap gap-2">
                {
                    post.categories.map((item, index) => {
                        return <CategoryBadget
                            name={item.category.name}
                            key={`${post.title}-${post.id}-${index}`}
                            className="w-fit"
                        />
                    })
                }
            </div>
            <p className="flex gap-2 items-center text-muted-foreground"><Calendar width={14} />{formatDatePost(post.createdAt)}</p>
            <div className="flex gap-6 text-muted-foreground">
                <p className="flex gap-2"><Heart className="text-destructive" /> {post.metrics?.likes}</p>
                <p className="flex gap-2"><Eye /> {post.metrics?.views}</p>
            </div>
            <div
                className="prose prose-invert  text-pretty"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="flex gap-3">
                <Button type="button" variant="icons" className="hover:text-destructive!"><Heart /></Button>
                <Button type="button" variant="icons" ><MessageCircle /></Button>
            </div>
        </article>
    )
}

const Comments = async () => {
    return (
        <article>
            <h3 className={`${Konkhmer.className} text-2xl`}>Comments</h3>
        </article>
    )
}