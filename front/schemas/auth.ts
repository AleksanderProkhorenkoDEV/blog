import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string({ error: "El nombre debe ser válido, no puede estar vacio." }).min(2, { error: "El nombre tiene que tener mínimo dos carácteres." }),
    email: z.email({ error: "El email tiene que tener un formato válido: ejemplo@dominio.com" }),
    password: z.string({ error: "El campo contraseña debe estar relleno" }).regex(/^.{8,}$/, { error: "Tiene que ser una combinación de ocho números, letras y carácteres" }),
    passwordConfirmation: z.string({ error: "El campo contraseña debe estar relleno" }).regex(/^.{8,}$/, { error: "Tiene que ser una combinación de ocho números, letras y carácteres" })
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ['passwordConfirmation']
})