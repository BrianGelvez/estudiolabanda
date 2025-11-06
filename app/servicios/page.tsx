"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Crown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const services = [
  {
    tier: "base" as const,
    icon: Scissors,
    title: "Corte Base",
    description:
      "Corte común tipo fade con laterales prolijos y corte limpio con tijera en la parte superior. Incluye perfilado de cejas. Servicio práctico, rápido y prolijo.",
    price: "$8.000",
    duration: "30-40 min",
    features: [
      "Fade prolijo en laterales",
      "Tijera en parte superior",
      "Perfilado de cejas",
      "Terminado limpio y definido",
    ],
  },
  {
    tier: "premium" as const,
    icon: Crown,
    title: "Corte Premium Experiencia",
    description:
      "Experiencia completa que incluye asesoramiento personalizado, escucha activa y recomendaciones según rostro, estilo y personalidad. Se trabaja la textura del cabello, productos y secado de cabello, con peinado final (styling). Incluye arreglo de barba y perfilado de cejas.",
    price: "$9.000",
    duration: "1 hora",
    features: [
      "Corte fade profesional",
      "Arreglo de barba completo",
      "Asesoramiento personalizado",
      "Trabajo de textura del cabello",
      "Productos y secado de cabello",
      "Peinado final (styling)",
      "Experiencia de cuidado exclusiva",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function ServiciosPage() {
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
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Servicios premium diseñados para el hombre moderno que valora la calidad, el estilo y la atención al
              detalle.
            </p>
          </motion.div>

          {/* Services Grid - Ajustado para 2 servicios */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`glass-card card-bright rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 ${
                    service.tier === "premium" ? "ring-2 ring-primary/60" : ""
                  }`}
                >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {service.title}
                    <span
                      className={`text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full border ${
                        service.tier === "base"
                          ? "bg-primary/10 border-primary/20 text-primary"
                          : "bg-primary/20 border-primary/40 text-primary"
                      }`}
                    >
                      {service.tier === "base" ? "BASE" : "PREMIUM"}
                    </span>
                  </h3>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 sm:mb-6 text-pretty text-sm sm:text-base">{service.description}</p>

                <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/reservar?servicio=${service.tier}`} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="glass-button rounded-full w-full py-3 sm:py-3.5 text-base font-semibold">
                      Reservar Ahora
                    </Button>
                  </motion.div>
                </Link>
              </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
            >
              {/* <Card className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Ofrecemos servicios personalizados adaptados a tus necesidades específicas. Contacta con nosotros para
                crear un servicio a medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="glass-button rounded-full px-8 py-3 font-semibold">Contactar</Button>
                  </motion.div>
                </Link>
                <Link href="/reservar">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="glass rounded-full px-8 py-3 font-semibold border-primary/30 hover:bg-primary/10 bg-transparent"
                    >
                      Reservar Cita
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </Card> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
