import { CategoryForm } from "@/components/forms/category-form";
import { jetBrain } from "@/app/fonts/fonts";
import { FolderPlus, Lightbulb, Tag } from "lucide-react";
import { Section } from "@/components/dashboard/section";
import { BackNavigation } from "@/components/link/back-navigation";

export default function CreateCategorie() {
    return (
        <Section className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-4 flex-wrap justify-center ">
                <div>
                    <BackNavigation text="Cancelar" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-full p-2 bg-primary/20 rounded-lg">
                        <FolderPlus width={28} className="text-primary" />
                    </div>
                    <div>
                        <h1 className={`text-foreground text-2xl font-semibold ${jetBrain.className}`}>Nueva categoría</h1>
                        <p className="text-sm text-muted-foreground">Organiza tus articulos en categorías para facilitar la navegación</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <article className="w-fit border border-border p-4 rounded-sm">
                        <h3 className={`font-bold text-2xl ${jetBrain.className} flex gap-2 items-center mb-1`}> <Tag width={22} className="text-primary" /> Información de la categoría</h3>
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
            </div>
        </Section>
    )
}