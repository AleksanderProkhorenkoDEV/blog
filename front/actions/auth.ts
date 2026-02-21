'use server'

import { initStateRegisterForm } from "@/types/auth"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { registerSchema } from "@/schemas"
import z from "zod"

export const userRegistration = async (prevState: initStateRegisterForm, formData: FormData): Promise<initStateRegisterForm> => {

    const validateFields = registerSchema.safeParse(Object.fromEntries(formData.entries()))

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

    redirect("/auth/register/check-email")

    return { success: true }
}
