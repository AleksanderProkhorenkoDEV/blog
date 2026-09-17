import { getBestPost } from "@/lib/data/posts"
import { PostCardItem } from "../elements/post-card"
import { jetBrain } from "@/app/fonts/fonts"

export const BestPost = async () => {

    const post = await getBestPost()

    return (
        <section className="container flex flex-col items-center justify-center p-4 mx-auto mb-8">
            {post ? (
                <article className="w-3xl flex flex-col gap-4 max-lg:w-auto">
                    <p className={`${jetBrain.className}`}><span className="text-primary">Unknown {`>`}</span> ~/post/destacados</p>
                    <PostCardItem post={post} />
                </article>
            ) : (
                null
            )}
        </section>
    )
}