'use client'

import { CategoryBadget } from "../dashboard/badgets/category-badget"
import { CustomInput } from "@/components/forms/parts/input"
import { CustomSelect, OptionSelect } from "./parts/select"
import { Button } from "@/components/forms/parts/button"
import { CustomInputFiles } from "./parts/input-file"
import { TipTap } from "@/components/editor/tip-tap"
import { uploadImage } from "@/lib/actions/storage"
import { ImageUp } from "lucide-react"
import { SubmitEventHandler, useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { usePostCreate } from "@/hooks/usePostCreate"

interface Props {
    categories: OptionSelect[]
    authorId: string | undefined;
}

export const PostForm = ({ categories, authorId }: Props) => {


    const [selectedCategory, setSelectedCategory] = useState<OptionSelect[]>([])
    const [thumbnail, setThumbnail] = useState<string>("/working-code.webp")

    const handleChangeSelect = (values: string[]) => {
        const newCategory = categories.filter(item => values.includes(String(item.value)))
        setSelectedCategory(newCategory)
    }

    const handleImageUpload = async (value: File) => {
        const maxSize = 2 * 1024 * 1024
        if (value.size > maxSize) {
            toast.error("La imagen pesa mucho, no puedes subirla")
            return
        }

        const formData = new FormData()
        formData.append('image', value)

        const result = await uploadImage(formData)
        if (result.error) return
        setThumbnail(result.url!)
    }

    const { loading, handleCreatePost } = usePostCreate(authorId)

    return (
        <form
            className="w-5xl m-auto p-4 flex flex-col gap-1 bg-card text-card rounded-md"
            onSubmit={handleCreatePost}
        >
            {/* Metadatos y Portada */}
            <div className="flex gap-4 justify-center">
                <div className="flex-1">
                    <h1 className="uppercase text-md tracking-wider mb-2 text-foreground/60">Metadatos</h1>
                    <label htmlFor="title" className="flex flex-col gap-2 text-foreground">
                        Titulo del post
                        <CustomInput type="text" name="title" variant="light" />
                    </label>
                    <label htmlFor="slug" className="flex flex-col gap-2 text-foreground">
                        Slug
                        <CustomInput type="text" name="slug" variant="light" />
                    </label>
                </div>
                <div className="flex-1">
                    <h1 className="uppercase text-md tracking-wider text-foreground/60 mb-2">Portada</h1>
                    <div className="relative aspect-video rounded-md overflow-hidden">
                        <Image
                            src={thumbnail}
                            alt="thumbnail"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                            <ImageUp className="text-foreground" />
                            <CustomInputFiles
                                name="thumbnail"
                                onChange={handleImageUpload}
                                className="text-foreground"
                            >
                                Actualizar imagen
                            </CustomInputFiles>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-secondary my-4" />
            {/* Categorías y estado de publicación */}
            <div className="flex flex-wrap gap-4">
                <label htmlFor="categories" className="uppercase text-md tracking-wider text-foreground/60 mb-2 flex-1">
                    Categorías
                    <div className="flex flex-col gap-4 mt-2">
                        <CustomSelect
                            name="categories"
                            multiple
                            variant="light"
                            options={categories}
                            className="flex-1"
                            onChange={handleChangeSelect}
                        />
                        <div className="flex flex-1 flex-wrap gap-2">
                            {
                                selectedCategory.length != 0 ?
                                    selectedCategory.map((item) => {
                                        return (
                                            <CategoryBadget key={item.value} name={item.label} variant="dark" />
                                        )
                                    })
                                    : <p>No has seleccionado ninguna categoría</p>
                            }
                        </div>
                    </div>
                </label>
                <div className="flex-1 flex items-center  h-fit gap-1">
                    <CustomInput name="published" type="checkbox" />
                    <label htmlFor="published" className="text-foreground">Borrador</label>
                </div>
            </div>
            <hr className="border-t border-secondary mb-2" />
            <label htmlFor="name" className="uppercase text-foreground/60 tracking-wider">Contenido</label>
            <TipTap placeholder="Crea un post" />
            <footer className="w-full flex justify-end">
                <Button type="submit" variant="primary" disabled={loading} >
                    Crear articulo
                </Button>
            </footer>
        </form>
    )
}
