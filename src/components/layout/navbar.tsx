"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { useCartStore } from "@/lib/store"

const categories = [
    { name: "Electronics", href: "/shop/electronics" },
    { name: "Fashion", href: "/shop/fashion" },
    { name: "Home & Living", href: "/shop/home" },
    { name: "Beauty", href: "/shop/beauty" },
    { name: "Sports", href: "/shop/sports" },
]

export function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)
    const totalItems = useCartStore((state) => state.totalItems())
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {categories.map((category) => (
                                <Link
                                    key={category.name}
                                    href={category.href}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">S</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
                        STAR
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Search Toggle (Mobile) / Input (Desktop) */}
                    <div className="hidden md:flex relative w-full max-w-sm items-center">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-9 w-[200px] lg:w-[300px] bg-muted/50 focus:bg-background transition-colors"
                        />
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    {/* Cart */}
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {mounted && totalItems > 0 && (
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                                {totalItems}
                            </Badge>
                        )}
                        <span className="sr-only">Open cart</span>
                    </Button>

                    {/* Theme Toggle */}
                    <ModeToggle />
                </div>
            </div>

            {/* Mobile Search Bar */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-t bg-background px-4 py-2"
                    >
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-9 w-full bg-muted/50"
                                autoFocus
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
