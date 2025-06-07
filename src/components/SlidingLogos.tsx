
import React from 'react';

const SlidingLogos = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'GraphQL', icon: '🔗' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Git', icon: '📚' },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-slide-infinite">
        {/* First set of logos */}
        <div className="flex space-x-12 mr-12">
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center space-y-2 min-w-[80px] group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-mono text-muted-foreground group-hover:text-neon-cyan transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-12 mr-12">
          {technologies.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex flex-col items-center space-y-2 min-w-[80px] group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-mono text-muted-foreground group-hover:text-neon-cyan transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;
