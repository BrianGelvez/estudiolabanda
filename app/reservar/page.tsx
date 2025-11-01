"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, User, Check } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AvailabilityCalendar from "@/components/availability-calendar"
import { motion, AnimatePresence } from "framer-motion"

const barbers = [
  {
    id: 1,
    name: 'Carlos "El Maestro"',
    specialty: "Cortes clásicos y barba",
    experience: "15 años",
    image: "/professional-barber-with-beard.jpg",
  },
  {
    id: 2,
    name: 'Miguel "The Artist"',
    specialty: "Diseños modernos",
    experience: "8 años",
    image: "/young-modern-barber.jpg",
  },
  {
    id: 3,
    name: 'Roberto "Old School"',
    specialty: "Afeitado tradicional",
    experience: "20 años",
    image: "/experienced-traditional-barber.jpg",
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
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
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

  const handleSubmit = () => {
    console.log(formData)
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sigue estos sencillos pasos para reservar tu cita en Studio La Banda
            </p>
          </motion.div>

          {/* Progress indicator - Mejorado para móvil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="glass-card rounded-full px-2 py-3 md:px-8 md:py-4 w-full max-w-sm mx-4">
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
                      {step === 4 && "Confirmar"}
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
                          className={`glass-card rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300 ${
                            selectedBarber === barber.id ? "ring-2 ring-primary bg-primary/10" : "hover:bg-white/5"
                          }`}
                          onClick={() => setSelectedBarber(barber.id)}
                        >
                        <div className="text-center">
                          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden">
                            <Image
                              src={barber.image || "/placeholder.svg"}
                              alt={barber.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-base md:text-lg mb-2 text-white">{barber.name}</h3>
                          <p className="text-primary text-xs md:text-sm mb-1">{barber.specialty}</p>
                          <p className="text-muted-foreground text-xs md:text-sm">{barber.experience}</p>
                        </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleNext}
                      disabled={!selectedBarber}
                      className="glass-button rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium w-full max-w-xs"
                    >
                      Continuar
                    </Button>
                  </motion.div>
                </motion.div>
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

            {/* Step 3: Time Selection & Form */}
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
                    <span className="hidden sm:inline">Horario y Datos</span>
                    <span className="sm:hidden">Hora y Datos</span>
                  </h2>

                  {/* Time Selection */}
                  <div className="mb-6 md:mb-8">
                    <Label className="text-base md:text-lg mb-3 md:mb-4 block text-white">Selecciona la hora</Label>
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

                  {/* Contact Form */}
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base md:text-lg text-white">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="glass text-base md:text-lg p-3 md:p-4 rounded-xl mt-2 text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base md:text-lg text-white">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="glass text-base md:text-lg p-3 md:p-4 rounded-xl mt-2 text-white"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram" className="text-base md:text-lg text-white">
                        Instagram (opcional)
                      </Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="glass text-base md:text-lg p-3 md:p-4 rounded-xl mt-2 text-white"
                        placeholder="@tuusuario"
                      />
                    </div>
                  </div>
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
                      disabled={!selectedTime || !formData.name || !formData.phone}
                      className="glass-button rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium w-full sm:w-auto"
                    >
                      Confirmar Cita
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
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
                <Card className="glass-card rounded-2xl p-4 md:p-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                  >
                    <Check className="w-8 h-8 md:w-10 md:h-10 text-black" />
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white"
                  >
                    ¡Cita Confirmada!
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg"
                  >
                    Tu cita ha sido reservada exitosamente
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-xl p-4 md:p-6 mb-6 md:mb-8 text-left max-w-2xl mx-auto"
                  >
                    <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-primary">Detalles de tu cita:</h3>
                    <div className="space-y-2 md:space-y-3 text-white text-sm md:text-base">
                      <p>
                        <strong>Barbero:</strong> {barbers.find((b) => b.id === selectedBarber)?.name}
                      </p>
                      <p>
                        <strong>Fecha:</strong>{" "}
                        {new Date(selectedDate).toLocaleDateString("es-ES", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p>
                        <strong>Hora:</strong> {selectedTime}
                      </p>
                      <p>
                        <strong>Cliente:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {formData.phone}
                      </p>
                      {formData.instagram && (
                        <p>
                          <strong>Instagram:</strong> {formData.instagram}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass rounded-xl p-4 md:p-6 mb-6 md:mb-8"
                  >
                    <h4 className="font-bold text-base md:text-lg mb-2 text-primary">Información importante:</h4>
                    <ul className="text-xs md:text-sm text-muted-foreground space-y-1 text-left">
                      <li>• Llega 5 minutos antes de tu cita</li>
                      <li>• Si necesitas cancelar, hazlo con 24h de antelación</li>
                      <li>• Ubicación: Calle Principal 123, Madrid</li>
                      <li>• Teléfono: +34 900 000 000</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
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
                        setFormData({ name: "", phone: "", instagram: "" })
                      }}
                      className="glass-button rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-medium w-full max-w-xs"
                    >
                      Nueva Cita
                    </Button>
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
