import { CategoryDeleteButtonWrapper } from "@/components/dashboard/categories/modal-category-delete-wrapper";
import { TablePagination } from "@/components/dashboard/table/pagination/table-pagination";
import { FloattingButton } from "@/components/floatting-button/floatting-button";
import { Section } from "@/components/dashboard/layout/section";
import { TableEmpty } from "@/components/elements/table-empty";
import { Thead } from "@/components/dashboard/table/thead";
import { Table } from "@/components/dashboard/table/table";
import { Tbody } from "@/components/dashboard/table/tbody";
import { CustomLink } from "@/components/link/customLink";
import { getCategories } from "@/lib/data/categories";
import { Td } from "@/components/dashboard/table/td";
import { Th } from "@/components/dashboard/table/th";
import { Tr } from "@/components/dashboard/table/tr";
import { Konkhmer } from "@/app/fonts/fonts";
import { SquarePen } from "lucide-react";
import { Suspense } from "react";

export default function CategoriesPage() {

    return (
        <Section className="flex flex-col items-center justify-center gap-4 p-4 relative">
            <h1 className={`uppercase ${Konkhmer.className} text-xl text-left w-5xl max-2xl:w-3xl max-xl:w-xl max-lg:w-full`}>Todos las categorías creadas</h1>
            <Suspense fallback={<p>loading data....</p>}>
                <CategoriesTable />
            </Suspense>
            <FloattingButton url="/dashboard/categories/create">+</FloattingButton>
        </Section>
    )
}

const CategoriesTable = async () => {
    const { categories, pages } = await getCategories()
    return (
        <div className="w-5xl mb-4 max-2xl:w-3xl max-xl:w-xl max-lg:w-full max-lg:mb-0 max-md:h-100">
            <Table className="max-lg:min-w-lg">
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>Nombre</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {categories.length !== 0
                        ? categories.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>
                                    <div className="flex gap-2 items-center justify-center">
                                        <CustomLink href={`/dashboard/categories/update/${item.id}`}><SquarePen width={20} /></CustomLink>
                                        <CategoryDeleteButtonWrapper id={item.id} />
                                    </div>
                                </Td>
                            </Tr>
                        ))
                        : <TableEmpty />
                    }
                </Tbody>
            </Table>
            <TablePagination totalPages={pages} />
        </div>
    )
}