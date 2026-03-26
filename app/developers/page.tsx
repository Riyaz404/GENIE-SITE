'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  Star,
  MapPin,
  Calendar,
  ArrowUpRight,
  Search,
  Award,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { developers, properties } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDevelopers = developers.filter((dev) =>
    dev.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getProjectCount = (developerName: string) => {
    return properties.filter((p) => p.builder === developerName).length
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Trusted Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
              Top <span className="text-green-700">Developers</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              We partner with India&apos;s most reputed real estate developers to bring you the finest luxury properties in Hyderabad.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search developers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background border-border/50 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Partner Developers', value: developers.length + '+', icon: Building2 },
              { label: 'Total Projects', value: '1000+', icon: Award },
              { label: 'Average Rating', value: '4.7', icon: Star },
              { label: 'Years Combined', value: '200+', icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 glass rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-gradient-gold font-serif">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevelopers.map((developer, index) => {
              const projectCount = getProjectCount(developer.name)
              return (
                <motion.div
                  key={developer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/developers/${developer.id}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          <Building2 className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {developer.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{developer.headquarters}</span>
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          <Star className="w-3 h-3 mr-1 fill-primary" />
                          {developer.rating}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {developer.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/30">
                        <div className="text-center">
                          <p className="text-lg font-semibold text-gradient-gold">
                            {developer.established}
                          </p>
                          <p className="text-xs text-muted-foreground">Est.</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-gradient-gold">
                            {developer.projectsCompleted}+
                          </p>
                          <p className="text-xs text-muted-foreground">Projects</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-semibold text-gradient-gold">
                            {developer.ongoingProjects}
                          </p>
                          <p className="text-xs text-muted-foreground">Ongoing</p>
                        </div>
                      </div>

                      {projectCount > 0 && (
                        <div className="pt-4 border-t border-border/30">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {projectCount} properties listed
                            </span>
                            <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                              View Projects
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {filteredDevelopers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Developers Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
