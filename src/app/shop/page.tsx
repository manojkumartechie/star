"use client"

import { ProductCard } from "@/components/product/product-card"
import { products, categories } from "@/lib/data"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products

    return (
        <div className="container px-4 md:px-6 mx-auto py-10">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                        <div className="space-y-2">
                            <Button
                                variant={selectedCategory === null ? "secondary" : "ghost"}
                                className="w-full justify-start"
                                onClick={() => setSelectedCategory(null)}
                            >
                                All Products
                            </Button>
                            {categories.map((category) => (
                                <Button
                                    key={category.name}
                                    variant={selectedCategory === category.name ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Price Range</h3>
                        <Slider defaultValue={[0, 1000]} max={1000} step={10} className="mb-4" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>$0</span>
                            <span>$1000+</span>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Availability</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="instock" />
                                <Label htmlFor="instock">In Stock</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="new" />
                                <Label htmlFor="new">New Arrivals</Label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight mb-2">
                            {selectedCategory || "All Products"}
                        </h1>
                        <p className="text-muted-foreground">
                            Showing {filteredProducts.length} results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
