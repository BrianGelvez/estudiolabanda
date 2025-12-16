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
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

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
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              ¿Tienes alguna pregunta o quieres conocer más sobre nuestros servicios? Estamos aquí para ayudarte.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                >
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
                      placeholder="3521 530927"
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="glass-button rounded-full w-full py-4 text-lg font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </Button>
                  </motion.div>
                </form>
              </Card>
              </motion.div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <MapPin className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          Sanavirones 523
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Phone className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                        <p className="text-muted-foreground">3521 530927</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Mail className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <p className="text-muted-foreground">osses084@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <Instagram className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                        <p className="text-muted-foreground">@studio_labanda.ok</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Días y Horarios de Atención
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-semibold mb-1">Martes a Jueves</p>
                        <p className="text-muted-foreground text-sm">Mañana: 10:00 a 12:00</p>
                        <p className="text-muted-foreground text-sm">Tarde/Noche: 15:00 a 20:00</p>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Viernes</p>
                        <p className="text-muted-foreground text-sm">15:00 a 22:00</p>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">Sábados</p>
                        <p className="text-muted-foreground text-sm">Mañana: 09:00 a 12:00</p>
                        <p className="text-muted-foreground text-sm">Tarde/Noche: 15:00 a 22:00</p>
                      </div>
                      <div className="pt-2 border-t border-primary/20">
                        <p className="text-white font-semibold mb-1">Domingos y Lunes</p>
                        <p className="text-primary font-medium text-sm">Cerrado</p>
                        <p className="text-muted-foreground text-xs italic mt-1">
                          Días destinados a cursos, formación y organización interna
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-primary/20 space-y-2">
                      <h3 className="text-primary font-semibold text-sm mb-2">IMPORTANTE</h3>
                      <div className="space-y-1.5 text-xs text-muted-foreground">
                        <p>✓ Trabajo por sistema de turnos</p>
                        <p>✓ Horarios pueden variar según el barbero</p>
                        <p>✓ Atención personalizada y sin apuros</p>
                        <p>✓ Reservá tu turno por WhatsApp / Web</p>
                      </div>
                    </div>
                  </div>
                </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">¿Listo para tu nueva imagen?</h3>
                    <p className="text-muted-foreground mb-6">
                      Reserva tu cita ahora y experimenta el mejor servicio de barbería de la ciudad.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">Reservar Cita</Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
