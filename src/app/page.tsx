"use client"

import { Hero3D } from "@/components/home/hero-3d"
import { ProductCard } from "@/components/product/product-card"
import { products, categories } from "@/lib/data"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const trendingProducts = products.filter(p => p.isTrending)

  return (
    <div className="flex flex-col min-h-screen">
      <Hero3D />

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
            <Link href="/shop" className="text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/shop/${category.name.toLowerCase()}`} className="group block relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            <p className="text-muted-foreground mt-2">Top picks from across the galaxy.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Sign up for Star Prime and get instant quantum delivery on all orders.
            </p>
            <Link href="/register" className="inline-flex h-12 items-center justify-center rounded-full bg-background text-foreground px-8 text-lg font-medium transition-colors hover:bg-background/90">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
