
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Zap, Award, Coffee } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import SlidingLogos from './SlidingLogos';

const HeroSection = () => {
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

  const funFacts = [
    "🚀 I debug with console.log and I'm not ashamed!",
    "☕ My code-to-coffee ratio is perfectly balanced",
    "🎮 I learned problem-solving from video games",
    "🌙 My best ideas come at 2 AM (don't ask why)",
    "🔥 I can center a div... most of the time",
    "🎯 Turning 'it works on my machine' into production magic"
  ];
  
  const typingTexts = [
    'Full Stack Developer',
    'Digital Architect', 
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-section="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Fun Facts Section */}
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-2xl font-space text-neon-cyan">Random Dev Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="glass-card p-4 text-sm text-muted-foreground hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Tech Logos */}
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-2xl font-space text-neon-green">Technologies I Work With</h3>
          <SlidingLogos />
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
            className="ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-105 group px-8 py-4"
            onClick={scrollToContact}
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
            href: '#',
            label: 'GitHub',
            color: 'hover:text-neon-purple'
          }, {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn',
            color: 'hover:text-neon-cyan'
          }, {
            icon: Mail,
            href: '#',
            label: 'Email',
            color: 'hover:text-neon-green'
          }].map((social, index) => (
            <a 
              key={social.label} 
              href={social.href} 
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
