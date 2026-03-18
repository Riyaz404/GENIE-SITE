'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Home,
  TrendingUp,
  Target,
  Heart,
  Shield,
  Clock,
  ArrowUpRight,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const stats = [
  { label: 'Years of Excellence', value: '14+', icon: Clock },
  { label: 'Properties Sold', value: '2,500+', icon: Home },
  { label: 'Happy Families', value: '2,000+', icon: Heart },
  { label: 'Expert Consultants', value: '50+', icon: Users },
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We believe in complete transparency in all our dealings. Every property we list is verified and legally clear.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from property selection to client service.',
  },
  {
    icon: Target,
    title: 'Client Focus',
    description: 'Your dream home is our mission. We go above and beyond to understand and fulfill your requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description: 'Our deep understanding of Hyderabad\'s real estate market ensures you make informed decisions.',
  },
]

const team = [
  {
    name: 'Chaitanya Kola',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: '20+ years in luxury real estate',
  },
  {
    name: 'Chaitanya Kola',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Expert in premium property deals',
  },
  {
    name: 'Chaitanya  Kola',
    role: 'Chief Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Streamlining client experiences',
  },
  {
    name: 'Chaitanya Kola',
    role: 'Legal Head',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Ensuring smooth transactions',
  },
]

const milestones = [
  { year: '2010', event: 'Genie Realty founded in Hyderabad' },
  { year: '2013', event: 'Expanded to cover entire Hyderabad metro' },
  { year: '2016', event: 'Launched luxury property division' },
  { year: '2018', event: 'Partnered with top 20 developers' },
  { year: '2020', event: 'Digital transformation & virtual tours' },
  { year: '2023', event: 'Crossed 2000+ happy families milestone' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury Property"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-6">
              Redefining <span className="text-gradient-gold">Luxury Living</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2010, Genie Realty has been Hyderabad&apos;s trusted partner in luxury real estate. 
              We don&apos;t just sell properties; we help families find their dream homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold font-serif mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-primary uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Making Luxury <span className="text-gradient-gold">Accessible</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Genie Realty, we believe everyone deserves to live in a home that inspires them. 
                Our mission is to make the luxury real estate experience seamless, transparent, and 
                personalized for every client.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine deep market expertise with cutting-edge technology to help you find 
                properties that perfectly match your lifestyle and aspirations. From the first 
                consultation to the final handover, we&apos;re with you every step of the way.
              </p>

              <div className="glass-gold rounded-xl p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg italic mb-4">
                  &quot;We don&apos;t just show houses, we help build homes and create lasting memories.&quot;
                </p>
                <p className="text-sm text-muted-foreground">— Chaitanya Kola, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Key <span className="text-gradient-gold">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="text-xl font-bold text-gradient-gold font-serif">
                    {milestone.year}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                  <div className="absolute left-[5px] top-5 w-0.5 h-full bg-border" />
                </div>
                <div className="flex-1 pb-8 pl-4">
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary uppercase tracking-widest">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Leadership <span className="text-gradient-gold">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Find Your <span className="text-gradient-gold">Dream Home?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let our expert team guide you through Hyderabad&apos;s finest luxury properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto">
                  Explore Properties
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-primary/30 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
