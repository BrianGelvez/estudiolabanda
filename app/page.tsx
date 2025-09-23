"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Scissors, Star, Users, Clock, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Scissors,
    title: "Corte Clásico",
    description: "Cortes tradicionales con técnicas modernas",
    price: "25€",
  },
  {
    icon: Star,
    title: "Corte + Barba",
    description: "Servicio completo de corte y arreglo de barba",
    price: "35€",
  },
  {
    icon: Award,
    title: "Afeitado Tradicional",
    description: "Afeitado clásico con navaja y toallas calientes",
    price: "20€",
  },
]

const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "3", label: "Barberos Expertos" },
  { number: "1000+", label: "Clientes Satisfechos" },
  { number: "5★", label: "Valoración Media" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="glass-card rounded-2xl p-8 animate-float">
              <Image src="/logo.jpg" alt="Studio La Banda Logo" width={150} height={150} className="mx-auto" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            STUDIO <span className="text-primary">LA BANDA</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Donde el estilo se encuentra con la tradición. Experimenta el arte de la barbería en su máxima expresión.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/reservar">
              <Button className="glass-button rounded-full px-8 py-4 text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Reservar Cita
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                variant="outline"
                className="glass rounded-full px-8 py-4 text-lg font-semibold border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                Ver Servicios
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Servicios premium diseñados para el hombre moderno que valora la calidad y el estilo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">¿Por qué elegir Studio La Banda?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Barberos Expertos</h3>
                    <p className="text-muted-foreground">
                      Profesionales con años de experiencia y técnicas tradicionales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Atención Personalizada</h3>
                    <p className="text-muted-foreground">Cada cliente recibe un servicio único adaptado a su estilo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ambiente Exclusivo</h3>
                    <p className="text-muted-foreground">
                      Un espacio diseñado para relajarte y disfrutar de la experiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
                <Scissors className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
