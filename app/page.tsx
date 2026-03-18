'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Search,
  MapPin,
  Building2,
  ArrowRight,
  Play,
  ChevronDown,
  Star,
  Shield,
  Award,
  Users,
  Sparkles,
  ArrowUpRight,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyCard } from '@/components/property-card'
import { properties, developers, testimonials, locations, propertyTypes, bhkOptions } from '@/lib/data'
import { useFavoritesStore, useCompareStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Premium Properties', value: '500+' },
  { label: 'Happy Families', value: '2,500+' },
  { label: 'Years of Excellence', value: '14+' },
  { label: 'Expert Consultants', value: '50+' },
]

const features = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'All properties are RERA verified and legally documented',
  },
  {
    icon: Award,
    title: 'Premium Selection',
    description: 'Handpicked luxury properties from top developers',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Dedicated consultants for personalized service',
  },
  {
    icon: Sparkles,
    title: 'End-to-End Support',
    description: 'From site visit to registration, we handle it all',
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedBhk, setSelectedBhk] = useState('')

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const toggleCompare = useCompareStore((state) => state.toggleCompare)
  const isComparing = useCompareStore((state) => state.isComparing)

  const featuredProperties = properties.filter((p) => p.featured)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedLocation) params.set('location', selectedLocation)
    if (selectedType) params.set('type', selectedType)
    if (selectedBhk) params.set('bhk', selectedBhk)
    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video/Image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Property"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 container mx-auto px-4 pt-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass-gold text-sm mb-6">
                Hyderabad&apos;s Premier Luxury Real Estate
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-balance"
            >
              Discover Your
              <br />
              <span className="text-gradient-gold">Dream Residence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Experience unparalleled luxury living with our exclusive collection of premium
              properties in Hyderabad&apos;s most prestigious locations.
            </motion.p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-2xl p-4 md:p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/50 border-border/50 h-12"
                  />
                </div>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="bg-secondary/50 border-border/50 h-12">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-secondary/50 border-border/50 h-12">
                    <Building2 className="w-4 h-4 mr-2 text-primary" />
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleSearch}
                  className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/30">
                <span className="text-sm text-muted-foreground">Popular:</span>
                {['3 BHK Gachibowli', 'Villas Kondapur', 'Ready to Move', 'New Launch'].map(
                  (tag) => (
                    <Button
                      key={tag}
                      variant="ghost"
                      size="sm"
                      className="text-xs h-7 px-3 rounded-full border border-border/50 hover:border-primary hover:text-primary"
                    >
                      {tag}
                    </Button>
                  )
                )}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-gold font-serif">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
          >
            <div>
              <span className="text-sm text-primary uppercase tracking-widest">
                Handpicked for You
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                Featured <span className="text-gradient-gold">Luxury Projects</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                Explore our curated selection of premium properties in Hyderabad&apos;s most
                sought-after locations.
              </p>
            </div>
            <Link href="/properties">
              <Button variant="outline" className="border-primary/30 gap-2">
                View All Properties
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 6).map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
                onFavorite={toggleFavorite}
                isFavorite={isFavorite(property.id)}
                onCompare={toggleCompare}
                isComparing={isComparing(property.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Prime Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Explore by <span className="text-gradient-gold">Location</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => {
              const propertyCount = properties.filter(
                (p) => p.location === location
              ).length

              return (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/properties?location=${encodeURIComponent(location)}`}>
                    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          ['1600596542815-ffad4c1539a9', '1600585154340-be6161a56a0c', '1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c'][index]
                        }?w=600&q=80`}
                        alt={location}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-serif font-semibold mb-1">{location}</h3>
                        <p className="text-sm text-muted-foreground">
                          {propertyCount} Properties
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm">Explore</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
          >
            <div>
              <span className="text-sm text-primary uppercase tracking-widest">
                Trusted Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                Top <span className="text-gradient-gold">Developers</span>
              </h2>
            </div>
            <Link href="/developers">
              <Button variant="outline" className="border-primary/30 gap-2">
                View All Developers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {developers.slice(0, 5).map((developer, index) => (
              <motion.div
                key={developer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/developers/${developer.id}`}>
                  <div className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                    <div className="w-16 h-16 rounded-xl bg-muted mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {developer.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span>{developer.rating}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
