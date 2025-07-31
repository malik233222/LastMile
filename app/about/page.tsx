import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Haqqımızda</h1>
            <p className="text-xl text-blue-100">Logistika sahəsində 15+ illik təcrübə və innovativ həllər</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Şirkətimizin Tarixi</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  2008-ci ildə qurulan şirkətimiz, Azərbaycanın aparıcı logistika şirkətlərindən biridir. Kiçik bir
                  komanda olaraq başladığımız yolculuğumuzda bu gün 200+ əməkdaşımız və beynəlxalq şəbəkəmizlə xidmət
                  göstəririk.
                </p>
                <p>
                  İlk günlərdən etibarən müştəri məmnuniyyəti və keyfiyyətli xidmət prinsipləri əsasında fəaliyyət
                  göstərən şirkətimiz, bu gün Avropa, Asiya və Orta Şərq ölkələrində geniş tərəfdaş şəbəkəsinə malikdir.
                </p>
                <p>
                  Texnologiyaya investisiya qoyaraq, müasir izləmə sistemləri və rəqəmsal platformalar vasitəsilə
                  müştərilərimizə şəffaf və etibarlı xidmət təqdim edirik.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Company+History"
                width={600}
                height={400}
                alt="Şirkət tarixi"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missiyamız</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müştərilərimizin beynəlxalq ticarət fəaliyyətlərini dəstəkləmək üçün etibarlı, sürətli və iqtisadi
                  logistika həlləri təqdim etmək. İnnovasiya və texnologiya vasitəsilə sənayedə liderlik mövqeyini
                  qorumaq və genişləndirmək.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Qafqaz regionunda ən böyük və ən etibarlı logistika şirkəti olmaq. Beynəlxalq standartlara uyğun
                  xidmət keyfiyyəti ilə müştərilərimizin uzunmüddətli tərəfdaşı kimi tanınmaq və regional ticarətin
                  inkişafına töhfə vermək.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dəyərlərimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Şirkətimizin əsasını təşkil edən dəyərlər bizim hər addımımızda bələdçimizdir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Komanda İşi</h3>
              <p className="text-gray-600">Güclü komanda ruhu və əməkdaşlıq</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keyfiyyət</h3>
              <p className="text-gray-600">Yüksək standartlar və mükəmməllik</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Məqsədyönlülük</h3>
              <p className="text-gray-600">Aydın hədəflər və nəticəyönlü yanaşma</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Şəffaflıq</h3>
              <p className="text-gray-600">Açıq ünsiyyət və etibarlılıq</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Rəqəmlərlə Biz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-blue-100">İllik Təcrübə</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">5000+</div>
              <div className="text-blue-100">Məmnun Müştəri</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-blue-100">Ölkə Şəbəkəsi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">200+</div>
              <div className="text-blue-100">Komanda Üzvü</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
