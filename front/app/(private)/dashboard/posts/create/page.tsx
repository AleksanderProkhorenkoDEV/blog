import { Section } from "@/components/dashboard/layout/section";
import { PostForm } from "@/components/forms/post-form";
import { getCategories } from "@/lib/data/categories";
import { toSelectOptions } from "@/lib/utils/select";



export default async function CreatePost() {

    const categories = await getCategories()
    const categoriesOption = toSelectOptions(categories.categories, "id", "name");

    return (
        <Section className="p-4">
            <PostForm categories={categoriesOption} />
        </Section>
    )
}