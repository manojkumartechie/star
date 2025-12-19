"use client"

import { products } from "@/lib/data"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Share2, Truck, ShieldCheck } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCartStore } from "@/lib/store"

export default function ProductPage() {
    const params = useParams()
    const product = products.find(p => p.id === params.id)
    const [quantity, setQuantity] = useState(1)
    const addItem = useCartStore((state) => state.addItem)

    if (!product) {
        return <div className="container py-20 text-center">Product not found</div>
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product)
        }
    }

    return (
        <div className="container px-4 md:px-6 mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/* Product Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-muted border cursor-pointer hover:ring-2 ring-primary transition-all">
                                <Image
                                    src={product.image}
                                    alt={`${product.name} view ${i}`}
                                    fill
                                    className="object-cover opacity-80 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col"
                >
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-primary border-primary">{product.category}</Badge>
                            {product.isNew && <Badge>New Arrival</Badge>}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-amber-500">
                                <Star className="h-5 w-5 fill-current" />
                                <span className="font-medium ml-1">{product.rating}</span>
                            </div>
                            <span className="text-muted-foreground">({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="text-4xl font-bold text-primary mb-6">
                        ${product.price.toFixed(2)}
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                        <br />
                        Experience next-generation performance with premium materials and cutting-edge technology.
                        Designed for the future, available today.
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border rounded-md">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                -
                            </Button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                        <Button size="lg" className="flex-1 rounded-full text-lg" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="rounded-full">
                            <Share2 className="h-5 w-5" />
                        </Button>
                    </div>

                    <Separator className="mb-8" />

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Truck className="h-5 w-5 text-primary" />
                            <span>Free Quantum Shipping</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span>2-Year Galaxy Warranty</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tabs Section */}
            <div className="mt-16">
                <Tabs defaultValue="details">
                    <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                        <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-lg">Details</TabsTrigger>
                        <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-lg">Specifications</TabsTrigger>
                        <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-lg">Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="py-6">
                        <div className="prose dark:prose-invert max-w-none">
                            <p>Full product details and marketing copy would go here.</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="specs" className="py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-medium">Material</span>
                                <span className="text-muted-foreground">Nano-fiber</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-medium">Weight</span>
                                <span className="text-muted-foreground">142g</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-medium">Dimensions</span>
                                <span className="text-muted-foreground">10 x 5 x 2 cm</span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="reviews" className="py-6">
                        <p>Customer reviews section.</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
