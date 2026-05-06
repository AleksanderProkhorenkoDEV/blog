export interface initStateCreateCategory {
    success: boolean,
    inputErrors?: {
        name?: string[]
    },
    formData?: {
        name: string,
    }
    formError?: string
}

export type CategoriesPromise = Promise<{ categories: { id: number; name: string }[], total: number, pages: number }>
