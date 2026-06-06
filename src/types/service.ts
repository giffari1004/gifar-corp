export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  price: string;
  period: string;
  icon: "strategy" | "software" | "analytics" | "managed";
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  content: string;
}
