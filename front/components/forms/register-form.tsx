'use client'

import { initStateSingUp } from "../../types/auth"
import { useActionState, useEffect } from "react"
import { CustomLink } from "../link/customLink"
import { userSingUp } from "../../lib/actions/auth"
import { CustomInput } from "./parts/input"
import { useRouter } from "next/navigation"
import { Button } from "./parts/button"
import { Form } from "./base-form"
import { toast } from "sonner"

export const RegisterForm = () => {

    const initialState: initStateSingUp = {
        success: false,
        inputErrors: {},
        formError: "",
    }

    const router = useRouter()

    const [state, formAction, pending] = useActionState(userSingUp, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success("Cuenta creada, revise su correo para verificar su e-mail")
            router.push(`/register/check-email?email=${encodeURIComponent(state.formData!.email)}`)
        }
        if (state.formError) {
            toast.error(`Error al crear la cuenta. Intentelo más tarde.`)
        }
    }, [state, router])

    return (
        <Form action={formAction}>
            <label htmlFor="name">Nombre</label>
            <CustomInput
                name="name"
                type="text"
                error={state.inputErrors?.name?.[0]}
            />
            <label htmlFor="email">E-mail</label>
            <CustomInput
                name="email"
                type="email"
                error={state.inputErrors?.email?.[0]}
            />
            <label htmlFor="password" >Contraseña</label>
            <CustomInput
                name="password"
                type="password"
                error={state.inputErrors?.password?.[0]}
            />
            <label htmlFor="password">Confirmación de contraseña</label>
            <CustomInput
                name="passwordConfirmation"
                type="password"
                error={state.inputErrors?.passwordConfirmation?.[0]}
            />
            <CustomLink href="/login"><p>Ya tengo una cuenta. Iniciar sesión</p></CustomLink>
            <Button type="submit" disabled={pending} loading={pending}>Crear cuenta</Button>
        </Form>
    )
}