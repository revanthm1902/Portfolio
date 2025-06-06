
import { Code2, Database, Server, Smartphone, Globe, Cpu, Cloud, GitBranch } from 'lucide-react';

const SlidingLogos = () => {
  const technologies = [
    { name: 'React', icon: Code2, color: 'text-blue-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
    { name: 'Next.js', icon: Globe, color: 'text-white' },
    { name: 'React Native', icon: Smartphone, color: 'text-cyan-400' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Docker', icon: Cpu, color: 'text-blue-600' },
    { name: 'Git', icon: GitBranch, color: 'text-red-400' },
    { name: 'Python', icon: Code2, color: 'text-yellow-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
    { name: 'GraphQL', icon: Server, color: 'text-pink-400' },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
      
      <div className="flex animate-slide-infinite">
        {/* First set of logos */}
        <div className="flex space-x-16 items-center min-w-full">
          {technologies.map((tech, index) => (
            <div 
              key={`first-${index}`}
              className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity group"
            >
              <div className={`p-4 glass-card ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="h-8 w-8" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Second set of logos for seamless loop */}
        <div className="flex space-x-16 items-center min-w-full">
          {technologies.map((tech, index) => (
            <div 
              key={`second-${index}`}
              className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity group"
            >
              <div className={`p-4 glass-card ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="h-8 w-8" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;
