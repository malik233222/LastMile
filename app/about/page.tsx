import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Eye,
  Award,
  TrendingUp,
  Zap,
  Globe,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Haqqımızda</h1>
            <p className="text-xl text-blue-100">
              Logistika sahəsində yeni və innovativ həllər
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Şirkətimizin Tarixi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  2024-cü ildə əsası qoyulan şirkətimiz müasir texnologiyalar və
                  innovativ yanaşmalar əsasında logistika sahəsində fəaliyyət
                  göstərir. Bizim əsas məqsədimiz müştərilərimizə yüksək
                  keyfiyyətli, sürətli və etibarlı xidmət təqdim etməkdir.
                </p>
                <p>
                  Qurulduğumuz ilk gündən etibarən müştəri məmnuniyyəti və
                  innovativ həllər fəaliyyətimizin mərkəzində dayanır. Rəqəmsal
                  texnologiyaların imkanlarından maksimum istifadə edərək şəffaf
                  və çevik xidmət göstərməyə xüsusi önəm veririk.
                </p>
                <p>
                  Təcrübəli və işində peşəkar komandamızın üzvləri 10 ildən
                  artıq sahə təcrübəsinə malikdir. Onlar beynəlxalq standartlara
                  uyğun şəkildə logistika ehtiyaclarınıza ən optimal həllər
                  təqdim edir, eyni zamanda daim inkişaf edərək qlobal
                  yenilikləri yaxından izləyirlər.
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

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dəyərlərimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Şirkətimizin əsasını təşkil edən dəyərlər bizim hər addımımızda
              bələdçimizdir
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
              <p className="text-gray-600">
                Aydın hədəflər və nəticəyönlü yanaşma
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Şəffaflıq</h3>
              <p className="text-gray-600">Açıq ünsiyyət və etibarlılıq</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">İnkişaf</h3>
              <p className="text-gray-600">Daimi inkişaf və təkmilləşmə</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Müasirləşmə</h3>
              <p className="text-gray-600">
                Texnoloji yeniliklər və innovasiya
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Beynəlxalq Əlaqələr
              </h3>
              <p className="text-gray-600">Dünya ilə əlaqə və tərəfdaşlıq</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Vaxtında Çatdırılma
              </h3>
              <p className="text-gray-600">Dəqiq vaxt və etibarlı xidmət</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
