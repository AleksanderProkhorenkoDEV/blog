import { Table } from "../../../../components/dashboard/table/table";
import { Tbody } from "../../../../components/dashboard/table/tbody";
import { Thead } from "../../../../components/dashboard/table/thead";
import { Section } from "../../../../components/dashboard/section";
import { Td } from "../../../../components/dashboard/table/td";
import { Th } from "../../../../components/dashboard/table/th";
import { Tr } from "../../../../components/dashboard/table/tr";
import Image from "next/image";


export default function PostPage() {
    return (
        <Section>
            <h1>Todos los post creados</h1>

            <Table>
                <Thead>
                    <Tr>
                        <Th>Titulo</Th>
                        <Th>Slug</Th>
                        <Th>Published</Th>
                        <Th>Autor</Th>
                        <Th>Fecha de creación</Th>
                        <Th>Imagen de portada</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Init post</Td>
                        <Td>init-post</Td>
                        <Td>Si</Td>
                        <Td>Aleksander</Td>
                        <Td>24/04/2026</Td>
                        <Td>
                            <Image />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Section>
    )
}