import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Studio La Banda"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">STUDIO</span>
                <span className="text-lg font-bold text-primary ml-2">LA BANDA</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              La barbería más exclusiva donde el estilo se encuentra con la tradición.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Calle Principal 123, Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+34 900 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@studiolabanda.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">@studiolabanda</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Lun - Vie</span>
                <span>9:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <Link href="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link href="/nosotros" className="block text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link href="/reservar" className="block text-muted-foreground hover:text-primary transition-colors">
                Reservar Cita
              </Link>
              <Link href="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Studio La Banda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
