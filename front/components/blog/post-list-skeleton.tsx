import { Skeleton } from "../ui/skeleton"

export const PostListSkeleton = () => {
    return (
        <section className="flex flex-col gap-4 h-98">
            <Skeleton className="h-55" />
            <Skeleton className="h-55"/>
        </section>
    )
}