'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BarChart3,
  ArrowRight,
  X,
  MapPin,
  Bed,
  Maximize2,
  Building2,
  Check,
  Minus,
  Sparkles,
  Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { properties } from '@/lib/data'
import { useCompareStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const comparisonRows = [
  { key: 'price', label: 'Price' },
  { key: 'location', label: 'Location' },
  { key: 'type', label: 'Property Type' },
  { key: 'bhk', label: 'Configuration' },
  { key: 'size', label: 'Size' },
  { key: 'status', label: 'Status' },
  { key: 'possession', label: 'Possession' },
  { key: 'builder', label: 'Developer' },
  { key: 'totalUnits', label: 'Total Units' },
  { key: 'availableUnits', label: 'Available Units' },
  { key: 'luxury', label: 'Luxury' },
  { key: 'amenities', label: 'Amenities' },
]

export default function ComparePage() {
  const compareList = useCompareStore((state) => state.compareList)
  const removeFromCompare = useCompareStore((state) => state.removeFromCompare)
  const clearCompare = useCompareStore((state) => state.clearCompare)

  const compareProperties = useMemo(() => {
    return properties.filter((p) => compareList.includes(p.id))
  }, [compareList])

  const getValue = (property: (typeof properties)[0], key: string) => {
    switch (key) {
      case 'price':
        return `₹ ${property.price}`
      case 'location':
        return property.area
      case 'type':
        return property.type
      case 'bhk':
        return property.bhk.join(', ')
      case 'size':
        return property.size
      case 'status':
        return property.status
      case 'possession':
        return property.possession
      case 'builder':
        return property.builder
      case 'totalUnits':
        return property.totalUnits.toString()
      case 'availableUnits':
        return property.availableUnits.toString()
      case 'luxury':
        return property.luxury
      case 'amenities':
        return property.amenities.length
      default:
        return '-'
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">
                  Compare <span className="text-gradient-gold">Properties</span>
                </h1>
              </div>
              <p className="text-muted-foreground">
                {compareProperties.length} properties selected (max 4)
              </p>
            </div>
            {compareProperties.length > 0 && (
              <Button
                variant="outline"
                className="border-destructive/30 text-destructive hover:bg-destructive/10 gap-2"
                onClick={clearCompare}
              >
                <X className="w-4 h-4" />
                Clear All
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {compareProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No Properties to Compare</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Add properties to your comparison list to see them side by side and make an informed decision.
              </p>
              <Link href="/properties">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Explore Properties
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="overflow-x-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-w-[800px]"
              >
                {/* Property Cards Row */}
                <div
                  className={cn(
                    'grid gap-4 mb-6',
                    compareProperties.length === 1 && 'grid-cols-2',
                    compareProperties.length === 2 && 'grid-cols-3',
                    compareProperties.length === 3 && 'grid-cols-4',
                    compareProperties.length === 4 && 'grid-cols-5'
                  )}
                >
                  {/* Empty header cell */}
                  <div className="hidden md:block" />

                  {compareProperties.map((property) => (
                    <div
                      key={property.id}
                      className="glass rounded-xl p-4 relative"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 w-8 h-8 rounded-full hover:bg-destructive/20 hover:text-destructive"
                        onClick={() => removeFromCompare(property.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>

                      <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                        <Image
                          src={property.images[0]}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                        {property.luxury && (
                          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Luxury
                          </Badge>
                        )}
                      </div>

                      <Link href={`/properties/${property.id}`}>
                        <h3 className="font-semibold hover:text-primary transition-colors line-clamp-1">
                          {property.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        by {property.builder}
                      </p>
                    </div>
                  ))}

                  {/* Add More Card */}
                  {compareProperties.length < 4 && (
                    <Link href="/properties">
                      <div className="glass rounded-xl p-4 h-full min-h-[200px] flex flex-col items-center justify-center gap-3 border-dashed border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Plus className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          Add Property
                        </p>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Comparison Table */}
                <div className="glass rounded-xl overflow-hidden">
                  {comparisonRows.map((row, index) => (
                    <div
                      key={row.key}
                      className={cn(
                        'grid gap-4 p-4',
                        compareProperties.length === 1 && 'grid-cols-2',
                        compareProperties.length === 2 && 'grid-cols-3',
                        compareProperties.length === 3 && 'grid-cols-4',
                        compareProperties.length === 4 && 'grid-cols-5',
                        index % 2 === 0 && 'bg-secondary/30'
                      )}
                    >
                      {/* Row Label */}
                      <div className="font-medium text-sm flex items-center">
                        {row.label}
                      </div>

                      {/* Values */}
                      {compareProperties.map((property) => {
                        const value = getValue(property, row.key)

                        if (row.key === 'luxury') {
                          return (
                            <div
                              key={property.id}
                              className="flex items-center"
                            >
                              {value ? (
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-green-500" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                  <Minus className="w-4 h-4 text-muted-foreground" />
                                </div>
                              )}
                            </div>
                          )
                        }

                        if (row.key === 'amenities') {
                          return (
                            <div
                              key={property.id}
                              className="text-sm text-muted-foreground"
                            >
                              {value} amenities
                            </div>
                          )
                        }

                        if (row.key === 'price') {
                          return (
                            <div
                              key={property.id}
                              className="text-sm font-semibold text-gradient-gold"
                            >
                              {value}
                            </div>
                          )
                        }

                        if (row.key === 'status') {
                          return (
                            <div key={property.id}>
                              <Badge
                                variant="secondary"
                                className={cn(
                                  'text-xs',
                                  value === 'Ready to Move' &&
                                    'bg-green-500/20 text-green-400',
                                  value === 'Under Construction' &&
                                    'bg-yellow-500/20 text-yellow-400',
                                  value === 'New Launch' &&
                                    'bg-blue-500/20 text-blue-400'
                                )}
                              >
                                {value}
                              </Badge>
                            </div>
                          )
                        }

                        return (
                          <div
                            key={property.id}
                            className="text-sm text-muted-foreground"
                          >
                            {value}
                          </div>
                        )
                      })}

                      {/* Empty cell for Add More column */}
                      {compareProperties.length < 4 && (
                        <div className="hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Amenities Comparison */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Amenities <span className="text-gradient-gold">Comparison</span>
                  </h3>
                  <div className="glass rounded-xl p-6">
                    <div
                      className={cn(
                        'grid gap-4',
                        compareProperties.length === 1 && 'grid-cols-2',
                        compareProperties.length === 2 && 'grid-cols-3',
                        compareProperties.length === 3 && 'grid-cols-4',
                        compareProperties.length === 4 && 'grid-cols-5'
                      )}
                    >
                      <div className="font-medium text-sm">Amenity</div>
                      {compareProperties.map((property) => (
                        <div
                          key={property.id}
                          className="font-medium text-sm text-center"
                        >
                          {property.name}
                        </div>
                      ))}
                      {compareProperties.length < 4 && (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    {/* Get all unique amenities */}
                    {Array.from(
                      new Set(compareProperties.flatMap((p) => p.amenities))
                    )
                      .slice(0, 10)
                      .map((amenity, index) => (
                        <div
                          key={amenity}
                          className={cn(
                            'grid gap-4 py-3 border-t border-border/30',
                            compareProperties.length === 1 && 'grid-cols-2',
                            compareProperties.length === 2 && 'grid-cols-3',
                            compareProperties.length === 3 && 'grid-cols-4',
                            compareProperties.length === 4 && 'grid-cols-5'
                          )}
                        >
                          <div className="text-sm text-muted-foreground">
                            {amenity}
                          </div>
                          {compareProperties.map((property) => (
                            <div
                              key={property.id}
                              className="flex justify-center"
                            >
                              {property.amenities.includes(amenity) ? (
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-green-500" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                  <Minus className="w-4 h-4 text-muted-foreground" />
                                </div>
                              )}
                            </div>
                          ))}
                          {compareProperties.length < 4 && (
                            <div className="hidden md:block" />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
