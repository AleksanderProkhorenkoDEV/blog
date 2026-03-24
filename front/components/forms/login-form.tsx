'use client'

import { initStateSingIn } from "@/types/auth"
import { CustomInput } from "./parts/input"
import { userSingIn } from "@/actions/auth"
import { Button } from "./parts/button"
import { useActionState } from "react"
import { Label } from "./parts/label"
import { Form } from "./base-form"

export const LoginForm = () => {


    const initialState: initStateSingIn = {
        success: false,
        inputErrors: {},
    }

    const [state, formAction, pending] = useActionState(userSingIn, initialState)

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
            <Button type="submit" disabled={pending}>Inicia sesión</Button>
        </Form>
    )
}