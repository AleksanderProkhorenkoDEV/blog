import { BackgroundDecor } from "@/components/elements/BackgroundDecor";
import { jetBrain } from "../fonts/fonts";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="min-h-screen grid grid-cols-2 gap-1 ">
                <section className="relative flex  flex-col items-center justify-center">
                    <BackgroundDecor position="top-10 left-10">{`{`}</BackgroundDecor>
                    <div className="max-w-[80%] mx-auto">
                        <h1 className={`text-2xl font-medium tracking-tight mb-2 text-foreground/40 ${jetBrain.className}`}>
                            Todos los caminos llevan a
                        </h1>
                        <span className={`inline-block text-3xl font-semibold text-primary ${jetBrain.className}`}>
                            ~/auth
                        </span>
                    </div>
                    <BackgroundDecor position="bottom-10 right-10">{`}`}</BackgroundDecor>
                </section>
                <section className="p-4 box-border flex flex-col justify-center items-center gap-4">
                    {children}
                </section>
            </main>

        </>
    )
}