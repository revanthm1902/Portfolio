import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Zap, Database, Smartphone, Trophy, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "SafeFit – Smart Safety Bracelet",
      description: "Screenless health wearable with SpO2, heart rate monitoring, fitness tracking, and fall detection with automated SOS. Custom PCB with GSM+GPS achieving <5s emergency alert latency.",
      technologies: ["IoT", "React Native", "NodeMCU", "Custom PCB", "SIM800L", "MAX30102"],
      githubUrl: "https://github.com/revanthm1902/safe-fit.git",
      demoUrl: null,
      category: "IoT & Hardware",
      icon: Cpu
    },
    {
      id: 2,
      title: "ERP Management System",
      description: "Official digital platform for St. G.D. Convent School with secure MERN stack solution for 1,000+ users. Features RBAC admin portal reducing data entry workload by 50%.",
      technologies: ["React", "Node.js", "Supabase", "TypeScript", "RBAC"],
      githubUrl: "https://github.com/revanthm1902/StgdSchool.git",
      demoUrl: "https://stgdconventschool.com/",
      category: "Full Stack",
      icon: Database
    },
    {
      id: 3,
      title: "Gmail Replica",
      description: "Fully functional email client simulation with inbox handling, email composition, and responsive UI. Hackathon Winner for exceptional UI/UX design and backend integration.",
      technologies: ["React.js", "Node.js", "Express.js", "REST APIs"],
      githubUrl: "https://github.com/revanthm1902/gmail-replica",
      demoUrl: null,
      category: "Hackathon Winner",
      icon: Trophy
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills, projects, and experience with smooth animations and modern UI.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      githubUrl: "https://github.com/revanthm1902/Portfolio",
      demoUrl: "https://revanthm.vercel.app/",
      category: "Website", 
      icon: Code
    },
    {
      id: 5,
      title: "Ydhya AI",
      description: "Open-access tool for medical needs - a one-stop solution for health queries powered by AI.",
      technologies: ["React", "JavaScript", "Supabase", "Chart.js", "OpenAI API"],
      githubUrl: "https://github.com/revanthm1902/Ydhya.git",
      demoUrl: null,
      category: "AI/ML",
      icon: Zap
    },
    {
      id: 6,
      title: "Real Estate Management System",
      description: "Comprehensive system for tracking properties, clients, and transactions with analytics dashboard.",
      technologies: ["TypeScript", "PostgreSQL", "Expo", "Chart.js"],
      githubUrl: "https://github.com/revanthm1902/Real-Estate-Management-System.git",
      demoUrl: null,
      category: "Full Stack",
      icon: Database
    }
  ];

  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 hero-gradient bg-grid relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-cyan/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            <span className="text-foreground">My </span>
            <span className="text-neon-purple text-glow animate-glow">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work spanning across different technologies and domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="glass-card h-full flex flex-col overflow-hidden group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.2 }}>
                      <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-neon-cyan" />
                    </motion.div>
                    <Badge variant="outline" className="text-neon-green border-neon-green/50 text-xs sm:text-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-space text-foreground group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-[10px] sm:text-xs font-mono text-muted-foreground">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    {project.demoUrl && (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button 
                          size="sm" 
                          className="w-full ui-btn bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 text-xs sm:text-sm"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full ui-btn border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 text-xs sm:text-sm"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              size="lg" 
              className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow text-sm sm:text-base"
              asChild
            >
              <a href="https://github.com/revanthm1902" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;


