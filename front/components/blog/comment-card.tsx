import { Reply } from "lucide-react"

export const CommentCard = () => {
    return (
        <div className="border border-secondary p-4 rounded-lg flex flex-col gap-5">
            <header className="flex gap-4">
                <div className="border rounded-full size-8 flex justify-center items-center">
                    <p className="p-0 m-0">A</p>
                </div>
                <p className="text-xl">Aleksander Trujillo Prokhorenko</p>
            </header>
            <div className="">
                Opino lo mismo que el autor del post, aun que hay veces que es muy dificil empezar algo nuevo,
                pero con constancia y pasión todo se puede hacer siempre.
            </div>
            <footer>
                <Reply width={18} />
            </footer>
        </div>
    )
}