import { StatusBadget } from "../../../../components/dashboard/badgets/status-badget";
import { TableLink } from "../../../../components/dashboard/table/table-link";
import { Table } from "../../../../components/dashboard/table/table";
import { Tbody } from "../../../../components/dashboard/table/tbody";
import { Thead } from "../../../../components/dashboard/table/thead";
import { Tfoot } from "../../../../components/dashboard/table/tfoot";
import { Section } from "../../../../components/dashboard/section";
import { Button } from "../../../../components/forms/parts/button";
import { Td } from "../../../../components/dashboard/table/td";
import { Th } from "../../../../components/dashboard/table/th";
import { Tr } from "../../../../components/dashboard/table/tr";
import { jetBrain, Konkhmer } from "../../../fonts/fonts";
import { getPost } from "../../../../lib/data/posts";
import { SquarePen, Trash } from "lucide-react";


export default async function PostPage() {

    const { posts, total, pages } = await getPost()
    return (
        <Section className="flex flex-col items-center gap-4 p-4">
            <h1 className={`uppercase ${Konkhmer.className} text-xl text-left w-5xl`}>Todos los post creados</h1>
            <div className="w-5xl mb-4">
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
                            posts.length != 0 ?
                                posts.map((item, i) => {
                                    return (
                                        <Tr
                                            key={item.slug}
                                            className="hover:bg-border"
                                        >
                                            <Td className="group">
                                                <TableLink href="#">
                                                    <span className={`text-xs text-start align-top text-secondary mr-0.5 group-hover:text-primary transition-text duration-200 ${jetBrain.className}`}>
                                                        {String(i + 1).padStart(2, "0")}
                                                    </span>
                                                    {item.title}
                                                </TableLink>
                                            </Td>
                                            <Td>{item.slug}</Td>
                                            <Td>
                                                <StatusBadget
                                                    title={item.published ? "Publicado" : "No publicado"}
                                                    variant={item.published ? "success" : "danger"}
                                                />
                                            </Td>
                                            <Td>{item.author.name}</Td>
                                            <Td>{item.createdAt.getDate()}</Td>
                                            <Td className="">
                                                <div className="flex gap-2 items-center justify-center">
                                                    <Button variant="icons"><SquarePen width={20} /></Button>
                                                    <Button variant="icons"><Trash width={20} /></Button>
                                                </div>
                                            </Td>
                                        </Tr>
                                    )
                                })
                                :
                                <Tr>
                                    <Td colSpan={6} className="py-12 text-center">
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