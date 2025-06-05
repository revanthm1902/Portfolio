
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient bg-grid relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-purple/20 animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-space font-bold animate-fade-in">
            <span className="text-foreground">Hello, I'm </span>
            <span className="text-neon-purple text-glow animate-glow">Alex</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-mono text-muted-foreground animate-slide-in-left">
            <span className="text-neon-cyan">&gt;</span> Full Stack Developer
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Crafting digital experiences with cutting-edge technology and creative innovation. 
            Turning complex problems into elegant solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="p-3 glass-card hover:bg-neon-purple/20 transition-all duration-300 hover:scale-110 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-neon-purple transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
