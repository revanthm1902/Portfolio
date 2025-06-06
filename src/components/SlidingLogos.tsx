
import { useEffect, useState } from 'react';

const SlidingLogos = () => {
  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Vue.js', color: '#4FC08D' },
    { name: 'Angular', color: '#DD0031' },
    { name: 'Express', color: '#000000' },
    { name: 'Django', color: '#092E20' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Kubernetes', color: '#326CE5' },
    { name: 'Jenkins', color: '#D24939' }
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-transparent via-neon-purple/10 to-transparent py-8">
      <div className="flex animate-scroll-left space-x-8">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 glass-card px-6 py-3 border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: `0 0 20px ${tech.color}30`
            }}
          >
            <span 
              className="font-mono text-sm font-medium whitespace-nowrap"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingLogos;
