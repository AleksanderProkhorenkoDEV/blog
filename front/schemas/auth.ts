import { z } from 'zod'

export const signUpSchema = z.object({
    name: z.string()
        .min(2, { error: "El nombre tiene que tener mínimo dos carácteres." })
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { error: "El nombre solo puede contener letras" }),
    email: z.email({ error: "El email tiene que tener un formato válido: ejemplo@dominio.com" }),
    password: z.string({ error: "El campo contraseña debe estar relleno" })
        .min(8, { error: "Mínimo 8 caracteres" })
        .regex(/[a-zA-Z]/, { error: "Debe contener al menos una letra" })
        .regex(/[0-9]/, { error: "Debe contener al menos un número" })
        .regex(/[^a-zA-Z0-9]/, { error: "Debe contener al menos un carácter especial (+, *, @, #...)" }),
    passwordConfirmation: z.string({ error: "El campo contraseña debe estar relleno" }).min(8, { error: "Mínimo 8 caracteres" })
        .regex(/[a-zA-Z]/, { error: "Debe contener al menos una letra" })
        .regex(/[0-9]/, { error: "Debe contener al menos un número" })
        .regex(/[^a-zA-Z0-9]/, { error: "Debe contener al menos un carácter especial (+, *, @, #...)" }),
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ['passwordConfirmation']
})

export const signInSchema = z.object({
    email: z.email({ error: "El email tiene que tener un formato válido: ejemplo@dominio.com" }),
    password: z.string({ error: "El campo contraseña debe estar relleno" }).min(1, { error: "El campo no puede estar vacio." })
})

export const resetPasswordSchema = z.object({
    email: z.email({ error: "El email tiene que tener un formato válido: ejemplo@dominio.com" }),
    password: z.string({ error: "El campo contraseña debe estar relleno" }).regex(/^.{8,}$/, { error: "Tiene que ser una combinación de ocho números, letras y carácteres" })
})