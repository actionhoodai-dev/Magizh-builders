'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Logo({ size = 180, animated = true }: { size?: number, animated?: boolean }) {
    return (
        <motion.div
            initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center"
            style={{ width: size, height: size * 1.2 }}
        >
            <div className="relative w-full h-full">
                <Image
                    src="/images/logo-full.png"
                    alt="Magizh Builders Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority
                />
            </div>

            {/* Subtle Engineering Pulse/Glow */}
            {animated && (
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-accent rounded-full filter blur-3xl -z-10"
                />
            )}
        </motion.div>
    );
}
