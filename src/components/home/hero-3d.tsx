"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import * as THREE from "three"

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#4f46e5" // Indigo-600
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

export function Hero3D() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-background flex flex-col md:flex-row items-center justify-center">
            {/* Text Content */}
            <div className="container relative z-10 flex flex-col items-start justify-center px-4 md:px-6 md:w-1/2 space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-cyan-400 dark:to-purple-500">
                        The Future of <br /> Shopping is Here.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-[600px]"
                >
                    Discover premium products curated for the modern lifestyle.
                    Immersive, fast, and secure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4"
                >
                    <Button size="lg" className="rounded-full text-lg px-8" asChild>
                        <Link href="/shop">
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                        Learn More
                    </Button>
                </motion.div>
            </div>

            {/* 3D Canvas */}
            <div className="absolute inset-0 md:relative md:w-1/2 h-full w-full opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto">
                <Canvas className="h-full w-full">
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />
                    <AnimatedSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>
        </section>
    )
}
