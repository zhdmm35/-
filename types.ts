export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Backend' | 'Database' | 'Middleware' | 'Tools';
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  major: string;
  courses: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}
