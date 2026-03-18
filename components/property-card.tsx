'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Bed, Maximize2, Building2, Heart, Eye, ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'

interface PropertyCardProps {
  property: Property
  index?: number
  onFavorite?: (id: string) => void
  isFavorite?: boolean
  onCompare?: (id: string) => void
  isComparing?: boolean
}

export function PropertyCard({
  property,
  index = 0,
  onFavorite,
  isFavorite = false,
  onCompare,
  isComparing = false,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border transition-all duration-500',
          'bg-card border-border/50',
          'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5',
          isHovered && 'transform-gpu -translate-y-2'
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-shimmer" />
          )}

          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className={cn(
              'object-cover transition-all duration-700',
              isHovered && 'scale-110',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

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
                property.status === 'Ready to Move' && 'bg-green-500/20 text-green-400 border-green-500/30',
                property.status === 'Under Construction' && 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                property.status === 'New Launch' && 'bg-blue-500/20 text-blue-400 border-blue-500/30'
              )}
            >
              {property.status}
            </Badge>
          </div>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'w-9 h-9 rounded-full glass backdrop-blur-md',
                isFavorite && 'text-red-500'
              )}
              onClick={(e) => {
                e.preventDefault()
                onFavorite?.(property.id)
              }}
            >
              <Heart className={cn('w-4 h-4', isFavorite && 'fill-current')} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'w-9 h-9 rounded-full glass backdrop-blur-md',
                isComparing && 'text-primary'
              )}
              onClick={(e) => {
                e.preventDefault()
                onCompare?.(property.id)
              }}
            >
              <Eye className={cn('w-4 h-4', isComparing && 'fill-current')} />
            </Button>
          </div>

          {/* Quick view on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <Link href={`/properties/${property.id}`}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <Link href={`/properties/${property.id}`}>
          <div className="p-5">
            {/* Price */}
            <p className="text-xl font-bold text-gradient-gold font-serif mb-1">
              ₹ {property.price}
            </p>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {property.name}
            </h3>

            {/* Builder */}
            <p className="text-sm text-muted-foreground mb-3">
              by {property.builder}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{property.area}</span>
            </div>

            {/* Specs */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-sm">
                <Bed className="w-4 h-4 text-primary" />
                <span>{property.bhk.join(', ')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span>{property.size}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Building2 className="w-4 h-4 text-primary" />
                <span>{property.type}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
