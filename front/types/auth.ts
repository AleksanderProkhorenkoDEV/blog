import { ProfileSummary } from "./user"

export interface initStateSingUp {
    success: boolean,
    inputErrors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        passwordConfirmation?: string[]
    },
    formData?: {
        name: string,
        email: string
    }
    formError?: string
}

export interface initStateSingIn {
    success: boolean,
    profile?: ProfileSummary
    inputErrors?: {
        email?: string[]
        password?: string[]
    },
    formError?: string
}

export interface initStateResetPassword {
    success: boolean,
    inputErrors?: {
        email?: string[],
        password?: string[]
    },
    formError?: string
}

export interface initStateSignOut {
    success: boolean,
    formError?: string;
}