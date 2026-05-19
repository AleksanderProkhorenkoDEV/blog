import z from "zod";

export const postSchema = z.object({
    title: z.string()
        .min(2, { error: "El titulo tiene que tener mínimo dos carácteres." })
        .regex(/^[a-zA-ZÀ-ÿ0-9\s'-]+$/, { error: "El titulo solo puede contener letras y números" }),
    slug: z.string()
        .min(2, { error: "El slug solo puede ser texto" })
        .regex(/^[a-z]+(-[a-z]+)*$/, { error: "El slug solo puede contener letras minúsculas y guiones" }),
    authorId: z.uuid(),
    thumbnail: z.url({ error: "El thumbnail debe ser una URL válida" }),
    categories: z.array(z.uuid()).min(1, { error: "Selecciona al menos una categoría" }),
    published: z.boolean(),
    content: z.string().min(1),
})