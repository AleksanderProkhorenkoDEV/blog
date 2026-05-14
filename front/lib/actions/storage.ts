import { UploadImages } from "@/types/storage"
import { createClient } from "../supabase/server"

export const uploadImage = async (formData: FormData): Promise<UploadImages> => {

    try {
        const file = formData.get("image") as File

        const supabase = await createClient()

        const { data, error } = await supabase.storage
            .from('post-content')
            .upload(`images/${Date.now()}-${file.name}`, file)

        if (error) return { error: error.message, url: null }

        const { data: { publicUrl } } = supabase.storage
            .from('post-content')
            .getPublicUrl(data.path)

        return { url: publicUrl }

    } catch (e) {
        return { error: 'Error inesperado al subir la imagen', url: null }
    }
}