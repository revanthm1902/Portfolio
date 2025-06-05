
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Zap, Database, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.vercel.app",
      category: "Full Stack",
      icon: Database
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI API. Features include message encryption, file sharing, and smart replies.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/username/ai-chat-app",
      demoUrl: "https://ai-chat-demo.vercel.app",
      category: "AI/ML",
      icon: Zap
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A comprehensive project management tool with team collaboration features, time tracking, and analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Supabase", "Chart.js", "Framer Motion"],
      githubUrl: "https://github.com/username/task-manager",
      demoUrl: "https://task-manager-demo.vercel.app",
      category: "Productivity",
      icon: Code
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with workout plans, nutrition tracking, and social features.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
      githubUrl: "https://github.com/username/fitness-app",
      demoUrl: "https://fitness-app-demo.vercel.app",
      category: "Mobile",
      icon: Smartphone
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Decentralized voting platform built on Ethereum with smart contracts ensuring transparency and security.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/username/blockchain-voting",
      demoUrl: "https://voting-demo.vercel.app",
      category: "Blockchain",
      icon: Database
    },
    {
      id: 6,
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization with predictive analytics and interactive maps using multiple APIs.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
      githubUrl: "https://github.com/username/weather-dashboard",
      demoUrl: "https://weather-demo.vercel.app",
      category: "Data Science",
      icon: Zap
    }
  ];

  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
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
        {/* Section Header */}
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

        {/* Projects Grid */}
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
                {/* Technologies */}
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

                {/* Action Buttons */}
                <div className="flex gap-3">
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
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="ui-btn flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="ui-btn bg-gradient-to-r from-neon-purple to-neon-cyan text-white border-0 neon-glow transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View All on GitHub
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
