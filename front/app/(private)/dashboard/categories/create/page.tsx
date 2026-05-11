import { CategoryForm } from "@/components/forms/category-form";
import { jetBrain } from "@/app/fonts/fonts";
import { Lightbulb, Tag } from "lucide-react";
import { Section } from "@/components/dashboard/section";

export default function CreateCategorie() {
    return (
        <Section className="flex justify-center items-center">
            <div className="flex gap-4 p-6 flex-wrap"> 
                <article className="w-fit border border-border p-4 rounded-sm">
                    <h1 className={`font-bold text-2xl ${jetBrain.className} flex gap-2 items-center mb-1`}> <Tag width={22} className="text-primary" /> Información de la categoría</h1>
                    <p className="text-sm text-muted-foreground mb-2">
                        El nombre aparecera en el blog y se usara para filtrar articulos.
                    </p>

                    <CategoryForm />
                </article>
                <article className="max-w-sm border border-border py-3 px-5 rounded-sm">
                    <p className="font-semibold flex gap-2 mb-4"><Lightbulb className="text-warning" width={18} /> Consejos</p>

                    <p className="text-foreground text-wrap"><span className="font-semibold text-primary">Se especifico.</span>{` "React Hooks" es mejor que solo "React"`}</p>
                    <p className="text-foreground text-wrap"><span className="font-semibold text-primary">Evita duplicados.</span> Revisa las categorias existentes antes de crear una nueva</p>
                    <p className="text-foreground text-wrap"><span className="font-semibold text-primary">Piensa en SEO</span> Usa terminos que tus lectores buscarían</p>
                </article>
            </div>
        </Section>
    )
}