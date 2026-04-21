'use client'


import { CustomLink } from "../../../../components/link/customLink";
import { Button } from "../../../../components/forms/parts/button";
import { createClient } from "../../../../lib/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export default function CheckEmail({ searchParams }: { searchParams: { email: string } }) {

    const [resending, setResending] = useState(false)

    const handleResend = async () => {
        setResending(true)
        const supabase = createClient()
        const { error } = await supabase.auth.resend({
            type: "signup",
            email: searchParams.email
        })

        if (error) {
            toast.error("Error al reenviar el correo, inténtalo de nuevo")
        } else {
            toast.success("Correo reenviado, revisa tu bandeja de entrada")
        }
        setResending(false)
    }

    return (
        <article className="max-w-lg flex flex-col gap-4">
            <h1 className="text-2xl font-bold ">¡Ya casi lo tienes!</h1>
            <p>Hemos enviado un correo al e-mail que nos has proporcionado. Revísalo y verifica tu cuenta.</p>
            <p className="text-sm">¿No lo encuentras? Revisa tu carpeta de <span className="text-primary font-bold">spam.</span></p>
            <CustomLink href="/login"><p>Volver al inicio de sesión</p></CustomLink>
            <Button
                disabled={resending}
                onClick={handleResend}
            >
                {resending ? "Reenviando..." : "Reenviar correo"}
            </Button>
        </article>
    )
}