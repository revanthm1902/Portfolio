
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Zap, Award, Coffee } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const HeroSection = ({ setCurrentSection }: { setCurrentSection: (section: string) => void }) => {
  const stats = [{
    icon: Code,
    value: '50+',
    label: 'Projects Built',
    color: 'neon-purple'
  }, {
    icon: Zap,
    value: '3+',
    label: 'Years Experience',
    color: 'neon-cyan'
  }, {
    icon: Award,
    value: '15+',
    label: 'Certifications',
    color: 'neon-green'
  }, {
    icon: Coffee,
    value: '∞',
    label: 'Cups of Coffee',
    color: 'neon-purple'
  }];

  // Technology logos for sliding animation
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Git', logo: '📦' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Vue.js', logo: '💚' }
  ];
  
  const typingTexts = [
    'Full Stack Developer',
    'Digital Architect', 
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const funnyFacts = [
    "I debug code faster than I debug my life 🐛",
    "Coffee-to-code converter since 2020 ☕",
    "I speak fluent JavaScript and broken English 😄",
    "Turning caffeine into clean code daily ⚡",
    "Professional googler of error messages 🔍"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient bg-grid relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="shape w-4 h-4 bg-neon-purple rounded-full" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }} 
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i + 20} 
            className="shape w-2 h-8 bg-neon-cyan rounded-full" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }} 
          />
        ))}
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-neon-purple/30 animate-float" 
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`
            }} 
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 px-4 max-w-6xl">
        {/* Main Title */}
        <div className="space-y-8">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-space font-bold animate-fade-in">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-neon-purple text-glow animate-glow">Revanth</span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green rounded-full mt-4 animate-pulse"></div>
          </div>
          
          <div className="text-2xl md:text-4xl font-mono text-muted-foreground animate-slide-in-left min-h-[3rem] flex items-center justify-center">
            <span className="text-neon-cyan mr-2">&gt;</span>
            <TypingAnimation 
              texts={typingTexts}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-neon-green"
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Crafting digital experiences with cutting-edge technology and creative innovation. 
            I transform complex problems into elegant, scalable solutions that make a difference.
            Passionate about building the future, one line of code at a time.
          </p>
        </div>

        {/* Funny Facts */}
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 animate-scale-in">
          <h3 className="text-xl font-space text-neon-cyan mb-4">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {funnyFacts.map((fact, index) => (
              <div key={index} className="text-sm text-muted-foreground bg-background/20 p-3 rounded-lg border border-neon-cyan/20">
                {fact}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Logos Slider */}
        <div className="overflow-hidden w-full animate-scale-in">
          <div className="flex space-x-8 animate-slide-infinite">
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex flex-col items-center gap-2 p-4 glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <span className="text-3xl group-hover:animate-bounce-slow">{tech.logo}</span>
                <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group border border-white/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className={`h-10 w-10 mx-auto mb-4 text-${stat.color} group-hover:animate-bounce-slow`} />
              <div className={`text-3xl font-bold text-${stat.color} animate-glow mb-2`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
          <Button 
            size="lg" 
            onClick={() => setCurrentSection('contact')}
            className="ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-105 group px-8 py-4"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-6 w-6 group-hover:animate-wave" />
              Let's Connect
            </span>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="ui-btn border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105 group px-8 py-4"
          >
            <span className="flex items-center gap-3">
              <Download className="h-6 w-6 group-hover:animate-bounce-slow" />
              Download Resume
            </span>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-10 animate-fade-in">
          {[{
            icon: Github,
            href: 'https://github.com/revanthm051',
            label: 'GitHub',
            color: 'hover:text-neon-purple'
          }, {
            icon: Linkedin,
            href: 'https://linkedin.com/in/revanth-m',
            label: 'LinkedIn',
            color: 'hover:text-neon-cyan'
          }, {
            icon: Mail,
            href: 'mailto:revanthm051@gmail.com',
            label: 'Email',
            color: 'hover:text-neon-green'
          }].map((social, index) => (
            <a 
              key={social.label} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 glass-card ${social.color} transition-all duration-300 hover:scale-110 group relative overflow-hidden border border-white/20`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <social.icon className="h-8 w-8 text-muted-foreground group-hover:text-current transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
