'use client'

import { createCategory, updateCategory } from "@/lib/actions/category"
import { CustomInput } from "@/components/forms/parts/input"
import { Button } from "@/components/forms/parts/button"
import { useFormAction } from "@/hooks/useFormAction"
import { FolderPen, FolderPlus } from "lucide-react"
import { Form } from "@/components/forms/base-form"

interface CategoryFormProps {
    defaultValues?: {
        id: number
        name: string
    }
}


export const CategoryForm = ({ defaultValues }: CategoryFormProps) => {

    const isEditing = !!defaultValues

    const action = isEditing
        ? updateCategory.bind(null, defaultValues!.id)
        : createCategory

    const { dispatch, pending, getFieldError } = useFormAction(action)

    return (
        <Form action={dispatch} className="max-sm:min-w-fit">
            <label htmlFor="name">Nombre de la categoría</label>
            <CustomInput
                type="text"
                name="name"
                placeholder="Ej: Spring boot, AWS"
                defaultValue={defaultValues?.name}
                variant="light"
                error={getFieldError("name")}
            />
            <Button
                disabled={pending}
                loading={pending}
                type="submit"
                variant={isEditing ? "secondary" : "primary"}
            >
                {isEditing
                    ? <><FolderPen width={18} /> Actualizar categoría</>
                    : <><FolderPlus width={18} /> Crear categoría</>
                }
            </Button>
        </Form>
    )
}