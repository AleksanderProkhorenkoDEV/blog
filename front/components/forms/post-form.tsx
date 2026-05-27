'use client'

import { CategoryBadget } from "../dashboard/badgets/category-badget"
import { CustomInput } from "@/components/forms/parts/input"
import { CustomSelect, OptionSelect } from "./parts/select"
import { Button } from "@/components/forms/parts/button"
import { usePostCreate } from "@/hooks/usePostCreate"
import { CustomInputFiles } from "./parts/input-file"
import { TipTap } from "@/components/editor/tip-tap"
import { uploadImage } from "@/lib/actions/storage"
import { ImageUp } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { Post } from "@/types/post"

interface Props {
    categories: OptionSelect[]
    authorId?: string | undefined;
    post?: Post
}

export const PostForm = ({ categories, authorId, post }: Props) => {

    const initCategoriesSelected = () => {
        if (!post) return []
        const postCategoryIds = post.categories.map(c => String(c.categoryId))
        return categories.filter(c => postCategoryIds.includes(String(c.value)))
    }

    const [selectedCategory, setSelectedCategory] = useState<OptionSelect[]>(initCategoriesSelected)
    const [thumbnail, setThumbnail] = useState<string>(post?.thumbnail ?? "/working-code.webp")
    const [content, setContent] = useState<string>(post?.content ?? "Escribe tu primer post...")

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

    const { loading, handleCreatePost, inputErrors } = usePostCreate(post?.id)

    const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        formData.append('authorId', String(post?.authorId ?? authorId))
        formData.append('thumbnail', thumbnail)
        formData.append('content', content)
        formData.set('published', String(formData.get('published') === 'on'))
        if (post?.id) formData.append('id', String(post.id))

        handleCreatePost(formData)
    }

    return (
        <form
            className="w-6xl m-auto p-4 flex flex-col gap-1 bg-card text-card rounded-md"
            onSubmit={handleSubmitForm}
        >
            {/* Metadatos y Portada */}
            <div className="flex gap-4 justify-center">
                <div className="flex-1">
                    <h1 className="uppercase text-md tracking-wider mb-2 text-foreground/60">Metadatos</h1>
                    <label htmlFor="title" className="flex flex-col gap-2 text-foreground">
                        Titulo del post
                        <CustomInput
                            type="text"
                            name="title"
                            defaultValue={post?.title}
                            variant="light"
                            error={inputErrors?.title?.[0]} />
                    </label>
                    <label htmlFor="slug" className="flex flex-col gap-2 text-foreground">
                        Slug
                        <CustomInput
                            type="text"
                            name="slug"
                            defaultValue={post?.slug}
                            variant="light"
                            error={inputErrors?.slug?.[0]} />
                    </label>
                </div>
                <div className="flex-1">
                    <h1 className="uppercase text-md tracking-wider text-foreground/60 mb-2">Portada</h1>
                    <div className={`relative aspect-video rounded-md overflow-hidden ${inputErrors.thumbnail?.[0] ? "border border-destructive" : ""}`}>
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
            <div className="flex flex-wrap gap-4 mb-2">
                <label htmlFor="categories[]" className="flex-1">
                    <span className="uppercase text-md tracking-wider text-foreground/60 mb-2">Categorías</span>
                    <div className="flex flex-col gap-4 mt-2">
                        <CustomSelect
                            name="categories[]"
                            multiple
                            variant="light"
                            options={categories}
                            className="flex-1"
                            defaultValue={post?.categories.map(c => String(c.categoryId))}
                            onChange={handleChangeSelect}
                            error={inputErrors.categories?.[0]}
                        />
                        <div className="flex flex-1 flex-wrap gap-2">
                            {
                                selectedCategory.length != 0 ?
                                    selectedCategory.map((item) => {
                                        return (
                                            <CategoryBadget key={item.value} name={item.label} variant="light" />
                                        )
                                    })
                                    : <p>No has seleccionado ninguna categoría</p>
                            }
                        </div>
                    </div>
                </label>
                <div className="flex-1 flex items-center  h-fit gap-1">
                    <CustomInput
                        name="published"
                        defaultChecked={!post?.published}
                        type="checkbox"
                        error={inputErrors?.published?.[0]}
                    />
                    <label htmlFor="published" className="text-foreground">Borrador</label>
                </div>
            </div>
            <hr className="border-t border-secondary mb-2" />
            <label htmlFor="content" className="uppercase text-foreground/60 tracking-wider">Contenido</label>
            <TipTap content={content} setContent={setContent} error={inputErrors.content?.[0]} />
            <footer className="w-full flex justify-end">
                <Button type="submit" variant="primary" disabled={loading} >
                    {post ? 'Actualizar artículo' : 'Crear artículo'}
                </Button>
            </footer>
        </form>
    )
}
