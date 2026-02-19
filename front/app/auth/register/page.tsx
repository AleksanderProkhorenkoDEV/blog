'use client'

import { userRegistration } from "@/actions/auth";
import { initStateRegisterForm } from "@/types/auth";
import { useActionState } from "react";

export default function Register() {

    const initialState: initStateRegisterForm = {
        success: false,
        errors: {}
    }

    const [state, formAction, pending] = useActionState(userRegistration, initialState)
    console.log(state.errors?.email?.[0]);
    
    return (
        <>
            <h1>Register page</h1>
            <form action={formAction}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="password" >Password confirmation</label>
                <input type="password" id="password" name="passwordConfirmation" />
                <button type="submit" disabled={pending}>Submit</button>
            </form>
        </>
    )
}