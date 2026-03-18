'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PropertyCard } from '@/components/property-card'
import { properties } from '@/lib/data'
import { useFavoritesStore, useCompareStore } from '@/lib/store'

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const toggleCompare = useCompareStore((state) => state.toggleCompare)
  const isComparing = useCompareStore((state) => state.isComparing)

  const favoriteProperties = useMemo(() => {
    return properties.filter((p) => favorites.includes(p.id))
  }, [favorites])

  const clearAllFavorites = () => {
    favorites.forEach((id) => toggleFavorite(id))
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
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">
                  My <span className="text-gradient-gold">Favorites</span>
                </h1>
              </div>
              <p className="text-muted-foreground">
                {favoriteProperties.length} saved properties
              </p>
            </div>
            {favoriteProperties.length > 0 && (
              <Button
                variant="outline"
                className="border-destructive/30 text-destructive hover:bg-destructive/10 gap-2"
                onClick={clearAllFavorites}
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {favoriteProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start exploring our luxury properties and save your favorites to compare them later.
              </p>
              <Link href="/properties">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Explore Properties
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((property, index) => (
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
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
