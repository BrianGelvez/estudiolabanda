import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scissors, Star, Award, Clock, Sparkles, Crown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Scissors,
    title: "Corte Clásico",
    description: "Cortes tradicionales con técnicas modernas. Incluye lavado, corte personalizado y peinado.",
    price: "25€",
    duration: "45 min",
    features: ["Consulta personalizada", "Lavado premium", "Corte a medida", "Peinado final"],
  },
  {
    icon: Star,
    title: "Corte + Barba",
    description: "Servicio completo de corte y arreglo de barba con productos premium.",
    price: "35€",
    duration: "60 min",
    features: ["Corte personalizado", "Arreglo de barba", "Aceites premium", "Masaje facial"],
  },
  {
    icon: Award,
    title: "Afeitado Tradicional",
    description: "Afeitado clásico con navaja y toallas calientes, una experiencia única.",
    price: "20€",
    duration: "30 min",
    features: ["Toallas calientes", "Navaja tradicional", "Bálsamo aftershave", "Masaje relajante"],
  },
  {
    icon: Crown,
    title: "Servicio Premium",
    description: "La experiencia completa: corte, barba, afeitado y tratamientos especiales.",
    price: "50€",
    duration: "90 min",
    features: ["Todo incluido", "Tratamiento capilar", "Mascarilla facial", "Bebida premium"],
  },
  {
    icon: Sparkles,
    title: "Diseño Especial",
    description: "Diseños únicos y modernos para ocasiones especiales.",
    price: "30€",
    duration: "60 min",
    features: ["Diseño personalizado", "Técnicas avanzadas", "Productos de fijación", "Fotos del resultado"],
  },
  {
    icon: Clock,
    title: "Mantenimiento",
    description: "Servicio rápido para mantener tu look entre cortes principales.",
    price: "15€",
    duration: "20 min",
    features: ["Retoque rápido", "Arreglo de contornos", "Peinado", "Productos de acabado"],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/reservar" className="block">
                  <Button className="glass-button rounded-full w-full py-3 font-semibold">Reservar Ahora</Button>
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
