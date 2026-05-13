'use client'

import { CustomInput } from "@/components/forms/parts/input"
import { Button } from "@/components/forms/parts/button"
import { TipTap } from "@/components/editor/tip-tap"
import { CustomSelect, OptionSelect } from "./parts/select"
import { CategoryBadget } from "../dashboard/badgets/category-badget"

interface Props {
    categories: OptionSelect[]
}

export const PostForm = ({ categories }: Props) => {
    return (
        <form className="border border-primary w-5xl m-auto p-2 flex flex-col gap-1">
            <label htmlFor="name">Titulo del post</label>
            <CustomInput type="text" name="title" />
            <label htmlFor="name">Slug</label>
            <CustomInput type="text" name="slug" />
            <div className="flex flex-col">
                <label htmlFor="categories">Categorías</label>
                <div className="flex gap-4 border p-2">
                    <CustomSelect
                        name="categories"
                        multiple
                        options={categories}
                        className="w-md"
                    />
                    <div>
                        <CategoryBadget name="Jetpack Compose"/>
                    </div>
                </div>
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
