import z from "zod";

export const postSchema = z.object({
    title: z.string()
        .min(2, { error: "El titulo tiene que tener mínimo dos carácteres." })
        .regex(/^[a-zA-ZÀ-ÿ0-9\s'-]+$/, { error: "El titulo solo puede contener letras y números" }),
    slug: z.string()
        .min(2, { error: "El slug solo puede ser texto" })
        .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, { error: "El slug solo puede contener letras minúsculas, números y guiones" }),
    authorId: z.uuid(),
    thumbnail: z.url({ error: "El thumbnail debe ser una URL válida" }),
    categories: z.array(z.string()).min(1, { error: "Selecciona al menos una categoría" }),
    published: z.boolean(),
    content: z.string().min(1),
})

export const updatePostSchema = postSchema.extend({
    id: z.coerce.number()
})