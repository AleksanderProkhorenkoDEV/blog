import { CurliBraces } from "@/components/elements/curlibraces";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="min-h-screen h-screen grid grid-cols-2 gap-1 ">
                <section className="relative">
                    <CurliBraces position="top-10 left-10">{`{`}</CurliBraces>
                    <CurliBraces position="bottom-10 right-10">{`}`}</CurliBraces>
                </section>
                <section className="p-4 box-border flex flex-col justify-center items-center gap-4">
                    {children}
                </section>
            </main>

        </>
    )
}