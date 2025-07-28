import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata base para todo el sitio
export const metadata: Metadata = {
  title: {
    default: "Ricardo González - Desarrollador Frontend",
    template: "%s | Ricardo González",
  },
  description:
    "Portfolio de desarrollador Frontend especializado en React, Next.js y TypeScript. Creando experiencias web modernas y funcionales.",
  keywords: [
    "desarrollador",
    "frontend",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Ricardo González" }],
  creator: "Ricardo González",

  // Open Graph (para redes sociales)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tunombre.dev", // Cambia por tu dominio
    siteName: "Ricardo González - Portfolio",
    title: "Ricardo González - Desarrollador Frontend",
    description:
      "Portfolio de desarrollador Frontend especializado en React, Next.js y TypeScript.",
    images: [
      {
        url: "/og-image.jpg", // Tendrás que crear esta imagen (1200x630px)
        width: 1200,
        height: 630,
        alt: "Ricardo González - Desarrollador Frontend",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image", // Tipo de twitter Card
    title: "Ricardo González - Desarrollador Frontend",
    description:
      "Portfolio de desarrollador Frontend especializado en React, Next.js y TypeScript.",
    site: "@RicardoGonDev", // Twitter del sitio (en este caso soy yo mismo)
    creator: "@RicardoGonDev", // Creador del contenido
    images: ["/og-image.jpg"],
  },

  // Robots y indexación
  robots: {
    index: true,
    follow: true,
  },

  // URLs o formatos alternativos
  alternates: {
    canonical: "https://tunombre.dev",
  },

  // Verificación (Cuando esté up, veirifcar el sitio en Google y añadir el código acá)
  // verification: {
  //   google: "tu-codigo-de-verificacion", // Google Search Console
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
