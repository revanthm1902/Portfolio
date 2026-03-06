import { Heart, Target, Lightbulb, Rocket } from 'lucide-react';
import type { ValueItem, JourneyItem } from '@/types';

export const values: ValueItem[] = [
  { icon: Heart, title: 'Passion-Driven', description: 'I believe great code comes from genuine passion for solving problems and creating meaningful experiences.', color: 'text-red-400' },
  { icon: Target, title: 'Goal-Oriented', description: 'Every line of code serves a purpose. I focus on delivering results that matter to users and businesses.', color: 'text-neon-cyan' },
  { icon: Lightbulb, title: 'Innovation-Focused', description: 'I constantly explore new technologies and methodologies to stay ahead of the curve.', color: 'text-neon-green' },
  { icon: Rocket, title: 'Performance-Minded', description: "Building fast, scalable, and efficient solutions is not just a goal—it's a commitment.", color: 'text-neon-purple' },
];

export const journey: JourneyItem[] = [
  { year: '2023', event: 'Started B.Tech at VIT-AP University', description: 'Pursuing Bachelor of Technology in Computer Science and Engineering.' },
  { year: '2024', event: 'NASA Space Apps Challenge', description: 'Global Nominee – recognized for innovative space technology solutions, standing at top 3% globally.' },
  { year: '2024', event: 'R&D Intern at TechtoGreen', description: 'Developed Intelligent Safety Helmet (CS-1) with IoT sensors, reducing incident response by 90%.' },
  { year: '2024', event: 'Multiple Hackathon Wins', description: 'Winner at HackAP 2024, AppFusion 2024, and Runner-Up at IEEE Hackssagon 2025.' },
  { year: '2025', event: 'Full Stack Intern at Purple Techno', description: 'Built scalable MERN stack apps handling 500+ concurrent users with AWS deployment.' },
  { year: '2025', event: 'GirlScript Summer of Code', description: 'Active open-source contributor, solved 300+ DSA problems across platforms.' },
  { year: '2026', event: 'Second Brain & LeapPulse', description: 'Built AI-powered knowledge management system with Gemini AI and a real-time brand intelligence dashboard with NLP sentiment analysis.' },
];

export const funFacts = [
  { emoji: '🎮', text: 'Passionate gamer who draws creative UX inspiration from immersive game mechanics.' },
  { emoji: '☕', text: 'Coffee-fueled coder — firmly believe the cleanest code starts with the perfect brew.' },
  { emoji: '🌱', text: 'Lifelong learner — currently diving deep into AI/ML to bring smarter experiences.' },
];
