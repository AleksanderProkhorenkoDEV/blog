import { Skeleton } from "../ui/skeleton"

export const BestPostSkeleton = () => {
    return (
        <section className="container flex flex-col items-center justify-center p-4 mx-auto mb-8">
            <article className="w-3xl flex flex-col gap-4 max-lg:w-auto">
                <Skeleton className="h-6 w-68" />
                <Skeleton className="h-55"/>
            </article>
        </section>
    )
}