export interface initStateRegisterForm{
    success: boolean,
    inputErrors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        passwordConfirmation?: string[]
    },
    formData?:{
        name: string,
        email: string
    }
    formError?: string
} 