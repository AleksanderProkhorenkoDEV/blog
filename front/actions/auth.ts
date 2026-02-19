'use server'

import { initStateRegisterForm } from "@/types/auth"
import { regiserSchema } from "../app/schemas/auth"
import z from "zod"

export const userRegistration = async (prevState: initStateRegisterForm, formData: FormData): Promise<initStateRegisterForm> => {

    const validateFields = regiserSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validateFields.success) {
        return {
            success: false,
            errors: z.flattenError(validateFields.error).fieldErrors
        }
    }

    return { success: true }
}
