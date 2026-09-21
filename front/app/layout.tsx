import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "../components/ui/sonner";
import { getProfile } from "../lib/supabase/rol";
import { Montserrat } from "./fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://aprokhorenko.dev"),
  title: {
    default: "La casa del Junior",
    template: "%s | La casa del Junior",
  },
  description: "Blog de Aleksander Trujillo Prokhorenko, desarrollador junior. Avances, errores y aprendizajes en el camino del desarrollo web y multiplataforma.",
  keywords: ["desarrollo web", "junior developer", "programación", "blog", "Next.js"],
  authors: [{ name: "Aleksander Trujillo Prokhorenko" }],
  openGraph: {
    title: "La casa del Junior",
    description: "Blog de un desarrollador junior contando sus avances, errores y aprendizajes.",
    url: "https://aprokhorenko.dev",
    siteName: "La casa del Junior",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "La casa del Junior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La casa del Junior",
    description: "Blog de un desarrollador junior contando sus avances, errores y aprendizajes.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${Montserrat.variable}`}>
      <body>
        <Suspense fallback={null}>
          <AuthBootstrap>
            {children}
          </AuthBootstrap>
        </Suspense>
        <Toaster />
      </body>
    </html>
  )
}

const AuthBootstrap = async ({ children }: { children: React.ReactNode }) => {
  const profile = await getProfile()
  return (
    <AuthProvider initialData={profile}>
      {children}
    </AuthProvider>
  )
}