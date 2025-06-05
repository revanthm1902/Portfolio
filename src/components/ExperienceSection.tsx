
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture resulting in 40% performance improvement.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Mentored 3 junior developers to senior level",
        "Led migration from monolithic to microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 80%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "MongoDB"],
      icon: Building
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      type: "Full-time",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with design and product teams to deliver pixel-perfect user experiences.",
      achievements: [
        "Built 5+ production applications from scratch",
        "Integrated payment systems processing $1M+ monthly",
        "Improved code coverage from 30% to 90%",
        "Reduced customer support tickets by 45% through UX improvements"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Stripe", "GCP"],
      icon: Building
    },
    {
      id: 3,
      company: "InnovateLabs",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Contract",
      description: "Specialized in creating responsive, accessible web applications with focus on performance and user experience. Worked with multiple clients across different industries.",
      achievements: [
        "Delivered 10+ client projects on time and budget",
        "Achieved 95+ Lighthouse scores on all projects",
        "Implemented accessibility standards (WCAG 2.1)",
        "Created reusable component library used across projects"
      ],
      technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest", "Figma"],
      icon: Award
    },
    {
      id: 4,
      company: "Digital Agency Pro",
      position: "Junior Developer",
      duration: "2018 - 2019",
      location: "New York, NY",
      type: "Full-time",
      description: "Started my professional journey as a junior developer, working on various client projects and learning industry best practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Completed 20+ client websites successfully",
        "Learned 5 new technologies in first 6 months",
        "Contributed to company's internal tool development",
        "Received 'Fast Learner' award in first year"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      icon: Building
    }
  ];

  return (
    <section className="min-h-screen py-24 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-green/20 animate-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">My </span>
            <span className="text-neon-green text-glow animate-glow">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            A journey through my professional career, showcasing growth, achievements, 
            and the impact I've made at each step along the way.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id}
              className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass-card">
                      <exp.icon className="h-6 w-6 text-neon-cyan group-hover:animate-bounce-slow" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-space text-foreground group-hover:text-neon-purple transition-colors">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-lg text-neon-cyan font-mono">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="outline" className="text-neon-green border-neon-green/50">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-neon-green mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm font-mono bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
