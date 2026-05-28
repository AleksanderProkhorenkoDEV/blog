'use client'

import { createCategory, updateCategory } from "@/lib/actions/category"
import { CustomInput } from "@/components/forms/parts/input"
import { initStateCreateCategory } from "@/types/category"
import { Button } from "@/components/forms/parts/button"
import { FolderPen, FolderPlus } from "lucide-react"
import { Form } from "@/components/forms/base-form"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

interface CategoryFormProps {
    defaultValues?: {
        id: number
        name: string
    }
}


export const CategoryForm = ({ defaultValues }: CategoryFormProps) => {

    const isEditing = !!defaultValues

    const initState: initStateCreateCategory = {
        success: false,
        inputErrors: {}
    }

    const action = isEditing
        ? updateCategory.bind(null, defaultValues.id)
        : createCategory

    const [state, formAction, pending] = useActionState(action, initState);


    useEffect(() => {
        if (state.formError) {
            toast.error(`Error al ${isEditing ? "actualizar" : "crear"} la categoría: ${state.formError}`)
        }
    }, [state, isEditing])

    return (
        <Form action={formAction} className="max-sm:min-w-fit">
            <label htmlFor="name">Nombre de la categoría</label>
            <CustomInput
                type="text"
                name="name"
                placeholder="Ej: Spring boot, AWS"
                defaultValue={defaultValues?.name}
                variant="light"
                error={state.inputErrors?.name?.[0]}
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