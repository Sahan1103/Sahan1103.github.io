export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: 'Web App' | 'Desktop App' | 'Full Stack' | 'Frontend';
  technologies: string[];
  images: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Programming' | 'Tools' | 'Design';
  icon: string; // Lucide icon name or svg identifier
  level?: number; // percentage or rating 1-100
  isCurrent: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gradeOrType?: string;
  skillsAcquired?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tools: string[];
  features: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  behance: string;
  email: string;
  phone: string;
  location: string;
}
