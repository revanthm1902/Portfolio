import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Code, Database, Palette, Cloud, Wrench, Brain, Award } from 'lucide-react';
import CertificationPopup from './CertificationPopup';

const SkillsSection = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openCertificationPopup = (cert) => {
    setSelectedCertification(cert);
    setIsPopupOpen(true);
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'neon-purple',
      skills: [
        { name: 'React', level: 95, color: '#8B5CF6' },
        { name: 'TypeScript', level: 90, color: '#06B6D4' },
        { name: 'Next.js', level: 85, color: '#10B981' },
        { name: 'Vue.js', level: 80, color: '#F59E0B' },
        { name: 'HTML/CSS', level: 95, color: '#EF4444' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'neon-cyan',
      skills: [
        { name: 'Node.js', level: 90, color: '#8B5CF6' },
        { name: 'Python', level: 85, color: '#06B6D4' },
        { name: 'Express.js', level: 88, color: '#10B981' },
        { name: 'PostgreSQL', level: 82, color: '#F59E0B' },
        { name: 'MongoDB', level: 87, color: '#EF4444' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'neon-green',
      skills: [
        { name: 'AWS', level: 85, color: '#8B5CF6' },
        { name: 'Docker', level: 90, color: '#06B6D4' },
        { name: 'Kubernetes', level: 80, color: '#10B981' },
        { name: 'CI/CD', level: 85, color: '#F59E0B' },
        { name: 'Terraform', level: 75, color: '#EF4444' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'neon-green',
      skills: [
        { name: 'Git', level: 95, color: '#8B5CF6' },
        { name: 'Linux', level: 85, color: '#06B6D4' },
        { name: 'Figma', level: 80, color: '#10B981' },
        { name: 'Jest', level: 85, color: '#F59E0B' },
        { name: 'GraphQL', level: 78, color: '#EF4444' }
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      description: 'Demonstrated expertise in designing distributed systems on AWS platform with best practices for security, reliability, and cost optimization.',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
      credentialId: 'AWS-SAA-2024-REV001',
      verificationUrl: 'https://aws.amazon.com/verification'
    },
    {
      id: 2,
      title: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Facebook)',
      date: 'January 2024',
      description: 'Comprehensive program covering React, advanced JavaScript, version control, responsive design, and UI/UX fundamentals.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Responsive Design', 'UI/UX'],
      credentialId: 'META-FED-2024-REV002'
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'December 2023',
      description: 'Expertise in developing scalable and highly available applications on Google Cloud Platform using modern development practices.',
      skills: ['GCP', 'Kubernetes', 'Docker', 'CI/CD', 'Microservices'],
      credentialId: 'GCP-PD-2023-REV003',
      verificationUrl: 'https://cloud.google.com/certification/verify'
    },
    {
      id: 4,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'November 2023',
      description: 'Advanced knowledge of MongoDB database design, queries, indexing, and performance optimization.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation', 'Performance Tuning'],
      credentialId: 'MONGO-DEV-2023-REV004'
    },
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'October 2023',
      description: 'Comprehensive understanding of containerization, Docker architecture, and container orchestration.',
      skills: ['Docker', 'Containerization', 'DevOps', 'Linux', 'Container Security'],
      credentialId: 'DOCKER-DCA-2023-REV005'
    },
    {
      id: 6,
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'September 2023',
      description: 'Hands-on experience with Kubernetes cluster administration, troubleshooting, and best practices.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'YAML', 'Cluster Management'],
      credentialId: 'CKA-2023-REV006',
      verificationUrl: 'https://training.linuxfoundation.org/certification/verify'
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
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold animate-fade-in">
            <span className="text-foreground">My </span>
            <span className="text-neon-green text-glow animate-glow">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </div>

        {/* Skills Grid with Pie Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <CardTitle className={`text-2xl font-space text-${category.color} flex items-center justify-center gap-3`}>
                  <category.icon className="h-7 w-7" />
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Proficiency levels across key technologies
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Pie Chart */}
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={category.skills}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="level"
                      >
                        {category.skills.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Proficiency']}
                        labelStyle={{ color: '#fff' }}
                        contentStyle={{ 
                          backgroundColor: 'rgba(0,0,0,0.8)', 
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend 
                        wrapperStyle={{ fontSize: '12px' }}
                        iconType="circle"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-mono text-foreground">{skill.name}</span>
                        <span className={`text-sm font-bold text-${category.color}`}>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-background/50" 
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-space font-bold text-neon-cyan mb-4 flex items-center justify-center gap-3">
              <Award className="h-8 w-8" />
              Certifications
            </h3>
            <p className="text-lg text-muted-foreground">
              Industry-recognized certifications that validate my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="glass-card hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer group border-neon-purple/30"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openCertificationPopup(cert)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-neon-green" />
                  </div>
                  <CardTitle className="text-lg font-space text-foreground group-hover:text-neon-purple transition-colors line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-neon-cyan font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-neon-green border-neon-green/50">
                      {cert.date}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center line-clamp-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs font-mono bg-neon-cyan/20 text-neon-cyan rounded border border-neon-cyan/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono bg-neon-purple/20 text-neon-purple rounded border border-neon-purple/30">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="text-center text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view details
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CertificationPopup 
        certification={selectedCertification}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default SkillsSection;
