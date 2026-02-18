'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Show transition overlay briefly on route change
        setIsTransitioning(true);
        const timer = setTimeout(() => setIsTransitioning(false), 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                }}
            >
                {children}
            </motion.div>

            {/* Shortened Page Transition Overlay */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{
                    scaleY: isTransitioning ? 1 : 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1]
                }}
                style={{ originY: isTransitioning ? 1 : 0 }}
                className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
            >
                <Logo animated={isTransitioning} size={400} />

                {/* Unified technical progress hint */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isTransitioning ? "200px" : 0 }}
                    transition={{ duration: 0.6 }}
                    className="h-[1px] bg-accent/20 mt-12 relative overflow-hidden"
                >
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-accent w-1/2"
                    />
                </motion.div>
            </motion.div>
        </>
    );
}
