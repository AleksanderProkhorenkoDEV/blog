'use client'

import { useEffect } from "react"
import { increaseView } from "@/lib/actions/post"

export const ViewTracker = ({ slug }: { slug: string }) => {
    useEffect(() => {
        increaseView(slug)
    }, [slug])

    return null
}