import { TablePagination } from "@/components/dashboard/table/pagination/table-pagination";
import { FloattingButton } from "@/components/floatting-button/floatting-button";
import { Thead } from "@/components/dashboard/table/thead";
import { Table } from "@/components/dashboard/table/table";
import { Tbody } from "@/components/dashboard/table/tbody";
import { Button } from "@/components/forms/parts/button";
import { Section } from "@/components/dashboard/section";
import { getCategories } from "@/lib/data/categories";
import { Td } from "@/components/dashboard/table/td";
import { Th } from "@/components/dashboard/table/th";
import { Tr } from "@/components/dashboard/table/tr";
import { SquarePen, Trash } from "lucide-react";
import { Konkhmer } from "@/app/fonts/fonts";
import { TableEmpty } from "@/components/elements/table-empty";

export default async function CategoriesPage() {

    const { categories, pages } = await getCategories()

    return (
        <Section className="flex flex-col items-center justify-center gap-4 p-4 relative">
            <h1 className={`uppercase ${Konkhmer.className} text-xl text-left w-5xl max-2xl:w-3xl max-xl:w-xl max-lg:w-full`}>Todos los post creados</h1>
            <div className="w-5xl mb-4 max-2xl:w-3xl max-xl:w-xl max-lg:w-full max-lg:mb-0 max-md:h-100">
                <Table className="max-lg:min-w-lg">
                    <Thead>
                        <Tr>
                            <Th>id</Th>
                            <Th className="max-xl:hidden">Nombre</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            categories.length != 0 ?
                                categories.map((item) => {
                                    return (
                                        <Tr key={item.id}>
                                            <Td>{item.id}</Td>
                                            <Td>{item.name}</Td>
                                            <Td>
                                                <div className="flex gap-2 items-center justify-center">
                                                    <Button variant="icons"><SquarePen width={20} /></Button>
                                                    <Button variant="icons"><Trash width={20} /></Button>
                                                </div>
                                            </Td>
                                        </Tr>
                                    )
                                })
                                :
                                <TableEmpty />
                        }
                    </Tbody>
                </Table>
                <TablePagination totalPages={pages} />
            </div>
            <FloattingButton url="/dashboard/categories/create">+</FloattingButton>
        </Section>
    )
}