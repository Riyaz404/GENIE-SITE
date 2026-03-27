'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Heart, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/developers', label: 'Channels' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/90 backdrop-blur-lg border-b border-primary/20 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* 🔥 Logo (Bigger + Clean) */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="Genie Realty"
                   className="h-24 md:h-28 lg:h-32 w-auto object-contain scale-220"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* 🔥 Actions */}
            <div className="hidden lg:flex items-center gap-4">

              <Link href="/favorites">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Heart className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="/compare">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <BarChart3 className="w-5 h-5" />
                </Button>
              </Link>

              {/* 🔥 Bigger Phone Button */}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-base font-semibold gap-2 rounded-xl shadow-md">
                <Phone className="w-6 h-5" />
                +91 90638 77877
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative pt-24 px-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-serif py-3 border-b border-border/50',
                    pathname === link.href ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <Button className="w-full bg-primary text-primary-foreground gap-2 text-lg py-3">
                  <Phone className="w-7 h-5" />
                  +91 90638 77877
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}