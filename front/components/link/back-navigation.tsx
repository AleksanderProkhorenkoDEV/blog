'use client'

import { Button } from "../forms/parts/button";
import { useRouter } from "next/navigation"
import { MoveLeft } from "lucide-react";

export const BackNavigation = ({ text }: { text: string }) => {
    const router = useRouter();

    return (
        <Button
            onClick={() => { router.back() }}
            variant="ghost"
            className="flex gap-2"
        >
            <MoveLeft />
            {text}
        </Button>
    )
}