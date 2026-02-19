export interface initStateRegisterForm{
    success: boolean,
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        passwordConfirmation?: string[]
    },
} 