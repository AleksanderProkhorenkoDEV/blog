import { Section } from "@/components/dashboard/layout/section";
import { getAllCategories } from "@/lib/data/categories";
import { PostForm } from "@/components/forms/post-form";
import { toSelectOptions } from "@/lib/utils/select";
import { createClient } from "@/lib/supabase/server";



export default async function CreatePost() {

    const categories = await getAllCategories()
    const categoriesOption = toSelectOptions(categories, "id", "name");
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <Section className="p-4">
            <PostForm
                categories={categoriesOption}
                authorId={user?.id}
            />
        </Section>
    )
}