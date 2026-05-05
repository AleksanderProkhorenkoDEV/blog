'use client'

import { CustomInput } from "@/components/forms/parts/input"
import { Button } from "@/components/forms/parts/button"
import { TipTap } from "@/components/editor/tip-tap"

export const PostForm = () => {
    return (
        <form className="border border-primary w-5xl m-auto p-2 flex flex-col gap-2">
            <label htmlFor="name">Titulo del post</label>
            <CustomInput type="text" name="title" />
            <label htmlFor="name">Slug</label>
            <CustomInput type="text" name="slug" />
            <label htmlFor="name">Contenido</label>
            <TipTap placeholder="Crea un post" />
            <Button type="submit" variant="primary">
                Crear articulo
            </Button>
        </form>
    )
}