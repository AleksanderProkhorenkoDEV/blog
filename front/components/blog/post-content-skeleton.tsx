import { Skeleton } from "../ui/skeleton"

export const PostContentSkeleton = () => {
    return (
        <div className="my-10 flex flex-col gap-4">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="w-full h-74" />
            <Skeleton className="h-10 w-48" />
            <div className="flex gap-4">
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-24 h-6" />
            </div>
            <Skeleton className="w-50 h-6" />
            <div className="flex gap-4">
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-24 h-6" />
            </div>
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-24 h-6" />
        </div>
    )
}