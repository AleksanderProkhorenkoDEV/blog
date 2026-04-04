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
    ]
})

export const Konkhmer = localFont({
    src: [
        {
            path: "./konkhmer/KonkhmerSleokchher-Regular.ttf",
            weight: "400",
            style: "normal"
        }
    ]
})

export const Montserrat = localFont({
    src: [
        {
            path: "./montserrat/Montserrat-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./montserrat/Montserrat-Light.ttf",
            weight: "200",
            style: "normal"
        }
    ]
})