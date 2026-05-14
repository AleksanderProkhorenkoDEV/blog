'use client'

import { CategoryBadget } from "../dashboard/badgets/category-badget"
import { CustomInput } from "@/components/forms/parts/input"
import { CustomSelect, OptionSelect } from "./parts/select"
import { Button } from "@/components/forms/parts/button"
import { TipTap } from "@/components/editor/tip-tap"
import { CustomInputFiles } from "./parts/input-file"
import { ImageUp } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface Props {
    categories: OptionSelect[]
}

export const PostForm = ({ categories }: Props) => {

    const [selectedCategory, setSelectedCategory] = useState<OptionSelect[]>([])

    const handleChangeSelect = (values: string[]) => {
        const newCategory = categories.filter(item => values.includes(String(item.value)))
        setSelectedCategory(newCategory)
    }

    const handleImageUpload = (value: File) => {
        console.log(value);
        const maxSize = 2 * 1024 * 1024
        if (value.size > maxSize) {
            toast.error("La imagen pesa mucho, no puedes subirla")
            return
        }
    }

    return (
        <form
            className="border border-primary w-5xl m-auto p-2 flex flex-col gap-1"
        >
            <div className="flex border gap-2">
                <div className="flex flex-col flex-1 border border-primary">
                    <label htmlFor="name">Titulo del post</label>
                    <CustomInput type="text" name="title" />
                </div>
                <div className="flex-1 border border-warning">
                    <CustomInputFiles
                        name="thumbnail"
                        accept="image/jpeg, image/webp"
                        onChange={handleImageUpload}
                    >
                        <ImageUp />
                        Añade una imagen de portada
                    </CustomInputFiles>
                </div>
            </div>
            <label htmlFor="name">Slug</label>
            <CustomInput type="text" name="slug" />
            <div className="flex flex-col">
                <label htmlFor="categories" className="font-semibold mb-1">Categorías</label>
                <div className="flex gap-4 ">
                    <CustomSelect
                        name="categories"
                        multiple
                        options={categories}
                        className="flex-1"
                        onChange={handleChangeSelect}
                    />
                    <div className="flex flex-1 flex-wrap gap-2">
                        {
                            selectedCategory.length != 0 ?
                                selectedCategory.map((item) => {
                                    return (
                                        <CategoryBadget key={item.value} name={item.label} />
                                    )
                                })
                                : <p>No has seleccionado ninguna categoría</p>
                        }
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center w-fit mt-1">
                <label htmlFor="published">Publicar articulo</label>
                <CustomInput name="published" type="checkbox" />
            </div>
            <label htmlFor="name">Contenido</label>
            <TipTap placeholder="Crea un post" />
            <footer>
                <Button type="submit" variant="primary" >
                    Crear articulo
                </Button>
            </footer>
        </form>
    )
}
