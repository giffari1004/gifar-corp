// src/types/team.types.ts

export interface Metric {
  value: string;
  label: string;
}

export interface TeamStats {
  title: string;
  description: string;
  metrics: Metric[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
}
