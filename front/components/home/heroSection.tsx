import { jetBrain, Konkhmer } from "@/app/fonts/fonts"
import { Button } from "../forms/parts/button"
import { BackgroundDecor } from "../elements/BackgroundDecor"
import { ArrowRight } from "lucide-react"

export const HeroSection = () => {
    return (
        <section className="min-h-[calc(100svh-80px)] p-4 flex items-center justify-center max-w-6xl mx-auto relative">
            <article className="flex flex-col gap-6">
                <p className={`text-primary relative ${jetBrain.className} animate-pulse box-border ml-6`}>
                    <span className="before:absolute before:content-[''] before:size-3 before:rounded-full before:bg-primary before:-left-6 before:top-1/2 before:-translate-y-1/2"></span>
                    online
                </p>
                <h1 className={`${Konkhmer.className} text-5xl `}>Bienvenido a este blog,<br /><span className="text-primary">aquí ser un junior no es malo.</span></h1>
                <p className="font-bold text-secondary text-pretty w-2xl">
                    Mis experimentos ya sean buenos o malos. Los podras leer aqui,
                    no encontrarás el mejor tutorial,
                    pero lo mismo ves tu reflejo aqui.
                </p>
                <div className="flex flex-wrap gap-6">
                    <Button><ArrowRight strokeWidth={2} />Ver posts</Button>
                    <Button variant="secondary">Sobre mi</Button>
                </div>
            </article>
            <BackgroundDecor position="right-0 bottom-4 opacity-30">{`{}`}</BackgroundDecor>
        </section>
    )
}