import { Code, Server, Database, Cloud, Zap, Cpu, PieChart } from 'lucide-react';
import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
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
    ],
  },
  {
    icon: Code,
    title: 'Frontend Development',
    color: 'neon-purple',
    skills: [
      { name: 'React/Next.js', level: 95, description: 'Advanced component architecture & state management' },
      { name: 'Tailwind CSS', level: 95, description: 'Responsive design & custom component systems' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development & complex type definitions' },
      { name: 'Vue.js', level: 75, description: 'Component composition & reactive systems' },
    ],
    chartData: [
      { name: 'React/Next.js', value: 95, color: '#8b5cf6' },
      { name: 'Tailwind CSS', value: 95, color: '#10b981' },
      { name: 'TypeScript', value: 90, color: '#06b6d4' },
      { name: 'Vue.js', value: 75, color: '#f59e0b' },
    ],
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
    ],
  },
  {
    icon: Database,
    title: 'Database & Storage',
    color: 'neon-green',
    skills: [
      { name: 'PostgreSQL', level: 95, description: 'Complex queries & performance optimization' },
      { name: 'MongoDB', level: 95, description: 'Document modeling & aggregation pipelines' },
      { name: 'Supabase', level: 95, description: 'Real-time features & authentication' },
      { name: 'Redis', level: 75, description: 'Caching strategies & session management' },
    ],
    chartData: [
      { name: 'PostgreSQL', value: 95, color: '#8b5cf6' },
      { name: 'MongoDB', value: 95, color: '#06b6d4' },
      { name: 'Supabase', value: 95, color: '#f59e0b' },
      { name: 'Redis', value: 75, color: '#10b981' },
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    color: 'neon-purple',
    skills: [
      { name: 'AWS', level: 90, description: 'EC2, S3, Lambda & CloudFormation' },
      { name: 'CI/CD', level: 85, description: 'GitHub Actions & automated deployments' },
      { name: 'Docker', level: 80, description: 'Containerization & multi-stage builds' },
      { name: 'Kubernetes', level: 70, description: 'Container orchestration & scaling' },
    ],
    chartData: [
      { name: 'AWS', value: 90, color: '#8b5cf6' },
      { name: 'CI/CD', value: 85, color: '#f59e0b' },
      { name: 'Docker', value: 80, color: '#06b6d4' },
      { name: 'Kubernetes', value: 70, color: '#10b981' },
    ],
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
      { name: 'Keras', level: 85, description: 'Rapid prototyping of neural networks with a user-friendly interface over TensorFlow.' },
    ],
    chartData: [
      { name: 'Scikit-learn', value: 90, color: '#8b5cf6' },
      { name: 'TensorFlow', value: 90, color: '#06b6d4' },
      { name: 'PyTorch', value: 90, color: '#10b981' },
      { name: 'NumPy', value: 90, color: '#10b981' },
      { name: 'OpenCV', value: 90, color: '#f59e0b' },
      { name: 'Keras', value: 85, color: '#f59e0b' },
    ],
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    color: 'neon-purple',
    skills: [
      { name: 'Tableau', level: 90, description: 'Building interactive dashboards and visual storytelling from complex datasets.' },
      { name: 'Power BI', level: 90, description: 'Creating business insights and reports using real-time and historical data.' },
      { name: 'Excel', level: 85, description: 'Advanced formulas, pivot tables, and charting for quick data analysis.' },
      { name: 'Matplotlib', level: 85, description: 'Creating custom static visualizations for data exploration in Python.' },
    ],
    chartData: [
      { name: 'Tableau', value: 90, color: '#8b5cf6' },
      { name: 'Power BI', value: 90, color: '#06b6d4' },
      { name: 'Excel', value: 85, color: '#f59e0b' },
      { name: 'Matplotlib', value: 85, color: '#10b981' },
    ],
  },
  {
    icon: Cpu,
    title: 'IoT & Hardware',
    color: 'neon-cyan',
    skills: [
      { name: 'Arduino', level: 90, description: 'Microcontroller programming for IoT devices and sensor integration.' },
      { name: 'ESP32', level: 88, description: 'WiFi/Bluetooth enabled microcontrollers for connected devices.' },
      { name: 'Raspberry Pi', level: 85, description: 'Linux-based prototyping and edge computing solutions.' },
      { name: 'PCB Design', level: 80, description: 'Custom circuit board design using EasyEDA for IoT projects.' },
    ],
    chartData: [
      { name: 'Arduino', value: 90, color: '#8b5cf6' },
      { name: 'ESP32', value: 88, color: '#10b981' },
      { name: 'Raspberry Pi', value: 85, color: '#06b6d4' },
      { name: 'PCB Design', value: 80, color: '#f59e0b' },
    ],
  },
];
