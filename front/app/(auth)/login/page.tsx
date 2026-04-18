import { LoginForm } from "../../../components/forms/login-form";
import { jetBrain } from "../../fonts/fonts";

export default function Login() {

    return (
        <div>
            <h1 className={`${jetBrain.className} uppercase mb-8`}>Inicio de Sesión</h1>
            <LoginForm />
        </div>
    )
}