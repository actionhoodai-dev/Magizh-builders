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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
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
                className="fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none"
            >
                <div className="opacity-40 scale-75">
                    <Logo animated={isTransitioning} size={250} />
                </div>
            </motion.div>
        </>
    );
}
