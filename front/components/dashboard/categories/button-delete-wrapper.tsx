'use client'

import { Button } from "@/components/forms/parts/button"
import { deleteCategory } from "@/lib/actions/category"
import { useTransition } from "react"
import { Trash } from "lucide-react"
import { toast } from "sonner"

export const DeleteButtonWrapper = ({ id }: { id: number }) => {

    const [pending, startTransition] = useTransition()

    const handleDelete = () => {
        startTransition(async () => {
            const result = await deleteCategory(id)
            if (result.success) {
                toast.success("Categoría eliminada correctamente")
            } else {
                toast.error(`Error eliminando la categoría: ${result.formError}`)
            }
        })
    }

    return (
        <Button variant="icons" onClick={handleDelete} disabled={pending}><Trash width={20} /></Button>
    )
}