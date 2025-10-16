"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Bizimlə Əlaqə</h1>
            <p className="text-xl text-blue-100">Logistika ehtiyaclarınız üçün bizimlə əlaqə saxlayın</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-6 w-6 text-blue-600" />
                    Mesaj Göndərin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Adınızı daxil edin"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">E-poçt *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefon</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+994 XX XXX XX XX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Şirkət</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Last Mile Logistics"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Xidmət Növü</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seçin</option>
                        <option value="road">Avtomobil Nəqliyyatı</option>
                        <option value="sea">Dəniz Nəqliyyatı</option>
                        <option value="air">Hava Nəqliyyatı</option>
                        <option value="rail">Dəmir Yolu</option>
                        <option value="warehouse">Anbar Xidmətləri</option>
                        <option value="customs">Gömrük Rəsmiləşdirilməsi</option>
                        <option value="other">Digər</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mesaj *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Mesaj Göndər
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Əlaqə Məlumatları</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Baş Ofis</div>
                      <div className="text-gray-600">
                        Nizami küçəsi 203, AZ1010
                        <br />
                        Bakı, Azərbaycan
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <div className="text-gray-600">
                        +994 50 352 21 97
                        {/* <br />
                        +994 50 352 21 97 */}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">E-poçt</div>
                      <div className="text-gray-600">
                        quluzade_oruc@mail.ru
                        {/* <br />
                        sales@logistics.az */}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">İş Saatları</div>
                      <div className="text-gray-600">
                        Bazar ertəsi - Cümə: 09:00 - 18:00
                        <br />
                        Şənbə-Bazar: 09:00 - 14:00
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Offices */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Regional Ofis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold">Gəncə Ofisi</div>
                    <div className="text-gray-600">
                      Həzi Aslanov küçəsi 45
                      <br />
                      Tel: +994 22 555 0000
                    </div>
                  </div>
                                
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizim Məkanımız</h2>
            <p className="text-gray-600">Baş ofisimizə yaxın olduğunuz zaman bizimlə görüşə bilərsiniz</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Google Maps Xəritəsi</p>
                    <p className="text-sm text-gray-500">Nizami küçəsi 203, Bakı</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
          
    </div>
  )
}
