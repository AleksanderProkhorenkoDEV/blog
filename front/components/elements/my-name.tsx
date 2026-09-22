"use client";
import { useState, useEffect } from "react";

const FULL_NAME = "ALEKSANDER TRUJILLO PROKHORENKO";

export default function MyName() {
    const [title, setTitle] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setTitle(FULL_NAME.slice(0, i + 1));
            i++;
            if (i >= FULL_NAME.length) {
                clearInterval(intervalId);
                setIsDone(true);
            }
        }, 250);

        return () => clearInterval(intervalId);
    }, []);

    return <h1
        className={`text-6xl after:content-['|'] after:ml-0.5 after:text-primary max-md:text-4xl max-sm:text-2xl ${isDone ? "after:animate-pulse" : ""}`}
    >
        {title}
    </h1>;
}