'use client'

import { CustomLink } from "../link/customLink"
import { initStateSingUp } from "@/types/auth"
import { userSingUp } from "@/actions/auth"
import { CustomInput } from "./parts/input"
import { Button } from "./parts/button"
import { useActionState, useEffect } from "react"
import { Form } from "./base-form"
import { toast } from "sonner"

export const RegisterForm = () => {

    const initialState: initStateSingUp = {
        success: false,
        inputErrors: {},
        formError: "",
    }

    const [state, formAction, pending] = useActionState(userSingUp, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success("Cuenta creada, revise su correo para verificar su e-mail")
        }
        if (state.formError) {
            toast.error(`Error al crear la cuenta: ${state.formError}`)
        }
    }, [state])

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
            <Button type="submit" disabled={pending}>Crear cuenta</Button>
        </Form>
    )
}