import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const workExperiences = [
      {
      id: 1,
      company: "TechtoGreen",
      position: "R&D Intern",
      duration: "Aug 2024 – Present",
      location: "VIT-AP University",
      type: "Internship",
      description: "Research and Development intern at TechtoGreen, a VIT-AP university-backed startup.",
      achievements: [
        "Contributed to Agri Drone innovation for precision farming (see: AI Autonomous Hackathon post)",
        "Worked on Intelligent Safety Helmet project 'Crown Shield (CS-1)' for multipurpose helmet usage. (see: HackAP 2024 post)",
      ],
      technologies: ["IoT", "Drones", "AI/ML", "GenAI", "LangChain", "Web Dev", "Mobile App Dev"],
      icon: Building
    },
    {
      id: 2,
      company: "Purple Techno Solutions",
      position: "Intern",
      duration: "Jan 2025 – Apr 2025",
      location: "Vijayawada, India",
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

  ];

  const achievements = [
    {
      id: 10,
      company: "HACKSAGON 2025 (ABV-IIITM, Gwalior)",
      position: "Runner up",
      duration: "2025",
      location: "ABV-IIITM, Gwalior",
      type: "Competition",
      description: "Worked on smart wearable project 'SafeFit' for health, fitness, and safety.",
      achievements: ["Best social project idea.","Top-Performers"],
      technologies: ["Wearables", "Health Tech", "IoT"],
      icon: Award
    },
    {
      id: 3,
      company: "HackAP Hackathon 2024",
      position: "Winner",
      duration: "2024",
      location: "Vishakapatnam, India",
      type: "Competition",
      description: "Secured 1st place for developing a portable safety device (helmet) for MEWP operators.",
      achievements: ["1st off-campus Hackathon win"],
      technologies: ["IoT", "Embedded Systems", "Safety Devices"],
      icon: Award
    },
    {
      id: 4,
      company: "NASA Space Apps Challenge 2024",
      position: "Global Nominee",
      duration: "2024",
      location: "Remote Hackathon",
      type: "Competition",
      description: "Contributed to real-world space problem-solving as a global nominee.",
      achievements: ["Qualied as a Global Nominee standing at top 3% globally."],
      technologies: ["Problem Solving", "Space Tech", "Collaboration"],
      icon: Award
    },
    {
      id: 5,
      company: "AppFusion Hackathon",
      position: "Winner",
      duration: "2024",
      location: "VIT-AP University",
      type: "Competition",
      description: "Developed a Gmail replica and secured 1st place.",
      achievements: ["Achieved 1st place among 300+ participants."],
      technologies: ["Web Development", "UI/UX", "React"],
      icon: Award
    },
    {
      id: 6,
      company: "Drone Hackathon",
      position: "Winner",
      duration: "2025",
      location: "Chalapathi Institue of Technology, Guntur",
      type: "Competition",
      description: "First place for Search and Rescue, UAV-Assisted Agriculture Monitoring.",
      achievements: ["1st and 2nd place both goes to our Startup Interns team."],
      technologies: ["IOT","Drones", "UAV", "Agriculture Monitoring"],
      icon: Award
    },
    {
      id: 7,
      company: "Postman API Fundamentals Workshop",
      position: "Certified",
      duration: "2025",
      location: "Remote",
      type: "Workshop",
      description: "Completed workshop: REST APIs, HTTP Methods, Authentication, Automating Tests.",
      achievements: ["Got enough experience regarding APIs with certification."],
      technologies: ["REST APIs", "Postman", "API Testing"],
      icon: Award
    },
    {
      id: 8,
      company: "International Startup Festival 2024",
      position: "Attendee",
      duration: "2024",
      location: "ESCI, Hyderabad, India",
      type: "Conference",
      description: "Explored innovations in AI, FinTech, AgriTech, and Health Tech.",
      achievements: ["Experience on Startups, Mentorship and Guidance"],
      technologies: ["AI", "FinTech", "AgriTech", "Health Tech"],
      icon: Award
    },
    {
      id: 9,
      company: "LLM Security Bootcamp",
      position: "Certified",
      duration: "2025",
      location: "VIT-AP University",
      type: "Bootcamp",
      description: "In collab with IIT-Madras.",
      achievements: ["Hands-on experience in GenAI, MLOps, LangChain, RAG, and cybersecurity."],
      technologies: ["GenAI", "MLOps", "LangChain", "RAG", "Cybersecurity"],
      icon: Award
    },
    
  ];

  interface ExperienceItem {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
    icon: React.ComponentType<{ className?: string }>;
  }

  const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => (
    <Card 
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
            {exp.achievements.map((achievement: string, i: number) => (
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
            {exp.technologies.map((tech: string) => (
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
  );

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

        {/* Tabs for Work Experience and Achievements */}
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 glass-card">
            <TabsTrigger 
              value="work" 
              className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green data-[state=active]:border-neon-green/50"
            >
              Work Experience
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple data-[state=active]:border-neon-purple/50"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="mt-8">
            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-8">
            <div className="space-y-8">
              {achievements.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
