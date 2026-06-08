'use client'

import { useFormAction } from "@/hooks/useFormAction"
import { useAuth } from "@/context/AuthContext"
import { Button } from "../forms/parts/button"
import { likePost } from "@/lib/actions/post"
import { Modal } from "../modal/modal"
import { Heart } from "lucide-react"
import { useState } from "react"

interface Props {
    postId: number
    isLiked: boolean
}

export const LikeButtonWrapper = ({ postId, isLiked }: Props) => {

    const { profile } = useAuth()
    const [showModal, setShowModal] = useState(false)

    const likePostWithData = likePost.bind(null, postId, profile?.email ?? '')
    const { dispatch, pending } = useFormAction(likePostWithData)

    if (!profile) {
        return (
            <>
                <Button
                    type="button"
                    variant="icons"
                    className="hover:text-destructive!"
                    onClick={() => setShowModal(true)}
                >
                    <Heart />
                </Button>

                {showModal && (
                    <Modal title="Necesitas Iniciar Sesión" onClose={() => setShowModal(false)}>
                        <p>Para poder darle like a un articulo, necesitas iniciar sesión en la web.</p>
                    </Modal>
                )}
            </>
        )
    }

    return (
        <form action={dispatch}>
            <Button
                type="submit"
                variant="icons"
                className="hover:text-destructive!"
                disabled={pending}
            >
                <HeartLike isLiked={isLiked} />
            </Button>
        </form>
    )
}

export const HeartLike = ({ isLiked }: { isLiked: boolean }) => {

    return (
        <Heart className={`${isLiked ? "text-destructive fill-current" : ""}`} />
    )
}