'use client'

import { Button } from "@/components/forms/parts/button";
import { Modal } from "@/components/modal/modal";
import { archivePost } from "@/lib/actions/post";
import { Archive, ArchiveRestore } from "lucide-react";
import { useState } from "react"
import { toast } from "sonner";

interface Props {
    id: number
    archived: boolean
}

export const ArchiveModalWrapper = ({ id, archived }: Props) => {

    const [open, setOpen] = useState<boolean>(false)

    const handleConfirm = async (id: number) => {
        const { success, formError } = await archivePost(id, archived)
        if (success) {
            toast.success(archived ? 'Articulo restaurado' : 'Articulo archivado')
            setOpen(false);
            return
        }

        toast.error(`Ha ocurrido un error archivando el post ${formError}`)
        return
    }

    return (
        <>
            <Button variant="icons" onClick={() => setOpen(true)}>{archived ? <ArchiveRestore width={20} /> : <Archive width={20} />}</Button>
            {
                open && (
                    <Modal title="Confirmar" onClose={() => setOpen(false)}>
                        <p>{archived ? "¿Quieres restaurar este articulo?" : "¿Seguro que quieres archivar este articulo?"}</p>
                        <div className="flex gap-2 justify-end">
                            <Button
                                onClick={() => { handleConfirm(id); setOpen(false); }}
                                variant="danger"
                            >
                                {archived ? "restuarar" : "archivar"}
                            </Button>
                            <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}