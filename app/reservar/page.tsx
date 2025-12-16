"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, User, Check, Scissors, Crown } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AvailabilityCalendar from "@/components/availability-calendar"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { parse, format } from "date-fns"
import { es } from "date-fns/locale"

const barbers = [
  {
    id: 1,
    name: 'Matías Osses',
    specialty: "Barbero profesional",
    experience: "Cofundador",
    image: "/matias.png",
    phone: "3521530927",
  },
  {
    id: 2,
    name: 'Alexis Osses',
    specialty: "Barbero profesional",
    experience: "Cofundador",
    image: "/alexis.png",
    phone: "3521532839",
  },
]

const services = [
  {
    id: "base",
    name: "Corte Base",
    price: "$10.000",
    icon: Scissors,
  },
  {
    id: "premium",
    name: "Corte Premium Experiencia",
    price: "$9.000",
    icon: Crown,
  },
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
}

export default function ReservarPage() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  useEffect(() => {
    const serviceParam = searchParams?.get('servicio')
    if (serviceParam) {
      setSelectedService(serviceParam)
    } else {
      // Servicio por defecto si no viene ninguno
      setSelectedService('base')
    }
  }, [searchParams])

  const handleNext = () => {
    if (currentStep < 3) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  // Función helper para formatear fecha sin problemas de zona horaria
  const formatDate = (dateString: string) => {
    try {
      // Parsear la fecha como fecha local sin conversión de zona horaria
      const date = parse(dateString, 'yyyy-MM-dd', new Date())
      return format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })
    } catch (error) {
      // Fallback si hay algún error
      const [year, month, day] = dateString.split('-').map(Number)
      const date = new Date(year, month - 1, day)
      return date.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
  }

  const handleSubmit = () => {
    // Generar mensaje de WhatsApp
    const selectedBarberData = barbers.find((b) => b.id === selectedBarber)
    const selectedServiceData = services.find((s) => s.id === selectedService)
    
    if (!selectedBarberData || !selectedServiceData) return

    const formattedDate = formatDate(selectedDate)

    const message = `Hola ${selectedBarberData.name}! 👋

Quiero reservar una cita con los siguientes detalles:

📌 *Servicio:* ${selectedServiceData.name} (${selectedServiceData.price})
📅 *Fecha:* ${formattedDate}
🕐 *Horario:* ${selectedTime}

¡Muchas gracias! Quedo atento/a a tu confirmación.`

    const whatsappUrl = `https://wa.me/${selectedBarberData.phone}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank')
    
    // Mostrar pantalla de confirmación
    setDirection(1)
    setCurrentStep(4)
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reservar <span className="text-primary">Cita</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Sigue estos sencillos pasos para reservar tu cita en Studio La Banda
            </p>
            {/* Servicio seleccionado */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mt-4"
              >
                {services.find((s) => s.id === selectedService)?.icon && (
                  React.createElement(services.find((s) => s.id === selectedService)!.icon, {
                    className: "w-5 h-5 text-primary"
                  })
                )}
                <span className="text-white font-medium">
                  {services.find((s) => s.id === selectedService)?.name}
                </span>
                <span className="text-primary font-bold">
                  {services.find((s) => s.id === selectedService)?.price}
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Progress indicator - Mejorado para móvil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="glass-card rounded-full px-2 py-3 md:px-8 md:py-4 w-full max-w-2xl mx-4">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <motion.div 
                    key={step} 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{
                        scale: currentStep === step ? [1, 1.1, 1] : 1,
                        backgroundColor: currentStep >= step ? "hsl(var(--primary))" : "hsl(var(--secondary))"
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium ${
                        currentStep >= step ? "text-black" : "text-muted-foreground"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {currentStep > step ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-4 h-4 md:w-5 md:h-5" />
                          </motion.div>
                        ) : (
                          <motion.span
                            key="number"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            {step}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    {/* Labels para móvil */}
                    <span className="text-xs text-muted-foreground mt-1 hidden sm:block">
                      {step === 1 && "Barbero"}
                      {step === 2 && "Fecha"}
                      {step === 3 && "Hora"}
                      {step === 4 && "Listo"}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Barra de progreso continua para móvil */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30 -translate-y-1/2 -z-10 mx-8">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto px-2 md:px-0">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1: Barber Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                <Card className="glass-card rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 flex items-center justify-center gap-3"
                  >
                    <User className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    <span className="hidden sm:inline">Selecciona tu Barbero</span>
                    <span className="sm:hidden">Barbero</span>
                  </motion.h2>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                  >
                    {barbers.map((barber) => (
                      <motion.div
                        key={barber.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          className={`glass-card rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 ${
                            selectedBarber === barber.id ? "ring-2 ring-primary bg-primary/10" : "hover:bg-white/5"
                          }`}
                          onClick={() => {
                            setSelectedBarber(barber.id)
                            setTimeout(() => {
                              setDirection(1)
                              setCurrentStep(2)
                            }, 300)
                          }}
                        >
                        <div className="text-center">
                          <div className="w-full aspect-[4/5] mx-auto mb-4 md:mb-5 rounded-xl overflow-hidden ring-2 ring-primary/20">
                            <Image
                              src={barber.image || "/placeholder.svg"}
                              alt={barber.name}
                              width={1080}
                              height={1350}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-lg md:text-xl mb-2 text-white">{barber.name}</h3>
                          <p className="text-primary text-sm md:text-base mb-1">{barber.specialty}</p>
                          <p className="text-muted-foreground text-sm md:text-base">{barber.experience}</p>
                        </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Date Selection con Calendario Personalizado */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 flex items-center justify-center gap-3">
                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    <span className="hidden sm:inline">Selecciona la Fecha</span>
                    <span className="sm:hidden">Fecha</span>
                  </h2>
                  
                  {/* Calendario personalizado */}
                  <AvailabilityCalendar
                    onSelectDate={(date) => setSelectedDate(date)}
                    selectedDate={selectedDate}
                    className="mx-auto"
                  />
                </Card>

                
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      className="glass rounded-full px-6 py-2 md:py-3 bg-transparent border-primary/30 w-full sm:w-auto"
                    >
                      Atrás
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleNext}
                      disabled={!selectedDate}
                      className="glass-button rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium w-full sm:w-auto"
                    >
                      Continuar
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Time Selection */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 flex items-center justify-center gap-3">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    <span className="hidden sm:inline">Selecciona el Horario</span>
                    <span className="sm:hidden">Horario</span>
                  </h2>

                  {/* Time Selection */}
                  <div className="mb-6 md:mb-8">
                    <Label className="text-base md:text-lg mb-3 md:mb-4 block text-white">¿A qué hora prefieres tu cita?</Label>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3"
                    >
                      {timeSlots.map((time) => (
                        <motion.div
                          key={time}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant={selectedTime === time ? "default" : "outline"}
                            className={`glass-button rounded-lg p-2 md:p-3 text-sm md:text-base w-full ${
                              selectedTime === time
                                ? "bg-primary text-black"
                                : "glass border-primary/30 hover:bg-primary/20"
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Información del resumen */}
                  {selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass rounded-xl p-4 md:p-6 mt-6"
                    >
                      <h3 className="font-bold text-lg mb-3 text-primary">Resumen de tu reserva:</h3>
                      <div className="space-y-2 text-white text-sm md:text-base">
                        <p><strong>Servicio:</strong> {services.find((s) => s.id === selectedService)?.name}</p>
                        <p><strong>Barbero:</strong> {barbers.find((b) => b.id === selectedBarber)?.name}</p>
                        <p><strong>Fecha:</strong> {formatDate(selectedDate)}</p>
                        <p><strong>Hora:</strong> {selectedTime}</p>
                      </div>
                    </motion.div>
                  )}
                </Card>

                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      className="glass rounded-full px-6 py-2 md:py-3 bg-transparent border-primary/30 w-full sm:w-auto"
                    >
                      Atrás
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSubmit}
                      disabled={!selectedTime}
                      className="glass-button rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium w-full sm:w-auto"
                    >
                      Reservar por WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmación */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Card className="glass-card rounded-2xl p-6 md:p-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 md:w-12 md:h-12 text-black" />
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  >
                    ¡Muchas Gracias por Reservar!
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mb-8 text-lg md:text-xl max-w-2xl mx-auto"
                  >
                    Tu solicitud de reserva ha sido enviada por WhatsApp a {barbers.find((b) => b.id === selectedBarber)?.name}. 
                    Te confirmará la disponibilidad a la brevedad.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto"
                  >
                    <h3 className="font-bold text-xl mb-4 text-primary">Resumen de tu reserva:</h3>
                    <div className="space-y-3 text-white">
                      <p className="flex items-start gap-2">
                        <span className="text-primary">📌</span>
                        <span><strong>Servicio:</strong> {services.find((s) => s.id === selectedService)?.name} ({services.find((s) => s.id === selectedService)?.price})</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary">👤</span>
                        <span><strong>Barbero:</strong> {barbers.find((b) => b.id === selectedBarber)?.name}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary">📅</span>
                        <span><strong>Fecha:</strong> {formatDate(selectedDate)}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary">🕐</span>
                        <span><strong>Horario:</strong> {selectedTime}</span>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass rounded-xl p-6 mb-8"
                  >
                    <h4 className="font-bold text-lg mb-3 text-primary">Próximos pasos:</h4>
                    <ul className="text-sm md:text-base text-muted-foreground space-y-2 text-left">
                      <li>✓ Recibirás la confirmación por WhatsApp</li>
                      <li>✓ Llega 5 minutos antes de tu cita</li>
                      <li>✓ Si necesitas cambios, contacta directamente al barbero</li>
                      <li>✓ Ubicación: Sanavirones 523</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => {
                          setDirection(-1)
                          setCurrentStep(1)
                          setSelectedBarber(null)
                          setSelectedDate("")
                          setSelectedTime("")
                        }}
                        className="glass-button rounded-full px-8 py-3 text-lg font-medium w-full sm:w-auto"
                      >
                        Hacer otra Reserva
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                        className="glass rounded-full px-8 py-3 text-lg font-medium border-primary/30 hover:bg-primary/10 bg-transparent w-full sm:w-auto"
                      >
                        Volver al Inicio
                      </Button>
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
