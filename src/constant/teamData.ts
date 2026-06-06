import type { TeamMember, TeamStats } from "../types/team.types";

export const teamStats: TeamStats = {
  title: "Nexus Primary Divisions",
  description: "Dynamic data synchronized with global headquarters.",
  metrics: [
    { value: "124+", label: "Experts" },
    { value: "12", label: "Offices" },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Davina da Costa",
    role: "Lead Architect",
    bio: "Transforming complex requirements into elegant, scalable digital landscapes.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", // Referensi tampilan di image_77a29d.jpg
    email: "davina@nexuscorp.com",
  },
  {
    id: 2,
    name: "Agustín Méndez",
    role: "Senior Strategy Director",
    bio: "Specializing in cross-functional team management and strategic alignment.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", // Referensi tampilan di image_77a29d.jpg
    email: "agustin@nexuscorp.com",
  },
  {
    id: 3,
    name: "Avery Davis",
    role: "Principal Engineer",
    bio: "Dedicated to crafting high-performance systems with precision and security.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // Referensi tampilan di image_77a29d.jpg
    email: "avery@nexuscorp.com",
  },
  {
    id: 4,
    name: "Melodie Grewal",
    role: "Design Lead",
    bio: "Bridging the gap between human emotion and digital interface design.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", // Referensi tampilan di image_77a29d.jpg
    email: "melodie@nexuscorp.com",
  },
];
