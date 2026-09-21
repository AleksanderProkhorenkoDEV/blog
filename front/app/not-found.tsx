import { CustomLink } from "@/components/link/customLink";

export default function NotFound() {
    return (
        <section className="container flex flex-col items-center justify-center gap-4 mx-auto mt-20 p-4 text-center">
            <p className="text-primary text-6xl font-bold">404</p>
            <p className="text-xl">Esta página no existe</p>
            <CustomLink href="/" className="underline hover:text-primary transition-colors">
                Volver al inicio
            </CustomLink>
        </section>
    );
}