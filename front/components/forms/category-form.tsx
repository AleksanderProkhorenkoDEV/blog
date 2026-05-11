'use client'

import { CustomInput } from "@/components/forms/parts/input"
import { initStateCreateCategory } from "@/types/category"
import { Button } from "@/components/forms/parts/button"
import { createCategory } from "@/lib/actions/category"
import { Form } from "@/components/forms/base-form"
import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FolderPlus } from "lucide-react"
import { toast } from "sonner"

export const CategoryForm = () => {

    const initState: initStateCreateCategory = {
        success: false,
        inputErrors: {}
    }

    const [state, formAction, pending] = useActionState(createCategory, initState);

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast.success("Categoría creada correctamente.")
            router.push("/dashboard/categories")
        }

        if (state.formError) {
            toast.error(`Error al crear la categoría: ${state.formError}`)
        }
    }, [state, router])

    return (
        <Form action={formAction}>
            <label htmlFor="name">Nombre de la categoría</label>
            <CustomInput
                type="text"
                name="name"
                placeholder="Ej: Spring boot, AWS"
                variant="light"
                error={state.inputErrors?.name?.[0]}
            />
            <Button disabled={pending} type="submit"> <FolderPlus width={18} /> Crear categoria</Button>
        </Form>
    )
}