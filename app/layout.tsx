import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agam Riyandana - Web Developer Portfolio",
  description: "Personal portfolio of Agam Riyandana, a passionate web developer creating innovative digital experiences.",
  keywords: ["web developer", "portfolio", "Agam Riyandana", "React", "Next.js"],
  authors: [{ name: "Agam Riyandana" }],
  openGraph: {
    title: "Agam Riyandana - Portfolio",
    description: "Personal portfolio of Agam Riyandana, a passionate web developer creating innovative digital experiences.",
    url: "https://agamriyandana.my.id",
    siteName: "Agam Riyandana Portfolio",
    images: [
      {
        url: "https://agamriyandana.my.id/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Riyandana - Portfolio",
    description: "Personal portfolio of Agam Riyandana, a passionate creating innovative digital experiences.",
    images: ["https://agamriyandana.my.id/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} scroll-smooth`}>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

