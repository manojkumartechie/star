import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl">S</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">STAR</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Experience the future of shopping. Premium products, delivered at light speed.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/shop/electronics" className="hover:text-primary">Electronics</Link></li>
                            <li><Link href="/shop/fashion" className="hover:text-primary">Fashion</Link></li>
                            <li><Link href="/shop/home" className="hover:text-primary">Home & Living</Link></li>
                            <li><Link href="/shop/new" className="hover:text-primary">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                            <li><Link href="/returns" className="hover:text-primary">Returns</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary">Shipping Info</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4 text-muted-foreground">
                            <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-muted-foreground">
                                © {new Date().getFullYear()} Star Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
