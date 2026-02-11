'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform, animate } from 'framer-motion';

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
}

export default function Counter({ value, duration = 2, suffix = "" }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setDisplayValue(Math.floor(latest));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
}
