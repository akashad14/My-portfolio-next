"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#Home", label: "Home", icon: Home },
    { href: "#About", label: "About", icon: User },
    { href: "#Projects", label: "Projects", icon: Briefcase },
    { href: "#Contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="">
      {/* Enhanced Navbar */}
      <nav className="fixed w-full top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                ADS
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/10 backdrop-blur-sm px-1 py-1 rounded-full border border-secondary/20 hover:border-secondary/40 transition-colors">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => (window.location.hash = "#contact")}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/20 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
              <button
                onClick={() => {
                  setIsOpen(false)
                  window.location.hash = "#contact"
                }}
                className="w-full mt-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 active:scale-95"
              >
                Get in Touch
              </button>
            </div>
          )}
        </div>
      </nav>
      </div>

     
  )
}
