
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Palette, Database, Cloud, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'neon-purple',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Advanced component architecture & state management' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development & complex type definitions' },
        { name: 'Tailwind CSS', level: 88, description: 'Responsive design & custom component systems' },
        { name: 'Vue.js', level: 75, description: 'Component composition & reactive systems' }
      ],
      chartData: [
        { name: 'React/Next.js', value: 95, color: '#8b5cf6' },
        { name: 'TypeScript', value: 90, color: '#06b6d4' },
        { name: 'Tailwind CSS', value: 88, color: '#10b981' },
        { name: 'Vue.js', value: 75, color: '#f59e0b' }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'neon-cyan',
      skills: [
        { name: 'Node.js', level: 92, description: 'RESTful APIs & microservices architecture' },
        { name: 'Python', level: 85, description: 'Django, FastAPI & data processing' },
        { name: 'GraphQL', level: 80, description: 'Schema design & query optimization' },
        { name: 'Java', level: 70, description: 'Spring Boot & enterprise applications' }
      ],
      chartData: [
        { name: 'Node.js', value: 92, color: '#8b5cf6' },
        { name: 'Python', value: 85, color: '#06b6d4' },
        { name: 'GraphQL', value: 80, color: '#10b981' },
        { name: 'Java', value: 70, color: '#f59e0b' }
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'neon-green',
      skills: [
        { name: 'PostgreSQL', level: 88, description: 'Complex queries & performance optimization' },
        { name: 'MongoDB', level: 82, description: 'Document modeling & aggregation pipelines' },
        { name: 'Redis', level: 78, description: 'Caching strategies & session management' },
        { name: 'Supabase', level: 85, description: 'Real-time features & authentication' }
      ],
      chartData: [
        { name: 'PostgreSQL', value: 88, color: '#8b5cf6' },
        { name: 'MongoDB', value: 82, color: '#06b6d4' },
        { name: 'Redis', value: 78, color: '#10b981' },
        { name: 'Supabase', value: 85, color: '#f59e0b' }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'neon-purple',
      skills: [
        { name: 'AWS', level: 83, description: 'EC2, S3, Lambda & CloudFormation' },
        { name: 'Docker', level: 87, description: 'Containerization & multi-stage builds' },
        { name: 'Kubernetes', level: 72, description: 'Container orchestration & scaling' },
        { name: 'CI/CD', level: 80, description: 'GitHub Actions & automated deployments' }
      ],
      chartData: [
        { name: 'AWS', value: 83, color: '#8b5cf6' },
        { name: 'Docker', value: 87, color: '#06b6d4' },
        { name: 'Kubernetes', value: 72, color: '#10b981' },
        { name: 'CI/CD', value: 80, color: '#f59e0b' }
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'Figma', 'Postman', 'Jira', 'Slack',
    'Adobe XD', 'Chrome DevTools', 'ESLint', 'Prettier'
  ];

  const certifications = [
    { name: 'AWS Certified Developer', org: 'Amazon Web Services', year: '2023' },
    { name: 'React Developer Certificate', org: 'Meta', year: '2022' },
    { name: 'MongoDB University', org: 'MongoDB Inc.', year: '2023' },
    { name: 'Google Cloud Platform', org: 'Google', year: '2024' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-neon-cyan font-mono">{data.name}</p>
          <p className="text-white">
            <span className="text-neon-green">{data.value}%</span> proficiency
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
                    <PieChart>
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
                    </PieChart>
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

        {/* Tools & Technologies */}
        <div className="space-y-8">
          <h3 className="text-3xl font-space font-bold text-center text-neon-green">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge
                key={tool}
                variant="secondary"
                className="glass-card px-4 py-2 text-sm hover:scale-110 transition-all duration-300 hover:bg-neon-purple/20 hover:text-neon-purple border-white/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
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
                className="glass-card text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
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
    </section>
  );
};

export default SkillsSection;
