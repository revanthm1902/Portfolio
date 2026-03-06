import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  className?: string;
  /** Use CSS animate-float instead of framer motion */
  cssAnimation?: boolean;
}

/** Memoized random positions so they don't regenerate on re-render */
function generateParticles(count: number) {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 6 + Math.random() * 4,
  }));
}

const FloatingParticles = ({
  count = 15,
  color = 'bg-neon-cyan/20',
  className = '',
  cssAnimation = false,
}: FloatingParticlesProps) => {
  const particles = useMemo(() => generateParticles(count), [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) =>
        cssAnimation ? (
          <div
            key={i}
            className={`absolute rounded-full ${color} animate-float`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ) : (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ),
      )}
    </div>
  );
};

export default FloatingParticles;
