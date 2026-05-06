import z from "zod";

export const categorySchema = z.object({
    name: z.string()
        .min(2, { error: "El nombre tiene que tener mínimo dos carácteres." })
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { error: "El nombre solo puede contener letras" }),
})