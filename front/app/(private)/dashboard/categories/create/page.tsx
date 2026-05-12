import { FormLayout } from "@/components/dashboard/layout/form-layout";
import { PageHeader } from "@/components/dashboard/layout/page-header";
import { CategoryForm } from "@/components/forms/category-form";
import { Section } from "@/components/dashboard/layout/section";
import { FolderPlus } from "lucide-react";

export default function CreateCategorie() {

    return (
        <Section className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-4 flex-wrap justify-center ">
                <PageHeader
                    title="Nueva categoría"
                    description="Organiza tus articulos en categorías para facilitar la navegación"
                    icon={FolderPlus}
                />
                <FormLayout
                    title="Información de la categoría"
                    description="El nombre aparecera en el blog y se usara para filtrar articulos."
                    tips={[
                        { label: "Se específico.", text: `"React Hooks" es mejor que solo "React"` },
                        { label: "Evita duplicados.", text: "Revisa las categorias existentes antes de crear una nueva" },
                        { label: "Piensa en SEO.", text: "Usa terminos que tus lectores buscarían" },
                    ]}
                    icon={FolderPlus}
                >
                    <CategoryForm />
                </FormLayout>
            </div>
        </Section>
    )
}