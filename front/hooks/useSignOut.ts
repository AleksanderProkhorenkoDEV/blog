"use client"

import { useState } from "react"
import { singOutSupabase } from "../lib/actions/auth"
import { useAuth } from "../context/AuthContext"
import { toast } from "sonner"

export const useSignOut = () => {

    const [isLoading, setLoading] = useState<boolean>(false)
    const { logOut } = useAuth()

    const handleSignOutSession = async () => {
        setLoading(true)
        try {
            const { success } = await singOutSupabase()
            if (!success) {
                toast.error('Ha ocurrido un error cerrando sesión')
                return
            }
            logOut()
            toast.success('Sesión cerrada con éxito. ¡Vuelve pronto!')
        } catch {
            toast.error('Tenemos problemas técnicos intentelo más tarde.')
        } finally {
            setLoading(false)
        }
    }

    return { isLoading, handleSignOutSession }
}