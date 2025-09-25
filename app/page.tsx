"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Users, Clock, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"


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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/fondobarber.jpg" alt="Barbería Studio La Banda" fill priority className="object-cover" />
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="glass-card rounded-2xl p-8 animate-float">
              <Image src="/logo.jpg" alt="Studio La Banda Logo" width={150} height={150} className="mx-auto" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance text-shadow-lg tracking-tight">
            STUDIO <span className="text-primary">LA BANDA</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty text-shadow-lg">
            Donde el estilo se encuentra con la tradición. Experimenta el arte de la barbería en su máxima expresión.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-16">
            <Link href="/servicios">
              <Button className="glass-button rounded-full px-8 py-4 text-lg font-semibold">
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

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce la historia y la pasión que hay detrás de Studio La Banda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h3>
                <p className="text-muted-foreground mb-4">
                  Studio La Banda nació de la pasión por el arte de la barbería tradicional. 
                  Fundado en 2009, nuestro estudio ha sido el hogar de barberos expertos que 
                  han perfeccionado sus técnicas a lo largo de décadas.
                </p>
                <p className="text-muted-foreground">
                  Cada corte, cada afeitado, cada detalle es una obra de arte que refleja 
                  nuestro compromiso con la excelencia y la tradición barberil.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Filosofía</h3>
                <p className="text-muted-foreground mb-4">
                  Creemos que la barbería es más que un simple corte de pelo. Es un ritual, 
                  una experiencia que combina tradición, técnica y modernidad para crear 
                  un momento único para cada cliente.
                </p>
                <p className="text-muted-foreground">
                  En Studio La Banda, cada visita es una oportunidad para conectarte con 
                  tu mejor versión, rodeado de un ambiente exclusivo y profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/nosotros">
              <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">
                Conoce Más Sobre Nosotros
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
