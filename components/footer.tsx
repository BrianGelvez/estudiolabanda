"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="glass-card border-t border-primary/20 mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-full overflow-hidden"
              >
                <Image
                  src="/logo.jpg"
                  alt="Studio La Banda"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <span className="text-lg font-bold text-white">STUDIO</span>
                <span className="text-lg font-bold text-primary ml-2">LA BANDA</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Más que una barbería — una experiencia que te conecta con tu mejor versión.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-primary font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Sanavirones 523</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">3521 530927</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">osses084@gmail.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">@studio_labanda.ok</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-primary font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-md text-muted-foreground">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between"
              >
                <span className="">Todos los días</span>
                <span>24/7</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-3"
              >
                <p className="text-sm">Atendemos con reserva previa</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-primary font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </motion.div>
              {/* <motion.div whileHover={{ x: 5 }}>
                <Link href="/nosotros" className="block text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </motion.div> */}
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/reservar" className="block text-muted-foreground hover:text-primary transition-colors">
                  Reservar Cita
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Reservar en Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 mb-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-3">¿Listo para tu próximo corte?</h3>
            <p className="text-muted-foreground mb-6">Reservá tu turno ahora y experimentá el estilo de Studio La Banda</p>
            <Link href="/reservar">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">
                  Reservar Turno
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-primary/20 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">© 2025 Studio La Banda. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
