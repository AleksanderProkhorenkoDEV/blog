'use client'

import { initStateSingIn } from "../../types/auth"
import { useActionState, useEffect } from "react"
import { CustomLink } from "../link/customLink"
import { userSingIn } from "../../actions/auth"
import { CustomInput } from "./parts/input"
import { useRouter } from "next/navigation"
import { Button } from "./parts/button"
import { Label } from "./parts/label"
import { Form } from "./base-form"
import { toast } from "sonner"

export const LoginForm = () => {


    const initialState: initStateSingIn = {
        success: false,
        inputErrors: {},
    }

    const router = useRouter()
    
    const [state, formAction, pending] = useActionState(userSingIn, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success("Inicio de sesión correcto.")
            router.push("/")
        }
        if (state.formError) {
            toast.error(`Error al iniciar sesión: ${state.formError}`)
        }
    }, [state, router])

    return (
        <Form action={formAction}>
            <Label htmlFor="email">E-mail</Label>
            <CustomInput
                type="email"
                name="email"
                error={state.inputErrors?.email?.[0]}
            />
            <Label htmlFor="password">Contraseña</Label>
            <CustomInput
                type="password"
                name="password"
                error={state.inputErrors?.password?.[0]}
            />
            <CustomLink href="/register"><p>¿No tienes cuenta? Registrare.</p></CustomLink>
            <Button type="submit" disabled={pending}>Inicia sesión</Button>
        </Form>
    )
}