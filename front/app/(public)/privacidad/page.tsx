import { jetBrain } from "@/app/fonts/fonts";
import { CustomLink } from "@/components/link/customLink";

export default function PrivacyPolicy() {
    return (
        <section className="max-w-3xl mx-auto py-10 px-4 clear-start flex flex-col gap-4">
            <h1 className={`text-2xl ${jetBrain.className}`}>Política de Privacidad</h1>
            <p><em>Última actualización: 21/09/2026</em></p>
            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>1.</span> Responsable del tratamiento</h2>
            <p>
                Aleksander Trujillo Prokhorenko, con contacto en
                <a href="mailto:aprokhorenkodev@gmail.com">aprokhorenkodev@gmail.com</a>,
                es el responsable del tratamiento de los datos recopilados en este sitio
                (blog.aprokhorenko.dev).
            </p>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>2.</span> Qué datos recopilamos</h2>
            <p>Al registrarte o iniciar sesión en este blog recopilamos únicamente:</p>
            <ul>
                <li>Tu dirección de correo electrónico.</li>
                <li>Tu contraseña, almacenada de forma cifrada (nunca en texto plano) por nuestro proveedor de autenticación, Supabase.</li>
                <li>Un identificador único de usuario, generado automáticamente.</li>
            </ul>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>3.</span> Para qué usamos estos datos</h2>
            <p>Estos datos se usan <strong>exclusivamente</strong> para:</p>
            <ul>
                <li>Permitir el inicio de sesión y mantener tu sesión activa.</li>
                <li>Identificar de forma única a cada usuario que da {"'like'"} a una publicación, con el fin de mantener métricas reales y evitar likes duplicados o falseados.</li>
            </ul>
            <p><strong>No usamos tus datos para:</strong></p>
            <ul>
                <li>Marketing o envío de comunicaciones comerciales.</li>
                <li>Venderlos, cederlos o compartirlos con terceros.</li>
                <li>Perfilado publicitario, analítica de comportamiento o seguimiento de ningún tipo.</li>
            </ul>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>4.</span> Cookies</h2>
            <p>
                Este sitio no utiliza cookies de seguimiento, analíticas ni publicitarias.
                No se usa ningún servicio de analítica (como Google Analytics o Vercel Analytics).
            </p>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>5.</span> Base legal</h2>
            <p>
                El tratamiento se basa en tu consentimiento expreso al registrarte de forma
                voluntaria, que puedes retirar en cualquier momento eliminando tu cuenta.
            </p>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>6.</span> Conservación de los datos</h2>
            <p>
                Conservamos tus datos mientras mantengas una cuenta activa en el sitio.
                Puedes solicitar su eliminación en cualquier momento escribiendo a
                <CustomLink href="mailto:aprokhorenkodev@gmail.com">aprokhorenkodev@gmail.com</CustomLink>
            </p>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>7.</span> Tus derechos</h2>
            <p>
                Conforme al RGPD, tienes derecho a acceder, rectificar, suprimir, limitar
                el tratamiento, oponerte y solicitar la portabilidad de tus datos,
                escribiendo a <CustomLink href="mailto:aprokhorenkodev@gmail.com">aprokhorenkodev@gmail.com</CustomLink>.
                También puedes presentar una reclamación ante la
                <CustomLink href="https://www.aepd.es"> Agencia Española de Protección de Datos (AEPD)</CustomLink>
                si consideras que tus derechos no han sido respetados.
            </p>

            <h2 className="text-xl bold"><span className={`text-primary ${jetBrain.className}`}>8.</span> Terceros implicados</h2>
            <p>
                Usamos <CustomLink href="https://supabase.com">Supabase</CustomLink>
                como proveedor de autenticación y base de datos, con servidores alojados
                en Irlanda (Unión Europea). Puedes consultar su política de privacidad en
                <CustomLink href="https://supabase.com/privacy">supabase.com/privacy</CustomLink>
            </p>
        </section >
    )
}