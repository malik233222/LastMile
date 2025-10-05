// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Search, Package, MapPin, Clock, CheckCircle, Truck } from "lucide-react"

// export default function TrackingPage() {
//   const [trackingNumber, setTrackingNumber] = useState("")
//   const [trackingResult, setTrackingResult] = useState<any>(null)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleTrack = async () => {
//     if (!trackingNumber.trim()) return

//     setIsLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       setTrackingResult({
//         trackingNumber: trackingNumber,
//         status: "İnzibatda",
//         currentLocation: "Bakı Anbar Mərkəzi",
//         destination: "İstanbul, Türkiyə",
//         estimatedDelivery: "25 Yanvar 2024",
//         service: "Express Çatdırılma",
//         timeline: [
//           {
//             date: "20 Yanvar 2024, 14:30",
//             location: "Bakı",
//             status: "Yük qəbul edildi",
//             completed: true,
//           },
//           {
//             date: "21 Yanvar 2024, 09:15",
//             location: "Bakı Anbar Mərkəzi",
//             status: "Anbar mərkəzində emal edilir",
//             completed: true,
//           },
//           {
//             date: "22 Yanvar 2024, 16:45",
//             location: "Bakı Hava Limanı",
//             status: "Hava limanına çatdırıldı",
//             completed: true,
//           },
//           {
//             date: "23 Yanvar 2024, 08:00",
//             location: "İnzibatda",
//             status: "Uçuş gözlənilir",
//             completed: false,
//           },
//           {
//             date: "24 Yanvar 2024",
//             location: "İstanbul Hava Limanı",
//             status: "Təyinat hava limanına çatacaq",
//             completed: false,
//           },
//           {
//             date: "25 Yanvar 2024",
//             location: "İstanbul",
//             status: "Çatdırılacaq",
//             completed: false,
//           },
//         ],
//       })
//       setIsLoading(false)
//     }, 1500)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Yük İzləmə</h1>
//             <p className="text-xl text-blue-100">İzləmə nömrənizi daxil edərək yükünüzün vəziyyətini öyrənin</p>
//           </div>
//         </div>
//       </section>

//       {/* Tracking Form */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Search className="h-6 w-6 text-blue-600" />
//                   Yükünüzü İzləyin
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex gap-4">
//                   <Input
//                     placeholder="İzləmə nömrəsini daxil edin (məs: TRK123456789)"
//                     value={trackingNumber}
//                     onChange={(e) => setTrackingNumber(e.target.value)}
//                     className="flex-1"
//                   />
//                   <Button onClick={handleTrack} disabled={isLoading}>
//                     {isLoading ? "İzlənilir..." : "İzlə"}
//                   </Button>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2">
//                   İzləmə nömrənizi yük qəbulu zamanı aldığınız qəbzinizdə tapa bilərsiniz
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Tracking Results */}
//       {trackingResult && (
//         <section className="pb-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               {/* Status Overview */}
//               <Card className="mb-8">
//                 <CardContent className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <div className="text-center">
//                       <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                       <div className="text-sm text-gray-600">İzləmə Nömrəsi</div>
//                       <div className="font-semibold">{trackingResult.trackingNumber}</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="mb-2">
//                         <Badge variant="secondary" className="bg-blue-100 text-blue-800">
//                           {trackingResult.status}
//                         </Badge>
//                       </div>
//                       <div className="text-sm text-gray-600">Cari Vəziyyət</div>
//                     </div>
//                     <div className="text-center">
//                       <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                       <div className="text-sm text-gray-600">Cari Məkan</div>
//                       <div className="font-semibold">{trackingResult.currentLocation}</div>
//                     </div>
//                     <div className="text-center">
//                       <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                       <div className="text-sm text-gray-600">Təxmini Çatdırılma</div>
//                       <div className="font-semibold">{trackingResult.estimatedDelivery}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Shipment Details */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Yük Hərəkəti</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {trackingResult.timeline.map((event: any, index: number) => (
//                           <div key={index} className="flex gap-4">
//                             <div className="flex flex-col items-center">
//                               <div
//                                 className={`w-4 h-4 rounded-full ${event.completed ? "bg-green-500" : "bg-gray-300"}`}
//                               />
//                               {index < trackingResult.timeline.length - 1 && (
//                                 <div className={`w-0.5 h-12 ${event.completed ? "bg-green-500" : "bg-gray-300"}`} />
//                               )}
//                             </div>
//                             <div className="flex-1 pb-4">
//                               <div className="flex items-center gap-2 mb-1">
//                                 <span className="font-semibold">{event.status}</span>
//                                 {event.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
//                               </div>
//                               <div className="text-sm text-gray-600">{event.location}</div>
//                               <div className="text-xs text-gray-500">{event.date}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div>
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Yük Məlumatları</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div>
//                         <div className="text-sm text-gray-600">Xidmət Növü</div>
//                         <div className="font-semibold">{trackingResult.service}</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-600">Başlanğıc</div>
//                         <div className="font-semibold">Bakı, Azərbaycan</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-600">Təyinat</div>
//                         <div className="font-semibold">{trackingResult.destination}</div>
//                       </div>
//                       <div className="pt-4 border-t">
//                         <Button className="w-full bg-transparent" variant="outline">
//                           <Truck className="h-4 w-4 mr-2" />
//                           Ətraflı Məlumat
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Help Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-2xl font-bold text-center mb-8">Kömək Lazımdır?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <Card className="text-center">
//                 <CardContent className="p-6">
//                   <div className="text-2xl mb-2">📞</div>
//                   <h3 className="font-semibold mb-2">Telefon Dəstəyi</h3>
//                   <p className="text-sm text-gray-600 mb-3">24/7 müştəri xidmətləri</p>
//                   <p className="font-semibold">+994 50 352 21 97</p>
//                 </CardContent>
//               </Card>

//               <Card className="text-center">
//                 <CardContent className="p-6">
//                   <div className="text-2xl mb-2">💬</div>
//                   <h3 className="font-semibold mb-2">Canlı Söhbət</h3>
//                   <p className="text-sm text-gray-600 mb-3">Dərhal cavab alın</p>
//                   <Button variant="outline" size="sm">
//                     Söhbət Başlat
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="text-center">
//                 <CardContent className="p-6">
//                   <div className="text-2xl mb-2">📧</div>
//                   <h3 className="font-semibold mb-2">E-poçt</h3>
//                   <p className="text-sm text-gray-600 mb-3">Suallarınızı göndərin</p>
//                   <p className="font-semibold">info@logistics.az</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
