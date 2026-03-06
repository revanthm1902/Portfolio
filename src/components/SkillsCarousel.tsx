import { useRef, useState, useCallback, useEffect, memo } from 'react';
import { motion, useInView, useAnimationFrame } from 'framer-motion';

interface Skill {
  name: string;
  logo: string;
}

// Memoized skill card component for better performance
const SkillCard = memo(({ skill, isPaused }: { skill: Skill; isPaused: boolean }) => (
  <motion.div
    className="flex-shrink-0 mx-1.5 sm:mx-2 lg:mx-3 p-2 sm:p-3 glass-card rounded-xl group border border-white/10 hover:border-neon-cyan/50 cursor-pointer flex flex-col items-center gap-1.5 sm:gap-2"
    whileHover={!isPaused ? { scale: 1.1, y: -5 } : undefined}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center relative">
      <img 
        src={skill.logo} 
        alt={skill.name}
        className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain filter dark:invert transition-transform duration-300"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-neon-cyan transition-colors duration-200 text-center whitespace-nowrap">
      {skill.name}
    </span>
  </motion.div>
));

SkillCard.displayName = 'SkillCard';

const SkillsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const [speed, setSpeed] = useState(0.5);
  
  const skills: Skill[] = [
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
    { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
    { name: 'AWS', logo: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express' },
    { name: 'Django', logo: 'https://cdn.simpleicons.org/django' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase' },
    { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow' },
    { name: 'Pandas', logo: 'https://cdn.simpleicons.org/pandas' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel' },
    { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino' },
    { name: 'Raspberry Pi', logo: 'https://cdn.simpleicons.org/raspberrypi' },
    { name: 'Power BI', logo: 'https://cdn.simpleicons.org/powerbi' },
  ];

  // Duplicate skills twice for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills];

  // Responsive speed adjustment
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth <= 480) setSpeed(0.8);
      else if (window.innerWidth <= 768) setSpeed(0.6);
      else if (window.innerWidth <= 1024) setSpeed(0.5);
      else setSpeed(1);
    };
    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  // Seamless infinite scroll using requestAnimationFrame via Framer Motion
  useAnimationFrame(() => {
    if (isPaused || !trackRef.current) return;
    
    const track = trackRef.current;
    const singleSetWidth = track.scrollWidth / 2;
    
    positionRef.current -= speed;
    
    // Reset position seamlessly when we've scrolled through one complete set
    if (Math.abs(positionRef.current) >= singleSetWidth) {
      positionRef.current = 0;
    }
    
    track.style.transform = `translateX(${positionRef.current}px)`;
  });

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative overflow-hidden w-full py-6 sm:py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />
      
      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: 'translateX(0)' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard 
            key={`${skill.name}-${index}`} 
            skill={skill} 
            isPaused={isPaused}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCarousel; 