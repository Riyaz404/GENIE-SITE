'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Bed,
  Maximize2,
  Building2,
  Heart,
  Share2,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Star,
  Shield,
  Car,
  Waves,
  Dumbbell,
  TreePine,
  Wifi,
  Wind,
  Coffee,
  Users,
  ArrowUpRight,
  Clock,
  Home,
  FileText,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyCard } from '@/components/property-card'
import { properties, developers } from '@/lib/data'
import { useFavoritesStore, useCompareStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Swimming Pool': Waves,
  'Gymnasium': Dumbbell,
  'Clubhouse': Building2,
  'Tennis Court': Users,
  'Jogging Track': TreePine,
  'Spa': Coffee,
  'Kids Play Area': Users,
  'Party Hall': Users,
  'Indoor Games': Users,
  'Infinity Pool': Waves,
  'Golf Simulator': TreePine,
  'Sky Lounge': Building2,
  'Private Cinema': Building2,
  'Helipad': Wind,
  'Business Center': Wifi,
  'Wine Cellar': Coffee,
  'Default': Star,
}

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>
}

export default function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const resolvedParams = use(params)
  const property = properties.find((p) => p.id === resolvedParams.id)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const toggleCompare = useCompareStore((state) => state.toggleCompare)
  const isComparing = useCompareStore((state) => state.isComparing)

  if (!property) {
    notFound()
  }

  const developer = developers.find((d) => d.name === property.builder)
  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.location === property.location)
    .slice(0, 3)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-primary transition-colors">
              Properties
            </Link>
            <span>/</span>
            <span className="text-foreground">{property.name}</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setIsGalleryOpen(true)}
            >
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button className="bg-primary text-primary-foreground">
                  View Gallery
                </Button>
              </div>
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {property.luxury && (
                  <Badge className="bg-primary text-primary-foreground gap-1">
                    <Sparkles className="w-3 h-3" />
                    Luxury
                  </Badge>
                )}
                <Badge
                  variant="secondary"
                  className={cn(
                    property.status === 'Ready to Move' &&
                      'bg-green-500/20 text-green-400 border-green-500/30',
                    property.status === 'Under Construction' &&
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                    property.status === 'New Launch' &&
                      'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  )}
                >
                  {property.status}
                </Badge>
              </div>
            </motion.div>

            {/* Side Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="relative aspect-[16/10] lg:aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setCurrentImageIndex(index + 1)
                    setIsGalleryOpen(true)
                  }}
                >
                  <Image
                    src={image}
                    alt={`${property.name} - ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                      {property.name}
                    </h1>
                    <p className="text-muted-foreground">by {property.builder}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        'border-border/50',
                        isFavorite(property.id) && 'text-red-500 border-red-500/30'
                      )}
                      onClick={() => toggleFavorite(property.id)}
                    >
                      <Heart
                        className={cn(
                          'w-5 h-5',
                          isFavorite(property.id) && 'fill-current'
                        )}
                      />
                    </Button>
                    <Button variant="outline" size="icon" className="border-border/50">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{property.area}</span>
                </div>

                <div className="flex flex-wrap gap-6 p-6 glass rounded-xl">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p className="text-2xl font-bold text-green-700 font-serif">
                      ₹ {property.price}
                    </p>
                  </div>
                  <div className="w-px bg-border/50" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Configuration</p>
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{property.bhk.join(', ')}</span>
                    </div>
                  </div>
                  <div className="w-px bg-border/50" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Size</p>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{property.size}</span>
                    </div>
                  </div>
                  <div className="w-px bg-border/50" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Type</p>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{property.type}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start bg-secondary/50 p-1 rounded-xl mb-6">
                    <TabsTrigger value="overview" className="rounded-lg">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="amenities" className="rounded-lg">
                      Amenities
                    </TabsTrigger>
                    <TabsTrigger value="location" className="rounded-lg">
                      Location
                    </TabsTrigger>
                    <TabsTrigger value="developer" className="rounded-lg">
                      Developer
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="glass rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">About the Project</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    <div className="glass rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {property.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Total Units
                          </p>
                          <p className="font-semibold">{property.totalUnits}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Available Units
                          </p>
                          <p className="font-semibold">{property.availableUnits}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Possession
                          </p>
                          <p className="font-semibold">{property.possession}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            RERA ID
                          </p>
                          <p className="font-semibold">{property.rera}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Status</p>
                          <p className="font-semibold">{property.status}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Type</p>
                          <p className="font-semibold">{property.type}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="space-y-6">
                    <div className="glass rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-6">Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {property.amenities.map((amenity, index) => {
                          const Icon =
                            amenityIcons[amenity] || amenityIcons['Default']
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="text-sm">{amenity}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="space-y-6">
                    <div className="glass rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Location</h3>
                      <p className="text-muted-foreground mb-6">{property.area}</p>
                      <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50">
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.89!2d${property.lng}!3d${property.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMjEnMjMuNiJF!5e0!3m2!1sen!2sin!4v1234567890`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="developer" className="space-y-6">
                    {developer && (
                      <div className="glass rounded-xl p-6">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center">
                            <Building2 className="w-10 h-10 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {developer.name}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-primary fill-primary" />
                                <span>{developer.rating}</span>
                              </div>
                              <span>Est. {developer.established}</span>
                              <span>{developer.projectsCompleted}+ Projects</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {developer.description}
                        </p>
                        <Link href={`/developers/${developer.id}`}>
                          <Button
                            variant="outline"
                            className="mt-6 border-primary/30 gap-2"
                          >
                            View All Projects
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-28"
              >
                <div className="glass-gold rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Schedule a Site Visit
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get personalized assistance from our property experts
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        Request Submitted!
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Our team will contact you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Message (Optional)"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="bg-secondary/50 border-border/50 min-h-[80px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            Schedule Visit
                          </>
                        )}
                      </Button>
                    </form>
                  )}

                  <div className="mt-6 pt-6 border-t border-border/30">
                    <p className="text-sm text-muted-foreground mb-3">
                      Or call us directly:
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +91 90638 77877
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 text-center">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">RERA Verified</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Legal Clear</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Similar <span className="text-gradient-gold">Properties</span>
                </h2>
                <p className="text-muted-foreground mt-2">
                  More properties in {property.location}
                </p>
              </div>
              <Link href={`/properties?location=${encodeURIComponent(property.location)}`}>
                <Button variant="outline" className="border-primary/30 gap-2">
                  View All
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop, index) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  index={index}
                  onFavorite={toggleFavorite}
                  isFavorite={isFavorite(prop.id)}
                  onCompare={toggleCompare}
                  isComparing={isComparing(prop.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setIsGalleryOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[16/10] mx-4"
            >
              <Image
                src={property.images[currentImageIndex]}
                alt={`${property.name} - ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                  )}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
