import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Zap, Database, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Safe Fit",
      description: "A native mobile app for an IOT device - SafeFit : Smart Bracelet.",
      image: "/placeholder.svg",
      technologies: ["React NAtive", "TypeScript", "Supabase", "Node.js", "TailwindCSS","Chart.js", "Framer Motion"],
      githubUrl: "https://github.com/revanthm1902/safe-fit.git",
      demoUrl: null,
      category: "Native App",
      icon: Smartphone
    },
    {
      id: 2,
      title: "School Website",
      description: "A full-stack school website for St. G. D. Convent School",
      image: "/placeholder.svg",
      technologies: ["React", "Supabase", "Chart.js", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/revanthm1902/StgdSchool.git",
      demoUrl: "https://stgdconventschool.com/",
      category: "Website",
      icon: Code
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and experience.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      githubUrl: "https://github.com/revanthm1902/Portfolio",
      demoUrl: "https://revanthm.vercel.app/",
      category: "Website", 
      icon: Code
    },
    {
      id: 4,
      title: "Ydhya AI",
      description: "An open-access tool for all the medical needs. A one-stop solution for all your medical queries.",
      image: "/placeholder.svg",
      technologies: ["React", "Javascript","Supabase", "Chart.js", "OpenAI API"],
      githubUrl: "https://github.com/revanthm1902/Ydhya.git",
      demoUrl: null,
      category: "Productivity",
      icon: Zap
    },
    {
      id: 5,
      title: "RealEstate Management System",
      description: "A comprehensive real estate management system for tracking properties, clients, and transactions for both landlords and tenants.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "PostgreSQL", "Expo", "Chart.js"],
      githubUrl: "https://github.com/revanthm1902/Real-Estate-Management-System.git",
      demoUrl: null,
      category: "Productivity",
      icon: Database
    },
    {
      id: 6,
      title: "Laundry Management System",
      description: "A comprehensive laundry management system for tracking orders, and customer interactions for producitivty and easy balancing of the records.",
      image: "/placeholder.svg",
      technologies: ["Javascript", "PostgreSQL", "Expo", "Chart.js"],
      githubUrl: "https://github.com/revanthm1902/laundry-management-system",
      demoUrl: null,
      category: "Productivity",
      icon: Database
    },
    
  ];

  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-cyan/20 animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">My </span>
            <span className="text-neon-purple text-glow animate-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            A showcase of my latest work spanning across different technologies and domains. 
            Each project represents a unique challenge solved with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-8 w-8 text-neon-cyan group-hover:animate-bounce-slow" />
                  <Badge variant="outline" className="text-neon-green border-neon-green/50">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-space text-foreground group-hover:text-neon-purple transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="ui-btn flex-1 bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </span>
                      </a>
                    </Button>
                  )}

                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="ui-btn flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Code
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/revanthm1902" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                View All on GitHub
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


