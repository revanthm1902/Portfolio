/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Building, Calendar, MapPin, Award, FileText, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  onExperienceSelect: (experience: any) => void;
}

const ExperienceSection = ({ onExperienceSelect }: ExperienceSectionProps) => {
  const workExperiences = [
      {
      id: 1,
      company: "TechtoGreen Drone & Robotics Pvt. Ltd.",
      position: "R&D Intern",
      duration: "Aug 2024 – Aug 2025",
      location: "Hyderabad, India",
      type: "Internship",
      description: "Research and Development intern focused on IoT, AI/ML pipelines, and autonomous drone systems.",
      achievements: [
        "Designed firmware for Intelligent Safety Helmet (CS-1), integrating 360° cameras and IoT sensors, reducing incident response latency by 90%",
        "Engineered AI/ML pipelines for predictive decision-making in industrial IoT ecosystems with high accuracy in anomaly detection",
        "Collaborated on Autonomous Multi-Spraying Drone, optimizing GPS navigation and real-time telemetry for precision agriculture across 5+ test sites",
      ],
      technologies: ["IoT", "Drones", "AI/ML", "Arduino", "ESP32", "Python", "TensorFlow", "React Native"],
      icon: Building,
      projects: [
        {
          name: "Autonomous Multi-Spraying Drone",
          description: "Developed an autonomous drone system for precision agriculture with AI-powered crop monitoring, pest detection, and automated spraying capabilities.",
          techStack: ["Python", "OpenCV", "TensorFlow", "ArduPilot", "IoT Sensors", "GPS", "React Native"],
          features: [
            "Real-time crop health monitoring using computer vision",
            "Automated pest and disease detection with 92% accuracy",
            "GPS-guided autonomous flight patterns with real-time telemetry",
            "Mobile app for farmer dashboard and controls",
            "Optimized navigation for precision agriculture across 5+ test sites"
          ],
          achievements: [
            "Reduced pesticide usage by 35% through targeted application",
            "Increased crop yield monitoring efficiency by 80%",
            "Won AI Autonomous Hackathon for innovation"
          ],
          certificate: "/certificates/techtogreen-agri-drone.pdf"
        },
        {
          name: "Intelligent Safety Helmet (CS-1)",
          description: "Smart helmet with 360° cameras and IoT sensors for industrial worker safety monitoring with real-time incident response.",
          techStack: ["Arduino", "ESP32", "360° Cameras", "IoT Sensors", "React Native", "Firebase", "Machine Learning"],
          features: [
            "360° camera integration for comprehensive coverage",
            "Real-time vital signs and environmental monitoring",
            "Fall detection with automatic emergency alerts",
            "AI-powered anomaly detection pipeline",
            "90% reduction in incident response latency"
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
      position: "Full Stack Intern",
      duration: "Jan 2025 – Apr 2025",
      location: "Remote/Hybrid",
      type: "Internship",
      description: "Full Stack Development with MERN Stack, AI/ML-based solutions, and AWS deployment.",
      achievements: [
        "Developed scalable full-stack web applications using MERN Stack, optimizing backend performance to handle 500+ concurrent users",
        "Contributed to AI-driven predictive analytics tools, delivering actionable insights that improved client decision-making efficiency",
        "Streamlined deployment workflows by implementing AWS services and establishing automated CI/CD pipelines via Git"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "AWS", "CI/CD", "REST APIs"],
      icon: Building,
      projects: [
        {
          name: "Scalable Web Applications",
          description: "Full-stack web applications using MERN Stack with optimized backend performance for high concurrency.",
          techStack: ["React", "Node.js", "Express", "MongoDB", "AWS", "Git"],
          features: [
            "Scalable architecture handling 500+ concurrent users",
            "Real-time data synchronization",
            "Optimized database queries and caching",
            "AWS deployment with auto-scaling",
            "Automated CI/CD pipelines"
          ],
          achievements: [
            "Optimized backend to handle 500+ concurrent users",
            "Deployed on AWS with 99.9% uptime",
            "Established automated CI/CD pipelines"
          ],
          certificate: "/certificates/purple-techno-completion.pdf"
        },
        {
          name: "AI-Driven Predictive Analytics",
          description: "AI-powered analytics tools for data-driven decision making and actionable insights.",
          techStack: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS Lambda"],
          features: [
            "Predictive analytics dashboard",
            "Machine learning model integration",
            "Real-time data visualization",
            "Custom reporting and insights",
            "API integration for external data sources"
          ],
          achievements: [
            "Improved client decision-making efficiency",
            "Real-time analytics with low latency",
            "Scalable ML model deployment"
          ],
          certificate: "/certificates/ai-analytics-project.pdf"
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
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold">
            <span className="text-foreground">My </span>
            <span className="text-neon-green text-glow animate-glow">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career, showcasing growth, achievements, 
            and the impact I've made at each step along the way.
          </p>
        </motion.div>

        {/* Tabs for Work Experience, Achievements, and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
