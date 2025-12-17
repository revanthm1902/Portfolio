import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Palette, Database, Cloud, Zap, PieChart, Cpu } from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Modal from './Modal';
import SkillsCarousel from './SkillsCarousel';
import { motion, useInView } from 'framer-motion';

// Animated Progress Bar Component
const AnimatedProgressBar = ({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r from-${color} to-neon-cyan`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: delay, ease: [0.4, 0, 0.2, 1] }}
        style={{ background: `linear-gradient(90deg, var(--${color}) 0%, var(--neon-cyan) 100%)` }}
      />
    </div>
  );
};

// Individual Skill Card Component with its own scroll trigger
const SkillCard = ({ category, index }: { category: typeof skillCategoriesData[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Sort skills and chartData by level/value (highest first)
  const sortedSkills = [...category.skills].sort((a, b) => b.level - a.level);
  const sortedChartData = [...category.chartData].sort((a, b) => b.value - a.value);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="glass-card border-white/20 hover:border-white/30 transition-all duration-300 group h-full">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className={`flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-${category.color}`}>
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }} 
              transition={{ duration: 0.2 }}
              initial={{ rotate: -10, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }}
            >
              <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Interactive Pie Chart - Only animate when in view */}
          <motion.div 
            className="h-48 sm:h-56 lg:h-64 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={sortedChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={isInView ? 0 : 99999}
                  animationDuration={1200}
                  animationEasing="ease-out"
                >
                  {sortedChartData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} className="hover:opacity-80 transition-opacity cursor-pointer" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '10px', color: '#a1a1aa', fontFamily: 'monospace' }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill Details with Animated Progress Bars - Sorted by percentage */}
          <div className="space-y-3 sm:space-y-4">
            {sortedSkills.slice(0, 4).map((skill, skillIndex) => (
              <motion.div 
                key={skill.name} 
                className="space-y-1.5 sm:space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + skillIndex * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground text-xs sm:text-sm">{skill.name}</span>
                  <span className={`font-mono text-[10px] sm:text-xs text-${category.color}`}>{skill.level}%</span>
                </div>
                <AnimatedProgressBar 
                  value={skill.level} 
                  color={category.color} 
                  delay={0.5 + skillIndex * 0.15} 
                />
                <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{skill.description}</p>
              </motion.div>
            ))}
            {sortedSkills.length > 4 && (
              <motion.p 
                className="text-xs text-muted-foreground text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
              >
                +{sortedSkills.length - 4} more skills
              </motion.p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Custom Tooltip Component
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

// Skill categories data
const skillCategoriesData = [
  {
    icon: Code,
    title: 'Programming Languages',
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
      { name: 'Tailwind CSS', level: 95, description: 'Responsive design & custom component systems' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development & complex type definitions' },
      { name: 'Vue.js', level: 75, description: 'Component composition & reactive systems' }
    ],
    chartData: [
      { name: 'React/Next.js', value: 95, color: '#8b5cf6' },
      { name: 'Tailwind CSS', value: 95, color: '#10b981' },
      { name: 'TypeScript', value: 90, color: '#06b6d4' },
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
      { name: 'Supabase', level: 95, description: 'Real-time features & authentication' },
      { name: 'Redis', level: 75, description: 'Caching strategies & session management' }
    ],
    chartData: [
      { name: 'PostgreSQL', value: 95, color: '#8b5cf6' },
      { name: 'MongoDB', value: 95, color: '#06b6d4' },
      { name: 'Supabase', value: 95, color: '#f59e0b' },
      { name: 'Redis', value: 75, color: '#10b981' }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    color: 'neon-purple',
    skills: [
      { name: 'AWS', level: 90, description: 'EC2, S3, Lambda & CloudFormation' },
      { name: 'CI/CD', level: 85, description: 'GitHub Actions & automated deployments' },
      { name: 'Docker', level: 80, description: 'Containerization & multi-stage builds' },
      { name: 'Kubernetes', level: 70, description: 'Container orchestration & scaling' }
    ],
    chartData: [
      { name: 'AWS', value: 90, color: '#8b5cf6' },
      { name: 'CI/CD', value: 85, color: '#f59e0b' },
      { name: 'Docker', value: 80, color: '#06b6d4' },
      { name: 'Kubernetes', value: 70, color: '#10b981' }
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
      { name: 'Pandas', level: 90, description: 'Data manipulation and preprocessing for machine learning workflows.' },
      { name: 'NumPy', level: 90, description: 'Efficient numerical computation and array operations in ML pipelines.' },
      { name: 'OpenCV', level: 90, description: 'Image processing and computer vision tasks such as object detection and filtering.' },
      { name: 'Keras', level: 85, description: 'Rapid prototyping of neural networks with a user-friendly interface over TensorFlow.' }
    ],
    chartData: [
      { name: 'Scikit-learn', value: 90, color: '#8b5cf6' },
      { name: 'TensorFlow', value: 90, color: '#06b6d4' },
      { name: 'PyTorch', value: 90, color: '#10b981' },
      { name: 'NumPy', value: 90, color: '#10b981' },
      { name: 'OpenCV', value: 90, color: '#f59e0b' },
      { name: 'Keras', value: 85, color: '#f59e0b' }
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
      { name: 'Excel', value: 85, color: '#f59e0b' },
      { name: 'Matplotlib', value: 85, color: '#10b981' }
    ]
  },
  {
    icon: Cpu,
    title: 'IoT & Hardware',
    color: 'neon-cyan',
    skills: [
      { name: 'Arduino', level: 90, description: 'Microcontroller programming for IoT devices and sensor integration.' },
      { name: 'ESP32', level: 88, description: 'WiFi/Bluetooth enabled microcontrollers for connected devices.' },
      { name: 'Raspberry Pi', level: 85, description: 'Linux-based prototyping and edge computing solutions.' },
      { name: 'PCB Design', level: 80, description: 'Custom circuit board design using EasyEDA for IoT projects.' }
    ],
    chartData: [
      { name: 'Arduino', value: 90, color: '#8b5cf6' },
      { name: 'ESP32', value: 88, color: '#10b981' },
      { name: 'Raspberry Pi', value: 85, color: '#06b6d4' },
      { name: 'PCB Design', value: 80, color: '#f59e0b' }
    ]
  }
];

const SkillsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string;
    org: string;
    year: string;
    image: string;
  } | null>(null);

  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 hero-gradient bg-grid relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          >
            <Code className="h-4 w-4 text-neon-purple" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-14 lg:space-y-16">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold text-neon-cyan animate-glow">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid - Each card loads individually on scroll */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategoriesData.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Tools & Technologies Carousel */}
        <motion.div 
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-space font-bold text-center text-neon-green">
            Tools & Technologies
          </h3>
          <div className="px-2 sm:px-4">
            <SkillsCarousel />
          </div>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="glass-card border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-space font-bold text-neon-green mb-4 sm:mb-6">
                What Makes Me Different?
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                {[
                  { icon: Palette, color: 'text-neon-purple', title: 'Design-First Approach', desc: 'I believe great functionality starts with great design. Every component considers both aesthetics and usability.' },
                  { icon: Server, color: 'text-neon-cyan', title: 'Performance Obsessed', desc: 'I optimize for speed and efficiency at every level - from database queries to bundle sizes.' },
                  { icon: Zap, color: 'text-neon-green', title: 'Future-Ready Code', desc: 'I write maintainable, scalable code using modern patterns and best practices.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="space-y-2 sm:space-y-3"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto ${item.color} animate-glow`} />
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
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