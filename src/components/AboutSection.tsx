import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Lightbulb, Rocket } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const AboutSection = () => {
  const values = [
    { icon: Heart, title: 'Passion-Driven', description: 'I believe great code comes from genuine passion for solving problems and creating meaningful experiences.', color: 'text-red-400' },
    { icon: Target, title: 'Goal-Oriented', description: 'Every line of code serves a purpose. I focus on delivering results that matter to users and businesses.', color: 'text-neon-cyan' },
    { icon: Lightbulb, title: 'Innovation-Focused', description: 'I constantly explore new technologies and methodologies to stay ahead of the curve.', color: 'text-neon-green' },
    { icon: Rocket, title: 'Performance-Minded', description: "Building fast, scalable, and efficient solutions is not just a goal—it's a commitment.", color: 'text-neon-purple' }
  ];

  const journey = [
    { year: '2023', event: 'Started B.Tech at VIT-AP University', description: 'Pursuing Bachelor of Technology in Computer Science and Engineering.' },
    { year: '2024', event: 'NASA Space Apps Challenge', description: 'Global Nominee – recognized for innovative space technology solutions.' },
    { year: '2024', event: 'R&D Intern at TechtoGreen', description: 'Developed Intelligent Safety Helmet (CS-1) with IoT sensors, reducing incident response by 90%.' },
    { year: '2024', event: 'Multiple Hackathon Wins', description: 'Winner at HackAP 2024, AppFusion 2024, and Runner-Up at IEEE Hackssagon 2025.' },
    { year: '2025', event: 'Full Stack Intern at Purple Techno', description: 'Built scalable MERN stack apps handling 500+ concurrent users with AWS deployment.' },
    { year: '2025', event: 'GirlScript Summer of Code', description: 'Active open-source contributor, solved 300+ DSA problems across platforms.' }
  ];
  
  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 hero-gradient bg-grid relative overflow-hidden">
      {/* Profile Image */}
      <motion.div 
        className="flex justify-center mb-8 sm:mb-12 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green blur-2xl opacity-60 z-0" />
        <motion.div 
          className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-green shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-1.5 sm:p-2">
            <img
              src="/rev2.0.jpg"
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-white/20"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-30"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-10 sm:space-y-14 lg:space-y-16">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold text-neon-purple animate-glow">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            I'm a passionate full-stack developer who thrives on turning complex challenges into elegant, user-friendly solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Personal Story */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-neon-purple">
                    <span className="italic font-bold tracking-wide">Revanth Modalavalasa</span> - [My Story]
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg">
                    From curious beginner to passionate developer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    My journey into programming began during my computer science studies, where I discovered the thrill of turning ideas into reality through code.
                  </p>
                  <p>
                    Today, I specialize in crafting modern, responsive web applications using cutting-edge technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 sm:pt-4">
                    <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 text-xs sm:text-sm">Problem Solver</Badge>
                    <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 text-xs sm:text-sm">Team Player</Badge>
                    <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30 text-xs sm:text-sm">Continuous Learner</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={itemVariants}>
                  <Card className="glass-card h-full group">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                        <value.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${value.color}`} />
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-space font-bold text-neon-cyan text-center">My Journey</h3>
            <div className="space-y-4 sm:space-y-6">
              {journey.map((item, index) => (
                <motion.div 
                  key={`${item.year}-${item.event}`}
                  className="flex gap-3 sm:gap-6 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-3 h-3 sm:w-4 sm:h-4 bg-neon-purple rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-neon-purple to-neon-cyan mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4 sm:pb-6">
                    <motion.div 
                      className="glass-card p-4 sm:p-6"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <span className="text-lg sm:text-2xl font-bold text-neon-cyan font-mono">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-neon-cyan to-transparent flex-1" />
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1">{item.event}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="glass-card border-neon-green/30">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl text-neon-green">Fun Facts About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                {[
                  { emoji: '🎮', text: 'Passionate gamer who draws creative UX inspiration from immersive game mechanics.' },
                  { emoji: '☕', text: 'Coffee-fueled coder — firmly believe the cleanest code starts with the perfect brew.' },
                  { emoji: '🌱', text: 'Lifelong learner — currently diving deep into AI/ML to bring smarter experiences.' }
                ].map((fact, i) => (
                  <motion.div 
                    key={i}
                    className="space-y-2 p-3 sm:p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl sm:text-3xl">{fact.emoji}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{fact.text}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
