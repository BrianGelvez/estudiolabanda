"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Clock, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("¡Mensaje enviado! Te contactaremos pronto.")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              ¿Tienes alguna pregunta o quieres conocer más sobre nuestros servicios? Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glass-card rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg text-white">
                      Nombre completo
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass text-lg p-4 rounded-xl mt-2 text-white"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass text-lg p-4 rounded-xl mt-2 text-white"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-lg text-white">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="glass text-lg p-4 rounded-xl mt-2 text-white"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lg text-white">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass text-lg p-4 rounded-xl mt-2 text-white min-h-32"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="glass-button rounded-full w-full py-4 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="glass-card rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle Principal 123
                          <br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                        <p className="text-muted-foreground">+34 900 000 000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <p className="text-muted-foreground">info@studiolabanda.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                        <p className="text-muted-foreground">@studiolabanda</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Horarios de Atención
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Lunes - Viernes</span>
                      <span className="text-primary font-semibold">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Sábado</span>
                      <span className="text-primary font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Domingo</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">¿Listo para tu nueva imagen?</h3>
                  <p className="text-muted-foreground mb-6">
                    Reserva tu cita ahora y experimenta el mejor servicio de barbería de la ciudad.
                  </p>
                  <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">Reservar Cita</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
