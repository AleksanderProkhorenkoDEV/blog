import { jetBrain } from "../../app/fonts/fonts"
import { Td } from "../dashboard/table/td"
import { Tr } from "../dashboard/table/tr"

export const TableEmpty = ({ colspan }: { colspan: number }) => {
    return (
        <Tr>
            <Td colSpan={colspan} className="py-12 text-center">
                <div className="flex flex-col items-center gap-2 text-secondary">
                    <span className={`text-4xl ${jetBrain.className}`}>404</span>
                    <span className={`text-sm ${jetBrain.className}`}>
                        <span className="text-primary">null</span>
                        {" !== "}
                        <span className="text-primary">undefined</span>
                        {", pero aquí no hay posts"}
                    </span>
                    <span className={`text-xs opacity-50 ${jetBrain.className}`}>
                        {"//TODO: crear algún post"}
                    </span>
                </div>
            </Td>
        </Tr>
    )
}