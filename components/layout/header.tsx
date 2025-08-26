"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Truck, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Last Mile Logistics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Ana Səhifə
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Haqqımızda
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Xidmətlər
            </Link>
            <Link href="/tracking" className="text-gray-700 hover:text-blue-600 transition-colors">
              İzləmə
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Əlaqə
            </Link>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+994 50 352 21 97</span>
            </div>
            <Button className="hidden md:block">Təklif Alın</Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Səhifə
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Haqqımızda
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Xidmətlər
              </Link>
              <Link
                href="/tracking"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İzləmə
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Əlaqə
              </Link>
              <div className="pt-4 border-t">
                <Button className="w-full">Təklif Alın</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
