'use client'

import { Button } from "@/components/forms/parts/button"
import { deleteCategory } from "@/lib/actions/category"
import { Modal } from "@/components/modal/modal"
import { useState, useTransition } from "react"
import { Trash } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const CategoryDeleteButtonWrapper = ({ id }: { id: number }) => {

    const [open, setOpen] = useState<boolean>(false)
    const [pending, startTransition] = useTransition()
    const router = useRouter()

    const handleConfirm = () => {
        startTransition(async () => {
            const result = await deleteCategory(id)
            if (result?.success) {
                toast.success('Categoría eliminada correctamente')
                setOpen(false)
                router.refresh()
                return
            }

            toast.error(`Error eliminando la categoría: ${result?.formError}`)
        })
    }

    return (
        <>
            <Button variant="icons" onClick={() => setOpen(true)}>
                <Trash width={20} />
            </Button>
            {open && (
                <Modal title="Confirmar" onClose={() => setOpen(false)}>
                    <p>¿Seguro que quieres eliminar esta categoría?</p>
                    <div className="flex gap-2 justify-end">
                        <Button
                            onClick={handleConfirm}
                            disabled={pending}
                            loading={pending}
                            variant="danger"
                        >
                            Eliminar
                        </Button>
                        <Button onClick={() => setOpen(false)} disabled={pending}>
                            Cancelar
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    )
}