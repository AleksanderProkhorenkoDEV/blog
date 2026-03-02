'use server'

import { initStateResetPassword, initStateSingIn, initStateSingUp } from "@/types/auth"
import { createClient } from "@/lib/supabase/server"
import { signInSchema, signUpSchema } from "@/schemas"
import z from "zod"
import { resetPasswordSchema } from "@/schemas/auth"

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

    return { success: true }
}


export const userSingIn = async (prevState: initStateSingIn, formData: FormData): Promise<initStateSingIn> => {

    const validateFields = signInSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            inputErrors: z.flattenError(validateFields.error).fieldErrors,
        }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: validateFields.data.email,
        password: validateFields.data.password
    })

    if (error) return { success: false, formError: error.message }

    return { success: true }
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