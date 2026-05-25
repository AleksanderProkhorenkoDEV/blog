import { TablePagination } from "../../../../components/dashboard/table/pagination/table-pagination";
import { PublishedButtonWrapper } from "@/components/dashboard/post/button-published-wrapper";
import { FloattingButton } from "../../../../components/floatting-button/floatting-button";
import { TableLink } from "../../../../components/dashboard/table/table-link";
import { Section } from "../../../../components/dashboard/layout/section";
import { TableEmpty } from "../../../../components/elements/table-empty";
import { Table } from "../../../../components/dashboard/table/table";
import { Tbody } from "../../../../components/dashboard/table/tbody";
import { Thead } from "../../../../components/dashboard/table/thead";
import { Button } from "../../../../components/forms/parts/button";
import { Td } from "../../../../components/dashboard/table/td";
import { Th } from "../../../../components/dashboard/table/th";
import { Tr } from "../../../../components/dashboard/table/tr";
import { jetBrain, Konkhmer } from "../../../fonts/fonts";
import { CustomLink } from "@/components/link/customLink";
import { getPosts } from "../../../../lib/data/posts";
import { SquarePen, Trash } from "lucide-react";
import { Suspense } from "react";


export default function PostPage() {
    return (
        <Section className="flex flex-col items-center justify-center gap-4 p-4 relative">
            <h1 className={`uppercase ${Konkhmer.className} text-xl text-left w-5xl max-2xl:w-3xl max-xl:w-xl max-lg:w-full`}>
                Todos los post creados
            </h1>
            <Suspense fallback={<p>loading data....</p>}>
                <PostsTable />
            </Suspense>
            <FloattingButton url="/dashboard/posts/create">+</FloattingButton>
        </Section>
    )
}

const PostsTable = async () => {
    const { posts, pages } = await getPosts()
    return (
        <div className="w-5xl mb-4 max-2xl:w-3xl max-xl:w-xl max-lg:w-full max-lg:mb-0 max-md:h-100">
            <Table className="max-lg:min-w-lg">
                <Thead>
                    <Tr>
                        <Th>Titulo</Th>
                        <Th className="max-xl:hidden">Slug</Th>
                        <Th>Published</Th>
                        <Th className="max-lg:hidden">Autor</Th>
                        <Th className="max-xl:hidden">Fecha de creación</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {posts.length != 0
                        ? posts.map((item, i) => (
                            <Tr key={item.id} className="hover:bg-border">
                                <Td className="group">
                                    <TableLink href={`/dashboard/posts/${item.slug}`}>
                                        <span className={`text-xs text-start align-top text-secondary mr-0.5 group-hover:text-primary transition-text duration-200 ${jetBrain.className}`}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {item.title}
                                    </TableLink>
                                </Td>
                                <Td className="max-xl:hidden">{item.slug}</Td>
                                <Td>
                                    <PublishedButtonWrapper id={item.id} published={item.published} />
                                </Td>
                                <Td className="max-lg:hidden">{item.author.name}</Td>
                                <Td className="max-xl:hidden">{item.createdAt.toLocaleDateString('es-ES')}</Td>
                                <Td>
                                    <div className="flex gap-2 items-center justify-center">
                                        <CustomLink href={`/dashboard/posts/update/${item.id}`}><SquarePen width={20} /></CustomLink>
                                        <Button variant="icons"><Trash width={20} /></Button>
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