import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Palette, Database, Cloud, Zap, PieChart } from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Modal from './Modal';
import SkillsCarousel from './SkillsCarousel';

const SkillsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string;
    org: string;
    year: string;
    image: string;
  } | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming languages',
      color: 'neon-purple',
      skills: [
        { name: 'JAVA', level: 95, description: 'Object-oriented programming, DSA, and enterprise-level application development.' },
        { name: 'Python', level: 95, description: 'Backend development with Django/FastAPI and scripting for automation and AI/ML tasks.' },
      ],
      chartData: [
        { name: 'JAVA', value: 95, color: '#8b5cf6' },
        { name: 'Python', value: 95, color: '#06b6d4' },
      ]
    },
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'neon-purple',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Advanced component architecture & state management' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development & complex type definitions' },
        { name: 'Tailwind CSS', level: 95, description: 'Responsive design & custom component systems' },
        { name: 'Vue.js', level: 75, description: 'Component composition & reactive systems' }
      ],
      chartData: [
        { name: 'React/Next.js', value: 95, color: '#8b5cf6' },
        { name: 'TypeScript', value: 90, color: '#06b6d4' },
        { name: 'Tailwind CSS', value: 95, color: '#10b981' },
        { name: 'Vue.js', value: 75, color: '#f59e0b' }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'neon-cyan',
      skills: [
        { name: 'Node.js', level: 90, description: 'RESTful APIs & microservices architecture' },
        { name: 'Python', level: 90, description: 'Django, FastAPI & data processing' },
        { name: 'GraphQL', level: 75, description: 'Schema design & query optimization' },
      ],
      chartData: [
        { name: 'Node.js', value: 90, color: '#8b5cf6' },
        { name: 'Python', value: 90, color: '#06b6d4' },
        { name: 'GraphQL', value: 75, color: '#10b981' },
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'neon-green',
      skills: [
        { name: 'PostgreSQL', level: 95, description: 'Complex queries & performance optimization' },
        { name: 'MongoDB', level: 95, description: 'Document modeling & aggregation pipelines' },
        { name: 'Redis', level: 75, description: 'Caching strategies & session management' },
        { name: 'Supabase', level: 95, description: 'Real-time features & authentication' }
      ],
      chartData: [
        { name: 'PostgreSQL', value: 95, color: '#8b5cf6' },
        { name: 'MongoDB', value: 95, color: '#06b6d4' },
        { name: 'Redis', value: 75, color: '#10b981' },
        { name: 'Supabase', value: 95, color: '#f59e0b' }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'neon-purple',
      skills: [
        { name: 'AWS', level: 90, description: 'EC2, S3, Lambda & CloudFormation' },
        { name: 'Docker', level: 80, description: 'Containerization & multi-stage builds' },
        { name: 'Kubernetes', level: 70, description: 'Container orchestration & scaling' },
        { name: 'CI/CD', level: 85, description: 'GitHub Actions & automated deployments' }
      ],
      chartData: [
        { name: 'AWS', value: 90, color: '#8b5cf6' },
        { name: 'Docker', value: 80, color: '#06b6d4' },
        { name: 'Kubernetes', value: 70, color: '#10b981' },
        { name: 'CI/CD', value: 85, color: '#f59e0b' }
      ]
    },
    {
      icon: Zap,
      title: 'AI / ML',
      color: 'neon-purple',
      skills: [
        { name: 'Scikit-learn', level: 90, description: 'Building and evaluating ML models with pipelines, GridSearchCV, and preprocessing tools.' },
        { name: 'TensorFlow', level: 90, description: 'Training deep learning models for image and text classification using Keras API.' },
        { name: 'PyTorch', level: 90, description: 'Hands-on with dynamic computational graphs for building neural networks.' },
        { name: 'Keras', level: 85, description: 'Rapid prototyping of neural networks with a user-friendly interface over TensorFlow.' },
        { name: 'Pandas', level: 90, description: 'Data manipulation and preprocessing for machine learning workflows.' },
        { name: 'NumPy', level: 90, description: 'Efficient numerical computation and array operations in ML pipelines.' },
        { name: 'OpenCV', level: 90, description: 'Image processing and computer vision tasks such as object detection and filtering.' }
      ],
      chartData: [
        { name: 'Scikit-learn', value: 90, color: '#8b5cf6' },
        { name: 'TensorFlow', value: 90, color: '#06b6d4' },
        { name: 'PyTorch', value: 90, color: '#10b981' },
        { name: 'Keras', value: 85, color: '#f59e0b' },
        { name: 'NumPy', value: 90, color: '#10b981' },
        { name: 'OpenCV', value: 90, color: '#f59e0b' }
      ]
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      color: 'neon-purple',
      skills: [
        { name: 'Tableau', level: 90, description: 'Building interactive dashboards and visual storytelling from complex datasets.' },
        { name: 'Power BI', level: 90, description: 'Creating business insights and reports using real-time and historical data.' },
        { name: 'Excel', level: 85, description: 'Advanced formulas, pivot tables, and charting for quick data analysis.' },
        { name: 'Matplotlib', level: 85, description: 'Creating custom static visualizations for data exploration in Python.' }
      ],
      chartData: [
        { name: 'Tableau', value: 90, color: '#8b5cf6' },
        { name: 'Power BI', value: 90, color: '#06b6d4' },
        { name: 'Matplotlib', value: 85, color: '#10b981' },
        { name: 'Excel', value: 85, color: '#f59e0b' }
      ]
    }
  ];

  const certifications = [
    { 
      name: 'AWS Certified Developer', 
      org: 'Amazon Web Services', 
      year: '2023',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center'
    },
    { 
      name: 'React Developer Certificate', 
      org: 'Meta', 
      year: '2022',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=center'
    },
    { 
      name: 'MongoDB University', 
      org: 'MongoDB Inc.', 
      year: '2023',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center'
    },
    { 
      name: 'Google Cloud Platform', 
      org: 'Google', 
      year: '2024',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center'
    }
  ];

  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      value: number;
      payload: {
        name: string;
        value: number;
      };
    }>;
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-neon-cyan font-mono">{data.payload.name}</p>
          <p className="text-white">
            <span className="text-neon-green">{data.payload.value}%</span> proficiency
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="min-h-screen py-20 px-4 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            <Code className="h-4 w-4 text-neon-purple animate-float" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold text-neon-cyan animate-glow">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid with Pie Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="glass-card border-white/20 hover:border-white/30 transition-all duration-300 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 text-xl text-${category.color}`}>
                  <category.icon className="h-6 w-6 group-hover:animate-bounce-slow" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Interactive Pie Chart */}
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={category.chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        animationBegin={categoryIndex * 200}
                        animationDuration={1000}
                      >
                        {category.chartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend 
                        wrapperStyle={{ 
                          fontSize: '12px',
                          color: '#a1a1aa',
                          fontFamily: 'monospace'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>

                {/* Skill Details */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="space-y-2"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                        <span className={`font-mono text-xs text-${category.color}`}>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-1.5 bg-white/10"
                      />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies Carousel */}
        <div className="space-y-8">
          <h3 className="text-3xl font-space font-bold text-center text-neon-green">
            Tools & Technologies
          </h3>
          <div className="px-4">
            <SkillsCarousel />
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="text-3xl font-space font-bold text-center text-neon-purple">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="glass-card text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCertificate(cert)}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-neon-cyan mb-1">{cert.org}</p>
                  <p className="text-xs text-muted-foreground font-mono">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <Card className="glass-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-space font-bold text-neon-green mb-4">
              What Makes Me Different?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <Palette className="h-12 w-12 mx-auto text-neon-purple animate-glow" />
                <h4 className="text-lg font-semibold text-foreground">Design-First Approach</h4>
                <p className="text-muted-foreground">I believe great functionality starts with great design. Every component I build considers both aesthetics and usability.</p>
              </div>
              <div className="space-y-3">
                <Server className="h-12 w-12 mx-auto text-neon-cyan animate-glow" />
                <h4 className="text-lg font-semibold text-foreground">Performance Obsessed</h4>
                <p className="text-muted-foreground">I optimize for speed and efficiency at every level - from database queries to bundle sizes and rendering performance.</p>
              </div>
              <div className="space-y-3">
                <Zap className="h-12 w-12 mx-auto text-neon-green animate-glow" />
                <h4 className="text-lg font-semibold text-foreground">Future-Ready Code</h4>
                <p className="text-muted-foreground">I write maintainable, scalable code using modern patterns and best practices that stand the test of time.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.name || ''}
        size="lg"
      >
        {selectedCertificate && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-neon-cyan font-semibold">{selectedCertificate.org}</p>
              <p className="text-muted-foreground font-mono">{selectedCertificate.year}</p>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                This certificate demonstrates proficiency in {selectedCertificate.name.toLowerCase()} technologies and best practices.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                  Verified
                </Badge>
                <Badge variant="secondary" className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  {selectedCertificate.year}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default SkillsSection;