'use client';

import { cn } from '@/lib/utils';

interface TrianglePatternProps {
    className?: string;
    opacity?: string;
}

export default function TrianglePattern({ className, opacity = "opacity-[0.12]" }: TrianglePatternProps) {
    return (
        <div className={cn("absolute inset-0 z-0 pointer-events-none", opacity, className)}>
            <svg width="100%" height="100%">
                <pattern id="minuteTriangles" width="40" height="70" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                    {/* Upward Triangles */}
                    <path d="M 20 0 L 40 35 L 0 35 Z" fill="white" opacity="0.4" />
                    <path d="M 20 35 L 40 70 L 0 70 Z" fill="white" opacity="0.2" />
                    {/* Downward Triangles */}
                    <path d="M 0 0 L 20 35 L 40 0 Z" fill="white" opacity="0.1" />
                    <path d="M 0 35 L 20 70 L 40 35 Z" fill="white" opacity="0.3" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#minuteTriangles)" />
            </svg>
        </div>
    );
}
