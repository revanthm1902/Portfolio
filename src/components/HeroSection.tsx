import { Button } from '@/components/ui/button';
import { Mail, FileText, Code, Zap, Award, Coffee } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import SkillsCarousel from './SkillsCarousel';

interface HeroSectionProps {
  onNavigateToContact?: () => void;
}

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

const HeroSection = ({ onNavigateToContact }: HeroSectionProps) => {
  const stats = [
    { icon: Code, value: '10+', label: 'Projects Built', color: 'neon-purple' },
    { icon: Zap, value: '2+', label: 'Internships', color: 'neon-cyan' },
    { icon: Award, value: '300+', label: 'DSA Problems', color: 'neon-green' },
    { icon: Coffee, value: '5+', label: 'Hackathon Wins', color: 'neon-purple' }
  ];

  const typingTexts = [
    'Full Stack Developer',
    'IoT & Embedded Systems',
    'AI/ML Engineer',
    'Data Analyst',
    'Problem Solver',
    'Open Source Contributor'
  ];

  const handleConnectClick = () => onNavigateToContact?.();

  const handleViewResume = () => {
    window.open('/#/resume', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient bg-grid relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/4 top-1/4 w-[50vw] h-[50vw] max-w-xl max-h-xl bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green opacity-20 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-[35vw] h-[35vw] max-w-lg max-h-lg bg-gradient-to-br from-neon-cyan via-neon-green to-neon-purple opacity-15 blur-2xl rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Floating Particles - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-purple/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center space-y-10 sm:space-y-12 lg:space-y-16 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div className="space-y-4 sm:space-y-6 lg:space-y-8" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space font-bold leading-tight">
            <span className="text-foreground">Hello, I'm </span>
            <motion.span
              className="text-neon-purple inline-block"
              style={{
                textShadow: '0 0 12px rgba(168,85,247,0.5), 0 0 24px rgba(34,211,238,0.3)'
              }}
              animate={{ 
                textShadow: [
                  '0 0 12px rgba(168,85,247,0.5), 0 0 24px rgba(34,211,238,0.3)',
                  '0 0 20px rgba(168,85,247,0.7), 0 0 40px rgba(34,211,238,0.5)',
                  '0 0 12px rgba(168,85,247,0.5), 0 0 24px rgba(34,211,238,0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              REVANTH
            </motion.span>
          </h1>
          
          <motion.div 
            className="h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green rounded-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
            <span className="text-neon-cyan mr-2 hidden sm:inline">&gt;</span>
            <TypingAnimation 
              texts={typingTexts}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-neon-green"
            />
          </div>
        </motion.div>

        {/* Skills Carousel */}
        <motion.div variants={itemVariants}>
          <SkillsCarousel />
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-4 sm:p-5 lg:p-6 text-center group"
              variants={statVariants}
              custom={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-${stat.color} group-hover:animate-bounce-slow`} />
              <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              size="lg" 
              className="ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 neon-glow px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
              onClick={handleConnectClick}
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Let's Connect
              </span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="ui-btn border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
              onClick={handleViewResume}
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                View Resume
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
