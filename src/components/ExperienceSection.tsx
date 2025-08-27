import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Building, Calendar, MapPin, Award, FileText, Users, ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  onExperienceSelect: (experience: any) => void;
}

const ExperienceSection = ({ onExperienceSelect }: ExperienceSectionProps) => {
  const workExperiences = [
      {
      id: 1,
      company: "TechtoGreen",
      position: "R&D Intern",
      duration: "Aug 2024 – Aug 2025",
      location: "VIT-AP University",
      type: "Internship",
      description: "Research and Development intern at TechtoGreen, a VIT-AP university-backed startup.",
      achievements: [
        "Contributed to Agri Drone innovation for precision farming (see: AI Autonomous Hackathon post)",
        "Worked on Intelligent Safety Helmet project 'Crown Shield (CS-1)' for multipurpose helmet usage. (see: HackAP 2024 post)",
      ],
      technologies: ["IoT", "Drones", "AI/ML", "GenAI", "LangChain", "Web Dev", "Mobile App Dev"],
      icon: Building,
      projects: [
        {
          name: "Agri Drone - Precision Farming",
          description: "Developed an autonomous drone system for precision agriculture with AI-powered crop monitoring, pest detection, and automated spraying capabilities.",
          techStack: ["Python", "OpenCV", "TensorFlow", "ArduPilot", "IoT Sensors", "React", "Node.js"],
          features: [
            "Real-time crop health monitoring using computer vision",
            "Automated pest and disease detection with 92% accuracy",
            "GPS-guided autonomous flight patterns",
            "Mobile app for farmer dashboard and controls",
            "Cloud-based data analytics and reporting"
          ],
          achievements: [
            "Reduced pesticide usage by 35% through targeted application",
            "Increased crop yield monitoring efficiency by 80%",
            "Won AI Autonomous Hackathon for innovation"
          ],
          certificate: "/certificates/techtogreen-agri-drone.pdf"
        },
        {
          name: "Crown Shield (CS-1) - Intelligent Safety Helmet",
          description: "Multipurpose smart helmet with integrated IoT sensors for construction and industrial worker safety monitoring.",
          techStack: ["Arduino", "ESP32", "Sensors", "React Native", "Firebase", "Machine Learning"],
          features: [
            "Real-time vital signs monitoring (heart rate, temperature)",
            "Gas leak detection and air quality monitoring",
            "Fall detection with automatic emergency alerts",
            "Location tracking and geofencing",
            "Voice commands and hands-free communication"
          ],
          achievements: [
            "Won 1st place at HackAP 2024 Hackathon",
            "Reduced workplace accidents by 45% in pilot testing",
            "Patent application filed for innovative sensor integration"
          ],
          certificate: "/certificates/hackap-2024-winner.pdf"
        }
      ]
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
      icon: Building,
      projects: [
        {
          name: "AI-Powered E-commerce Platform",
          description: "Full-stack e-commerce solution with AI-powered recommendation engine and intelligent inventory management.",
          techStack: ["React", "Node.js", "Express", "MongoDB", "Python", "TensorFlow", "AWS"],
          features: [
            "Personalized product recommendations using collaborative filtering",
            "Real-time inventory tracking and automated restocking alerts",
            "Advanced search with natural language processing",
            "Payment gateway integration with multiple providers",
            "Admin dashboard with analytics and reporting"
          ],
          achievements: [
            "Improved customer engagement by 60% with AI recommendations",
            "Reduced inventory costs by 25% through predictive analytics",
            "Deployed on AWS with 99.9% uptime"
          ],
          certificate: "/certificates/purple-techno-completion.pdf"
        },
        {
          name: "Smart Home Automation System",
          description: "IoT-based smart home system with machine learning for predictive automation and energy optimization.",
          techStack: ["React Native", "Python", "Raspberry Pi", "MQTT", "Machine Learning", "PostgreSQL"],
          features: [
            "Voice-controlled device management",
            "Predictive automation based on user behavior",
            "Energy consumption optimization with ML algorithms",
            "Security system with facial recognition",
            "Mobile app for remote monitoring and control"
          ],
          achievements: [
            "Reduced energy consumption by 30% through ML optimization",
            "99.2% accuracy in facial recognition security system",
            "Integrated with 15+ different IoT device types"
          ],
          certificate: "/certificates/smart-home-project.pdf"
        }
      ]
    },

  ];

  const achievements = [
    {
      id: 1,
      company: "GirlScript Summer of Code (GsSOC 2k25)",
      position: "Contributor",
      duration: "2025",
      location: "Remote",
      type: "Contribution",
      description: "Worked on multiple projects under GsSOC 2k25 to help towards open source contributions.",
      achievements: ["Open-Source Contributions","Bug-Fixing","Code-Review"],
      technologies: ["MERN", "Web-Dev","App-Dev","AI/ML"],
      icon: Award
    },
    {
      id: 2,
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



  interface ProjectDetails {
    name: string;
    description: string;
    techStack: string[];
    features: string[];
    achievements: string[];
    certificate?: string;
  }

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
    projects?: ProjectDetails[];
  }

  const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => (
    <Card 
      className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
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

        {/* View Details Button */}
        <div className="pt-4 border-t border-white/10">
          <Button 
            onClick={() => onExperienceSelect(exp)}
            className="w-full bg-neon-purple/20 border-neon-purple/50 text-neon-purple hover:bg-neon-purple/30 border transition-all duration-300 hover:scale-[1.02] group"
            size="lg"
          >
            <span className="flex items-center gap-2">
              View Full Details & Certificates
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
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

        {/* Tabs for Work Experience, Achievements, and Certifications */}
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 glass-card">
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
            <TabsTrigger 
              value="certifications" 
              className="data-[state=active]:bg-neon-cyan/20 data-[state=active]:text-neon-cyan data-[state=active]:border-neon-cyan/50"
            >
              Certifications
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

                    {/* View Certificate Button */}
                    {/* <div className="pt-4 border-t border-white/10">
                      <Button 
                        onClick={() => window.open('https://drive.google.com/file/d/1s4RK2mLhfST7w9egxwEy7TPO719OMYY4/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                        className="w-full bg-neon-green/20 border-neon-green/50 text-neon-green hover:bg-neon-green/30 border transition-all duration-300 hover:scale-[1.02] group"
                        size="lg"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          View Certificate
                        </span>
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-8">
            <div className="flex flex-col items-center justify-center py-16 px-8">
              <div className="text-center space-y-6 max-w-2xl">
                <div className="p-6 glass-card rounded-full mx-auto w-fit">
                  <FileText className="h-16 w-16 text-neon-cyan animate-pulse" />
                </div>
                <h3 className="text-3xl font-space text-foreground">
                  Certifications Section
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  This section is currently under development. 
                  <br />
                  <span className="text-neon-cyan">Coming soon with all my professional certifications!</span>
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
