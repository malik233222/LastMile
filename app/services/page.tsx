import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Ship, Plane, Train, Warehouse, FileCheck, Clock, Shield, MapPin, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Xidmətlərimiz</h1>
            <p className="text-xl text-blue-100">Beynəlxalq logistika sahəsində tam həllərin təqdimçisi</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Road Transport */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Road+Transport"
                  fill
                  alt="Avtomobil nəqliyyatı"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                  Avtomobil Nəqliyyatı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Avropa və Asiya ölkələrinə sürətli və etibarlı quru yolu daşımacılığı. FTL və LTL həlləri ilə hər növ
                  yükün təhlükəsiz çatdırılması.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Avropa - Asiya marşrutları
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Express çatdırılma
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    Tam sığorta təminatı
                  </li>
                </ul>
                <Button className="w-full">Ətraflı Məlumat</Button>
              </CardContent>
            </Card>

            {/* Sea Freight */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Sea+Freight"
                  fill
                  alt="Dəniz nəqliyyatı"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ship className="h-6 w-6 text-blue-600" />
                  Dəniz Nəqliyyatı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  FCL və LCL konteyner daşımacılığı, bulk yüklər və ağır texnika üçün dəniz yolu həlləri. Dünya
                  limanları ilə əlaqə.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-blue-600" />
                    20' və 40' konteyner
                  </li>
                  <li className="flex items-center gap-2">
                    <Ship className="h-4 w-4 text-blue-600" />
                    Bulk yük daşımacılığı
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Dünya limanları şəbəkəsi
                  </li>
                </ul>
                <Button className="w-full">Ətraflı Məlumat</Button>
              </CardContent>
            </Card>

            {/* Air Cargo */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Air+Cargo"
                  fill
                  alt="Hava nəqliyyatı"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-6 w-6 text-blue-600" />
                  Hava Nəqliyyatı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Təcili yüklərin sürətli çatdırılması üçün hava yolu həlləri. Dünya hava limanları ilə birbaşa əlaqə və
                  express xidmətlər.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    24-48 saat çatdırılma
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    Xüsusi yüklər üçün həllər
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-blue-600" />
                    Charter uçuş təşkili
                  </li>
                </ul>
                <Button className="w-full">Ətraflı Məlumat</Button>
              </CardContent>
            </Card>

            {/* Railway */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Railway+Transport"
                  fill
                  alt="Dəmir yolu nəqliyyatı"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-6 w-6 text-blue-600" />
                  Dəmir Yolu Nəqliyyatı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ağır və həcmli yüklərin iqtisadi daşınması üçün dəmir yolu həlləri. Çin-Avropa marşrutunda konteyner
                  daşımacılığı.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Çin-Avropa marşrutu
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-blue-600" />
                    Konteyner və vaqon yükləri
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    15-20 gün çatdırılma
                  </li>
                </ul>
                <Button className="w-full">Ətraflı Məlumat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Əlavə Xidmətlər</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Logistika zəncirinin bütün mərhələlərində sizin yanınızdayıq
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Warehouse className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Anbar Xidmətləri</h3>
                <p className="text-gray-600 mb-4">
                  Modern anbar kompleksləri, yük saxlama, qablaşdırma və distribusiya xidmətləri.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Qısamüddətli və uzunmüddətli saxlama</li>
                  <li>• Yük qablaşdırma və etiketləmə</li>
                  <li>• İnventar idarəetməsi</li>
                  <li>• Cross-docking xidmətləri</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Ətraflı
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <FileCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Gömrük Rəsmiləşdirilməsi</h3>
                <p className="text-gray-600 mb-4">
                  Bütün gömrük prosedurlarının peşəkar həlli və sənədləşdirmə xidmətləri.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• İdxal-ixrac rəsmiləşdirilməsi</li>
                  <li>• Gömrük bəyannamələrinin hazırlanması</li>
                  <li>• Vergi və rüsum hesablamaları</li>
                  <li>• Lisenziya və icazələrin alınması</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Ətraflı
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Express Çatdırılma</h3>
                <p className="text-gray-600 mb-4">
                  Təcili yüklərin 24/7 sürətli çatdırılması və door-to-door xidmətlər.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Same-day çatdırılma</li>
                  <li>• Next-day çatdırılma</li>
                  <li>• Door-to-door xidmət</li>
                  <li>• Real-time izləmə</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Ətraflı
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sizə Uyğun Həll Tapaq</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Hər bir müştərinin ehtiyacları fərqlidir. Bizim mütəxəssislərimiz sizin üçün ən optimal həlli təklif
            edəcəklər.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Pulsuz Məsləhət
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Qiymət Soruşun
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
