'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MapPin,
  Building2,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
  ChevronDown,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
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
import { properties, locations, propertyTypes, bhkOptions, priceRanges } from '@/lib/data'
import { useFavoritesStore, useCompareStore } from '@/lib/store'
import { cn } from '@/lib/utils'

function PropertiesContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    searchParams.get('location')?.split(',').filter(Boolean) || []
  )
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.get('type')?.split(',').filter(Boolean) || []
  )
  const [selectedBhk, setSelectedBhk] = useState<string[]>(
    searchParams.get('bhk')?.split(',').filter(Boolean) || []
  )
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000000])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [showLuxuryOnly, setShowLuxuryOnly] = useState(
    searchParams.get('luxury') === 'true'
  )
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const toggleCompare = useCompareStore((state) => state.toggleCompare)
  const isComparing = useCompareStore((state) => state.isComparing)

  const filteredProperties = useMemo(() => {
    let filtered = [...properties]

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.builder.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.area.toLowerCase().includes(query)
      )
    }

    // Location filter
    if (selectedLocations.length > 0) {
      filtered = filtered.filter((p) => selectedLocations.includes(p.location))
    }

    // Property type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.type))
    }

    // BHK filter
    if (selectedBhk.length > 0) {
      filtered = filtered.filter((p) =>
        p.bhk.some((bhk) => selectedBhk.includes(bhk))
      )
    }

    // Price range filter
    filtered = filtered.filter(
      (p) => p.priceValue >= priceRange[0] && p.priceValue <= priceRange[1]
    )

    // Status filter
    if (selectedStatus.length > 0) {
      filtered = filtered.filter((p) => selectedStatus.includes(p.status))
    }

    // Luxury filter
    if (showLuxuryOnly) {
      filtered = filtered.filter((p) => p.luxury)
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.priceValue - b.priceValue)
        break
      case 'price-high':
        filtered.sort((a, b) => b.priceValue - a.priceValue)
        break
      case 'newest':
        filtered.sort((a, b) => (a.status === 'New Launch' ? -1 : 1))
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
    }

    return filtered
  }, [
    searchQuery,
    selectedLocations,
    selectedTypes,
    selectedBhk,
    priceRange,
    selectedStatus,
    showLuxuryOnly,
    sortBy,
  ])

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    )
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const toggleBhk = (bhk: string) => {
    setSelectedBhk((prev) =>
      prev.includes(bhk) ? prev.filter((b) => b !== bhk) : [...prev, bhk]
    )
  }

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    )
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedLocations([])
    setSelectedTypes([])
    setSelectedBhk([])
    setPriceRange([0, 1000000000])
    setSelectedStatus([])
    setShowLuxuryOnly(false)
  }

  const activeFiltersCount =
    selectedLocations.length +
    selectedTypes.length +
    selectedBhk.length +
    selectedStatus.length +
    (showLuxuryOnly ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 1000000000 ? 1 : 0)

  const formatPrice = (value: number) => {
    if (value >= 10000000) {
      return `${(value / 10000000).toFixed(1)} Cr`
    } else if (value >= 100000) {
      return `${(value / 100000).toFixed(1)} L`
    }
    return value.toString()
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Location */}
      <div>
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Location
        </h4>
        <div className="space-y-3">
          {locations.map((location) => (
            <label
              key={location}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">
                {location}
              </span>
              <span className="text-xs text-muted-foreground ml-auto">
                ({properties.filter((p) => p.location === location).length})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" />
          Property Type
        </h4>
        <div className="space-y-3">
          {propertyTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">
                {type}
              </span>
              <span className="text-xs text-muted-foreground ml-auto">
                ({properties.filter((p) => p.type === type).length})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* BHK */}
      <div>
        <h4 className="font-semibold mb-4">Configuration</h4>
        <div className="flex flex-wrap gap-2">
          {bhkOptions.map((bhk) => (
            <Button
              key={bhk}
              variant={selectedBhk.includes(bhk) ? 'default' : 'outline'}
              size="sm"
              onClick={() => toggleBhk(bhk)}
              className={cn(
                'rounded-full',
                selectedBhk.includes(bhk)
                  ? 'bg-primary text-primary-foreground'
                  : 'border-border/50'
              )}
            >
              {bhk}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-4">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            min={0}
            max={1000000000}
            step={5000000}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div>
        <h4 className="font-semibold mb-4">Status</h4>
        <div className="space-y-3">
          {['Ready to Move', 'Under Construction', 'New Launch'].map((status) => (
            <label
              key={status}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedStatus.includes(status)}
                onCheckedChange={() => toggleStatus(status)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">
                {status}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Luxury Only */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <Checkbox
            checked={showLuxuryOnly}
            onCheckedChange={(checked) => setShowLuxuryOnly(checked as boolean)}
          />
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm group-hover:text-primary transition-colors">
            Luxury Properties Only
          </span>
        </label>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
          onClick={clearAllFilters}
        >
          Clear All Filters ({activeFiltersCount})
        </Button>
      )}
    </div>
  )

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Luxury <span className="text-green-700">Properties</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover {filteredProperties.length} premium properties in Hyderabad&apos;s
              most prestigious locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-lg border-b border-border/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search properties, builders, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>

            {/* Quick Filters & Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="lg:hidden border-border/50 gap-2"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge className="ml-1 bg-primary text-primary-foreground">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Active Filter Tags */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {selectedLocations.map((loc) => (
                  <Badge
                    key={loc}
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-destructive/20"
                    onClick={() => toggleLocation(loc)}
                  >
                    {loc}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
                {selectedTypes.map((type) => (
                  <Badge
                    key={type}
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-destructive/20"
                    onClick={() => toggleType(type)}
                  >
                    {type}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
                {showLuxuryOnly && (
                  <Badge
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-destructive/20"
                    onClick={() => setShowLuxuryOnly(false)}
                  >
                    <Sparkles className="w-3 h-3" />
                    Luxury
                    <X className="w-3 h-3" />
                  </Badge>
                )}
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-secondary/50 border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="hidden md:flex items-center border border-border/50 rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'rounded-none',
                    viewMode === 'grid' && 'bg-primary text-primary-foreground'
                  )}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'rounded-none',
                    viewMode === 'list' && 'bg-primary text-primary-foreground'
                  )}
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-36 glass rounded-xl p-6">
                <FilterContent />
              </div>
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              {filteredProperties.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={clearAllFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${sortBy}-${viewMode}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      'grid gap-6',
                      viewMode === 'grid'
                        ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                        : 'grid-cols-1'
                    )}
                  >
                    {filteredProperties.map((property, index) => (
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
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-shimmer w-32 h-32 rounded-xl" />
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  )
}
