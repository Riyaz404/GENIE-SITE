'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { href: '/properties', label: 'All Properties' },
  { href: '/properties?location=Gachibowli', label: 'Gachibowli' },
  { href: '/properties?location=Hitech+City', label: 'Hitech City' },
  { href: '/properties?location=Kondapur', label: 'Kondapur' },
  { href: '/properties?location=Financial+District', label: 'Financial District' },
]

const propertyTypes = [
  { href: '/properties?type=Apartment', label: 'Luxury Apartments' },
  { href: '/properties?type=Villa', label: 'Premium Villas' },
  { href: '/properties?type=Plot', label: 'Premium Plots' },
  { href: '/properties?luxury=true', label: 'Ultra Luxury' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/developers', label: 'Developers' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-gold rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Find Your Dream <span className="text-gradient-gold">Luxury Home</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let our expert team help you discover the perfect property in Hyderabad&apos;s most prestigious locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto">
                Explore Properties
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-serif">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif tracking-wide text-gradient-gold">
                  GENIE REALTY
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Luxury Properties
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Hyderabad&apos;s premier luxury real estate consultancy, helping discerning buyers find their perfect home since 2010.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-gradient-gold">Locations</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-gradient-gold">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-serif font-semibold mb-4 mt-8 text-gradient-gold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-gradient-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Tower A, Level 12, Financial District, Nanakramguda, Hyderabad - 500032
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+91 90638 77877</p>
                  <p>+91 90638 77877</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  luxury@genierealty.in
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Genie Realty. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/rera" className="text-sm text-muted-foreground hover:text-primary">
                RERA Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
