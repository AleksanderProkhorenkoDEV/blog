'use client'

import Image from "next/image"
import { useState } from "react";

const FALLBACK_IMAGE = "/fallback-image.jpg";

export const PostThumbnail = ({ thumbnail, title, }: { thumbnail: string, title: string }) => {
    const [imgSrc, setImgSrc] = useState(thumbnail || FALLBACK_IMAGE);
    return (
        <Image
            src={imgSrc}
            alt={`${title} - ${thumbnail}`}
            fill
            loading="lazy"
            className="object-cover pointer-events-none"
            onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
    )
}