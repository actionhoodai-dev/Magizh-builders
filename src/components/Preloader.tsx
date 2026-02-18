'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading or wait for actual load
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Faster, more responsive load

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
                >
                    <Logo size={400} />

                    {/* Minimal Technical Loading Indicator */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="h-[1px] bg-accent/30 mt-12 relative overflow-hidden"
                    >
                        <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-accent w-1/2"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
