'use client'

import { userSingIn } from "@/actions/auth";
import { CustomInput } from "@/components";
import { initStateSingIn } from "@/types/auth";
import { useActionState } from "react";

export default function Login() {

    const initialState: initStateSingIn = {
        success: false,
        inputErrors: {},
    }

    const [state, formAction, pending] = useActionState(userSingIn, initialState)


    return (
        <>
            <h1>Página de inicio de sesión.</h1>
            <form action={formAction}>
                <label htmlFor="email">E-mail</label>
                <CustomInput
                    type="email"
                    name="email"
                    error={state.inputErrors?.email?.[0]}
                />
                <label htmlFor="password">Contraseña</label>
                <CustomInput
                    type="password"
                    name="password"
                    error={state.inputErrors?.password?.[0]}
                />
                <button type="submit" disabled={pending}>Iniciar sesión</button>
            </form>
        </>
    )
}