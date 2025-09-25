"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Home, Scissors, Info, Mail, ChevronRight } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Servicios", href: "/servicios", icon: Scissors },
    { name: "Nosotros", href: "/nosotros", icon: Info },
    { name: "Contacto", href: "/contacto", icon: Mail },
  ] as const

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Studio La Banda"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">STUDIO</span>
              <span className="text-xl font-bold text-primary ml-2">LA BANDA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/reservar">
              <Button className="glass-button rounded-full px-6 py-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Reservar Cita
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-white/0 hover:bg-white/5 transition-colors px-3 py-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-primary" />
                    </div>
                  </Link>
                )
              })}
              <Link href="/reservar" className="px-2 pt-2">
                <Button className="glass-button rounded-xl w-full flex items-center justify-center gap-2 py-3">
                  <Calendar className="w-4 h-4" />
                  Reservar Cita
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
