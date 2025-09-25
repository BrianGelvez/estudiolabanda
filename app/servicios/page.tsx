import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Star, Crown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    tier: "base" as const,
    icon: Scissors,
    title: "Corte Base",
    description:
      "Corte común tipo fade con laterales prolijos y corte limpio con tijera en la parte superior. Servicio práctico, rápido y prolijo.",
    price: "$7.000",
    duration: "30 min",
    features: [
      "Fade prolijo en laterales",
      "Tijera en parte superior",
      "Terminado limpio y definido",
    ],
  },
  {
    tier: "pro" as const,
    icon: Star,
    title: "Corte Pro",
    description:
      "Incluye todo lo del Corte Base + arreglo de barba, perfilado de cejas y opción de diseño en el cabello.",
    price: "$8.000",
    duration: "45 min",
    features: [
      "Todo lo del Corte Base",
      "Arreglo de barba",
      "Perfilado de cejas",
      "Opción de diseño",
    ],
  },
  {
    tier: "premium" as const,
    icon: Crown,
    title: "Corte Premium Experiencia",
    description:
      "Incluye todo lo anterior + asesoramiento personalizado, escucha activa y recomendaciones según rostro, estilo y personalidad. Se trabaja la textura del cabello y se ofrece una experiencia de cuidado exclusiva.",
    price: "$9.000",
    duration: "1 hora",
    features: [
      "Todo lo del Corte Pro",
      "Asesoramiento personalizado",
      "Trabajo de textura del cabello",
      "Experiencia de cuidado exclusiva",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Servicios premium diseñados para el hombre moderno que valora la calidad, el estilo y la atención al
              detalle.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`glass-card rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 ${
                  service.tier === "pro" ? "border-primary/40" : ""
                } ${service.tier === "premium" ? "ring-2 ring-primary/60" : ""}`}
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
                          : service.tier === "pro"
                          ? "bg-primary/15 border-primary/30 text-primary"
                          : "bg-primary/20 border-primary/40 text-primary"
                      }`}
                    >
                      {service.tier === "base" ? "BASE" : service.tier === "pro" ? "PRO" : "PREMIUM"}
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

                <Link href="/reservar" className="block">
                  <Button className="glass-button rounded-full w-full py-3 sm:py-3.5 text-base font-semibold">
                    Reservar Ahora
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Ofrecemos servicios personalizados adaptados a tus necesidades específicas. Contacta con nosotros para
                crear un servicio a medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button className="glass-button rounded-full px-8 py-3 font-semibold">Contactar</Button>
                </Link>
                <Link href="/reservar">
                  <Button
                    variant="outline"
                    className="glass rounded-full px-8 py-3 font-semibold border-primary/30 hover:bg-primary/10 bg-transparent"
                  >
                    Reservar Cita
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
