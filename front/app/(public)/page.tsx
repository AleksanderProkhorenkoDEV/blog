import { BestPostSkeleton } from "@/components/home/best-post-skeleton";
import { HeroSection } from "../../components/home/heroSection";
import { BestPost } from "@/components/home/best-post";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Suspense fallback={<BestPostSkeleton />}>
                <BestPost />
            </Suspense>
        </>
    )
}