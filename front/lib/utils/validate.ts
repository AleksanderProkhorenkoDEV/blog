import { ActionState } from "@/types/actions"
import z from "zod"

export function validationError<T>(error: z.ZodError, formData: Partial<T>): ActionState<T> {
    return {
        success: false,
        inputErrors: z.flattenError(error).fieldErrors as ActionState<T> extends { inputErrors?: infer E } ? E : never,
        formData,
    }
}

export function formError<T>(error: unknown): ActionState<T> {
    const message = error instanceof Error ? error.message : "Error inesperado"
    return { success: false, formError: message }
}

export function successState(message?: string): ActionState {
    return { success: true, message }
}