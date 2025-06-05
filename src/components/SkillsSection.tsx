
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import CertificateModal from './CertificateModal';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Settings,
  Award,
  ExternalLink
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'neon-purple',
      chartColor: '#8a2be2',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'neon-cyan',
      chartColor: '#00ffff',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'neon-green',
      chartColor: '#39ff14',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 78 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'neon-pink',
      chartColor: '#ff1493',
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS/Swift', level: 65 },
        { name: 'Android/Kotlin', level: 70 },
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Figma', 'Postman', 'Jira', 'Slack', 'Notion',
    'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Heroku', 'Digital Ocean'
  ];

  const certificates = [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      image: '/placeholder.svg?height=400&width=600&text=AWS+Certificate',
      verificationUrl: 'https://aws.amazon.com/verification/ABC123',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
      description: 'Comprehensive certification covering AWS cloud architecture, security, and best practices for designing distributed systems.'
    },
    {
      id: '2',
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'January 2024',
      image: '/placeholder.svg?height=400&width=600&text=GCP+Certificate',
      verificationUrl: 'https://cloud.google.com/certification/verify/XYZ789',
      skills: ['GCP', 'Kubernetes', 'Cloud Functions', 'BigQuery'],
      description: 'Advanced certification demonstrating expertise in developing scalable and reliable applications on Google Cloud Platform.'
    },
    {
      id: '3',
      title: 'React Advanced Patterns',
      issuer: 'Meta',
      date: 'December 2023',
      image: '/placeholder.svg?height=400&width=600&text=React+Certificate',
      skills: ['React', 'Hooks', 'Context API', 'Performance Optimization'],
      description: 'Deep dive into advanced React patterns, performance optimization, and modern development practices.'
    }
  ];

  const getChartData = (skills: any[]) => {
    return skills.map((skill, index) => ({
      name: skill.name,
      value: skill.level,
      fill: `hsl(${(index * 90) % 360}, 70%, 50%)`
    }));
  };

  const chartConfig = {
    skills: {
      label: "Skills",
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 cyber-grid matrix-bg relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full bg-neon-${i % 2 === 0 ? 'cyan' : 'purple'} opacity-60 animate-pulse`} />
          </div>
        ))}
        
        {/* Scanning lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-cyber-scan opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-cyber-scan opacity-50" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Enhanced Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-space font-bold text-neon-green animate-glow">
            Skills & Expertise
          </h2>
          <div className="cyber-dots mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications 
            that I use to build amazing digital experiences.
          </p>
        </div>

        {/* Enhanced Skills Grid with Pie Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass-card hover:bg-black/30 transition-all duration-300 hover:scale-105 border cyber-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-2xl text-${category.color} flex items-center gap-3 animate-glow`}>
                  <category.icon className="h-8 w-8" />
                  {category.title}
                </CardTitle>
                <CardDescription>
                  Core technologies and frameworks I work with
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pie Chart */}
                <div className="h-64 w-full">
                  <ChartContainer config={chartConfig} className="mx-auto aspect-square">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                      <Pie
                        data={getChartData(category.skills)}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        stroke="rgba(0, 255, 255, 0.3)"
                        strokeWidth={2}
                      >
                        {getChartData(category.skills).map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.fill}
                            className="animate-pulse"
                            style={{
                              filter: 'drop-shadow(0 0 10px currentColor)'
                            }}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>

                {/* Progress Bars */}
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground font-space">{skill.name}</span>
                      <span className={`font-bold text-${category.color} font-space`}>{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-secondary cyber-border"
                        style={{
                          animationDelay: `${(index * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-cyber-scan opacity-50" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Tools & Technologies */}
        <Card className="glass-card border-neon-cyan/30 cyber-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-neon-cyan flex items-center justify-center gap-3 animate-glow">
              <Settings className="h-8 w-8" />
              Tools & Technologies
            </CardTitle>
            <div className="cyber-dots mx-auto" />
            <CardDescription className="text-lg">
              Development tools and platforms I use daily
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="text-base px-4 py-2 glass-card hover:bg-neon-cyan/20 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 hover:scale-110 cursor-pointer cyber-border animate-data-stream"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-space">{tool}</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Certifications */}
        <Card className="glass-card border-neon-purple/30 cyber-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-neon-purple flex items-center justify-center gap-3 animate-glow">
              <Award className="h-8 w-8" />
              Certifications
            </CardTitle>
            <div className="cyber-dots mx-auto" />
            <CardDescription className="text-lg">
              Professional certifications and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="glass-card p-6 hover:bg-black/30 transition-all duration-300 hover:scale-105 group cyber-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center space-y-4">
                    <Award className="h-12 w-12 mx-auto text-neon-purple group-hover:animate-bounce-slow animate-glow" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1 font-space">{cert.title}</h4>
                      <p className="text-neon-cyan font-medium font-space">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground font-space">{cert.date}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-neon-purple/20 text-neon-purple border-neon-purple/30 font-space"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <CertificateModal certificate={cert}>
                      <Button
                        variant="outline"
                        className="w-full ui-btn border-neon-green text-neon-green hover:bg-neon-green/10"
                      >
                        <span className="flex items-center gap-2 font-space">
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </span>
                      </Button>
                    </CertificateModal>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Learning Journey */}
        <Card className="glass-card border-neon-green/30 cyber-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-neon-green animate-glow font-space">Continuous Learning</CardTitle>
            <div className="cyber-dots mx-auto" />
            <CardDescription>
              Currently exploring and learning new technologies
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 glass-card p-6 cyber-border">
                <div className="text-3xl animate-bounce">🤖</div>
                <h4 className="font-semibold text-foreground font-space">AI/ML Integration</h4>
                <p className="text-sm text-muted-foreground">Exploring TensorFlow.js and OpenAI APIs</p>
              </div>
              <div className="space-y-2 glass-card p-6 cyber-border">
                <div className="text-3xl animate-bounce">🔗</div>
                <h4 className="font-semibold text-foreground font-space">Web3 Development</h4>
                <p className="text-sm text-muted-foreground">Learning Solidity and DApp development</p>
              </div>
              <div className="space-y-2 glass-card p-6 cyber-border">
                <div className="text-3xl animate-bounce">⚡</div>
                <h4 className="font-semibold text-foreground font-space">Edge Computing</h4>
                <p className="text-sm text-muted-foreground">Optimizing performance with edge functions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;

