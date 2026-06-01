export type ActionState<TFormData = Record<string, unknown>> = {
    success: true
    message?: string
} | {
    success: false
    inputErrors?: Partial<Record<keyof TFormData, string[]>>
    formError?: string
    formData?: Partial<TFormData>
} | null