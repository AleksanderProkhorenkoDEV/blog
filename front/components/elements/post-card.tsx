import { CategoryBadget } from "../dashboard/badgets/category-badget";
import { Konkhmer, Montserrat } from "@/app/fonts/fonts";
import { formatDatePost } from "@/lib/utils/post-date";
import { Calendar, MoveRight } from "lucide-react";
import { getExcerpt } from "@/lib/utils/excerpt";
import { CustomLink } from "../link/customLink";
import { PostCard } from "@/types/post";

export const PostCardItem = ({ post }: { post: PostCard }) => {
    return (
        <article className="border border-border rounded-sm py-4 px-8 flex flex-col gap-3 group hover:border-primary ease-in-out duration-200 transition-colors">
            <p className={`${Konkhmer.className} text-2xl group-hover:text-primary duration-200 ease-in-out transition-colors`}>{post.title}</p>
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
            <p className={`${Montserrat.className} text-pretty text-md text-muted-foreground`}>{getExcerpt(post.content)}</p>
            <p className="flex gap-2 items-center text-muted-foreground"><Calendar width={14} />{formatDatePost(post.createdAt)}</p>
            <div className="flex justify-end">
                <CustomLink
                    href={`/blog/${post.slug}`}
                    isUnderline={false}
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    Leer más <MoveRight />
                </CustomLink>
            </div>
        </article>
    )
}