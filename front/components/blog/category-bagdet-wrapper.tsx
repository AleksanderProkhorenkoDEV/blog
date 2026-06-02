'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { CategoryBadget } from "../dashboard/badgets/category-badget"
import { Button } from "../forms/parts/button"


type Props = {
    name: string,
    active?: boolean
}

export const CategoryBadgetWrapper = ({ name, active }: Props) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const createQueryString = () => {
        const params = new URLSearchParams(searchParams)
        if (name != "Todas") {
            params.set('category', name)
        } else {
            params.delete('category')
        }

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Button variant="ghost" onClick={createQueryString} >
            <CategoryBadget name={name} variant={active ? "active" : "light"} />
        </Button>
    )
}