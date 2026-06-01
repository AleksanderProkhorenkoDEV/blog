'use client'

import { changePublishedStatus } from "@/lib/actions/post"
import { Button } from "@/components/forms/parts/button"
import { StatusBadget } from "../badgets/status-badget"
import { toast } from "sonner"

interface Props {
    published: boolean,
    id: number
}

export const PublishedButtonWrapper = ({ published, id }: Props) => {

    const handleUpdate = async (id: number, published: boolean) => {

        const result = await changePublishedStatus(id, published)

        if (result?.success) {
            toast.success("Se ha publicado correctamente el post")
            return
        }

        toast.error(`Ha ocurrido un error: ${result?.formError}`)
    }

    return (
        <Button
            type="button"
            variant="ghost"
            onClick={() => handleUpdate(id, !published)}
            className="cursor-pointer"
        >
            <StatusBadget
                title={published ? "Publicado" : "No publicado"}
                variant={published ? "success" : "danger"}
            />
        </Button>
    )
}