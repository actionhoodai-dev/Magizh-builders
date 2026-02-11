'use client';

import { motion } from 'framer-motion';

export default function Logo({ size = 180, animated = true }: { size?: number, animated?: boolean }) {
    const draw: any = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.3;
            return {
                pathLength: 1,
                opacity: 1,
                transition: animated ? {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                } : { duration: 0 }
            };
        }
    };

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 400 400"
            initial={animated ? "hidden" : "visible"}
            animate="visible"
            className="drop-shadow-sm"
        >
            {/* Outer Decorative Frame (Teal/Green) */}
            <motion.path
                d="M200,60 C260,60 310,110 310,170 C310,230 260,280 200,280 C140,280 90,230 90,170 C90,110 140,60 200,60"
                stroke="#00695C"
                strokeWidth="3"
                fill="none"
                variants={draw}
                custom={1}
            />

            {/* Top Scrolls */}
            <motion.path
                d="M170,55 Q200,30 230,55"
                stroke="#00695C"
                strokeWidth="3"
                fill="none"
                variants={draw}
                custom={2}
            />

            {/* Leafy Extensions Left */}
            <motion.path
                d="M100,150 Q40,140 30,220 Q80,210 100,240"
                stroke="#2E7D32"
                strokeWidth="3"
                fill="none"
                variants={draw}
                custom={3}
            />
            <motion.path
                d="M95,120 Q30,100 20,180 Q70,170 95,200"
                stroke="#43A047"
                strokeWidth="2"
                fill="none"
                variants={draw}
                custom={4}
            />

            {/* Leafy Extensions Right */}
            <motion.path
                d="M300,150 Q360,140 370,220 Q320,210 300,240"
                stroke="#2E7D32"
                strokeWidth="3"
                fill="none"
                variants={draw}
                custom={3}
            />
            <motion.path
                d="M305,120 Q370,100 380,180 Q330,170 305,200"
                stroke="#43A047"
                strokeWidth="2"
                fill="none"
                variants={draw}
                custom={4}
            />

            {/* Base Scrolls */}
            <motion.path
                d="M120,330 Q200,300 280,330"
                stroke="#00695C"
                strokeWidth="4"
                fill="none"
                variants={draw}
                custom={5}
            />
            <motion.path
                d="M140,350 Q200,320 260,350"
                stroke="#00695C"
                strokeWidth="3"
                fill="none"
                variants={draw}
                custom={6}
            />

            {/* The "M" with Peacock Feathers */}
            <motion.g custom={7} variants={draw}>
                {/* Left feather leg */}
                <motion.path
                    d="M150,220 C150,180 170,140 190,140"
                    stroke="#2E7D32"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    variants={draw}
                    custom={7}
                />
                {/* Right feather leg */}
                <motion.path
                    d="M250,220 C250,180 230,140 210,140"
                    stroke="#2E7D32"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    variants={draw}
                    custom={7}
                />
                {/* Middle V */}
                <motion.path
                    d="M190,140 L200,165 L210,140"
                    stroke="#2E7D32"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    variants={draw}
                    custom={8}
                />

                {/* Peacock Eyes */}
                <motion.circle cx="150" cy="220" r="10" fill="#1A237E" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3 : 0 }} />
                <motion.circle cx="150" cy="220" r="6" fill="#00BCD4" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.2 : 0 }} />
                <motion.circle cx="150" cy="220" r="3" fill="#FFC107" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.4 : 0 }} />

                <motion.circle cx="250" cy="220" r="10" fill="#1A237E" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3 : 0 }} />
                <motion.circle cx="250" cy="220" r="6" fill="#00BCD4" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.2 : 0 }} />
                <motion.circle cx="250" cy="220" r="3" fill="#FFC107" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.4 : 0 }} />

                <motion.circle cx="200" cy="165" r="8" fill="#1A237E" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.5 : 0 }} />
                <motion.circle cx="200" cy="165" r="5" fill="#00BCD4" initial={{ scale: animated ? 0 : 1 }} animate={{ scale: 1 }} transition={{ delay: animated ? 3.7 : 0 }} />
            </motion.g>
        </motion.svg>
    );
}
