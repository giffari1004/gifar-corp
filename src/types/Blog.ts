export interface BlogPost {
  id: string;
  title: string;
  category: "Technology" | "Culture" | "Services";
  date: string;
  description: string;
  author: string;
  authorInitials: string;
  avatarBg: string;
  imageUrl: string;
}
