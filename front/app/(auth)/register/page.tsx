import { RegisterForm } from "@/components/forms/register-form";
import { jetBrain } from "@/app/fonts/fonts";

export default function Register() {


    return (
        <div>
            <h1 className={`${jetBrain.className} uppercase mb-8`}>Página de registro de usuario</h1>
            <RegisterForm />
        </div>
    )
}