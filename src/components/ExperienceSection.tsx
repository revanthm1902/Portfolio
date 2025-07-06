import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Purple Techno Solutions",
      position: "Intern",
      duration: "Jan 2025 – Apr 2025",
      location: "",
      type: "Internship",
      description: "Worked on Full Stack Development and AI/ML-based solutions. and practical deployment of applications.",
      achievements: [
        "Developed and deployed AI/ML-based solutions for real-world applications.",
        "Collaborated with cross-functional teams to deliver production-ready features.",
        "Enhanced backend and frontend integration for seamless user experience."
      ],
      technologies: ["React", "Node.js", "Python", "Machine Learning", "MongoDB", "REST APIs"],
      icon: Building
    },
    {
      id: 2,
      company: "TechtoGreen",
      position: "R&D Intern",
      duration: "Aug 2024 – Present",
      location: "",
      type: "Internship",
      description: "Research and Development intern at TechtoGreen, a VIT-AP university-backed startup.",
      achievements: [
        "Contributed to Agri Drone innovation for precision farming (see: AI Autonomous Hackathon post)",
        "Worked on smart wearable project 'SafeFit' for health, fitness, and safety (see: HACKSAGON 2025 post)",
        "Participated in LLM Security Bootcamp, gaining hands-on experience in GenAI, MLOps, LangChain, RAG, and cybersecurity."
      ],
      technologies: ["IoT", "Drones", "AI/ML", "GenAI", "LangChain", "MLOps", "Python", "React"],
      icon: Building
    },
    {
      id: 3,
      company: "HackAP Hackathon 2024",
      position: "Winner",
      duration: "2024",
      location: "",
      type: "Competition",
      description: "Secured 1st place for developing a portable safety device (helmet) for MEWP operators.",
      achievements: [],
      technologies: ["IoT", "Embedded Systems", "Safety Devices"],
      icon: Award
    },
    {
      id: 4,
      company: "NASA Space Apps Challenge 2024",
      position: "Global Nominee",
      duration: "2024",
      location: "",
      type: "Competition",
      description: "Contributed to real-world space problem-solving as a global nominee.",
      achievements: [],
      technologies: ["Problem Solving", "Space Tech", "Collaboration"],
      icon: Award
    },
    {
      id: 5,
      company: "AppFusion Hackathon",
      position: "Winner",
      duration: "2024",
      location: "",
      type: "Competition",
      description: "Developed a Gmail replica and secured 1st place.",
      achievements: [],
      technologies: ["Web Development", "UI/UX", "React"],
      icon: Award
    },
    {
      id: 6,
      company: "Drone Hackathon",
      position: "Winner",
      duration: "2025",
      location: "",
      type: "Competition",
      description: "First place for Search and Rescue, UAV-Assisted Agriculture Monitoring.",
      achievements: [],
      technologies: ["Drones", "UAV", "Agriculture Monitoring"],
      icon: Award
    },
    {
      id: 7,
      company: "Postman API Fundamentals Workshop",
      position: "Participant",
      duration: "2025",
      location: "",
      type: "Workshop",
      description: "Completed workshop: REST APIs, HTTP Methods, Authentication, Automating Tests.",
      achievements: [],
      technologies: ["REST APIs", "Postman", "API Testing"],
      icon: Award
    },
    {
      id: 8,
      company: "International Startup Festival 2024",
      position: "Attendee",
      duration: "2024",
      location: "",
      type: "Conference",
      description: "Explored innovations in AI, FinTech, AgriTech, and Health Tech.",
      achievements: [],
      technologies: ["AI", "FinTech", "AgriTech", "Health Tech"],
      icon: Award
    },
    {
      id: 9,
      company: "LLM Security Bootcamp",
      position: "Participant",
      duration: "2025",
      location: "",
      type: "Bootcamp",
      description: "Hands-on experience in GenAI, MLOps, LangChain, RAG, and cybersecurity.",
      achievements: [],
      technologies: ["GenAI", "MLOps", "LangChain", "RAG", "Cybersecurity"],
      icon: Award
    },
    {
      id: 10,
      company: "TechtoGreen",
      position: "Project Contributor",
      duration: "2025",
      location: "",
      type: "Project",
      description: "Worked on Agri Drone innovation for precision farming as part of TechtoGreen's product portfolio.",
      achievements: [],
      technologies: ["Drones", "Precision Farming", "AI/ML"],
      icon: Award
    },
    {
      id: 11,
      company: "HACKSAGON 2025 (ABV-IIITM, Gwalior)",
      position: "Project Contributor",
      duration: "2025",
      location: "",
      type: "Project",
      description: "Worked on smart wearable project 'SafeFit' for health, fitness, and safety.",
      achievements: [],
      technologies: ["Wearables", "Health Tech", "IoT"],
      icon: Award
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
