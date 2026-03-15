'use client'

import { CustomInput } from "@/components/forms/parts/input";
import { initStateSingUp } from "@/types/auth";
import { userSingUp } from "@/actions/auth";
import { useActionState } from "react";

export default function Register() {

    const initialState: initStateSingUp = {
        success: false,
        inputErrors: {},
    }

    const [state, formAction, pending] = useActionState(userSingUp, initialState)

    //TODO: Add sonner message
    //TODO: redict to check-email

    return (
        <>
            <h1>Página de registro de usuario</h1>
            <form action={formAction}>
                <label htmlFor="name">name</label>
                <CustomInput
                    name="name"
                    type="text"
                    error={state.inputErrors?.name?.[0]}
                />
                <label htmlFor="email">Email</label>
                <CustomInput
                    name="email"
                    type="email"
                    error={state.inputErrors?.email?.[0]}
                />
                <label htmlFor="password" >Password</label>
                <CustomInput
                    name="password"
                    type="password"
                    error={state.inputErrors?.password?.[0]}
                />
                <label htmlFor="password" >Password confirmation</label>
                <CustomInput
                    name="passwordConfirmation"
                    type="password"
                    error={state.inputErrors?.passwordConfirmation?.[0]}
                />
                <button type="submit" disabled={pending}>Submit</button>
            </form>
        </>
    )
}