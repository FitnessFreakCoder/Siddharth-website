import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  link?: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
