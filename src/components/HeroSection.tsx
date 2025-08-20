import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Zap, Award, Coffee, FileText } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import SkillsCarousel from './SkillsCarousel';

interface HeroSectionProps {
  onNavigateToContact?: () => void;
}

const HeroSection = ({ onNavigateToContact }: HeroSectionProps) => {
  const stats = [{
    icon: Code,
    value: '10+',
    label: 'Projects Built',
    color: 'neon-purple'
  }, {
    icon: Zap,
    value: '3+',
    label: 'Years Experience',
    color: 'neon-cyan'
  }, {
    icon: Award,
    value: '10+',
    label: 'Certifications',
    color: 'neon-green'
  }, {
    icon: Coffee,
    value: '∞',
    label: 'Cups of Coffee',
    color: 'neon-purple'
  }];

  const typingTexts = [
    'Full Stack Developer',
    'Digital Architect', 
    'UI/UX Designer',
    'Data Analyst',
    'Problem Solver',
    'Tech Innovator',
    'System Designer'
  ];

  const handleConnectClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  const handleViewResume = () => {
    window.open('/#/resume', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient bg-grid relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-20">
      {/* Premium Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green opacity-30 blur-3xl animate-pulse-glow rounded-full" style={{ filter: 'blur(80px)' }} />
        <div className="absolute right-1/4 bottom-1/4 w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-neon-cyan via-neon-green to-neon-purple opacity-20 blur-2xl animate-pulse-glow rounded-full" style={{ filter: 'blur(60px)' }} />
      </div>

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

      <div className="relative z-10 text-center space-y-16 lg:space-y-20 max-w-7xl mx-auto w-full">
        {/* Main Title */}
        <div className="space-y-8 lg:space-y-12">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space font-bold animate-fade-in leading-tight">
              <span className="text-foreground block sm:inline">Hello, I'm </span>
              <span
                className="text-neon-purple block sm:inline mt-2 sm:mt-0"
                style={{
                  textShadow:
                    '0 0 12px rgba(168,85,247,0.5), 0 0 24px rgba(34,211,238,0.3)' +
                    (typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
                      ? ', 0 0 8px rgba(168,85,247,0.3)'
                      : ', 0 0 24px rgba(168,85,247,0.7)')
                }}
              >
                REVANTH
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green rounded-full mt-6 animate-pulse max-w-2xl mx-auto"></div>
          </div>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-muted-foreground animate-slide-in-left min-h-[3rem] flex items-center justify-center px-4">
            <span className="text-neon-cyan mr-2 hidden sm:inline">&gt;</span>
            <TypingAnimation 
              texts={typingTexts}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-neon-green"
            />
          </div>
          
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in space-y-4">
              <span className="block">
                From backend brains to frontend flair,<br className="hidden sm:inline" />
                I code solutions beyond compare.
              </span>
              <span className="block">
                I debug, I build, I think in flow —<br className="hidden sm:inline" />
                A future-maker, in full-stack mode.
              </span>
              <span className="block">
                Ideas to apps, I bring them alive,<br className="hidden sm:inline" />
                Fuelled by purpose, I build to thrive.
              </span>
              <span className="block">
                Tech isn't just code — it's the art I unfold,<br className="hidden sm:inline" />
                Crafting bold futures in frameworks of gold.
              </span>
            </p>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="animate-scale-in px-4">
          <SkillsCarousel />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in px-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass-card p-4 sm:p-6 lg:p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group border border-white/20 rounded-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 mx-auto mb-2 sm:mb-4 text-${stat.color} group-hover:animate-bounce-slow`} />
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${stat.color} animate-glow mb-1 sm:mb-2`}>{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center animate-scale-in px-4">
          <Button 
            size="lg" 
            className="ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow transition-all duration-300 hover:scale-[1.02] group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={handleConnectClick}
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-wave" />
              Let's Connect
            </span>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="ui-btn border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-[1.02] group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={handleViewResume}
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce-slow" />
              View Resume
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
