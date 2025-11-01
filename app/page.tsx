"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Users, Clock, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const stats = [
  { number: "3+", label: "Años de Experiencia" },
  { number: "2", label: "Barberos Expertos" },
  { number: "500", label: "Cortes realizados" },
  { number: "5★", label: "Valoración Promedio" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

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
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(121,115,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.55) 100%)" }} />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16"
        >
          {/* Logo */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass-card rounded-2xl p-8"
            >
              <Image src="/logo.jpg" alt="Studio La Banda Logo" width={150} height={150} className="mx-auto" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance text-shadow-lg tracking-tight"
          >
            STUDIO <span className="text-primary">LA BANDA</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty text-shadow-lg"
          >
            Espacio donde no se trata de solo un corte, si no de una experiencia que te escucha, te representa y te conecta con tu mejor version.
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <Link href="/servicios">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="glass-button rounded-full px-8 py-4 text-lg font-semibold">
                  Ver Servicios
                </Button>
              </motion.div>
            </Link>
          </motion.div> */}

          {/* Stats */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 text-center cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce la historia y la pasión que hay detrás de Studio La Banda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-8"
              >
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
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-8"
              >
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
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link href="/nosotros">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="glass-button rounded-full px-8 py-3 text-lg font-semibold">
                  Conoce Más Sobre Nosotros
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">¿Por qué elegir Studio La Banda?</h2>
              <div className="space-y-6">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Barberos Expertos</h3>
                    <p className="text-muted-foreground">
                      Profesionales con años de experiencia y técnicas tradicionales.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Clock className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Atención Personalizada</h3>
                    <p className="text-muted-foreground">Cada cliente recibe un servicio único adaptado a su estilo.</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Award className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ambiente Exclusivo</h3>
                    <p className="text-muted-foreground">
                      Un espacio diseñado para relajarte y disfrutar de la experiencia.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Scissors className="w-24 h-24 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
