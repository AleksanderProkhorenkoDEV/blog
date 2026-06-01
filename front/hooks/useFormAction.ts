import { ActionState } from "@/types/actions"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

type FormAction<T> = (
    prevState: ActionState<T>,
    formData: FormData
) => Promise<ActionState<T>>

export function useFormAction<T>(action: FormAction<T>) {

    const [state, dispatch, pending] = useActionState(action, null)

    useEffect(() => {
        if (!state) return

        if (state.success && state.message) {
            toast.success(state.message)
        }

        if (!state.success && state.formError) {
            toast.error(state.formError)
        }
    }, [state])

    const getFieldError = (field: keyof T): string | undefined => {
        if (!state || state.success) return undefined
        return state.inputErrors?.[field]?.[0]
    }

    return { state, dispatch, pending, getFieldError }
}