import localFont from "next/font/local"

export const jetBrain = localFont({
    src: [
        {
            path: "./jetbrains/JetBrainsMono-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "./jetbrains/JetBrainsMono-Light.woff2",
            weight: "200",
            style: "normal"
        }
    ],
    variable: "--font-jetbrain"
})

export const Konkhmer = localFont({
    src: [
        {
            path: "./konkhmer/KonkhmerSleokchher-Regular.ttf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-konkhmer"
})

export const Montserrat = localFont({
    src: [
        {
            path: "./montserrat/Montserrat-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
        {
            path: "./montserrat/Montserrat-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./montserrat/Montserrat-Light.ttf",
            weight: "300",
            style: "normal"
        }
    ],
    variable: "--font-montserrat"
})