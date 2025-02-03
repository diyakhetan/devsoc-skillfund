export interface Project {
    id: string;
    title: string;
    description: string;
    budget: number;
    deadline: Date;
    skills: string[];
    status: 'open' | 'in-progress' | 'completed';
    clientId: string;
  }
  