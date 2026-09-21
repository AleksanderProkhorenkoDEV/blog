import { jetBrain } from "@/app/fonts/fonts";
import { BackgroundDecor } from "@/components/elements/background-decorator";
import MyName from "@/components/elements/my-name";
import { CustomLink } from "@/components/link/customLink";

export default function Contacto() {
    return (
        <section className="container flex flex-col gap-4 mx-auto relative mt-20 p-4">
            <p className={`${jetBrain.className}`}><span className="text-primary">{'_>'}</span> whoami</p>
            <MyName />
            <div className="flex my-4">
                <div className="flex-1">

                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <p className="text-pretty">
                        Soy desarrollador web y multiplataforma, todavía en la
                        etapa junior del camino.
                    </p>
                    <p className="text-pretty">
                        Este blog es donde cuento mis avances, mis errores y lo
                        que voy descubirendo por el camino.
                    </p>
                    <p className="text-pretty">
                        Si hay otro junior ahí fuera peleándose con los mismos
                        problemas, ojalá algún artículo de aquí le sirva de algo.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p>
                    Get in touch
                </p>
                <hr className="w-sm text-primary" />
                <div className="flex gap-4">
                    <CustomLink href="https://github.com/AleksanderProkhorenkoDEV" className="text-3xl hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none">
                                <g clipPath="url(#SVGXv8lpc2Y)">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd" />
                                </g>
                                <defs>
                                    <clipPath id="SVGXv8lpc2Y">
                                        <path fill="#fff" d="M0 0h24v24H0z" />
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                    </CustomLink>
                    <CustomLink
                        href="https://www.linkedin.com/in/aleksander-trujillo-prokhorenko-90a066299/"
                        className="text-3xl hover:text-primary transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803" clipRule="evenodd" />
                        </svg>
                    </CustomLink>

                    <CustomLink href="mailto:aprokhorenkodev@gmail.com" className="text-3xl hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64" />
                        </svg>
                    </CustomLink>
                    <CustomLink href="https://nextjs.org" className="text-3xl hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
                            <path d="M0 0h2048v2048H0z" fill="none" />
                            <path fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32m597-880l48-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74zm-464-144h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144zm-512 0h75l-85 256h-75l-48-144l-48 144h-75l-85-256h75l48 144l48-144h74l48 144z" />
                        </svg>
                    </CustomLink>
                </div>
            </div>
            <BackgroundDecor position="right-20 bottom-4 opacity-30 max-sm:text-7xl max-sm:right-10 max-xs:hidden">{`*`}</BackgroundDecor>
            <BackgroundDecor position="left-10 top-25 opacity-30 max-sm:text-7xl max-sm:right-10 max-xs:hidden">{`/`}</BackgroundDecor>
        </section>
    )
}