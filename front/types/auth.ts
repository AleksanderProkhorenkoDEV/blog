export interface initStateSingUp{
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

export interface initStateSingIn{
    success: boolean,
    inputErrors?: {
        email?: string[]
        password?: string[]
    },
    formError?: string
} 