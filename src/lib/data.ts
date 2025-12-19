export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    rating: number
    reviews: number
    isNew?: boolean
    isTrending?: boolean
}

export const products: Product[] = [
    {
        id: "1",
        name: "Quantum Headset X",
        description: "Immersive audio with active noise cancellation and holographic soundstage.",
        price: 299.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        rating: 4.8,
        reviews: 124,
        isTrending: true,
    },
    {
        id: "2",
        name: "Nebula Smartwatch",
        description: "Track your health across dimensions. 30-day battery life.",
        price: 199.50,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        rating: 4.6,
        reviews: 89,
        isNew: true,
    },
    {
        id: "3",
        name: "Cyber Sneakers 2077",
        description: "Self-lacing, adaptive cushioning for urban exploration.",
        price: 159.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        rating: 4.9,
        reviews: 210,
        isTrending: true,
    },
    {
        id: "4",
        name: "Holo-Lens Glasses",
        description: "Augmented reality glasses with sleek design and all-day comfort.",
        price: 499.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
        rating: 4.7,
        reviews: 56,
    },
    {
        id: "5",
        name: "Gravity Backpack",
        description: "Anti-gravity suspension system makes heavy loads feel light.",
        price: 89.99,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
        rating: 4.5,
        reviews: 112,
    },
    {
        id: "6",
        name: "Smart Plant Pot",
        description: "AI-driven plant care system. Never kill a plant again.",
        price: 45.00,
        category: "Home & Living",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        rating: 4.8,
        reviews: 340,
        isNew: true,
    },
]

export const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049381145-06f438bff84d?w=800&q=80" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80" },
    { name: "Home & Living", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80" },
    { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&q=80" },
]
