import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Ship, Plane, Train, Warehouse, FileCheck, Clock, Shield, FileCheck2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Dünyaya Açılan Qapınız</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Beynəlxalq yük daşımacılığında etibarlı tərəfdaşınız. Quru, dəniz, hava və dəmir yolu ilə sürətli və
              təhlükəsiz çatdırılma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3">
                Xidmətlərimiz
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 bg-transparent"
              >
                Bizimlə Əlaqə
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Xidmətlərimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
Çeşidli nəqliyyat növləri və Logistika məsələləri  ilə bağlı xidmətinizdəyik!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Avtomobil Nəqliyyatı</h3>
                <p className="text-gray-600">Avropa və Asiya ölkələrinə sürətli quru yolu daşımacılığı</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Ship className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dəniz Nəqliyyatı</h3>
                <p className="text-gray-600">Konteyner və bulk yüklərin dəniz yolu ilə daşınması</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hava Nəqliyyatı</h3>
                <p className="text-gray-600">Təcili yüklərin sürətli hava yolu ilə çatdırılması</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Train className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dəmir Yolu</h3>
                <p className="text-gray-600">Ağır yüklərin dəmir yolu ilə iqtisadi daşınması</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Warehouse className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Anbar Xidmətləri</h3>
                <p className="text-gray-600">Modern anbar kompleksləri və yük saxlama həlləri</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gömrük Rəsmiləşdirilməsi</h3>
                <p className="text-gray-600">Bütün gömrük prosedurlarının peşəkar həlli</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sürətli Çatdırılma</h3>
                <p className="text-gray-600">24/7 ekspres çatdırılma xidmətləri</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Niyə Bizi Seçməlisiniz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Etibarlılıq</h3>
              <p className="text-blue-100"> 10 illik təcrübəyə malik kadr</p>
            </div>

            <div className="text-center">
              <Clock className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sürət</h3>
              <p className="text-blue-100">Vaxtında çatdırılma və operativ xidmət</p>
            </div>

            <div className="text-center">
              <FileCheck className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Keyfiyyət</h3>
              <p className="text-blue-100">ISO sertifikatları və beynəlxalq standartlar</p>
            </div>

            <div className="text-center">
              <FileCheck2 className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beynəlxalq dil </h3>
              <p className="text-blue-100">İngilis dilində xidmət</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Yükünüzü Bizə Etibar Edin</h2>
          <p className="text-xl mb-8 text-blue-100">
            Peşəkar komandamız sizin logistika ehtiyaclarınızı həll etməyə hazırdır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Təklif Alın
              </Button>
            </Link>
            <Link href="/tracking">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Yükü İzləyin
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
