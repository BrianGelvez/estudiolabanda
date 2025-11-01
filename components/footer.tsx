"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
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
              La barbería más exclusiva donde el estilo se encuentra con la tradición.
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
                <span className="text-muted-foreground">Calle Principal 123, Madrid</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+34 900 000 000</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@studiolabanda.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">@studiolabanda</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-primary font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between"
              >
                <span>Lun - Vie</span>
                <span>9:00 - 20:00</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between"
              >
                <span>Sábado</span>
                <span>9:00 - 18:00</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex justify-between"
              >
                <span>Domingo</span>
                <span>Cerrado</span>
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
              <motion.div whileHover={{ x: 5 }}>
                <Link href="/nosotros" className="block text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </motion.div>
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

        <motion.div 
          variants={itemVariants}
          className="border-t border-primary/20 mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">© 2025 Studio La Banda. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
