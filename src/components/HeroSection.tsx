
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Download, Code, Zap, Award, Coffee, ArrowRight, User, Briefcase, BookOpen, MessageCircle } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

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

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];
  
  const typingTexts = [
    'Full_Stack_Developer',
    'Digital_Architect', 
    'UI/UX_Enthusiast',
    'Problem_Solver',
    'Tech_Innovator',
    'Code_Craftsman'
  ];

  const quickLinks = [
    {
      icon: User,
      title: 'About Me',
      description: 'Learn about my journey and passion',
      color: 'neon-purple',
      section: 'about'
    },
    {
      icon: Code,
      title: 'My Skills',
      description: 'Technologies I work with',
      color: 'neon-cyan',
      section: 'skills'
    },
    {
      icon: Briefcase,
      title: 'Projects',
      description: 'Check out my latest work',
      color: 'neon-green',
      section: 'projects'
    },
    {
      icon: BookOpen,
      title: 'Blog',
      description: 'Read my thoughts on tech',
      color: 'neon-purple',
      section: 'blog'
    },
    {
      icon: MessageCircle,
      title: 'Contact',
      description: 'Let\'s work together',
      color: 'neon-cyan',
      section: 'contact'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient bg-grid relative overflow-hidden py-20">
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

      <div className="relative z-10 text-center space-y-16 px-4 max-w-7xl">
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

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className="px-6 py-3 glass-card text-sm font-mono text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-neon-cyan/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
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

        {/* Quick Links */}
        <div className="space-y-8">
          <h3 className="text-3xl font-space font-bold text-neon-cyan animate-glow">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={link.title}
                className="glass-card hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <link.icon className={`h-12 w-12 mx-auto mb-4 text-${link.color} group-hover:animate-bounce-slow`} />
                  <CardTitle className="text-xl text-foreground">{link.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ArrowRight className={`h-5 w-5 mx-auto text-${link.color} group-hover:translate-x-2 transition-transform duration-300`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
          <Button 
            size="lg" 
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
            href: 'https://linkedin.com/in/revanthm051',
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
