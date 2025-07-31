import Link from "next/link"
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">[Şirkət adı]</span>
            </div>
            <p className="text-gray-300 mb-4">
              Beynəlxalq yük daşımacılığında etibarlı tərəfdaşınız. 15+ illik təcrübə və innovativ həllərlə
              xidmətinizdəyik.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sürətli Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-white transition-colors">
                  Yük İzləmə
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Xidmətlərimiz</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Avtomobil Nəqliyyatı</li>
              <li className="text-gray-300">Dəniz Nəqliyyatı</li>
              <li className="text-gray-300">Hava Nəqliyyatı</li>
              <li className="text-gray-300">Dəmir Yolu</li>
              <li className="text-gray-300">Anbar Xidmətləri</li>
              <li className="text-gray-300">Gömrük Rəsmiləşdirilməsi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-gray-300">
                  Nizami küçəsi 203
                  <br />
                  Bakı, Azərbaycan
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+994 12 555 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@logistics.az</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 [Şirkət adı]. Bütün hüquqlar qorunur.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Məxfilik Siyasəti
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                İstifadə Şərtləri
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Çerez Siyasəti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
