import { BestPost } from "@/components/home/best-post";
import { HeroSection } from "../../components/home/heroSection";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Suspense fallback={<p>loading...</p>}>
                <BestPost />
            </Suspense>
        </>
    )
}