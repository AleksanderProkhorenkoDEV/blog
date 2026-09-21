import { Skeleton } from "../ui/skeleton"

export const CategoryListSkeleton = () => {
    return (
        <article className="p-2 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-20" />
        </article>
    )
}