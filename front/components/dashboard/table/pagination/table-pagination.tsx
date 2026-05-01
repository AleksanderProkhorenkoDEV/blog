'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { jetBrain } from "../../../../app/fonts/fonts"
import { Button } from "../../../forms/parts/button"
import { MoveLeft, MoveRight } from "lucide-react"

export const TablePagination = ({ totalPages }: { totalPages: number }) => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const handlePreviusPage = () => {
        const currentPage = Number(searchParams.get('page') ?? 1);
        if (currentPage > 1) {
            handleUpdateUrl(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        const currentPage = Number(searchParams.get('page') ?? 1);
        if (currentPage <= totalPages) {
            handleUpdateUrl(currentPage + 1)
        }
    }

    const handleUpdateUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', String(pageNumber))
        router.replace(`?${params.toString()}`)
    }

    const currentPage = Number(searchParams.get('page') ?? 1);

    return (

        <div className="flex items-center gap-2 w-full justify-end max-lg:justify-start">
            <Button
                type="button"
                variant="icons"
                onClick={handlePreviusPage}
                disabled={currentPage <= 1}
            >
                <MoveLeft width={18} />
            </Button>
            <span className={`text-xs ${jetBrain.className}`}>
                {currentPage} / {totalPages}
            </span>
            <Button
                type="button"
                variant="icons"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
            >
                <MoveRight width={18} />
            </Button>
        </div>
    )
}