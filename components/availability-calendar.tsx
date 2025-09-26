"use client"

import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, getDay, subDays, addDays } from 'date-fns'
import { es } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Tipos para el estado de disponibilidad
type AvailabilityStatus = 'available' | 'partial' | 'full'

interface AvailabilityCalendarProps {
  availability?: Record<string, AvailabilityStatus>
  onSelectDate?: (date: string) => void
  selectedDate?: string
  className?: string
}

// Datos mock de disponibilidad
const mockAvailability: Record<string, AvailabilityStatus> = {
  "2025-01-15": "available",
  "2025-01-16": "partial",
  "2025-01-17": "full",
  "2025-01-18": "available",
  "2025-01-19": "partial",
  "2025-01-20": "available",
  "2025-01-21": "full",
  "2025-01-22": "available",
  "2025-01-23": "partial",
  "2025-01-24": "available",
  "2025-01-25": "available",
  "2025-01-26": "partial",
  "2025-01-27": "full",
  "2025-01-28": "available",
  "2025-01-29": "available",
  "2025-01-30": "partial",
  "2025-01-31": "available",
}

// Nombres de los días de la semana en español
const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

// Función para obtener el color según el estado de disponibilidad
const getAvailabilityColor = (status: AvailabilityStatus | undefined): string => {
  switch (status) {
    case 'available':
      return 'bg-green-500 hover:bg-green-600 text-white'
    case 'partial':
      return 'bg-yellow-500 hover:bg-yellow-600 text-white'
    case 'full':
      return 'bg-red-500 hover:bg-red-600 text-white'
    default:
      return 'bg-gray-500 hover:bg-gray-600 text-white'
  }
}

export default function AvailabilityCalendar({
  availability = mockAvailability,
  onSelectDate,
  selectedDate,
  className
}: AvailabilityCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Navegar al mes anterior
  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Navegar al mes siguiente
  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Obtener todos los días del mes actual
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Obtener los días del mes anterior para completar la primera semana
  const firstDayOfWeek = getDay(monthStart) // 0 = Domingo, 1 = Lunes, etc.
  const previousMonthDays = []
  
  // Si el primer día del mes no es domingo, agregar días del mes anterior
  if (firstDayOfWeek > 0) {
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = subDays(monthStart, i + 1)
      previousMonthDays.push(day)
    }
  }

  // Obtener los días del mes siguiente para completar la última semana
  const lastDayOfWeek = getDay(monthEnd) // 0 = Domingo, 1 = Lunes, etc.
  const nextMonthDays = []
  
  // Si el último día del mes no es sábado, agregar días del mes siguiente
  if (lastDayOfWeek < 6) {
    for (let i = 1; i <= (6 - lastDayOfWeek); i++) {
      const day = addDays(monthEnd, i)
      nextMonthDays.push(day)
    }
  }

  // Combinar todos los días para mostrar en la cuadrícula
  const allDays = [...previousMonthDays, ...daysInMonth, ...nextMonthDays]

  // Manejar la selección de un día
  const handleDayClick = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd')
    console.log('Fecha seleccionada:', dateString, 'Fecha original:', date.toDateString()) // Debug
    onSelectDate?.(dateString)
  }

  // Obtener el estado de disponibilidad para una fecha
  const getAvailabilityStatus = (date: Date): AvailabilityStatus | undefined => {
    const dateString = format(date, 'yyyy-MM-dd')
    return availability[dateString]
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {/* Header del calendario con navegación */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousMonth}
          className="h-8 w-8 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <h2 className="text-xl font-semibold text-white">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </h2>
        
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextMonth}
          className="h-8 w-8 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Cuadrícula de días */}
      <div className="grid grid-cols-7 gap-1">
        {allDays.map((day, index) => {
          const isCurrentMonth = isSameMonth(day, currentMonth)
          const isSelected = selectedDate && isSameDay(day, new Date(selectedDate))
          const availabilityStatus = getAvailabilityStatus(day)
          const isClickable = isCurrentMonth && availabilityStatus !== 'full'

          return (
            <Button
              key={`${format(day, 'yyyy-MM-dd')}-${index}`}
              variant="ghost"
              size="icon"
              className={cn(
                "h-10 w-10 rounded-full text-sm font-medium transition-all duration-200",
                // Estilos base
                isCurrentMonth ? "opacity-100" : "opacity-30",
                // Colores según disponibilidad
                isCurrentMonth && availabilityStatus
                  ? getAvailabilityColor(availabilityStatus)
                  : "bg-gray-600 hover:bg-gray-700 text-white",
                // Estado seleccionado
                isSelected && "ring-2 ring-white ring-offset-2 ring-offset-background",
                // Estado deshabilitado
                !isClickable && "cursor-not-allowed opacity-50",
                // Hover solo si es clickeable
                isClickable && "hover:scale-105"
              )}
              onClick={() => isClickable && handleDayClick(day)}
              disabled={!isClickable}
            >
              {format(day, 'd')}
            </Button>
          )
        })}
      </div>

      {/* Leyenda de colores */}
      <div className="mt-6 space-y-2">
        <div className="text-sm text-muted-foreground mb-2">Disponibilidad:</div>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Parcial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Completo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
