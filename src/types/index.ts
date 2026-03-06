import type { LucideIcon } from 'lucide-react';

// Experience & Achievement types (used in ExperienceSection, ExperienceDetailPage)
export interface ProjectDetails {
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  achievements: string[];
  certificate?: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: LucideIcon;
  projects?: ProjectDetails[];
}

// Project types (used in ProjectsSection)
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  category: string;
  icon: LucideIcon;
}

// Certification types (used in ExperienceSection certifications tab)
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verifyUrl: string;
  certificateUrl: string;
  color: string;
}

// Skills types (used in SkillsSection)
export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  color: string;
  skills: Skill[];
  chartData: ChartDataItem[];
}

// About types
export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface JourneyItem {
  year: string;
  event: string;
  description: string;
}

// Hero types
export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

// Contact types
export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

// Social link type (used in Footer + ContactSection)
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

// Navigation
export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}
