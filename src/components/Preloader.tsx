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
        }, 4500); // Enough time for logo animation

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
                    <Logo size={250} />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 text-center"
                    >
                        <h1 className="text-2xl font-serif tracking-[0.2em] uppercase text-primary">
                            Magizh Builders
                        </h1>
                        <p className="mt-2 text-sm tracking-[0.3em] uppercase text-accent/80 font-sans">
                            Architecting Dreams
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
