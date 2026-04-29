import { Table } from "../../../../components/dashboard/table/table";
import { Tbody } from "../../../../components/dashboard/table/tbody";
import { Thead } from "../../../../components/dashboard/table/thead";
import { Tfoot } from "../../../../components/dashboard/table/tfoot";
import { Section } from "../../../../components/dashboard/section";
import { Button } from "../../../../components/forms/parts/button";
import { Td } from "../../../../components/dashboard/table/td";
import { Th } from "../../../../components/dashboard/table/th";
import { Tr } from "../../../../components/dashboard/table/tr";
import { SquarePen, Trash } from "lucide-react";
import { jetBrain, Konkhmer } from "../../../fonts/fonts";
import { TableLink } from "../../../../components/dashboard/table/table-link";


export default function PostPage() {
    return (
        <Section className="flex flex-col items-center justify-center gap-4 p-4">
            <h1 className={`uppercase ${Konkhmer.className} text-xl text-left w-5xl`}>Todos los post creados</h1>
            <div className="w-5xl h-3/4">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Titulo</Th>
                            <Th>Slug</Th>
                            <Th>Published</Th>
                            <Th>Autor</Th>
                            <Th>Fecha de creación</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Array.from({ length: 5 }).map((_, i) => {
                                return (
                                    <Tr
                                        key={i}
                                        className="hover:bg-border"
                                    >
                                        <Td className="group">
                                            <TableLink href="#">
                                                <span className={`text-xs text-start align-top text-secondary mr-0.5 group-hover:text-primary transition-text duration-200 ${jetBrain.className}`}>
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                Init post
                                            </TableLink>
                                        </Td>
                                        <Td>init-post</Td>
                                        <Td>Si</Td>
                                        <Td>Aleksander</Td>
                                        <Td>24/04/2026</Td>
                                        <Td className="">
                                            <div className="flex gap-2 items-center justify-center">
                                                <Button variant="icons"><SquarePen width={20} /></Button>
                                                <Button variant="icons"><Trash width={20} /></Button>
                                            </div>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td colSpan={6} className="p-2 border-b-0">Paginación</Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </div>
        </Section>
    )
}