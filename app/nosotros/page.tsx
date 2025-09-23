import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, Award, Star, Heart, Scissors } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const team = [
  {
    id: 1,
    name: 'Carlos "El Maestro"',
    role: "Fundador & Barbero Principal",
    specialty: "Cortes clásicos y barba",
    experience: "15 años",
    image: "/professional-barber-with-beard.jpg",
    description: "Fundador de Studio La Banda con más de 15 años perfeccionando el arte de la barbería tradicional.",
  },
  {
    id: 2,
    name: 'Miguel "The Artist"',
    role: "Barbero Creativo",
    specialty: "Diseños modernos",
    experience: "8 años",
    image: "/young-modern-barber.jpg",
    description: "Especialista en tendencias modernas y diseños únicos que reflejan la personalidad de cada cliente.",
  },
  {
    id: 3,
    name: 'Roberto "Old School"',
    role: "Maestro del Afeitado",
    specialty: "Afeitado tradicional",
    experience: "20 años",
    image: "/experienced-traditional-barber.jpg",
    description:
      "Experto en técnicas tradicionales de afeitado con navaja, manteniendo vivas las tradiciones clásicas.",
  },
]

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos comprometemos a ofrecer siempre el más alto nivel de calidad en cada servicio.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y esa pasión se refleja en cada corte y cada detalle.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creamos un espacio donde cada cliente se siente parte de la familia La Banda.",
  },
  {
    icon: Star,
    title: "Tradición",
    description: "Honramos las técnicas clásicas mientras abrazamos las tendencias modernas.",
  },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conoce la historia, los valores y el equipo que hace de Studio La Banda la barbería más exclusiva de la
              ciudad.
            </p>
          </div>

          {/* Our Story */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Studio La Banda nació de la pasión por el arte tradicional de la barbería, combinado con un enfoque
                    moderno hacia el cuidado masculino.
                  </p>
                  <p>
                    Fundado en 2009 por Carlos "El Maestro", nuestro estudio ha evolucionado hasta convertirse en un
                    referente de estilo y calidad en la ciudad.
                  </p>
                  <p>
                    Cada día trabajamos para mantener vivas las tradiciones clásicas mientras incorporamos las últimas
                    tendencias y técnicas del mundo de la barbería.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/reservar">
                    <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">Reservar Cita</Button>
                  </Link>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
                  <Scissors className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían cada día nuestro trabajo y definen la experiencia Studio La Banda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conoce a los maestros barberos que harán realidad tu estilo ideal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member) => (
                <Card
                  key={member.id}
                  className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.specialty} • {member.experience}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">Barberos Expertos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5★</div>
                  <div className="text-muted-foreground">Valoración Media</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
