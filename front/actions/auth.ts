'use server'

import z from "zod"
import { initStateResetPassword, initStateSignOut, initStateSingIn, initStateSingUp } from "../types/auth"
import { signInSchema, signUpSchema } from "../schemas"
import { createClient } from "../lib/supabase/server"
import { resetPasswordSchema } from "../schemas/auth"
import { getProfile } from "../lib/supabase/rol"

const singInWithCredentials = async (email: string, password: string) => {
    const supabase = await createClient()
    return await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
}



export const userSingUp = async (prevState: initStateSingUp, formData: FormData): Promise<initStateSingUp> => {

    const validateFields = signUpSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
            formData: {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
            }
        }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signUp({
        email: validateFields.data.email,
        password: validateFields.data.password,
        options: {
            data: {
                name: validateFields.data.name,
            },
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/posts`
        }
    })

    if (error) return { success: false, formError: error.message }

    return { success: true, formData: { email: formData.get("email") as string, name: "" } }
}


export const userSingIn = async (prevState: initStateSingIn, formData: FormData): Promise<initStateSingIn> => {

    const validateFields = signInSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
        }
    }

    const { error } = await singInWithCredentials(validateFields.data.email, validateFields.data.password)

    if (error) return { success: false, formError: error.message }


    const profile = await getProfile()

    if (!profile) return { success: false, formError: "No se pudo obtener el perfil" }

    return { success: true, profile: profile }
}

// Dont' followind develop, because i don't have smpt server.
export const resetPassword = async (prevState: initStateResetPassword, formData: FormData): Promise<initStateResetPassword> => {


    const validateFields = resetPasswordSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
        }
    }

    const supabase = await createClient()


    const { data, error } = await supabase.auth.resetPasswordForEmail(
        validateFields.data.email,
        {
            redirectTo: "http://localhost:3000/auth/update-password"
        }
    )

    return { success: true }
}

export const singOutSupabase = async (): Promise<initStateSignOut> => {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        return {
            success: false,
            formError: error.message,
        };
    }

    return {
        success: true,
    };
}