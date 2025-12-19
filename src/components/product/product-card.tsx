"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/lib/data"
import { useCartStore } from "@/lib/store"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addItem(product)
    }

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="overflow-hidden group border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="relative aspect-square overflow-hidden bg-muted">
                    {product.isNew && (
                        <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
                            New
                        </Badge>
                    )}
                    {product.isTrending && (
                        <Badge variant="secondary" className="absolute top-2 right-2 z-10">
                            Trending
                        </Badge>
                    )}
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Add to cart</span>
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Add to wishlist</span>
                        </Button>
                    </div>
                </div>

                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <div className="flex items-center gap-1 text-amber-500">
                            <Star className="h-3 w-3 fill-current" />
                            <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                    </div>
                    <Link href={`/product/${product.id}`} className="hover:underline">
                        <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                    </Link>
                    <p className="text-xl font-bold mt-2 text-primary">
                        ${product.price.toFixed(2)}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
