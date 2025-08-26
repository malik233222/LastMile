import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Last Mile Logistics - Beynəlxalq Logistika Xidmətləri",
  description:
    "Quru, dəniz, hava və dəmir yolu ilə beynəlxalq yük daşımacılığı. Anbar xidmətləri, gömrük rəsmiləşdirilməsi və sürətli çatdırılma həlləri.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
