
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Lightbulb, Rocket, GraduationCap, Award, MapPin } from 'lucide-react';
import CertificationPopup from './CertificationPopup';

const AboutSection = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'I believe great code comes from genuine passion for solving problems and creating meaningful experiences.',
      color: 'text-red-400'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every line of code serves a purpose. I focus on delivering results that matter to users and businesses.',
      color: 'text-neon-cyan'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Focused',
      description: 'I constantly explore new technologies and methodologies to stay ahead of the curve.',
      color: 'text-neon-green'
    },
    {
      icon: Rocket,
      title: 'Performance-Minded',
      description: 'Building fast, scalable, and efficient solutions is not just a goal—it\'s a commitment.',
      color: 'text-neon-purple'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'ABC University',
      location: 'Hyderabad, India',
      year: '2020-2024',
      grade: 'CGPA: 8.5/10',
      description: 'Focused on software engineering, data structures, algorithms, and web technologies.'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'XYZ Junior College',
      location: 'Hyderabad, India',
      year: '2018-2020',
      grade: 'Percentage: 92%',
      description: 'Mathematics, Physics, Chemistry - MPC stream'
    }
  ];

  const certifications = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-CSA-2024-001',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
      description: 'Comprehensive certification covering AWS cloud services, architecture design, and best practices for scalable solutions.'
    },
    {
      id: '2',
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: 'January 2024',
      credentialId: 'META-REACT-2024-002',
      skills: ['React', 'JavaScript', 'JSX', 'Redux', 'Hooks'],
      description: 'Advanced React development concepts including state management, component lifecycle, and modern React patterns.'
    },
    {
      id: '3',
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'November 2023',
      credentialId: 'GCP-PCD-2023-003',
      skills: ['Google Cloud', 'Kubernetes', 'Docker', 'CI/CD'],
      description: 'Professional-level certification for developing scalable applications on Google Cloud Platform.'
    },
    {
      id: '4',
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'September 2023',
      credentialId: 'MONGO-DEV-2023-004',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
      description: 'Expertise in MongoDB database design, queries, and performance optimization.'
    }
  ];

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  const journey = [
    { year: '2020', event: 'Started Programming Journey', description: 'Fell in love with code during college' },
    { year: '2021', event: 'First Internship', description: 'Frontend Developer at TechStart Inc.' },
    { year: '2022', event: 'Full Stack Developer', description: 'Joined InnovateCorp as a full-time developer' },
    { year: '2023', event: 'Tech Lead', description: 'Led a team of 5 developers on major projects' },
    { year: '2024', event: 'Freelance & Consulting', description: 'Started helping startups build amazing products' }
  ];

  const handleCertificationClick = (certification: any) => {
    setSelectedCertification(certification);
    setIsPopupOpen(true);
  };

  return (
    <section className="min-h-screen py-20 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold text-neon-purple animate-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful solutions. 
            With a strong foundation in modern web technologies and a keen eye for design.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Story & Photo */}
          <div className="space-y-8">
            {/* Profile Image */}
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-4 border-neon-purple/50 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <h3 className="text-2xl font-space text-neon-purple mb-2">Revanth M</h3>
                <p className="text-neon-cyan mb-4">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, India</span>
                </div>
              </CardContent>
            </Card>

            {/* Personal Story */}
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-purple">My Story</CardTitle>
                <CardDescription className="text-lg">
                  From curious beginner to passionate developer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My journey into the world of programming started during my computer science studies, 
                  where I discovered the magic of bringing ideas to life through code. What began as 
                  curiosity quickly evolved into a deep passion for creating digital experiences.
                </p>
                <p>
                  Today, I specialize in building modern web applications using cutting-edge technologies. 
                  I'm particularly fascinated by the intersection of great UX design and robust backend architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                    Continuous Learner
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skills with Animation */}
            <Card className="glass-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-green">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-6 py-3 glass-card text-sm font-mono text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-neon-cyan/30 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="glass-card hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <value.icon className={`h-8 w-8 mx-auto mb-3 ${value.color} group-hover:animate-bounce-slow`} />
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="glass-card border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-cyan flex items-center gap-3">
                  <GraduationCap className="h-7 w-7" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card p-4 hover:bg-white/5 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-neon-green font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-neon-cyan">{edu.year}</p>
                      <p className="text-neon-purple font-medium">{edu.grade}</p>
                      <p className="text-muted-foreground text-xs mt-2">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-green flex items-center gap-3">
                  <Award className="h-7 w-7" />
                  Certifications
                </CardTitle>
                <CardDescription>Click on any certification to view details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.id}
                    className="glass-card p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
                    onClick={() => handleCertificationClick(cert)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-neon-green group-hover:animate-bounce-slow" />
                      <h3 className="font-semibold text-foreground group-hover:text-neon-green transition-colors">
                        {cert.name}
                      </h3>
                    </div>
                    <p className="text-sm text-neon-cyan mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 text-xs bg-neon-purple/20 text-neon-purple rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-neon-cyan/20 text-neon-cyan rounded">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Journey Timeline */}
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-purple">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <div 
                      key={item.year}
                      className="flex gap-6 group"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-neon-purple rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        {index < journey.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-neon-purple to-neon-cyan mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="glass-card p-4 hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl font-bold text-neon-cyan font-mono">{item.year}</span>
                            <div className="h-px bg-gradient-to-r from-neon-cyan to-transparent flex-1"></div>
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{item.event}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="glass-card border-neon-green/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-neon-green">Fun Facts About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">🎮</div>
                <p className="text-muted-foreground">Gaming enthusiast who finds inspiration in game mechanics for web UX</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">☕</div>
                <p className="text-muted-foreground">Coffee aficionado - I believe the best code is written with the perfect brew</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🌱</div>
                <p className="text-muted-foreground">Always learning something new - currently exploring AI/ML integration in web apps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <CertificationPopup 
        certification={selectedCertification}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
